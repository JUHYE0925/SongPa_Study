/* Project Review */

/* 예외 전역 처리 */
// @ExceptionHandler 어노테이션을 통해서 에러 처리를 전역으로 관리하려고 했다.
// 근데 각각의 도메인 별로 관리하려고 했는데 다른 도메인의 ExceptionHandlerController에서 
// Exception.class로 모든 Exception을 관리하고 있었다.
// 내 생각으로는 Exception을 스캔하면서 내 파일 위에서 Exception.class를 보더라도 아래에서 파일에서
// 특정 에러 처리를 하면 상관없을 것이라고 생각했지만 실제론 그렇지 않아서
// 각각의 도메인별로 에러 처리하는 것이 아닌 공통 로직으로 빼서 처리하는 것으로 수정했다.

/* 트랜잭션 처리 */
// OTT를 삭제할 때 OTT 번호를 재정렬 하고싶었지만 검색하니 
// DELETE FROM OTT
// WHERE OTT_NO = 5;
// ALTER TABLE OTT AUTO_INCREMENT = 1;
// SET @COUNT = 0;
// UPDATE OTT SET OTT_NO = @COUNT:=@COUNT+1;
// ALTER TABLE OTT AUTO_INCREMENT = 1;
// 이런 코드를 통해서 재정렬 할 수 있는 방식이 있다. 
// 근데 내가 작성한 DB에서는 해당 컬럼값이 다른 테이블과 FK가 걸려있어서 불가능했다.
// 이런 경우에는 OTT_NO를 FK로 받아쓰는 다른 테이블의 컬럼 값도 새로 재설정을 해주어야 한다는 문제가 생긴다.
// 가능은 하지만 점점 더 복잡해지는 코드로 인해 좀 더 고민하고 생각해볼 필요가 있다고 생각한다.

/* onSubmit 이벤트 */
// 사용자의 input 값이 null이거나 ""일 경우 <form> 하위 <button type=submit>이 동작하지 않게 하고싶어
// 처음에는 <button type=submit>에 onclick 이벤트를 달았는데 실행이 안되었다.
// 그 이유는 HTML에서 submit 이벤트는 form 요소가 제출될 떄 발생한다. 
// <form id="modifyForm">
//     <button id="submit">제출</button>
// </form>
// 와 같은 구조에서는 <form>이 전송될 떄 submit 이벤트가 발생한다.
// <button> 자체에서는 submit 이벤트가 발생하지 
// 않으며 버튼은 form을 제출하는 트리거일 뿐 이벤트 주체가 아니기 때문에 실행이 제대로 되지 않았던 것이다.
// 그렇기 때문에 처음에 말한 요구사항을 실행하기 위해선 submit 이벤트를 <form>태그에 걸어야 정상적으로 동작하게 된다.

/* value 와 value.trim()의 차이 */
// 1.
// const $modifyName = document.getElementById("modifyName").value;
// 2.
// const $modifyName = document.getElementById("modifyName").value.trim();
// 둘 다 id="modifyName"인 <input> 요소의 value 값을 가져온다.
//예를 들어 HTML이 이렇게 있다면:
// <input type="text" id="modifyName" value="   넷플릭스   ">
// .value는 " 넷플릭스 " (양쪽 공백 포함)
// .value.trim()은 "넷플릭스" (양쪽 공백 제거)
// | 항목       | `.value`          | `.value.trim()`                     |
// | --------- | ----------------- | ----------------------------------- |
// | 공백 처리  | 공백을 그대로 가져옴  | 앞뒤 공백 제거                            |
// | 유효성 검사 시 | `"   "`도 문자열로 인정됨 | `"   ".trim()` → `""` (빈 문자열 처리 가능) |
// 예제 비교
// .value 사용
// const name = document.getElementById("modifyName").value;
// if (name === "") {
//     alert("값을 입력하세요");
// }
// 사용자가 " "만 입력해도 조건을 통과함 → 실제론 빈 값인데도 실패 못 잡음
// .value.trim() 사용
// const name = document.getElementById("modifyName").value.trim();
// if (name === "") {
//     alert("값을 입력하세요");
// }
// " " → ""로 변환되기 때문에 정확하게 빈 입력을 검출할 수 있음


// 전체적으로 이번 프로젝트는 기본적인 CRUD를 하는 것이기 때문에 백엔드 로직쪽으로는 어려움이 없었지만
// 평소 부족하다고 생각했던 프론트 기술, HTML이나 자바스크립트에서 사용하는 method()의 특성이나 코드에 대한 이해도가 부족함을 느꼈다.

