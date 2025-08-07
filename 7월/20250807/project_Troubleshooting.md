##  **📝개요**
​
 이번 프로젝트에서 CI/CD 파트를 맡아 진행했다. 처음으로 Docker와 Docker-Compose에 대해서 공부하고 바로 적용하다보니 많은 시행착오를 겪었고, 그중 가장 허무하면서도 화가 났던 이슈를 해결한 내용을 공유하고자 한다. 사실 이건 에러라고 부르기도 민망한 실수였고, 문제를 해결했을 때 너무 허무했기에 정말 내 자신이 한심하게 느껴졌기에 나처럼 삽질하는 분이 한 명이라도 줄었으면 하는 마음으로 이 글을 작성한다.
​
## **🚨 문제 상황**
​
 우선 이번 프로젝트에서 나는 백엔드와 DB를 함께 Docker로 배포하고자 했고 init.sql 파일에 DB 스크립트와 초기 데이터를 담아서 배포 시 자동으로 실행되도록 설정했다. 
​
### **📄 초기 docker-compose.yml (DB 관련 부분만)**
``` yml
services:
  headerdb:
    image: mysql:8
    restart: always
    container_name: headerdb
    environment:
      SPRING_DATASOURCE_URL: ${SPRING_DATASOURCE_URL}
      SPRING_DATASOURCE_USERNAME: ${SPRING_DATASOURCE_USERNAME}
      SPRING_DATASOURCE_PASSWORD: ${SPRING_DATASOURCE_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      TZ: Asia/Seoul   
    ports:
      - "3366:3306"
    privileged: true
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:rw
    healthcheck:
      test: [ "CMD", "mysqladmin", "ping", "-h", "localhost", "-p$MYSQL_ROOT_PASSWORD" ]
      interval: 5s
      timeout: 3s
      retries: 5
​
    command:
      - --character-set-server=utf8mb4  # MySQL 서버 기본 문자셋을 UTF-8로 설정
      - --collation-server=utf8mb4_unicode_ci  # 정렬 기준 설정
```
​
 위  파일에서 문제가 되었던 부분은 여기다.
​
``` yml
 volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:rw
```
​
 위 코드는 Docker Container가 처음 시작할 때 init.sql 내 코드를 자동으로 실행하여 테이블 생성 등과 같은 초기화 작업이 가능하도록 하는 코드이다. 이렇게 작성한 후 아래와 같은 명령어를 사용하여 Docker에 이미지를 올리고 컨테이너를 실행시킨 후 실행 중인 DB 컨테이너에 들어가서 더미 데이터들이 잘 나오는지, 한글은 안깨지는지 확인하고자 했다.
​
``` bash
# docker-compose 삭제(volume도 같이 삭제)
docker-compose down -v
​
# docker-compose 실행
docker-compose up -d
​
# 실행 중인 MySQL 컨테이너 안에서 MySQL 클라이언트를 실행 
docker exec -it {컨테이너이름} mysql -u {DB 계정이름} -p
```
​
그래서 위와 같은 명령어들을 입력하고 나면 MySQL 언어를 입력할 수 있으며 아래와 같은 코드를 실행했다.
​
``` SQL
-- 생성된 DATABASE 목록 보기
SHOW DATABASES;
​
-- DATABASE 선택
USE {DB 이름};
​
-- 선택된 DATABASE의 생성된 테이블 보기
SHOW TABLES;
```

## **☑️ 문제 원인**
​
 그 결과는 정확히 기억은 안나지만 Set up 0이라는 문구가 나왔다. 즉 **생성된 테이블이 없다**는 뜻이고 그 원인은 init.sql 내부의 코드가 제대로 실행되지 않았다는 것이다. 그래서 다음과 같은 명령어를 입력했다.
​
``` bash
# 실행 중인 DB 컨테이너 내의 docker-entrypoint-initdb.d 폴더 하위의 목록 보기
docker exec -it {컨테이너이름} ls -l /docker-entrypoint-initdb.d/
```
​
위 명령어를 입력한 결과는 다음과 같다.

​
![alt text](image-3.png)
​

 위 사진에서 빨간색으로 표시한 부분이 docker-entrypoint-initdb.d 폴더 하위에 있는 목록은 빨간색으로 표시한 부분이다. 만약 docker-compose 파일이 제대로 실행되어서 init.sql 파일이 읽혔다면 해당 폴더 하위에 init.sql 파일이 들어가 있어야 한다. 그리고 파일이 들어가게 된다면 '-rw-r--r--  1 root root 2048 Aug  7 12:01 init.sql' 이런 형식의 글자가 나왔어야 한다. 하지만 나의 경우에는 'drwxr-xr-x 2 root root 4096 Aug  6 10:23 init.sql' 이런 형식의 글자가 나왔다. 즉, **글자 맨 앞에 'd'로 시작하는 것은 디렉토리, '-' 하이픈으로 시작하는 것은 파일을 의미**한다. 그러므로 나의 경우에는 **Docker가 init.sql이 파일이 아닌 디렉토리로 인식하여 저장되었으며 그 결과 아무 파일이 존재하지 않는다고 인식하고 init.sql 내부의 코드가 실행되지 않은 것**이다. 그래서 그 이유를 알아보고자 여러 가지 방법을 수도 없이 진행해보았다. 
​
## **🔎 해결을 위한 시도들**

### **1️⃣ Docker 초기화 후 재실행** 
​
 우선 가장 기본적인 것부터 시작하였다. 아래 명령어를 사용하여 실행 중인 이미지, 컨테이너, 볼륨을 다 삭제한 후 다시 생성/실행하였다. 그 이유는 Docker Desktop이 Windows 경로를 WSL 경로로 변환할 때 해당 경로가 디렉토리인지 파일인지 판단해서 mount한다. 근데 만약 예전에 init.sql이라는 폴더가 생성된 적이 있다면 Windows 쪽에선 지금 파일이더라고, WSL/Docker 내부 캐시에서는 여전히 폴더로 남아있을 수 있기 때문에 volume까지 완전히 초기화한 상태로 다시 docker-compose를 실행했다. 하지만 **여전히 문제 발생**했다.
​
``` bash
# 컨테이너를 중지 및 삭제하며, 연결된 볼륨도 함께 삭제
docker-compose down -v
​
# 이미지 삭제
docker rmi {이미지 ID}
​
# 연결된 볼륨 내역 확인
docker volumes ls
​
# 남아있는 볼륨 있을 경우 아래 명령어 입력하여 볼륨 삭제
docker volume rm {볼륨 ID}
​
# 컨테이너를 생성하고 실행
docker-compose up -d
```

### **2️⃣ init.sql을 하위 폴더에 넣기**
​
 init.sql 파일이 제대로 읽히려면 docker-compose.yml과 같은 경로에 있어야 한다. 나도 처음에는 그렇게 했지만 안되었기에 구글링을 하였더니 어떤 글에서는 폴더 생성하여 그 안에 넣은 후에 다시 실행하면 비교적 안정적으로 파일이 읽힌다는 글을 보았다. 사실 그 말이 맞는지는 중요치 않았다. 그냥 무조건 실행해보았다. 그래서 docker-compose.yml과 같은 경로에 db라는 폴더 생성 후 그 안에 init.sql을 넣었다. 그리고 docker-compose.yml 파일도 아래와 같이 수정하였다. 하지만 여전히 init.sql을 디렉토리로 읽혀지는 **문제는 해결되지 않았다.**
​
``` yml
 volumes:
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql:rw
```

### **3️⃣ 절대 경로 사용**
​
 이번에는 경로를 잘 못읽거나 잘못 설정한 것인가 싶어 절대 경로로 바꾸어서 실행해보았다. 하지만 이 방법으로도 **해결되진 못했다.** 나는 여기서 생각했다. 여러 경로로 바꾸어도 같은 문제가 일어나는 것은 코드 문제가 아닐 수 있겠다고 생각하였다. 그래서 설정이나 접근 권한 등을 살펴보기로 하였다. 
​
``` yml
 volumes:
    - /D:/Songpa_Backend_Java_Spring/Project_Header/Backend2/db/init.sql:/docker-entrypoint-initdb.d/init.sql
```

### **4️⃣ Docker Desktop의 FileSharing 설정**
​
 Docker Desktop에서 init.sql을 읽으려면 init.sql이 있는 드라이브에 대한 접근 설정을 해주어야 한다. 그래서 Docker Desktop에서 FileSahing에 init.sql 파일이 있는 드라이브를 추가해주었다. 설정하는 방식은 다음과 같다.
​
> 1\. Docker Desktop 어플리케이션 실행  
> 2\. 우측 상단 setting(⚙️) 아이콘 선택  
> 3\. 왼쪽 메뉴에서 Resources 선택  
> 4\. 상위 탭 중 File Sharing 탭 선택  
> 5\. + 버튼을 클릭하여 드라이브 추가

​
![alt text](image-2.png)
​
 이렇게 설정한 후 다시 docker-compose 컨테이너 중단 후 실행하는 과정을 거쳤다. 하지만 **여전히 해결되진 않았다.** 
​
### **5️⃣ init.sql 마운트 경로 확인**
​
 Docker Desktop에서 접근할 수 있는 범위를 추가했음에도 init.sql을 못읽는 것이면 docker-compose가 실행되면서 init.sql 파일이 마운트 되는 경로에 문제가 있을 수 있다고 생각하였다. 그래서 실제로 docker-compose가 실행될 때 init.sql 파일이 마운트 되는 경로를 찾아보았다. 우선 아래 명령어를 실행하여 도커 컨테이너(또는 이미지, 볼륨 등)의 상세 정보를 보았다.
​
```
# 도커 컨테이너(또는 이미지, 볼륨 등)의 상세 정보를 JSON 형식으로 출력
docker inspect {컨테이너명}
```
​
![alt text](image-4.png)
![alt text](image-5.png)

​
 두 번째 사진을 보면 내가 작성한 init.sql 파일을  /docker-entrypoint-initdb.d/ 하위에 마운트 하려는 것을 알 수 있다. 그럼 여기서 확실한 것은 코드에는 문제가 없다는 것을 알 수 있었기에 더더욱 무엇이 문제인지를 알아보고자 했다. 
​
### **6️⃣ Docker Desktop WSL에 G 드라이브 마운트 상태 확인**
​
그래서 이번에는 Docker Desktop WSL에서 init.sql 파일이 담겨있는 G 드라이브의 마운트 상태를 확인했다. 아래 명령어를 실행했을 때 G 드라이브가 제대로 마운트 된다면 결과값에 g라는 글자가 있어야한다. 하지만 사진과 같이 c, d만 나오고 g는 없는 것을 보고 **G 드라이브 자체가 마운트 되고 있지 않음을 알게 되었다.**
​
``` bash
# WSL(Windows Subsystem for Linux) 환경에서
# docker-desktop이라는 **WSL 배포판(가상 리눅스 환경)**으로 진입하는 명령어
wsl -d docker-desktop
​
# WSL에서는 Windows의 드라이브(C:, D:, G: 등)를 /mnt/c, /mnt/d, /mnt/g 등의 경로로 마운트합니다.
ls /mnt
```
​
![alt text](image-6.png)


### **7️⃣ G 드라이브 접근 권한 확인**
​
 위의 확인을 통해 나는 외부에서 G 드라이브에 접근할 수 있는지를 확인했다. Docker Desktop에서 G 드라이브에도 접근하겠다고 설정해봤자 막상 G 드라이브에서 이걸 Docker의 접근을 허용하지 않으면 G 드라이브에 있는 init.sql 파일에 접근할 수 없고 그렇게 되면 Docker에서는 init.sql을 존재하지 않는 것으로 판단하여 init.sql이라는 빈 디렉토리를 자동 생성하게 된다. 그래서 나는 내 G 드라이브에 속성을 확인하여 접근 권한 설정 여부를 확인했다. 하지만 내 **G 드라이브의 경우 외부에서 접근할 수 없도록 되어 있었다.** 아니 **애초에 접근 권한을 설정할 수 없도록 막혀있었다.** 이걸 해결할 수 있는 다른 방법도 있지만 그러기 위해서는 데이터를 백업해야하는 귀찮음이 있어 그냥 백엔드 코드가 있는 폴더를 C 드라이브에 옮겨서 다시 docker-compose 파일을 실행해보았다. 그랬더니 **바로 해결**되었다. 정말 허무했다.
​
**📌정리하면 G 드라이브는 외부 접근을 허용하지 않도록 설정되어 있었고, 그로 인해 init.sql에 접근하지 못해서 Docker는 빈 디렉토리를 자동 생성했던 것이다.**
​
## **💡배운 점**

> \- Docker는 마운트 시 경로가 디렉터리인지 파일인지 정확히 구분한다.  
> \- 외장 USB, G 드라이브 등은 WSL과 Docker Desktop에서 접근이 제한될 수 있다.  
> \- Docker 마운트 문제는 단순히 파일 경로 문제가 아닐 수 있다. 권한, 공유 설정, 드라이브 마운트 상태 등도 확인해야 한다.  
> \- 무엇보다, 실패는 훌륭한 학습 기회다. 덕분에 docker-composes, volume, inspect, exec 등의 기본 명령어에 익숙해질 수 있었다.
​
## **✍️ 마무리**
​
 나는 그 동안 노트북의 용량이 작아서 모든 프로젝트 파일을 USB에 담아 다녔다. 현재까지는 불편함을 감수할 수 있을 정도로 쿤 불만 없이, 문제 없이 다녔었다. 하지만 이번에 USB에서 파일을 실행하면 생기는 문제점에 대해 알 수 있었다. 외부에서 접근할 수 없도록 되어 있기에 배포가 불가능하다는 점.. 정말 이유를 알고나서 처음엔 너무 허무하고 한심하다고 느껴졌다. 하지만 이 경험 덕분에  Docker에 훨씬 익숙해졌고, 다음에는 같은 이슈에 대해서 훨씬 빠르게 디버깅할 수 있을 자신이 생겼다. 이 글이 나처럼 초보자 분들에게 조금이라도 도움이 되길 바라며 글을 마친다.