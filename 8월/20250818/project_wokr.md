### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)

- [X] 기능 추가 <br>

## 👍변경점

사장님 페이지 멀티 스레딩 환경에서의 공유 자원(예약 기능) 동시성 문제 해결함.
비관적 락을 걸어 동시성 문제 해결

## 스크린샷 (선택)

![alt text](<스크린샷 2025-08-18 161942.png>)



<!-- This is an auto-generated comment: release notes by coderabbit.ai -->

## Summary by CodeRabbit

- 버그 수정
  - 예약 중복 방지 강화: DB 고유 제약 추가 및 사전 중복 점검, 동시성 잠금 적용으로 동일 시간대 중복 예약 차단.
  - 예약 등록 실패 시 오류 메시지 가독성 향상.
- 테스트
  - 동일 시간대 동시 예약 시 단 하나만 성공하는지 검증하는 동시성 테스트 추가.

<!-- end of auto-generated comment: release notes by coderabbit.ai -->