### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)

- [x] 기능 추가 <br>
- [x] 코드리팩토링

## 👍변경점

노쇼 조회, 노쇼 처리 구현
BossReservation Entity 수정 및 관련 CRUD 코드 리팩토링

## 🛠리팩토링

BossReservation 엔티티의 Integer shopCode를 SHOP shopInfo로 변경
bossReservation Projection인 BossResvDetailView 생성하여 조회 코드  반환 타입을 BossResvDetailView로 변경
예약 추가, 수정, 코드에서 매핑한 엔티티를 Reservation 엔티티에서 BossReservation 엔티티로 변경

## 스크린샷 (선택)

<img width="673" height="675" alt="image" src="https://github.com/user-attachments/assets/1ea65087-e188-416d-9e9f-f603de3e7e40" />

## 링크
https://github.com/BOA-with-elephant/Header-backend/pull/66