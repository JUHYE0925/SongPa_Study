/* Event Handler */

// 01. 이벤트 핸들러
// 이벤트가 발생했을 때 브라우저에 호출을 위임한 함수로 브라우저에게 이벤트 핸들러이 호출을 위임한 것을
// 이벤트 핸들러 등록이라고 한다.
// 등록하는 방법에는 3가지 방법이 있으다.

// 이벤트 핸들러 어트리뷰트 방식
// HTML 이벤트 핸들러 어트리뷰트(on 접두사 + 이벤트 타입)값으로 함수 소출문을 할당하여 이벤트 핸들러를 등록한다.
// 이 때 함수 참조가 아닌 함수 호출문을 할당한다.
// 하나의 이벤트 핸들러 어트리뷰트에 여러개의 이벤트 핸들러를 바인딩할 수 있다.
// 하지만 HTML과 자바스크립트가 뒤섞이는 문제가 있다.
<button onclick="alert('클릭했네?'); console.log('클릭했네?')">클릭해보세요.</button>

// 이벤트 핸들러 프로퍼티 방식
// 이벤트 핸들러 프로퍼티 키는 이벤트 핸들러 어트리뷰트와 동일하며(on 접두사 + 이벤트 타입),
// 이벤트 핸들러 프로퍼티 함수를 바인딩하면 이벤트 핸들러가 등록된다.
// 이벤트 핸들러 어트리뷰트 방식과 달리 HTML과 자바스크립트가 뒤섞이는 문제를 해결할 수 있다.
// 하지만 하나의 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다.
// 새로운 이벤트 핸들러를 등록하면 기존거는 사라지고 나중거로 덮어씌어진다.

{/* <button id="btn">클릭해보세요.</button> */}

const $button = document.querySelector('#btn');

$button.onclick = function(){
    alert('DOM 프로퍼티 방식으로 이벤트 핸들러 등록 완료!');
}

$button.onclick = () => alert('이벤트 덮어쓰기?');

// addEventListener 메소드 방식
// EventTarget.prototype.addEventListener 메소드를 사용하여 등록할 수 있다.
// 첫 번째 매개변수에는 이벤트 타입, 두 번쨰 매개변수에는 이벤트 핸들러를 전달하고 마지막 매개변수는 이벤트 전파단계를 지정하는데 생략 가능하다.
// 이벤트 핸들러 프로퍼티에 바인딩 된 이번트 핸들러에는 영향을 주지 않는다.
// 동일한 HTML 요소에서 발생한 동일한 이벤트에 대해 addEventListner 메소드 방식으로는
// 하나 이상의 이벤트 핸들러를 등록할 수 있으며 이 때 이벤트 핸들러는 등록된 순서대로 호출된다.
// 참조가 동일한 이벤트 핸들러를 중복 등록하면 하나의 핸들러만 등록된다. -> 한 번만 이벤트가 실행됨.

<button id="btn">클릭해보세요.</button>
    
const $button = document.getElementById('btn');
$button.addEventListener('click', function(){
    alert('클릭했네?');
})

// addEventListner 메소드 방식으로 하나 더 추가
$button.addEventListener('click', function(){
    console.log('addEventListner 메소드 방식으로 이벤트 핸들러 등록!');
})

const handleMouseOver = () => console.log('button mouseover');
$button.addEventListener('mouseover', handleMouseOver);
$button.addEventListener('mouseover', handleMouseOver);

// 이벤트 핸들러 제거
// addEventLister로 등록한 이벤트 핸들러의 경우에는 removeEventListner 메소드를 통해서 이벤트 핸들러를 제거할 수 있으며,
// 전달한 인수가 일치하지 않을 경우에는 이벤트 핸들러는 제거되지 않는다.
$button.removeEventListner('mouseover', handleMouseOver);

// 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 removeEventListner 메소드로 제거할 수 없다.
// 이벤트 핸들러 프로퍼티에 null을 할당해서 이벤트를 제거한다.
$button.onclick = null;

/* --------------------------------------------------------------- */

/* 이벤트 객체 */

// 01. 이벤트 객체

// 이벤트 발생 시 이벤트에 관련한 다양한 정보를 가진 이벤트 객체가 동적으로 생성된다.
// 이 때 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.

// 이벤트 핸들러 어트리뷰트 방식으로 이벤트 핸들러를 등록했다면 반드시 event라는 이름을 사용해야한다.

// 02. 이벤트 핸들러 내부의 this

// 이벤트 핸들러 어트리뷰트
// 이벤트 핸들러 어트리뷰트 방식의 경우 이벤트 핸들러에 의해 일반 함수로 호출되고
// 일반 함수 내부의 this는 전역 객체인 window를 의미한다.
// 이벤트 핸들러 호출 시 인수로 전달된 this는 이벤트를 바인딩 한 DOM 요소를 가리킨다.

// 이벤트 핸들러 프로퍼티, addEventListenter
// 두 방식 모두 이벤트 핸들러 내부의 this는 이벤트를 바인딩한 DOM 요소를 가리킨다.
// 즉, 이벤트 핸들러 내부의 this는 이벤트 객체의 currentTarget 프로퍼티와 같다.

