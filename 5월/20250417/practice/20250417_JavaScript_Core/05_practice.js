/* 
    아래의 코드를 실행했을 때 출력결과가 나오도록 Person 생성자 함수를 정의하세요.

    const person = new Person("홍길동", 20);
    person.sayHello();

    ------- 출력 결과 --------
    안녕하세요, 제 이름은 홍길동 이고 나이는 20세입니다.
*/

function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`안녕하세요. 제 이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
}

const person = new Person("홍길동", 20);
person.sayHello();
