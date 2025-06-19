/* 상속 prototype */

// 01_[[ Prototype ]]
// 자바스크립트의 객체는 [[prototype]]이라는 숨김 프로퍼티를 갖는다.
// 이 프로퍼티 값은 null이거나 다른 객체에 대한 참조가 되는데,
// 다른 객체에 참조하는 경우 참조 대상으로 프로토타입(prototype)이라 부른다.

const user = {
    name : '아무개',
    age : 16
};

const student = {
    class : 3
};

// __ptoto__ 를 사용하여 상속 -> student가 user를 상속 받음
student.__proto__ = user;
console.log(student.name); // 아무개  -> 상속 받은 프로퍼티 호출 가능
console.log(student.class);  // 3    -> 자기 자신의 프로퍼티도 호출 가능

// 프로토타입 체인
// 3개 이상이 연속으로 상속받는 것을 프로토타입 체인이라고 한다.
// 즉 a는 b를, b는 c를 상속받는 것을 프로토타입 체인이라고 한다.
const me = {
    number : 6,
    _proto__ : student  // 프로퍼티키로 __proto__ 사용
};

console.log(me.name);  // user에서 상속
console.log(me.class);  // student에서 상속

// 다만 프로토타입 체이닝은 무한루프가 동작하기 때문에 순환 참조가 불가하다.
// 즉 a가 b, b가 c 그리고 c가 a를 상속 받는 것은 무한루프 발생하기 때문에 불가하다.
// __proto__의 값은 객체 또는 null만 가능하며 다른 자료형은 무시된다.

// 02_프로토타입 특징
// 상속받을 때 메소드는 공유되지만 객체의 상태는 공유되지 않는다.
// 즉 객체의 값까지는 공유되지 않는다.

const newUser = {
    id : 'user',
    login : function(){
        console.log(`${this.id}님 로그인 되었습니다.`);
    }
};

const newStudent = {
    __proto__ : newUser
};

newStudent.name = '이무기';
console.log(newStudent.name);  // 이무기

// hasOwnProperty 메소드를 사용하여 객체 자신의 프로퍼티를 확인할 수 있다.
for(let prop in student){
    
    // for in 반복문은 상속 프로퍼티도 순회 대상에 포함시킨다.
    console.log(prop);

    let isOwn = student.hasOwnProperty(prop);

    if(isOwn){
        console.log(`객체 자신의 프로퍼티 ${prop}`);
    } else {
        console.log(`상속 프로퍼티 ${prop}`);
    }

}

/* --------------------------------------------------- */

/* 생성자 함수 프로토타입 */
// new 연산자를 사용해 만든 객체는 생성자 함수의 프로토타입 정보를 사용해 [[prototype]]을 설정한다.
// 생성자 함수는 상속받을 떄 __proto__가 아닌 prototype을 써야한다.

const user1 = {
    activate : true,
    login : function(){
        console.log('로그인 되었습니다.');
    }
}; 

function Student(name){
    this.name = name;
}

Student.prototype = user;

const student = new Student('홍길동');
console.log(student.activate);

