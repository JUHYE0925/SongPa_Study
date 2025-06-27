/* lifecycle */
// 컴포넌트를 통해 엘리먼트가 브라우저상에 나타나고, 업데이트 되고, 사라지게 될 때 마다 중간에 호출되는 메소드들을
// 라이프사이클 메소드라고 하며 라이프 사이클 메소드는 총 9가지가 있다.
// 라이프 사이클 메소드는 클래스형 컴포넌트에서만 사용이 가능하며 상황 별로 라이프 사이클은 크게 총 3가지 카테고리인 마운트, 업데이트, 언마운트로 나뉜다.

/* mount */
// DOM이 생성되고 웹 브라우저상 나타나는 것을 마운트(Mount)라고 한다.
// mount 시 생명 주기 메소드 라이프 사이클 순서는 다음과 같다.
// (constructor) -> (getDerivedStateFromProps) -> (render) -> (componentDidMount)
// constructor() : 
// constructor는 컴포넌트를 새로 만들 때 마다 호출되는 클래스 생성자 메소드로
// 컴포넌트를 만들 대 처음으로 실행된다. 생성자 내에서는 state를 초기화할 수 있다.
// 또한 getDerivedStateFromProps를 쓰려면 반드시 constructor 함수 내부에서 state 초기화를 해야 한다.
// getDerivedStateFromProps() : 
// props에 있는 값을 state에 넣을 때 사용하는 메소드로 props로 받아온 값을 state에 동기화 시키는 용도로 사용하며, 마운트와 업데이트 시 호출된다.
// render() : 
// 리액트 엘리먼트를 가상 돔으로 구성하고 실제 렌더트리까지 구성하는 시점에 호출되는 메소드이다.
// render()는 this.props와 this.state에 접근할 수 있다.
// 아무런 컴포넌트도 보여주고 싶지 않다면 null 혹은 falsy값을 반환하도록 하면 된다.
// 하지만 다음과 같은 주의사항이 있다.
// 1. render() 메소드 안에선 이벤트 설정이 아닌 곳에서 setState를 사용하면 무한 루프처럼 작동하기 때문에 사용하면 안된다.
// 2. 브라우저의 DOM에 직접 접근해서도 안된다. 새로운 DOM이 생성되는데 성능상 좋지 않기 때문이다.
// componentDidMount() : 
// 컴포넌트가 웹 브라우저 상에 나타난 후에 호출되는 메소드로 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나,
// 이벤트 등록, setTimeout, Interval, 네트워크 요청과 같은 비동기 작업을 주로 처리한다.

/* update */
// 컴포넌트의 상태가 바뀌는 경우를 의미하며 총 4가지의 업데이트 상황이 있다.
// 1. props 변경
// 2. state 변경
// 3. 부모 컴포넌트 리렌더링
// 4. this.forceUpdate로 강제 렌더링 트리거(웬만하면 사용하지 않는 것을 권장한다.)
// update 시 생명주기 메소드 라이프 사이클은 다음과 같다.
// (getDerivedStateFromProps) -> (shouldComponentUpdate) -> (render) -> (getSnapshotBeforeUpdate) -> (componentDidUpdate)
// 1. getDerivedStatFromProps() : 
// props에 있는 값을 state에 넣을 때 사용하는 메소드이다.
// shouldComponentUpdate() : 
// 컴포넌트가 리렌더링을 할 것인지의 여부를 결정하는 메소드로 true를 반환하면 render() 메소드를 호출하여 렌더링 되며
// false 를 반환하면 render() 메소드를 호출하지 않아 렌더링 되지 않는다. 즉, render() 이후부터 생명주기 메소드 호출이 중단된다.
// render() : 
// 컴포넌트 렌더링하는 메소드이다.
// getSnapshotBeforeUpdate() :
// 컴포넌트의 변화를 실제 DOM에 반영하기 직전에 호출되는 메소드로 componentDidUpdate()와 같이 쓰여야한다.
// componentDidUpdate() : 
// 컴포넌트 업데이트 작업이 끝난 후 호출하는 메소드로 리렌더링이 끝나고 화면에 update 된 후에 실행된다.
// 업데이트가 끝난 직후이기 때문에 DOM 관련 처리를 해도 되며 컴포넌트가 이전에 가졌던 데이터를 prevProp, prevState로 접근할 수 있다.
// 또한 getSnapshotBeforeUpdate() 에서 반환하는 값(snapshot)을 세 번째 파라미터로 전달받을 수 있다.

/* unmount */
// 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 한다.
// 언마운트 생명 주기 메소드는 componentWillUnmount 하나이며 컴포넌트가 웹 브라우저 상에서 사라지기 직전에 호출되는 메소드이다.
// componentDidMount 시점에 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 다 제거하는 작업을 주로 하게 된다. 