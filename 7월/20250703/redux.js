/* Redux란? */
// Redux는 상태 관리를 하기 위한 라이브러리이다.
// 앱의 전체 상태는 하나의 저장소(Store) 안에 있는 객체 트리에 저장된다.
// (Redux State라는 개념으로 저장소에서 관리된다.)
// store에서 객체 트리에 저장된 state들을 변경하는 유일한 방법은 변화를 주는 
// 행동 해당하는 action을 통해서다. 또한 action에 따라 state를 어떻게 변경할지를 명시하기 위해 함수를 작성하고 이를 reducer 함수라고 한다.
// react 컴포넌트에서는 react-redux에서 제공하는 useSelector를 통해 state와 action를 활용한다.
// 또한 useDispatch를 통해 action을 reducer 함수로 dispatch 할 수 있다.
// 이후 해당 reducer 함수는 state를 반환하고 store에 저장된 state는 반환된 state 값으로 교체가 일어난다.

/* Redux의 3가지 원칙 */
// 1. Single source of truth
// - 스토어라는 하나뿐인 데이터 공간을 이용하기 때문에 신뢰할 수 있는 데이터이다.
// - State is read-only
// - 리덕스에서는 액션을 전달하는 reducer 함수를이용해서만 상태를 변경하며 직접 state를 변경하지 못한다.
// 3. Changes are made with pure function
// - 변경은 오로지 순수 함수로만 가능하다. 이 때문에 reducer를 사용한다.

/* React-Redux */
// react-redux.js를 CDN 방식으로 가져와 useSelector와 useDispatch를 활용하여
// reducer에 action을 dispatch하여 store가 관리하는 state에 변화를 줄 수 있다.
// 이와 같이 하는 이유는 각 컴포넌트 별로 따로 관리해야 하는 state와 그 state에 변화를 주는 코드들이 각 컴포넌트들에 분산되어 가독성 및 유지보수가 어렵게 된다.
// 따라서 state 변경 기능인 reducer와 state를 관리하는 store 개념을 따로 분리하여 관리함으로써 가독성 및 유지보수에 도움을 줄 수 있다.

/* combine=reducers */
// 관리할 state가 복잡하거나 reducer 함수로 관리해야 할 성격이 다른 경우 각 state 들을 관리할 reducer 함수를 
// 하나로 묶어 관리할 combineReducers를 활용할 수 있다.
// 이를 통해 combineReducers는 store에 저장된 state 별로 따로 존재하는 reducer 함수들을 손쉽게 관리할 수 있다.

/* Reducer 함수 작성 시 주의 사항 */
// Reducer 함수 작성 시 주의 사항은 state가 객체일 때 state 객체는 변화를 주기 위해서는 매번 반드시 새로운 객체를 생성해서 반환해야 한다.
// 리듀서 함수의 state 변경 여부는 주소값 일치 여부를 확인하는 것으로 성능을 개선시켰기 때문에 객체 내부의 값만 변경해서는
// 주소값이 변경되지 않고 동일하기 때문에 state의 변화가 없는 것으로 간주하게 된다.