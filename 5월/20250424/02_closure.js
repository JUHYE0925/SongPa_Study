/* 클로저(closure) */
// 클로저는 내부 함수가 외부 함수의 변수에 접근할 수 있는 기능을 말한다.
// 이는 내부 함수가 외부 함수의 실행 컨텍스트가 종료된 후에도 그 변수들을 계속 참조할 수 있게 해준다.

// outer는 외부 함수이며 클로저는 생성할 준비를 한다.
function outer() {
    // outerVar는 outer 함수 내부에서만 유효한 지역 변수이다.
    // 일반적으로 함수가 끝나면 가비지 컬렉션에 의해 이 변수는 사라지지만 클로저가 생기면 가비지 컬렉션이 회수하지 않아 사라지지 않는다.
    let outerVar = 'I am from outer';
  
    // 내부 함수 inner를 반환하고 있다.
    // 이 시점에서 inner 함수는 outer 함수의 실행 환경(스코프)를 기억하게 된다.
    // 이게 클로저의 핵심이다.
    return function inner(innerVar) {
      // 내부 함수 inner는 외부 함수의 변수 outerVar에 자유롭게 접근하고 동시에 자기 매개변수인 innerVar도 사용할 수 있다.  
      console.log(outerVar); // 외부 함수의 변수에 접근
      console.log(innerVar); // 내부 함수의 매개변수
    };
  }
  
  // outer 함수를 실행시키고 그 결과로 내부 함수 inner 함수가 반환되어 closureFunc에 저장된다.
  // 이 때 closureFunc는 outerVar를 기억하는 클로저가 된 것이다.
  const closureFunc = outer();

  // 클로저를 실행하면서 인자를 넘긴다.
  closureFunc('I am from inner');

  // 출력
  // I am from outer
  // I am from inner
  
// 이 예제에서 inner 함수는 outer 함수의 변수 outerVar에 접근할 수 있는데 이는 클로저 덕분에 가능한 일이다.
// 이 코드에서 가장 중요한 포인트는
// outer() 함수가 실행되었을 때,
// 그 안에서 정의된 inner() 함수가 리턴되었고,
// 그 inner() 함수는 외부 함수인 outer()의 지역 변수인 outerVar에 접근할 수 있다는 점이다.
// 이렇게 외부 함수의 변수에 접근하는 inner() 함수가 바로 클로저이다.

// ++) 함수 outer()는 이미 실행이 끝나서 stack에서 사라졌지만,
// closureFunc이 inner()를 기억하고 있기 때문에
// outerVar도 여전히 접근 가능하다는 점이 바로 클로저의 특징이다.
// 즉, inner는 자신이 만들어질 당시의 외부 스코프를 기억하고 있다는 것이다.

// 클로저는 내부 함수가 외부 함수의 변수에 접근할 수 있는 기능이다.
// 이는 함수가 실행된 환경을 기억하고, 그 환경의 변수들을 계속 참조할 수 있게 해준다.
// 예를 들어, 위와 같은 코드에서 inner 함수는 outer 함수의 변수 outerVar에 접근할 수 있다.
// 이러한 특성 덕분에 클로저는 데이터 은닉, 함수 팩토리 생성, 비동기 처리 등 다양한 상황에서 유용하게 사용된다.
// 다만 주의사항이 있다.
// 클로저를 사용할 때 메모리 누수를 주의해야하는데
// 클로저가 외부 함수의 변수를 계속 참조하면, 해당 변수는 가비지 컬렉션에 의해 회수되지 않는다.
// 따라서 불필요한 클로저의 생성을 피하고, 더 이상 필요 없는 클로저는 null로 설정하여 메모리 해제를 유도하는 것이 좋다.

/* closure가 유용한 이유 */
// 정보 은닉 : 외부에서 outerVar에 직접 접근할 수 없다.
// 상태 유지 : 여러 번 closureFunc()를 호출하면 상태를 계속 유지할 수도 있다.
// 함수 팩토리 : 동적으로 함수를 만들어서 다양한 동작을 하게 만들 수 있다.

// 대표적인 유스케이스
// 1. 카운터 만들기 - 상태 유지
function createCounter() {
    let count = 0; // 외부 함수의 변수 → 은닉됨

    return function () {
        count++;
        console.log(`현재 카운트: ${count}`);
    };
}

const counter = createCounter();
counter(); // 현재 카운트: 1
counter(); // 현재 카운트: 2
counter(); // 현재 카운트: 3

// 여기서의 클로저 역할은 count는 외부에서 직접 접근할 수 없고, 내부 함수만 접근할 수 있어서 데이터가 안전하게 보호된다.
// 또한 counter()를 호출할 때 마다 count 값을 기억해서 업데이트 한다.

// 2. 함수 팩토리 - 재사용 가능한 함수 만들기
function makeMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }
  
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 여기서의 클로저 역할은 multiplier라는 외부 변수의 값을 기억해서 각기 다른 배수를 만드는 맞춤형 함수를 만든 것이다.
// 즉 재사용성과 가독성이 좋다.