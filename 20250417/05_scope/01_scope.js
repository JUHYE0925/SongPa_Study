/* 스코프 */

// 01_전역과 지역 스코프
// 함수 외부에 쓰여 모든 곳에서도 사용 가능한 범위는 전역 스코프, 함수 내부처럼
// 일정 지역 내에서만 사용 가능한 범위를 지역 스코프라고 한다.
// 보통 호출 위치와 가까운 값을 가져오며 지역에서 외부로 뻗어나가는 흐름이다.

var x = 'global x';
var y = 'global y';

function outer(){

    var z = 'outer local z';

    console.log(x);  // 'global x'
    console.log(y);  // 'global y'
    console.log(z);  // 'outer local z';

    function inner(){

        var x = 'inner local x';

        console.log(x);  // inner local x
        console.log(y);  // global y
        console.log(z);  // outer local z
 
    }

    inner();
}

outer();

console.log(x);  // global x
console.log(y);  // global y
// console.log(z);  // ReferenceError: z is not defined

// 02_함수 레벨 스코프
// 함수 레벨 스코프는 말 그대로 함수 내에서만 사용 가능하다.
var i = 0;

// for 코드 블록 내부에서 i라는 변수를 선언한다. 이 경우가 함수 레벨 스코프를 의미한다.
// 즉 함수 내부에서만 사용 가능하다.
for(var i = 0; i < 10; i++){};

console.log(i);
// 다만 이 경우의 경우 var 키워드를 사용함으로써 전역 변수로 이미 선언된 전역 변수 i 가 있어 중복 선언이 되었다.
// 즉, 의도와 달리 for 코드 블록 내부에서의 값이 변화됨.

/* --------------------------------------------------- */

/* let과 const 키워드 */

// 01_var
// var 키워드는 변수 중복 선언이 혀용되며 나중에 선언된 값으로 초기화된다.
var name = '아무개';
var name = '똥개';

// 함수 레벨 스코프 - line 38참고

// 변수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어올려진 것 처럼 동작한다.
// 즉, 변수 선언문 이전에 참조할 수 있다. 다만 undefined로 출력됨.
console.log(test);  // undefined
var test = '반값습니다.';
console.log(test);  // 반값습니다.

// 02_let
// let 키워드는 변수 중복 선언을 금지한다. 즉 같은 스코프 내에서 중복 선언 시 컴파일 에러 발생함.
let name = '아무개';
// let name = '똥개';

// 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록(for문, if문, 함수 등)을 지역 스코프로 인정한다.
let i = 0;
for(let i = 0; i < 10; i++){
    console.log(`지역 변수 i : ${i}`);
}

console.log(`전역 변수 i : ${i}`);
// var키워드로 사용했을 때와는 달리 같은 i 라는 변수명을 사용했음에도 불구하고 스코프가 다르기 때문에 서로 영향을 주지 않음.

// 03_const
// const 키워드는 상수를 선언하기 위해 사용한다.
// 선언한 변수는 반드시 선언과 동시에 초기화를 해야한다.
// const z;
const z = 10;

// 상수는 재할당이 금지된다.
// const 키워드에 의해 재할당이 급지되므로 할당된 값을 변경할 수 있는 방법은 없다.
// 일반적으로 상수의 이름은 대문자로 표기하며 여러 단어를 연결할 때는 (_)로 스네이크 케이스를 사용한다.
// 상수 말고도 변수 앞에도 쓰일 수 있으며 이 경우에는 소문자로 사용한다.

const DISCOUNT_RATE = 0.15;
const price = 5000;

// const 키워드로 선언된 변수에 객체를 할당한 경우 안에 있는 프로퍼티 값을 변경할 수 있다.
const student = {
    name : '아무개'
};

student.name = '똥깨'; 

// 다만 객체 자체에 재할당은 불가능하다.
// student = {};


