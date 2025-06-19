/* 비교 연산자 */

// 동등/일치 비교 연산자
// == 는 값만 같으면 true를 반환하고, ===는 타입과 값 모두 같아야 true를 반환한다.
console.log(1 == '1');  // true
console.log(1 === '1'); // false
// NaN은 자신과 일치하지 않은 유일한 값이다.
console.log(NaN == NaN); // false

// 일치 비교 연산자
// 앞서 변수 챕터에서 말한 부정 논리 연산자를 사용
console.log('hello' === 'hello');  // true
console.log('hello' !== 'hello');  // false

// 대소 비교 연산자
// >, <, >=, <= 와 같은 대소 비교 연산자를 통해 비교 가능하다.
// 이 때 문자열의 경우에는 첫 알파벳을 유니코드로 변환하여 비교하며
// a < z 순이고 대문자가 소문자보다 작다.
console.log('apple' > 'banana');  // false;
console.log('apple' >= 'Zoo'); // true

/* --------------------------------------------------- */

/* 논리 연산자 단축 평가 */

// ||(or) 연산자의 경우 좌항과 우항의 값 둘 중 하나가 true 값이면 true를 반환하며
// 이 때 좌항의 값이 true 값이면 우항은 보지도 않고 좌항의 값을 출력한다.
// &&(and) 연산자의 경우 좌항과 우항의 값 모두 true 값이어야 true 반환하며
// 우항의 값까지 모두 true여야 우항의 값을 출력하고 좌항의 값이 false이면 우항은 보지도 않고 값을 출력하지 않는다.
console.log(false || 'banana');  // banana
console.log('apple' && 'banana');  // banana
console.log('apple' && false);  // false

/* --------------------------------------------------- */

/* 01_옵셔널 페이닝 연산자 */

// 값이 null이거나 undefined 처럼 값이 없을 때 발생하는 에러를 막기 위해 사용
// ?를 붙여 사용한다.
var obj = null;
var val = obj?.value;
console.log(val);  // undefined

/* 02_null 병합 연산자 */

// null이거나 undefined일 경우 우항에 기본 값을 주어 우항의 값을 출력
// ??를 붙이고 뒤에 우항의 값으로 기본 값을 준다.
// 만약 null, undefined가 아닐 경우에는 좌항의 값 그대로 반환한다.
var test = null ?? '기본 값';
console.log(test);  // '기본 값

