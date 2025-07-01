/* Hooks란? */
// Hooks는 리액트 16.8에서 새로 도입된 기능으로, 함수 컴포넌트에서 사용 불가능한 생명주기
// 메소드의 한계점으로 인해 상태 관리 및 렌더링 이후 시점 컨트롤 등 다양한 문제를 해결하기 위해 만든 함수 집합을 의미한다.
// 그 중 useState는 가장 기본적인 hook이며, 함수 컴포넌트에서도 상태를 관리할 수 있게 해준다.
// 컴포넌트가 렌더링 된 이후에 특정 작업을 수행할 필요가 있다면 클래스형 컴포넌트에서는 componentDidMount 혹은
// componentDidUpdate 메소드를 사용하면 된다.
// 하지만 함수형 컴포넌트에서는 생명주기 API 사용이 불가능하다.
// 그렇기에 함수형 컴포넌트에서도 렌더링 된 이후 시점에 수행할 내용이 필요한 경우 사용할 수 있는 
// 기능을 hooks로 제공하고 있고 그게 useEffect이다.

/* useEffect-mount */
// useEffect는 기본적으로 마운트 된 시점과 업데이트 된 시점 두 가지 모두 동작하게 된다.
// 마운트 될 때만 동작하고 업데이트 시에는 동작하지 않게 컨트롤할 수도 있다.
// 두번째 인자로 전달되는 배열을 의존성 배열이라고 하며 마운트 시점에만 동작하게 하기 위해서는
// useEffect 함수의두 번째 인자로 빈 배열을 전달하면 된다.
// ex)
useEffect(() => console.log('마운트 시점에만 동작함...'),[])

/* useEffect-update */
// useEffect는 기본적으로 마운트 시점에 힌 반 동작하고 그 후에는 원하는 값의 변경 시점에만 동작하게 만들 수도 있다. 
// 이를 위해서는 useEffect의 두 번째 인자로 전해지는 의존성 배열에 변경을 확인할 state값을 주면
// 해당 의존성 배열이 관리하는 값이 변경될 때만 useEffect가 동작한다.
// ex)
const [user, setUser] = useState({username: '',password: ''});
useEffect(() => {console.log('username update...')},[user.username]);
