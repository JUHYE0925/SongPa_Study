/* 실습 회고 */

/* input의 활용 방법 */
// <p></p>에는 value 속성이 없기 떄문에 <script>에서 해당 태그의 id로 값을 불러올 수 없다. 
// <p id="selectedPTag"></p>의 경우 자바스크립트에서
// const selectedPTag = document.getElementById("selectedPTag").value;
// 로 사용 불가하다.
// 대신 <input> 태그로 변경하면 해당 태그에는 value 속성이 있기 때문에 위 처럼 사용 가능하다.
// const selectedInputTag = document.getElementById("selectedInputTag").value;

/* deleteMenu()에서 RedirectAttributes에 .addFlashAttribute()를 사용해도 값을 출력할 수 없는 이유 */
// deleteMenu()에서 addFlashAttribute()로 successMessage를 키 값에 담아서 list.html로 리다이렉트 했다.
// 그리고 해당 페이지에서는 script로 
// <script>
//     const successMessage = '[[${ successMessage }]]';
//     if(successMessage){
//         alert(successMessage);
//     }
// </script>
// 이렇게 작성해서 화면에 출력되게 했는데 실제로는 alert창이 뜨지 않았다.
// 그 이유는 자바스크립트 실행 시점과 타임리프에서 메세지 렌더링 방식의 불일치 때문이다.
// 위처럼 script를 작성하면 타임리프가 HTML파일을 렌더링할 때 [[${successMessage}]]를 자바스크립의 문자열 안에 삽입하려고 한다.
// 근데 seccessMessage가 null이면 빈문자열이 되고, 자바스크립트에선 ''로 falsy값이라서 alert()는 실행되지 않는다.
// 하지만 문제는 이게 아니라
// RedirectAttributes로 넘긴 flashAttribute()는 redirect:/menu/list한 다음 요청에서만 접근 가능한데
// flesh()로 POST 요청한 후에 자바스크립트에서 window.location.href로 리다이렉트하면 서버로부터 새 HTML을 받기 전에 flashAttributes는 이미 소멸된다.
// 이처럼 fetch()를 쓰는 방식에서는 서버에서 클라이언트로 flash 메시지를 직접 리턴하거나 JSON으로 응답해야 한다.
// deleteMethod()에는 @ResponseBody 어노테이션을 붙이고 반환 타입을 ResponseEntity<String>으로 하여 반환한다.
// @ResponseBody를 통해 메소드의 반환값인 ResponseEntity를 HTTP응답 본문으로 직접 반환헤준다.
// 즉. deleteMenu()가 리턴하는 "메뉴 삭제 성공" 문자열이 HTTP 응답의 본문으로 전달되게 해주는데 
// 만약 @ResponseBody 어노테이션이 없다면 Spring MVC는 해당 문자열을 view 이름으로 해석하려고 시도할 수 있다.
// 다음은 수정한 코드이다.
// @PostMapping("/delete/{menuCode}")
// @ResponseBody
// public ResponseEntity<String> deleteMenu(@PathVariable int menuCode){

//     menuService.deleteMenu(menuCode);

//     return ResponseEntity.ok("메뉴 삭제에 성공하셨습니다.");
// }

/* ResponseEntity가 무엇인가? */
// ResponseEntity는 HTTP 응답 상태의 코드, 헤더, 본문을 모두 설정할 수 있도록 도와주는 클래스이다.
// ResponseEntity.ok("메뉴 삭제 성공")은 HTTP 상태 코드 200 ok와 함께 본문 "메뉴 삭제 성공"문자열을 포함하여 반환한다.
// 예를 들어, 삭제가 실패했을 경우 ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 메뉴가 존재하지 않습니다.") 와 같이 
// 다른 HTTP 상태 코드(예: 404 Not Found)를 명시적으로 지정할 수도 있습니다.

// ++)
// 정리하면 @ResponseBody는 데이터를 직접 반환하는 역할을 하고
// ResponseEntity는 HTTP 응답의 다양한 요소를 조정하는 역할을 한다. 둘을 함께 사용하면 보다 유연한 응답을 구성할 수 있다.
