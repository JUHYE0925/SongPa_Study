/* State란? */
// state는 컴포넌트 내부에서 바꿀 수 있는 값을 의미한다.
// props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하고 주는 읽기 전용 값이었지만 state는 컴포넌트 내부에서 설정되는 값이다.
// 그렇기에 개발자는 state의 변경되는 값을 관리하며 다양한 작업을 진행할 수 있다.
// 리액트는 클래스형 컴포넌트에서 state를 직접 사용할 수 있지만 함수형 컴포넌트에서는 직접 state를 사용하는 것이 불가능하다.
// 그래서 리액트는 함수형 컴포넌트에서도 state를 관리할 수 있게 useState라는 hooks로 제공하고 있다.

/* state-basic */
// 클래스형 컴포넌트에서는 클래스의 생성자를 사용하여 props 및 state를 다룰 수 있다.
// 생성자 안에서 state를 사용하는 방법은 다음과 같다.
// 1. state는 this.를 반드시 명시해야 한다.
// 2. 이름은 반드시 state여야 한다.
// 3. state에 저장되는 값의 형태는 반드시 Object 리터럴 형태로 작성되어야 한다.
// ex)
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1 // Object 리터럴 타입으로 정의되어 관리될 state 속성과 속성 값
        };
    }
    render() {
        const number = this.state.number;
        return (
            <>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.setState({number: number - 1})}>-1</button>
                <button onClick={() => this.setState({number: number + 1})}>+1</button>
            </>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);

/* state 변경과 관련된 개념  */
// 1. state에 변화주기
// state에 객체 형태로 컴포넌트가 관리 할 값들이 저장되었을 때
// state에 변화를 주고 싶으면 state 객체의 프로퍼티에 직접 접근해서 수정하거나 state 객체를 새 객체로 직접 바꾸는 것이 아닌
// state의 setter 메소드를 이용하여 관리할 값의 변화를 준 새로운 객체를 setter 메소드의 인수로 전달해야 한다.
// 2. state 변화에 따른 render() 호출
// setState()를 통해 state에 변화를 주면 자동으로 render()는 재호출 된다. render()가 반환하는 새로운 엘리먼트가 해당 DOM으로 교체되고 기존의 DOM Tree와 차이나는 부분만 확인해서 차이나는 부분만 다시 그려지게 된다.

/* prev-state란 */
// this.setState를 사용할 때 상태가 비동기 방식으로 백그라운드에서 업데이트 된다.
// 하나의 이벤트 핸들러 내에서 여러 번 setState를 호출한다고 해도 동기적으로 누적해서 이전 state값을 활용하는 state 변화를 취급하지 못한다.
// 이 때 해결할 수 있는 방법은 변경할 state 객체 대신 함수를 인자로 전달하는 것이다.
// setState로 전달하는 콜백함수의 첫 번째 인자는 이전 상태값을 가리키는 prevState이며, 두 번재 인자는 현태 컴포넌트가 가지는 props이다.
