### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)

- [X] 버그 수정 <br>
 
## 💊버그 해결

NGINX 설정에서 Host 헤더가 header_backend로 설정됨
Tomcat은 HTTP 표준에 따라 _가 포함된 도메인을 거부함
 👉 400 Bad Request 발생

🔍 왜 이런 일이 생길까?
Tomcat은 요청을 받을 때 Host 헤더를 파싱해서 유효한 도메인인지 검사한다. 하지만 RFC 규격에 따르면 도메인 이름에는 _가 들어갈 수 없다. 그래서 Tomcat은 400에러를 발생함



<!-- This is an auto-generated comment: release notes by coderabbit.ai -->

## Summary by CodeRabbit

- Refactor
  - 서비스와 작업 식별자 네이밍을 언더스코어에서 하이픈 형태로 일관되게 정리했습니다.

- Chores
  - 배포 워크플로우의 잡 식별자를 최신 네이밍 규칙으로 갱신했습니다.
  - 컨테이너 이름과 서비스 종속성 참조를 새로운 서비스명에 맞게 업데이트했습니다.
  - 리버스 프록시 설정에서 백엔드 대상 주소를 새로운 서비스명으로 지정하고, 전달되는 Host 헤더를 api.headercrm.site로 조정했습니다.

<!-- end of auto-generated comment: release notes by coderabbit.ai -->

