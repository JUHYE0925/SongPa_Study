### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)

- [X] 버그 수정 <br>


## 👍변경점

SHOP_ID로만 네임스페이스 관리하던 것을 SESSHION_ID로만 관리하도록 수정했습니다.

<!-- This is an auto-generated comment: release notes by coderabbit.ai -->
## Summary by CodeRabbit

* 신기능
  * 사용자 예약용 챗 엔드포인트 추가(비로그인 접근 허용).
  * 챗봇이 “다음주/저번주/다음달/저번달” 등 상대 날짜를 실제 기간으로 해석하여 응답 정확도 향상.
  * 예약/추천 안내 문구와 버튼 라벨을 보다 예약 유도형으로 개선.
* Chores
  * 배포 워크플로의 원격 실행 타임아웃을 60분으로 상향.
  * 의존성에 캐시 관련 라이브러리 추가.
  * 실행 환경을 감지해 서비스 API 기본 URL을 자동으로 설정하도록 개선.
<!-- end of auto-generated comment: release notes by coderabbit.ai -->