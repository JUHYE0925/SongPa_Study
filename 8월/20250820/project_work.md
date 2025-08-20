### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)

- [X] 기능 추가 <br>

## 👍변경점

관리자 페이지 예약 관련 챗봇 기능 구현
 


<!-- This is an auto-generated comment: release notes by coderabbit.ai -->
## Summary by CodeRabbit

- New Features
  - 관리자용 예약 챗봇 API/엔드포인트 추가(FastAPI 및 Spring 연동)
  - 세션 기반 대화 지원을 위한 session_id 필드 도입(요청/응답 모델 확장)
  - 챗봇 서비스: 예약 데이터 연동·세션 히스토리·응답 생성 로직 추가
  - JWT 기반 인증·관리자 권한 검사 추가 및 관리자 대시보드 엔드포인트 추가
  - DB 연결 관리, CORS 및 앱 시작/종료 훅 추가; 예약 조회 리포지토리 추가
  - DB 테이블 모델 추가(Menu/Reservation/User)

- Chores
  - Dockerfile·Gunicorn 설정 및 의존성(LLM·벡터스토어·DB) 추가
  - 봇 설정 YAML 및 .gitignore 패턴 확장
<!-- end of auto-generated comment: release notes by coderabbit.ai -->