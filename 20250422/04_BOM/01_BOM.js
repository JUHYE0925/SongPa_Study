/* window */

// 브라우저 환경
// 자바스크립트가 돌아가는 플랫폼은 호스트라고 불린다.
// 호스트 환경이 웹 브라우저일 때 사용할 수 있는 기능은 아래와 같아.
// window
// ㄴ DOM(document, ...)
// ㄴ BOM(location, navigator, screen, history, ...)
// ㄴ JavaScript(Object, Array, Function, ...)

// 01. open, alert. confirm, prompt 메소드

// open
// window.open(url, name, params) 메소드 : 새 창을 열 수 있다.
// 첫 번째 인자인 url은 새 창에 로드할 url이며, 
// 두 번째 인자는 새 창의 이름으로 해당 이름을 가진 창이 이미 존재한다면 그 안에 열리고 그렇지 않으면 새 창으로 열린다.
// 새 창의 설정을 주고 싶을 때 세 번째 인자로 전달하면 되는데 쉼포로 구분하고 문자열로 전달한다.
document.getElementById('btn1').onclick = () => window.open('https://www.google.com', 'popup1', 'width=1080, height=800');
document.getElementById('btn2').onclick = () => window.open('https://www.naver.com', 'popup1');

// alert
// window.alert(message) 메소드 : 확인 버튼을 가지며 메세지를 지정할 수 있는 경고 대화 상자를 띄운다.
window.alert('경고 메세지 입니다.');

// confirm
// window.confirm(message) 메소드 : 확인과 취소 버튼을 가지며 메세지를 지정할 수 있는 모달 대화 상자를 띄운다.
// 확인을 누를 시 반환 값은 true, 취소 버튼이나 Esc 키를 누르면 false를 반환한다.
window.confirm('메세지입니다.');

// prompt(message, default) 메소드 : 사용자가 텍스트를 입력할 수 있도록 안내라는 선택적 메세지를 갖는 대화 상자를 띄운다.
// 두 번째 인자로 전달하는 default는 텍스트 입력 필드가 아무 것도 없을 때 기본으로 채워 넣을 문자열이다.
// 반환 값은 확인 버튼을 누를 시에는 사용자가 입력한 문자열이며 취소나 Esc 키를 누르면 null을 반환한다.
window.prompt('좋아하는 숫자 입력하세요.', 7);