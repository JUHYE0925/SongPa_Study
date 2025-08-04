### ❗ 프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

#### DEPLOY.yml

``` yml
name: Header Backend DEPLOY

on:
  push:
    branches: [ "master" ]

jobs:
  header_backend:
    runs-on: ubuntu-latest

    steps:
      - name: access to secrets
        run: |
          echo "SPRING_DATASOURCE_URL=${SPRING_DATASOURCE_URL}" >> .env
          echo "SPRING_DATASOURCE_USERNAME=${SPRING_DATASOURCE_USERNAME}" >> .env
          echo "SPRING_DATASOURCE_PASSWORD=${SPRING_DATASOURCE_PASSWORD}" >> .env
          echo "MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}" >> .env
          echo "MYSQL_DATABASE=${MYSQL_DATABASE}" >> .env
          echo "MYSQL_USER=${MYSQL_USER}" >> .env
          echo "MYSQL_PASSWORD=${MYSQL_PASSWORD}" >> .env
          echo "COOLSMS_API_KEY=${COOLSMS_API_KEY}" >> .env
          echo "COOLSMS_API_SECRET=${COOLSMS_API_SECRET}" >> .env
          echo "COOLSMS_BASE_URL=${COOLSMS_BASE_URL}" >> .env
        env:
          SPRING_DATASOURCE_URL: ${{ secrets.SPRING_DATASOURCE_URL }}
          SPRING_DATASOURCE_USERNAME: ${{ secrets.SPRING_DATASOURCE_USERNAME }}
          SPRING_DATASOURCE_PASSWORD: ${{ secrets.SPRING_DATASOURCE_PASSWORD }}
          MYSQL_ROOT_PASSWORD: ${{ secrets.MYSQL_ROOT_PASSWORD }}
          MYSQL_DATABASE: ${{ secrets.MYSQL_DATABASE }}
          MYSQL_USER: ${{ secrets.MYSQL_USER }}
          MYSQL_PASSWORD: ${{ secrets.MYSQL_PASSWORD }}
          COOLSMS_API_KEY: ${{ secrets.COOLSMS_API_KEY }}
          COOLSMS_API_SECRET: ${{ secrets.COOLSMS_API_SECRET }}
          COOLSMS_BASE_URL: ${{ secrets.COOLSMS_BASE_URL }}

      # JDK setting - 깃허브 actions에서 사용할 JDK 설정(프로젝트나 AWS의 java 버전과 달라도 무방하다.)
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'

      # 빌드 시간 향상 - 해당 과정은 생략 가능하지만 적용 시 빌드 시간 단축 가능하다.
      - name: Gradle Caching
        uses: actions/cache@v3
        with:
          path: |
            ~/.gradle/caches
            ~/.gradle/wrapper
          key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle', '**/gradle-wrapper.properties') }}
          restore-keys: |
            ${{ runner.os }}-gradle-

      # 환경별 yml파일 생성(1) - application.yml
      - name: make application.yml
        if: |
          contains(github.ref, 'master')
        run: |
          mkdir -p ./src/main/resources
          echo "${{ secrets.APPLICATION_PROPERTIES }}" | base64 --decode > ./src/main/resources/application.yml
      

      # 빌드
      # docker-test-prod 도커 레포지토리 이름
      - name: Grant execute permission to Gradle wrapper
        run: chmod +x ./gradlew

      - name: Build with Gradle
        run: ./gradlew clean build -x test

      # Docker 이미지 빌드 후 Docker Hub에 푸쉬 - master 브랜치
      - name: Docker build & push to prod
        if: contains(github.ref, 'master')
        run: |
          docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}
          docker build -t ${{ secrets.DOCKER_USERNAME }}/header-back-img:master .
          docker push ${{ secrets.DOCKER_USERNAME }}/header-back-img:master

      # deploy to EC2 - master
      - name: Deploy to prod
        uses: appleboy/ssh-action@v1.0.3
        id: deploy-prod
        if: contains(github.ref, 'master')
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USERNAME }}
          key: ${{ secrets.EC2_PRIVATE_KEY }}
          envs: APPLICATION_PROPERTIES
          script: |
            sudo docker stop header-container || true
            sudo docker rm header-container || true
            sudo docker ps
            docker logs --tail 50 header-container || true
            sudo docker pull ${{ secrets.DOCKER_USERNAME }}/header-back-img:master
            sudo docker run -d \
             --name header-container \
             -p 8080:8080 \
             -e SPRING_DATASOURCE_URL=${{ secrets.SPRING_DATASOURCE_URL }} \
             -e SPRING_DATASOURCE_USERNAME=${{ secrets.SPRING_DATASOURCE_USERNAME }} \
             -e SPRING_DATASOURCE_PASSWORD=${{ secrets.SPRING_DATASOURCE_PASSWORD }} \
             -e MYSQL_ROOT_PASSWORD=${{ secrets.MYSQL_ROOT_PASSWORD }} \
             -e MYSQL_DATABASE=${{ secrets.MYSQL_DATABASE }} \
             -e MYSQL_USER=${{ secrets.MYSQL_USER }} \
             -e MYSQL_PASSWORD=${{ secrets.MYSQL_PASSWORD }} \
             ${{ secrets.DOCKER_USERNAME }}/header-back-img:master
            sudo docker image prune -f
```

#### Dockerfile

``` dockerfile
# 빌드 스테이지
FROM eclipse-temurin:17 AS build
WORKDIR /app

# Gradle 래퍼와 빌드 파일 복사
COPY gradle/ gradle/
COPY gradlew gradlew.bat build.gradle settings.gradle ./

# gradlew 실행 권한 부여
RUN chmod +x ./gradlew

# 의존성 다운로드 (캐시 최적화)
RUN ./gradlew dependencies --no-daemon || true

# 소스 코드 복사
COPY src/ src/

# 애플리케이션 빌드 (테스트 제외)
RUN ./gradlew clean bootJar --no-daemon -x test

# 실행 스테이지
FROM openjdk:17-jdk-slim
WORKDIR /app

# 애플리케이션 JAR 복사
COPY --from=build /app/build/libs/*.jar app.jar

# 포트 노출
EXPOSE 8080

# 애플리케이션 실행
ENTRYPOINT ["java", "-jar", "app.jar"]
```

#### compose.yaml

``` yaml
# Docker Compose 파일을 이용하여 Spring Boot 백엔드 애플리케이션과 MySQL 데이터베이스를 연동하여 함께 실행할 수 있도록 설정
# Docker Compose는 여러 개의 컨테이너(서비스)를 정의할 수 있다.
# 여기선 하나의 서비스인 header-backend-server만 정의한다.
services:
  # 서비스 이름, 나중에 docker compose up 명령으로 이 이름을 기준으로 컨테이너가 실행됨
  header_backend:
    # 이 섹션은 Docker 이미지를 직접 빌드할 것임을 나타낸다.
    build:
      # context : . -> 현재 디렉토리를 빌드 컨텍스트로 사용하겠다는 의미.
      # .dockerignore가 있다면 그 파일에 있는 내용을 빌드 시 제외함.
      context: .
      # 사용할 dockerfile의 이름을 지정
      dockerfile: Dockerfile
      # 컨테이너 이름 수동으로 설정
      # 지정하지 않으면 프로젝트이름_서비스이름_번호 형식으로 자동 생성
    container_name: header_backend
    # environment란
    # Spring Boot의 application.properties/application.yml 설정을 외부에서 주입할 수 있게 해준다.
    # 즉 Spring Boot에서 이 값들을 자동으로 읽는다.
    environment:
      SPRING_DATASOURCE_URL: ${SPRING_DATASOURCE_URL}
      SPRING_DATASOURCE_USERNAME: ${SPRING_DATASOURCE_USERNAME}
      SPRING_DATASOURCE_PASSWORD: ${SPRING_DATASOURCE_PASSWORD}
    # host port : 8080 -> container port 8080으로 포워딩
    # 브라우저에서 http://localhost:8080로 접근하면 Spring Boot 앱에 접속 가능
    ports:
      - "8080:8080"
    # header-backend-server 실행하기 전에 database-server 부터 실행하라는 의미
    # 단, DB가 완전히 준비되었는지까지 보장하지 않기 때문에, 애플리케이션 코드에서 재시도 로직이 있는 것이 더 안전하다.
    depends_on:
      - header_db

  header_db:
    # 사용할 MySQL 버전 명시
    image: mysql:8.0.33
    container_name: header_db
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      TZ: Asia/Seoul    # 리눅스는 타임존 속성을 걸어줘야한다.
    # 호스트 3366 port -> 컨테이너 3306 port
    # 로컬 MySQL이 이미 3306 포트를 쓰고 있다면 겹치지 않도록 포트 변경해주는 설정
    ports:
      - "3366:3306"
    # mysql-data:/var/lib/mysql : MySQL 데이터가 컨테이너 재시작 시에도 유지되도록 로컬 볼륨에 저장
    # ./init.sql:/docker-entrypoint-initdb.d/init.sql : 컨테이너 시작 시 init.sql을 자동 실행(테이블 생성 등 초기화 작업 가능)
    volumes:
      - mysql-data:/var/lib/mysql
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    # command 설정을 통해 한글/이모지 깨짐 방지 가능
    command:
      - --character-set-server=utf8mb4  # MySQL 서버 기본 문자셋을 UTF-8로 설정
      - --collation-server=utf8mb4_unicode_ci  # 정렬 기준 설정
      - --skip-character-set-client-handshake  # 클라이언트가 다른 문자셋을 요구하더라도 무시하고 서버 설정 강제 적용

# mysql-data라는 도커 볼륨 이름을 선언
# 이 이름으로 header-db-server가 데이터를 로컬 디스크에 저장하게 된다.
# 컨테이너를 지워도 데이터는 유지됨.
volumes:
  mysql-data:
```
