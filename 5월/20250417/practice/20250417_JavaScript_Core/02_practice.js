/* 
    아래의 객체를 for in 반복문을 사용하여, 객체의 모든 키와 그에 해당하는 값을 출력하는 코드를 작성하세요.

    var person = {
        firstName: 'GilDong',
        lastName: 'Hong',
        age: 20
    };
*/

var person = {
    firstName: 'GilDong',
    lastName: 'Hong',
    age: 20
};

for(key in person){
    console.log(`key : ${key}`);
    console.log(`value : ${person[key]}`);
}