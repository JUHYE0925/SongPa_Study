/* DOM */

// 요소 노드의 텍스트 조작

// nodeValue
// Node.prototype.nodeValue : setter와 getter 모두 존재하는 접근자 프로퍼티이다.
// nodeValue 프로퍼티 참조 시 노드 객체의 값(텍스트 노드의 텍스트)을 반환한다.
// 단, 텍스트 노드가 아닌 노드(객체 노드, 요소 노드)의 경우 null을 반환한다.
// 텍스트 노드의 nodeValue 프로퍼티에 값을 재할당하면 텍스트 노드의 값이 변경된다.

// textContent
// Node.prototype.textContent 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티이다.
// 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다.
// 요소 노드의 textContent 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역 내의 텍스트를 모두 반환하며, HTML 마크업(태그)은 무시된다.
// 요소 노드의 textContent 프로퍼티에 문자열을 재할당하면 요소 노드의 모든 자식 노드가 제거되고 재할당한 문자열로 변경된다.
// 이 때에도 HTML 마크업은 무시되고 문자열로 취급된다.

/* ----------------------------------------------------------------------- */

/* 노드 변경 */

// 01. 노드 생성과 추가

// Document.prototype.createElement(tagName) : 인수로 전달받은 태그 이름에 해당하는 요소 노드를 생성하여 반환
const $li = document.createElement('li');

// Document.prototype.createTextNode(text) : 인수로 전달받은 텍스트 값으로 텍스트 노드를 생성하여 반환.
const textNode = document.createTextNode('고양이');

// Node.prototype.appendChild(childNode) : 인수로 전달받은 노드를 appendChild를 호출한 노드의 마지막 자식으로 추가
$li.appendChild(textNode);

// 복수 노드의 생성과 추가
// div와 같은 컨테이너 요소를 사용하여 DOM의 리플로우, 리페인트 횟수를 줄이는 것이 좋다.
// 위에서 보여줬던 방식으로 진행할 경우 생성되는 요소의 갯수만큼 화면에 렌더링되므로 리플로우, 리페인트 횟수가 증가한다.
// 그렇게 때문에 div 같은 컨테이너 요소로 생성할 요소들을 묶어서 한 번에 화면에 렌더링되는 방식으로 진행하는 것이 효율적이다.
const $food = document.getElementById("food");

const container = document.createElement("div");

['된장찌개', '고등어구이', '순대국'].forEach(text => {
    const $li = document.createElement("li");
    $li.textContent = text;

    container.append($li);
});

$food.appendChild(container);

// 02. 노드 삽입, 이동

// Node.prototype.appendChild(childNode) : line 30 참고
// Node.prototype.insertBefore(newNode, childNode) : 첫 번째 인수로 전달받은 노드를 두 번재 인수로 전달받은 노드 앞에 삽입
//                                                   두 번째로 전달받은 인수는 insertBefore 메소드를 호출한 노드의 자식 노드여야한다.
// 두 번째 인수로 null을 줄 경우에는 appendChild처럼 마지막 자식 노드로 추가된다.

<ul id="drink">
    <li>커피</li>
</ul>

const $drink = document.getElementById('drink');

const $milk = document.createElement('li');
$milk.textContent = '우유';

$drink.insertBefore($li2, $drink.firstElementChild);

// 03. 노드 교체, 삭제

// Node.prototype.replaceChild(newChild, oldChild) : 자신을 호출한 노드의 자식 노드인 oldChild 노드를 newChild 노드로 교체하고 oldChild 노드는 DOM에서 제거한다..
//                                                   이 때 oldChild는 replaceChild 메소드를 호출한 노드의 자식 노드여야한다.
const $coke = document.createElement('li');
$coke.textContent = '콜라';
$drink.replaceChild($coke, $milk);

// Node.prototype.removeChild(child) : child 매개변수에 인자로 전달한 노드를 DOM에서 삭제한다.
//                                     인수로 전달한 노드는 removeChild 메소드를 호출한 노드의 자식 노드여야한다.
$drink.removeChild($coke);

/* ----------------------------------------------------------------------- */

/* 어트리뷰트 */

// 01. 어트리뷰트
// Element.prototype.attributes : 모든 어트리뷰트 노드를 취득할 수 있다.
//                                해당당 프로퍼티는 getter만 존재하는 읽기 전용 접근자 프로퍼티로 NameNodeMap 객체를 반환한다.
// Element.prototype.getAttributes/setAttributes : 요소 노드에서 메소드를 통해 직접 HTML 어트리뷰트 값을 취득하거나 변경할 수 있다.
// Element.prototype.hasAttributes(attributeName) : 특정 HTML 어트리뷰트가 존재하는지 확인할 수 있으며 불리언 값으로 반환한다.
// Element.prototype.removeAttribute(attributeName) : 특정 HTML 어트리뷰트를 삭제할 수 있다.

// 02. HTML 어트리뷰트와 DOM 프로퍼티
// HTML 어트리뷰트
// HTML 요소의 초기 상태를 지정하면 변하지 않는다.
// 어트리뷰트 노드에서 관리되며 값을 얻거나 변경하려면 getAttribute/setAttribute 메소드를 사용한다.
// DOM 프로퍼티
// 사용자가 입력한 최신 상태를 관리한다.
// 사용자의 입력에 의한 상태 변화에 반응하여 언제나 최신 상태를 유지한다.

// 단, id의 경우 id는 사용자 입력에 의한 상태 변화와 관계없는 어트리뷰트이므로
// id 어트리뷰트와 id 프로퍼티는 항상 동일한 값으로 연동된다.

// getAttribute 메소드로 취득한 어트리뷰트 값은 항상 문자열이다.
// 하지만 DOM 프로퍼티로 취득한 최신 상태 값은 문자열이 아닐 수도 있다.
// 예를 들어, checkbox 요소의 checked 어트리뷰트 값은 문자열이지만 checked 프로퍼티 값은 boolean 타입이다.

/* ----------------------------------------------------------------------- */

/* style */

// 01.인라인 스타일

// HTMLElement.prototype.style : setter와 getter 모두 존재하는 접근자 프로퍼티이다
//                               요소 노드의 인라인 스타일을 취득하거나 추가 또는 변경한다.
//                               CSSStyleDeclaration 타입의 객체를 반환하는데 이 프로퍼티에
//                               값을 할당하면 해당 CSS 프로퍼티가 인라인 스타일로 HTML 요소에 축되거나 변경된다.

<div style="color : white">AREA</div>
const $area = document.querySelector('div');
console.log($area.style);
$area.style.width = '100px';
$area.style.height = '100px';
$area.style.backgroundColor = 'lightgray';  // 마침표 표기법
// $area.style['background-color'] = 'lightgray';  // 대괄호 표기법

// 02. className과 classList

// class 어트리뷰트에 대응하는 DOM 프로퍼티는 class가 아니라 className. classList이다.

// Element.prototype.className : setter와 getter가 모두 존재하는 접근자 프로퍼티이다.
//                               요소 노드의 className 프로퍼티를 참조하면 class 어트리뷰트 값을 문자열로 반환하고
//                               요소 노드 className 프로퍼티에 문자열을 할당하면 class 어트리뷰트 값을 할당한 문자열로 변경한다.
// Element.prototype.classList : class 어트리뷰트 정보를 담고 있는 DOMTokenList 객체를 반환한다.

// add(...className) : class 어트리뷰트에 값을 추가
$area.classList.add('circle');
// remove(...className) : class 어트리뷰트에 값 삭제
$area.classList.remove('circle');
// contains(className) : 인수로 전달한 문자열과 일치하는 클래스가 class 어트리뷰트에 포함되는지의 여부를 확인하고 불리언 타입으로 반환
$area.classList.contains('circle');
// replace(oldClassName, newClassName) : 첫 번재 인자로 전달한 문자열을 두 번째 인자로 전달한 문자열로 변경한다.
$area.classList.replace('circle', 'square');
// toggle(className) : class 어트리뷰트에 인자로 전달한 문자열과 일치하는 클래스가 존재하면 제거하고 존재하지 않으면 추가한다.
$area.classList.toggle('square');
