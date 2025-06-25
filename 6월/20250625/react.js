/* React의 특징 */
// Virtual DOM(가상 돔)을 사용하여 빠르고 효율적인 UI 렌더링을 제공한다.
// Component를 사용하여 UI를 구성하며, 상태(state) 및 속성(props)을 활용하여 컴포넌트 렌더링을 할 수 있다.
// 이를 통해 코드의 재사용성을 높이고 개발 생산성 또한 높일 수 있다.
// 유연하고 확장 가능한 라이브러리로써 현재는 React Native를 통해 모바일 어플리케이션 개발에도 사용되고 있다.

/* React의 주요 요소 */
// 1. 엘리먼트(Element)
// 요소 노드, 어트리뷰트 노드, 텍스트 노드로 만들어지는 가상 DOM 개념이다.
// 2. 컴포넌트(Component)
// 엘리먼트를 반환하는 개념을 가진 화면의 구성단위로
// 컴포넌트에는 클래스형 컴포넌트와 함수형 컴포넌트가 있다.
// React16 이후부터는 함수형 컴포넌트 생성 방법이 주를 이루고 있다.
// ex) 함수형 컴포넌트
class HelloWorld1 extends React.Component {
    render() {
        return React.createElement( 
            'h1', 
            {className: 'greeting'}, 
            'Hello World' 
        ); 
    } 
}
// ex) 함수형 컴포넌트
function HelloWorld2() { 
    return React.createElement(
        'h1', 
        {className: 'greeting', id : 'test'}, 
        'Hello World'
    ); 
}
// 3. Virtual DOM
// 모든 변경 사항에 대해 전체 DOM을 업데이트 하는 대신 변경 사항이 발생한 부분만 업데이트 하여 DOM 조작을 최소화하기 이한 개념이다.
// Render Tree를 참고하여 Virtual DOM이 생성되며 이러한 가상 돔 개념을 통해 
// 어플리케이션의 성능을 크게 향상 시키고 대규모 어플리케이션 개발에 매우 유용하다.
// 4.JSX
// JSX는 React에서 UI를 구성하는데 사용하는 자바스크립트의 확장 문법이다.
// HTML과 유사한 문법을 사용하며 UI를 작성할 수 있게 하며 직관적이고 쉽게 코드를 작성할 수 있으며
// Babel과 같은 도구를 통해 JavaScript 코드로 변환할 수 있다.

/* React의 동작 원리 */
// 웹 브라우저의 렌더링 엔진 동작 과정
// DOM Tree/CSSOM Tree -> Render Tree 생성 -> Layout -> Paint
// 1. HTML Parsing : HTML을 파싱하여 DOM Tree를 생성한다.
// 2. CSS Parsing : CSS 파일을 파싱해서 CSSOM Tree를 생성한다.
// 3. Render : 두개의 Tree를 결합하여 Render Tree를 생성한다.
// 4. Layout : Render Tree를 화면에 배치하는 것과 관련하여 각 노드의 위치와 크기를 계산하여
//             화면 상에 실제 픽셀로 변환하고 레이어를 생산한다.
// 5. Paint : 레이어를 생성하여 실제 화면에 표시한다.

/* React에서 Virtual DOM을 활용한 리렌더링 */
// 리액트는 Render Tree를 통해 가상 돔을 생성한다.
// 이후 상태(State)가 변경될 때 마다 리렌더링이 발생하여 변화가 적용된 새로운 Render Tree로 새로운 가상돔을 생성하게 되고
// 기존의 가상 돔과의 차이를 비교하여 브라우저에 그려질 때 사용 될 새로운 Render Tree(적용될 실게 돔)을 생성하는데
// 이러한 과정을 재조정(Reconciliation)이라고 한다.
// 이렇게 가상 돔을 활용하면 두가지 이점이 있다.
// 첫 번째로 가상돔을 활용하지 않고 DOM 일부분을 수정하게 되면 전체 DOM Tree 및 CSSOM Tree를 처음부더 다시
// 모두 새로 재생성 하게 되어 속도가 매우 느리게 된다.
// 반면 가상 돔을 활용하면 기존의 DOM과 차이나는 부분만 인지하고 해당 DOM Tree 하위 요소들만 수정하고
// DOM Tree 및 CSSOM Tree를 재생성하는 과정을 진행하지 앖는다. 즉 속도 향상에 있어 이점이 있다.
// 두 번째로, 차이나는 DOM 요소마다 매번 Render Tree를 생성부터 Paint까지 진행하지 않고 모든 차이 나는 부분이 한 번에 적용되어
// Layout 및 Paint 과정이 한 번만 진행된다. Render Tree를 활용해 실제 픽셀 단위로 그려낼 때
// 소모되는 리소스를 절약할 수 있다. 즉 리소스 관리에서도 이점이 있다.
// 따라서 가상 돔을 활용하는 React를 적용하면 동적인 변화가 발생하는 부분만 빠르게 적용하여 속도의 향상을 기대할 수 있다. 