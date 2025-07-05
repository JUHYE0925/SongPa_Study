/* Ducks 패턴이란? */
// Ducks 패턴(Ducks Modular Redux Pattern)은 Redux의 action type, action creator, reducer, thunk 등의
// 코드를 기능(도메인) 단위로 하나의 파일에 통합해서 관리하는 구조입니다.
// 기존 Redux 구조의 지나친 분산 문제를 해결하기 위해 등장했다.
// Ducks 패턴은 구조 중심이 아니라 기능 중심으로 파일을 나누는 구조이다.
// 이 때 초기값, 액션, 리듀서를 관련 있는 State 별로 modules 폴더에 만들어서 관리한다.

/* Redux-actions */
// Redux Actions에서 제공하는 createActions, createActions. handleActions를 사용해서 actions과 reducer를 만들 수 있다.
// action은 createActions 메소드 또는 createActions 메소드를 통해 생성된다.
// reducer는 handleActions 메소드를 통해 생성된다.

/* Middleware */
// 미들웨어는 특정 조건에 따라 액션 무시 및 추가 작업, 수정, 로깅, 트리거 액션, 함수 호출 등을 수행하도록 할 수 있다.
// 비동기 관련 미들웨어 라이브러리로 많이 사용되는 것은 redux-thunk, redux-saga가 있다.

/* redux-logger */
// 미리 만들어져 있는 미들웨어 사용 및 여러 개의 미들웨어를 사용할 수 있다.
// 로깅 용도의 미들웨어로 가장 많이 사용되는 미들웨어는 redux-logger middleware이다.
// action 객체의 모습(type, payload)과 state의 변화를 살펴볼 수 있도록 console에 출력해 줌으로써
// action과 state 변화를 log로 찍어준다.

/* redux-fetch-problem */
// actions을 생성하고 dispatch를 하게 되면 리듀서에게 전달되어 store에서 state로 관리된다.
// 이 때 createActions로 action 객체를 반환하는 과정에서 payload 값을 반환하는 함수를 
// 비동기 방식(async)으로 사용하게 되면 비동기 처리가 끝난 값을 payload에 담기도 전에 함수의 return이 실행되고
// async/await 방식이므로 promise 객체를 반환해 버린다.