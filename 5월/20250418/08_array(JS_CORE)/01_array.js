/* 배열 */
// 배열은 여러 개의 값을 순차적으로 나열한 자료구조이다.
// 배열은 객체 타입이다.
// ex) [1, 2, 3, 4, 5]

// 01_배열 생성성

// 배열 리터럴([])을 통한 배열 생성
const arr = ['a', 'b', 'c', 'd'];

// 배열 생성자 함수 통해 배열 생성
// const 변수 = new Array(요소); 형태
// 다음과 같이 요소를 지정하지 않으면 빈 배열이 생성된다.
const arr2 = new Array(); 

// 전달된 인수가 1개이고 숫자일 경우 length 프로퍼티 값이 인수인 배열을 생성
const arr3 = new Array(10);  // [ <10 empty items> ] -> 10칸짜리 빈 배열 생성

// 전달된 인수가 2개 이상일 경우 전달된 인수가 배열의 요소로 지정된다.
const arr4 = new Array(1, 2, 3);  // [ 1, 2, 3 ]

// Array.of 메소드를 통해 배열 생성
// Array.of 메소드를 이용해 배열 생성 시 전달된 인수가 1개이고 숫자이더라도 요소로 작용한다.
console.log(Array.of(10));  // [10] -> 10을 가지고 있는 한 칸짜리 배열 생성
console.log(Array.of(1, 2, 3));  // 여러개 넣을 수 있음
// 그 외에도 문자열도 가능하며 객체, 함수 등 다양한 타입을 넣어서도 만들 수 있다.

// 인덱스 : 베열의 요소를 나차내는 위치로 배열의 요소에 접글할 때 사용한다.
//         0부터 시작한다.
console.log(arr[0]);  // a

// length 프로퍼티 : 배열의 요소의 개수, 즉 배열의 길이를 나타냄.
console.log(arr.length);  // 4
// length 프로퍼티는 요소의 개수를 나타내는 0 이상의 정수를 값으로 갖기때문에에 for문에서 최댓값의 범위로 사용할 수 있다
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// 02_배열 길이 변경

const arr5 = [1, 2, 3, 4, 5];

// length 프로퍼티는 요소의 개수를 나타내는 0 이상의 정수를 값으로 갖는다.
console.log([].length);  // 0  -> 빈 배열의 길이는 0
console.log(arr5.length);  // 5

// push() : 배열의 마지막에 요소 추가
arr5.push(6);  // [1, 2, 3, 4, 5, 6 ]

// pop() : 배열의 마지막 요소를 제거
arr5.pop();  // [1, 2, 3, 4, 5]

// length 프로퍼티에 임의의 숫자를 할당함으로서 강제로 배열의 길이를 변경할 수 있다.
// 원본 배열의 길이보다 작은 값으로 할당할 경우 배열의 길이가 잘리며 요소도 제거된다.
arr5.length = 3; // [1, 2, 3]
// 원본 배열의 길이보다 큰 값으로 할당할 경우 배열의 길이가 늘어나며 빈 칸으로 남는다.
arr5.length = 10; // [ 1, 2, 3, <7 empty items> ]

// 자바스크립트에서는 배열의 요소가 연속적으로 위치하지 않아도 문법적으로 허용한다.
// 하지만 자바스크립트에서만 유용하며 권장하지 않는다.
const test = [ , 2, , 4];
console.log(test); // [ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(test.length);  // 4

/* --------------------------------------------------------------------------- */

/* 베열 메소드 */

// 01_배열 관련 함수

// Array.prototype.indexOf() : 앞에서부터 요소가 위치한 인덱스를 리턴한다.
const studentList = [ '짱구', '맹구', '유리', '철수', '짱구', '훈이' ];
console.log(studentList);

console.log(studentList.indexOf('짱구'));  // 0 -> 0번째 인덱스부터 짱구를 찾음
console.log(studentList.indexOf('짱구', 1));  // 4 -> 1번째 인덱스부터 짱구를 찾음
console.log(studentList.indexOf('짱아'));  // -1 -> 없는 요소는 -1을 반환함

// Array.prototype.lastIndexOf() : 뒤에서부터 요소가 위치한 인덱스를 반환한다.
console.log(studentList.indexOf('짱구'));  // 4
console.log(studentList.indexOf('짱구', 1));  // 0
console.log(studentList.indexOf('짱아'));  // -1 -> 없는 요소는 -1을 반환함

// Array.prototype.includes() : 배열에 해당 요소의 포함 여부를 확인하여 존재하면 true, 존재하지 않으면 false를 반환한다.
console.log(studentList.includes('짱구'));  // true
console.log(studentList.includes('짱아'));  // false

// Array.prototype.push() : 배열의 맨 뒤에 요소 추가
studentList.push('짱아');
console.log(studentList);  // [ '짱구', '맹구', '유리', '철수', '짱구', '훈이', '짱아' ]

// Array.prototype.pop() : 배열의 맨 뒤에 있는 요소 제거
studentList.pop();
console.log(studentList);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
studentList.unshift('짱아');
console.log(studentList);  // [ '짱아', '짱구', '맹구', '유리', '철수', '짱구', '훈이' ]

// Array.prototype.shift : 배열의 맨 앞의 요소 제거 후 반환
studentList.shift();
console.log(studentList);  // [ '짱구', '맹구', '유리', '철수', '짱구', '훈이' ]

// Array.prototype.concat : 두 개 이상의 배열을 결합
// const 변수 = 배열1.concat(배열2)의 const 변수 = 배열1.concat(배열2, 배열3) 의 형태로 작성
// 배열1을 기준으로 배열2와 배열3을 순차적으로 결합한다.
const kids1 = ['짱구', '짱아'];
const kids2 = ['멩구', '철수'];
const kids3 = ['훈이', '유리'];

const kidsGroup = kids2.concat(kids3, kids1); 
console.log(kidsGroup);  // [ '멩구', '철수', '훈이', '유리', '짱구', '짱아' ]

// Array.prototype.slice() : 배열의 요소 선택하여 잘라냄
// 배열.slice(1, 3) : 1번째 인덱스부터 시작하여 3번째 인덱스 전까지의 배열 요소만 출력력
// 원본 배열에 영향을 주지 않음
console.log(kidsGroup.slice(1, 3));  // [ '철수', '훈이' ]

// Array.prototype.splice() : 배열의 인덱스 위치의 요소를 제거 및 추가
// 배열.splice(시작할 인덱스 번호, 변경할 인덱스 개수, 변경할 요소)
// 배열.splice(3, 1, 새로운 요소) : 3번째 인덱스부터 시작하여 본인 포함 1개의 요소를 '새로운 요소'로 변경
kidsGroup.splice(2, 1, '수지', '치타');
console.log(kidsGroup); // [ '멩구', '철수', '수지', '치타', '유리', '짱구', '짱아' ]

// Array.prototype.join() : 배열을 구분자로 결합하여 문자열로 변환
console.log(kidsGroup.join());  // 멩구,철수,수지,치타,유리,짱구,짱아
console.log(kidsGroup.join('&'));  // 멩구&철수&수지&치타&유리&짱구&짱아

// Array.prototype.reverse : 배열의 순서를 역순으로 반환
console.log(kidsGroup.reverse()); // ['짱아', '짱구', '유리', '치타', '수지', '철수', '멩구']

// 02_배열 고차 함수

// Array.prototype.sort() : 배열을 정렬기준으로 정렬
// 오름차순 정렬이 기본이다.
// 배열은 기본적으로 문자열 정렬이 되므로 한 자리수, 세자리수가 올바르지 않게 정렬되기도 한다.
const array = [1, 24, 10, 39];
// console.log(array.sort());  // [ 1, 10, 24, 39 ]

// 숫자 오름차순 정렬
function compare1(a, b){
    if(a > b) return 1;  
    if(a == b) return 0;  
    if(a < b) return -1;  
}

array.sort(compare1);
console.log(array);

// numbers.sort((a,b) => a - b);  // -> 화살표 함수를 이용하는 방법도 있음

// 숫자 내림차순 정렬
function compare2(a, b){
    if(a > b) return -1;  
    if(a == b) return 0;  
    if(a < b) return 1;  
}

array.sort(compare2);
console.log(array);

// numbers.sort((a,b) => b - a);

// Array.prototype.forEach : for문을 대체할 수 있는 고차함수
array.forEach(item => console.log(item * 10));

// Array.prototype.map() : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 새로운 배열을 생성하여 반환
const types = ['a', 50, true].map(item => typeof item);
console.log(types);  // [ 'string', 'number', 'boolean' ]

// Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값이 true인 요소들로만 배열 생성하여 반환
const all = [1,2,3,4,5,6,7,8,9];
const odds = all.filter(item => item % 2);
console.log(odds);  // [ 1, 3, 5, 7, 9 ]

// Array.prototype.some : 배열 내 일부 요소 중 하나라도 콜백 함수의 테스트를 통과하면 true, 그렇지 않으면 false를 반환
[1, 3, 5].some(item => item > 3);  // true

// Array.prototype.every : 배열 내 모든 요소가 콜백 함수의 테스트를 통과하면 true, 그렇지 않으면 false를 반환
[1, 3, 5].some(item => item > 3);  // false
[1, 3, 5].some(item => item > 0);  // true

// Array.prototype.find : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수를 실행한 후 그 결과가 참인 첫 번째 요소만 반환
// 참인 요소가 없을 경우에는 undefined를 반환한다.


const student = [
    { name : '짱구', height : 190},
    { name : '유리', height : 180},
    { name : '훈이', height : 170},
    { name : '맹구', height : 170},
];

let result1 = student.find(item => item.height === 170);
console.log(result1);  // { name: '훈이', height: 170 }\
let result2 = student.find(item => item.height === 200);
console.log(result2);  // undefined

// Array.prototype.findIndex : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수를 실행한 후 그 결과가 참인 첫 번째 요소의 인덱스를 반환
// 참인 존재가 없으면 -1을 반환.

let result3 = student.findIndex(item => item.height === 170);
console.log(result3);  // 2
let result4 = student.findIndex(item => item.height === 200);
console.log(result4);  // -1
