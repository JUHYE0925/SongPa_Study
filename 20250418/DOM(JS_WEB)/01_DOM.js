/* 노드 취득 */

// 01_id를 이용한 요소 노드 취득
// document.getElementById('요소 아이디 명')
const $element = document.getElementById('area1');
// 해당 아이디를 가진 요소들 중 첫 번째 요소만 스타일 속성이 적용된다.
// id 속성 값을 그대로 취득하여 전역 변수를 이용한 접근도 가능하다.
// id 값을 갖는 요소가 없으면 null을 반환한다.

// 02_태그 이름을 이용한 요소 노드 취득
// document.getElementsByTagName('태그명')
const $list = document.getElementsByTagName('li');
// 해당 태그 이름을 가진 요소가 없으면 빈 객체를 반환한다.

// 03_class를 이용한 요소 노드 취득
// document.getElementsByClassName('클래스명');
const $drinks = document.getElementsByClassName('drink');
// DOM 전체에서 해당 클래스명을 가진 요소 노드를 모두 탐색하여 반환한다.
// 해당 클래스를 가진 요소가 없으면 빈 객체를 반환한다.

// 04_CSS 선택자를 이용한 요소 노드 취득
// docment.querySelector('CSS선택자')
const $area = document.querySelector('.area');
// DOM 전체에서 해당 선택자를 갖는 첫 번째 노드를 탐색하여 반환
// 해당 선택자가 없을 경우 null을 반환

// document.querySelectorAll('CSS 선택자')
const $lists = document.querySelectorAll('ul > li');
// DOM 전체에서 해당 선택자를 갖는 모든 노드를 탐색하여 반환.
// 해당 선택자가 없을 경우 빈 객체를 반환한다.

/* --------------------------------------------------------------------------- */

/* 노드 탐색 */

// 노드에는 요소 노드와 텍스트 노드가 있다.
// 텍스트 노드는 HTML 사이의 스페이스, 탭, 줄바꿈(개행) 등의 공백 문자도 포함된다.

// 01_자식 노드 탐색

// Node.prototype.childNodes : 자식 노드(요소 노드, 텍스트 노드)를 탐색하여 NodeList에 담아 반환한다.
// Node.prototype.firstChild : 첫 번째 자식 노드(요소 노드, 텍스트 노드)를 반환한다.
// Node.prototype.lastChild : 마지막 자식 노드(요소 노드, 텍스트 노드)를 반환한다.
// Element.prototype.children : 자식 노드 중 요소 노드만 탐색하여 HTMLCollectiuon에 담아 반환
// Element.prototype.firstElementChild : 첫 번째 자식 요소 노드만 반환
// Element.prototype.lastElementChild : 마지막 자식 요소 노드만 반환
// haschildNodes() : 텍스트 노드, 요소 노드 모두 포함하여 자식 노드의 존재 여부를 확인하며 Boolean 값으로 반환한다.

// 02_부모 노드 탐색 

// Node.prototype.parentNode : 부모 노드를 탐색하여 반환한다.
// 부모 노드가 최종 말단 노드일 수가 없다.

// 03_형제 노드 탐색

// Node.prototype.previousSibling : 형제 노드 중 자신 이전의 형제 노드(텍스트 노드, 요소 노드)를 탐색하여 반환
// Node.prototype.nextSibling : 형제 노드 중 자신 다음의 형제 노드(텍스트 노드, 요소 노드)를 탐색하여 반환
// Mode.prototype.previousElementSibling : 형제 노드 중 자신 이전의 형제 요소 노드를 탐색하여 반환
// Mode.prototype.nextElementSibling : 형제 노드 중 자신 다음의 형제 요소 노드를 탐색하여 반환
