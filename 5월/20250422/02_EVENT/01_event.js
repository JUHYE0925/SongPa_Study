/* 이벤트 전파 */

// 이벤트 전파란?
// 생성된 이벤트 객체는 이벤트를 발생시킨 DOM 요소인 이벤트 타겟을 중심으로 DOM 트리를 통해 전파된다.
// 이벤트 전파 흐름에는 캡처링 단계, 타겟 단계, 버블링 단계가 있다.
// 1. 캡처링 단계 : 이벤트가 상위 요소에서 하위 요소로 전파되는 단계이다.
// 2. 타겟 단계 : 이벤트가 실제 타깃 요소에 전달되는 단계이다.
// 3. 버블링 단계 : 이벤트가 하위 요소에서 상위 요소로 전파되는 단계이다.
// 브라우저는 사용자로부터 이벤트가 발생하면 가장 상단의 요소부터 하위의 요소까지 내려오고 다시 거슬러 올라가는 식으로 이벤트를 전달하여 발생하도록 한다.
// 만약 타겟 요소까지 이벤트를 전파하는 과정에서 부모, 조상에도 이벤트 리스너가 등록되어 있다면 실행되게 된다.
// 브라우저의 이벤트는 기본적으로 버블링 방식으로 전파된다.
// 즉, 자식 요소에 이벤트가 발생하면 부모 요소에도 버블링을 통해 이벤트가 전파되어 이벤트 리스너가 호출되게 된다.
// 이벤트 핸들러 어트리뷰트/프로퍼티 방식으로 등록한 이벤트 핸들러의 경우에는 타겟 단계와 버블링 단계의 이벤트만 캐치할 수 있다.
// 하지만 addEventListener 메소드 방식으로 등록한 이벤트 핸들러는 3번째 인자로 true를 전달하면 캡처링 단계의 이벤트로 캐치할 수 있다.

/* ------------------------------------------------------------------------ */

/* DOM 기본 동작 */

// 01. 브라우저 기본 동작 중단
// preventDefault() 메소드를 이용하여 브라우저의 기본 동작을 막을 수 있다.
<input type="checkbox"> 클릭해도 절대 체크되지 않는 체크 박스</input>
// <script>
document.querySelector('input[type=checkbox]').addEventListener('click', e => {
    e.preventDefault();
});
// </script>

// 02.이벤트 전파 방지
// 이벤트 객체의 stopPropagation 메소드를 이용하여 이벤트 전파를 중지시킬 수 있다.
<ul id="drink">
    <li>커피</li>
    <li>콜라</li>
    <li>우유</li>
</ul>

// <script>
const $drink = document.getElementById('drink');

document.querySelector('li').addEventListener('click', e => {
    e.stopPropagation();
    e.target.style.color = 'blue';
});

// </script>

/* ------------------------------------------------------------------------ */

/* 이벤트 종류 */

// 01. 마우스 이벤트

// mousedown / mouseup : 특정 영역을 클릭 시 손가락으로 누를 때 혹은 손가락을 뗄 때 이벤트가 발생
// mouseover / mouseout : 특정 영역 위에 마우스를 호버시킬 경우 혹은 특정 영역 밖으로 마우스를 옮길 경우 이벤트 발생
// mousemove  : 특정 영역 내에서 마우스로 움직일 때마다 이벤트 발생
// click : 특정 영역을 마우스로 클릭 시 이벤트 발생
// contextmenu : 마우스 오른쪽 클릭 시 이벤트 발생 

// 02.선택 막기, 복사 막기

// mousedown, mousemove 이벤트가 발생할 때 나타나는 브라우저 기본 동작을 막으면 글시 선택을 막을 수 있다.
// copy 이벤트가 발생할 때 나타나는 브라우저 기본 동작을 막아 복사를 막을 수 있다.
// 이 때 브라우저 기본 동작을 막는 방법은 이벤트 객체의 preventDefault() 메소드를 호출하는 방법과
// 이벤트 핸들러 함수 반환 값을 false로 지정하는 방법이 있다.
$span.onmousedown = (e) => e.preventDefault();
$span.oncopy = () => {
    return false;
};

// 03. 키보다 이벤트

// keydown : 키보드의 키를 누를 때 이벤트 발생
// keyup : 키보드의 키를 눌렀다 뗄 때 이벤트 발생

// 04. 사용자 입력 양식 이벤트

// 폼 취득 방법
document.forms;  // window 전체 form 선택
document.forms.memberjoin;  // form의 name이 memberjoin인 form 취득
document.forms[0];  // 인덱스를 통해서도 폼 취득 가능하다.

// 요소 취득 방법
$form.elements; // label이나 span 태그를 제외한 HTMLFromControlsCollection 객체 반환
$form.elements.username; // username이란 name 속성을 가진 요소 취득
$form.elements[0]; // 인덱스를 통해서도 취득 가능
const $username = $form.username;
$username.value = '사용자 이름 변경';  // 새로 지정함으로써 value를 변경 가능
$gender[1].checked = true; // checkbox 경우 특정 요소의 속성 checked = true로 지정함으로써 checked 속성 변경 가능
$age.options[2].selected = true  // select일 경우 .selecte = true를 통해 특정 값을 기본값으로 선택 가능
$age.selectedIndex = 3;  // .selectedIndex를 통해서도 기본값 설정 가능
$age.value = '50'; // .value의 값을 지정함으로써 기본값 설정 가능

// focus, blur 이벤트
// focus 이벤트는 사용자가 폼 요소를 클릭하거나 tab 키를 눌러 다음 요소로 이동했을 때 발생하는 이벤트
// blur 이벤트는 사용자가 다른 곳을 클릭하거나 tab 키를 눌러 다음 폼 필드로 이동했을 때 발생하는 이벤트
// focus 이벤트는 해당 입력 필드에서만 동작하고 버블링 불가하다.
// 만약 버블링이 필요할 경우에 focusin, focusout 이벤트를 사용한다.

// change 이벤트
// change 이벤트는 요소 변경이 끝나면 발생하는 이벤트로 select, checkbox, radio의 경우에는 선택 값이
// 변경되면 바로 이벤트가 발생하지만 텍스트 입력 요소의 경우에는 변경이 되어도 포커스되어 있으면 이벤트가 발생하지 않고
// 포커스를 잃었을 때 이벤트가 발생한다.

// input 이벤트
// 키보드 이벤트와 달리 어떤 방법으로든 값을 변경할 때마다 발생하는 이벤트로
// 글을 복사하여 붙여 넣거나, 음성 인식 기능을 사용하여도 이벤트가 발생한다.

// 05. 폼 제출 이벤트

// submit 폼을 제출할 때 동작하는 이벤트로 폼을 서버로 전송하기 전에 내용을 검증하여 폼 전송을 취소할 때도 사용한다.
// input type="submit" 또는 input type="image" 클릭하여 전송하는 방법과
// input 필드에서 Enter 키를 눌러 전송하는 방법이 있다.