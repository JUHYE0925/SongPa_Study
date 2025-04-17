/* 객체 생성자 함수 */

// 01_객체 생성자 함수
// new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
// 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있다.
// 즉 동적으로 프로퍼티 또는 메소드를 추가 가능하다.

// 빈 객체 생성
const student = new Object();

// 동적으로 프로퍼티 추가
student.name = '아무개';

// 02_생성자 함수

// 기존에 객체를 생성할 때 사용했던 객체 리터럴({})은 한 개의 객체만 생성할 수 있다.
// 하지만 같은 구성의 객체를 여러개 만들어야할 경우 객체 리터럴을 사용하면 비효율적이다.
// 생성자 함수를 사용하여 여러개의 객체를 빠르게 생성할 수 있다.

// 기존 객체 리터럴 사용 시 -> 한 번에 하나의 객체만 생성 가능
const student1 = {
    name : '유관순',
    age : 16,
    getInfo : function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

const student2 = {
    name : '이순신',
    age : 30,
    getInfo : function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

// 생성자 함수를 이용한 객세 생성 -> 동일한 객체를 여러개 생성 가능
function Student(name, age){

    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
}

const student3 = new Student('장보고', 30);
const student4 = new Student('신사임당', 40);
