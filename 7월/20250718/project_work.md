### ❗프로젝트 기간동안 작업 결과물(PullRequest)로 대신하여 교육 일지 작성 ❗

## PR 타입(하나 이상의 PR 타입을 선택해주세요)

- [X] 기능 추가 <br>

## 👍변경점

예약 상세 조회 Controller 추가했습니다.

## 🛠리팩토링

기존에 당월 예약 전체 조회 하는 메소드 매핑 수정했습니다.
당월 예약 전체 조회할 때 /my-shops/{shop_code}/reservation/{date} 이렇게 받아왔고
예약 상세 조회 /my-shops/{shop_code}/reservation/{resvCode}로 받아왔더니 두 메소드의 매핑 경로가 같다고 인식되어 
당월 예약 전체 조회 시 받아오는 date 값을 Pathvariable이 아닌 파라미터로 넘겨받도록 수정했습니다.


## 링크
https://github.com/BOA-with-elephant/Header-backend/pull/111