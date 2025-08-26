### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)

- [x] 버그 수정 <br>

## 👍변경점

- llm > app > core > config.py에서 redis_url이 localhost로 잡혀있어서 docker container 실행이 안됨. 그래서 기존 코드는 주석처리 하고 url을 redis로 변경함.

- 에러는 아니지만 validation 관련 의존성을 잘 못잡는다는 경고가 떠서 더 명확한 의존성으로 추가함.
 
## 💊버그 해결

Github Actions의 실행시간이 command_timeout 시간보다 길어서 계속 에러가 남. 그 때문에 실제 코드 에러인지 아님 타임 오버인지를 분간할 수 없어 command_timeout 옵션 시간을 30분으로 설정함.


<!-- This is an auto-generated comment: release notes by coderabbit.ai -->
## Summary by CodeRabbit

- Chores
  - 배포 워크플로우의 타임아웃 표기를 초 단위로 명확화하고 원격 스크립트 실행 시간 제한 및 중간 실패 시 즉시 중단 동작을 도입하여 배포 신뢰성 향상.
  - 검증 라이브러리(hibernate-validator) 의존성 추가로 입력 검증의 안정성 및 호환성 개선.

- Configuration
  - 기본 Redis 연결 대상을 로컬호스트에서 컨테이너 호스트(redis)로 변경하여 컨테이너 환경에서의 연결 신뢰성 향상.
<!-- end of auto-generated comment: release notes by coderabbit.ai -->