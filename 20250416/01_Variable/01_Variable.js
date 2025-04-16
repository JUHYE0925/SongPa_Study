/* 변수(Variable) - Symbol_and_Object */

// 자바스크립트는 7개의 데이터 타입을 제공하며며 원시 타입과 객체 타입으로 분류된다.
// 원시 타입으로는 String, Number. Boolean. Null, Undefined, Symbol이 있으며 그 외는 객체 타입이다.
// 자바스크립트는 객체 기반의 언어이며, 자바스크립트를 이루고 있는 모든 것이 객체이다.

// 객체 타입을 생성할 때는 객체 리터럴을 사용한다.
var obj = {};

// 배열을 이용할 수도 있다.
var arr = [];

/* --------------------------------------------------- */

/* 동적 타입 언어 - dynamically_typed_language */

// 변수 선언이 아닌 할당에 의해 타입이 결정되며 재할당에 의해 변수 타입은 언제든지 동적으로 변한다.
// 그렇기 때문에 값을 확인하기 전에는 타입을 확신할 수 없다.
// 또한 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 변환되기도 하며
// 이로 인해 유연성은 높지만 신뢰도가 떨어진다.

var test;
test = 1 // test의 값은 1이고 타입은 Number이다.
test = 'JavaScript'  // test의 값은 'JavaScipt'이고 타입은 String이다.

/* --------------------------------------------------- */

/* 암묵적 타입 변환 */

// 동적 타입 언어로서 변수의 타입은 동적으로 변하며 크게 암묵적 타입 변환과 명시적 타입 변환으로 나뉜다.
// 명시적 타입 변환은 개발자가 의도적으로 값의 타입을 변환하는 것을 의미한다.
// 암묵적 타입 변환은 자바스크립트 엔진에 의해서 암묵적으로 타입이 자동 변환되는 것을 의미한다.

// 01_문자열 타입으로로의 변환

// 숫자와 문자열이 + 연산자로 만나면 숫자가 문자열로 변환되어 문자처럼 쓰인다.
var num = 10;
var str = '20';
var sum = num + str // sum의 값은 30이 아닌 1020이 된다.

// 그 외에도 NaN. Infinity, true, false, null, undefined, {}, [], function(){} 모두 변하지만
// Symbol()은 에러 발생한다.

// 02_숫자 타입으로의 변환

// + 연산자를 제외한 -, *, /, %를 통해 문자열과 숫자로 이루어진 연산식에서는 문자열이 숫자로 변환되어 계산된다.
// 다만 문자열이 숫자로 된 문자열이어야 가능하고 'JavaScript'와 같은 글로된 문자열은 불가하다.
console.log(10 - '5'); // 5
console.log(10 * 'JavaScript') // NaN

// +로만 되어있는 단항 연산자의 경우도 가능하다. 단 이 경우에도 'JavaScript' 같은 경우는 불가하다.
console.log(+'0') // 0
console.log(+'1') // 1
console.log(+true) // 1
console.log(+false) // 0

// 03_불리언 타입으로의 변환

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값, 또는 Falsy 값으로 구분한다.
// Falsy 값으로는 false, undefined, null, 0, NaN, 빈 문자열이며 그 외는 Truthy 값이다.

/* --------------------------------------------------- */

/* 명시적 타입 변환 */

// 01_문자열 타입으로 변환
// String 생성자 함수를 사용
console.log(String(10)); // "10"

// Object.prototype.toString() 메소드 사용
console.log((10).toString); // "10"

// + 연산자를 이용한 문자열과 숫자 연결  -> 위에서 참고(line 36)

// 02_숫자 타입으로 변환
// Number 생성자 함수 사용
console.log(Number('10'));  // 10
console.log(Number(true));  // 1

// parseInt(), parseFloat() 함수 사용
// parseInt()의 경우 정수와 실수 모두 정수로 표현하며 parseFloat()은 정수와 실수 모두 그대로 표현한다.
// 즉 parseInt()는 정수로 표현할 수 있는 부분까지만 출력하며, parseFloat()은 실수로 표현할 수 있는 부분까지만 출력하며 나머지는 생략한다.
console.log(parseInt('10')); // 10
console.log(parseInt('10.01')); // 10
console.log(parseFloat('10.01')); // 10.01

// + 단항 산술 연산자 이용  -> 위에 참고 (line 51)

// +를 제외한 -, *, /, % 산술 연산자 이용
console.log('10' - 5);  // 5
console.log('10' * 5);  // 50
console.log('10' / 5);  // 2
console.log('10' % 5);  // 0

// 03_불리언 타입으로 변환

// Boolean 생성자 함수 사용
console.log(Boolean('JavaScript'));
//  false, undefined. null, 0, NaN, ''(빈문자열)은 Falsy 값이며 그 외는 Truthy 값이다.

// ! 부정 논리 연산자 두 번 사용하는 방법
console.log(!!'JavaScript'); // true
console.log(!'JavaScript'); // false
// ! 부정 논리 연산자를 한 번 사용하면 해당 값의 부정을 나타내며 !!를 사용하면 부정의 부정을 나타낸다.