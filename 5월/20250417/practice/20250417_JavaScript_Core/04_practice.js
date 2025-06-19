/* 
    아래의 함수들을 화살표 함수로 변환해보세요.

    function greet() {
        return "Hello!";
    }


    function getInfo(name, age) {
        return `name: ${name}, age: ${age}`;
    }

*/

var greet;
// greet = function greet(){
//     return "Hello!";
// }

greet = () => 'Hello!';

console.log(greet());

var getInfo;
// getInfo = function getInfo(name, age){
//     return `name : ${name}, age : ${age}`;
// };

getInfo = (name, age) => `name : ${name}, age : ${age}`;
console.log(getInfo('홍길동', 30));