### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)
- [X] 의존성, 환경 변수, 빌드 관련 코드 업데이트

## 👍변경점

LLM 배포 설정 추가하였습니다.
FastAPI, 단일 컨테이너, 단순 chatbot일 경우 gunicorn보다는 uviconr이 용량도 적고 빠르다고 하여 uvicorn으로 설정하였습니다.

close #226 

<!-- This is an auto-generated comment: release notes by coderabbit.ai -->
## Summary by CodeRabbit

- New Features
  - LLM API 서비스가 스택에 추가되어 챗봇 응답 제공이 분리된 전용 서비스로 동작합니다.
- Refactor
  - 애플리케이션 서버를 Uvicorn 기반으로 전환하여 멀티코어 활용 및 응답 성능을 개선했습니다.
  - 앱 수명주기(lifespan) 관리로 DB 연결을 안정적으로 초기화/종료합니다.
  - 백엔드가 LLM 서비스 준비 상태를 기다리도록 시작 순서를 조정했습니다.
- Chores
  - 헬스체크 타이밍을 조정해 서비스 안정성을 강화했습니다.
  - 의존성 정리 및 컨테이너 빌드 캐싱 최적화를 적용했습니다.
- Documentation
  - Nginx 설정에 안내 주석을 추가했습니다.
<!-- end of auto-generated comment: release notes by coderabbit.ai -->