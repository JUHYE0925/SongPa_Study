/* 클래스 기본 문법 */

// 동일한 종류의 객체를 여러 개 생성해야 하는 경우 객체 리터럴을 여러 개 생성하기보다는
// 클래스 문법을 통해 동일한 종류의 객체를 재생성할 수 있다.

// 01. 클래스 기본 문법

// 클래스 선언
// constructor 생성자를 통해 인스턴스를 생성 및 초기화한다.
// 프로토타입 메소드를 생성할 수 있다.
// 클래스를 호출할 때는 new 키워드와 함께 쓰여야한다.
class Student {
    constructor(name){
        this.name = name;
    }

    hello(){
        console.log(`안녕하세요. 제 이름은 ${this.name}입니다.`);
    }
}

let student = new Student('아무개');
student.hello();
// 클래스는 함수의 한 종류이며 생성자를 이용하여 객체를 생성한다.
// new Student()를 호출하면 Student라는 이름을 가진 함수를 만들고 함수 본문 자체는 생성자 메소드 contructor에서 가져온다.
// 만약 생성자 메소드가 없다면 본문이 비워진 채로 함수가 만들어진다.
// introduce와 같이 클래스 내에서 정의한 메소드는 Student.prototype에 저장한다.

// 클래스 문법과 유사하게 기능하는 것처럼 보이는 생성자 함수를 사용할 수도 있다.
function Teacher(name){
    this.name = name;
}

Teacher.prototype.hello = function(){
    console.log(`안녕하세요. 제 이름은 ${this.name}입니다.`);
}

let teacher = new Teacher('영순이');
teacher.hello();

// 생성자 함수를 통해 생성한 함수는 new라는 키워드 없이 생성 가능하지만 클래스는 new라는 키워드 없이 생성 불가능하다.

// 클래스 표현식
// 익명 클래스 표현식
let Tutor = class {
    hello(){
        console.log('안녕하세요');
    }
}

new Tutor().hello();

// 기명 클래스 표현식
let Tutee = class MyTutee{
    hello(){
        console.log('안녕하세요');
    }
}

new Tutee().hello();

// 클래스 동적 생성
function makeTutee(message){
    return class {
        hello(){
            console.log(message);
        };
    };
}

let SecondTutee = makeTutee('안녕하세요');
new SecondTutee().hello();


// getter와 setter
// 접근자 프로퍼티는 프로토타입의 프로퍼티가 된다.
// 보통 sette를 통해 외부에서 값을 설정할 수 있고, getter를 통해 외부에서 값을 읽을 수 있게 하며 
// 내부적으로 _name과 같은 _변수명의 형태로 프라이빗한 느낌의 변수에 값을 저장한다.
// 여기서 밑줄(_)은 프로그래서들 사이에서 외부 접근하지 말아야할 프로퍼티나 메소드를 나타내는 관례로 사용된다.
// 즉 _를 붙임임으로써 "이건 내부용이야"라는 의미를 전달한다.

class Product{
    constructor(model, price){
        this.model = model;
        this.price = price;
    }

    get model(){
        return this._model;
    }

    get price(){
        return this._price;
    }

    set model(value){
        this._model = value
    };

    set price(value){
        this._price = value
    };
}

let water = new Product('삼다수', 1000);

// 02. 클래스 상속

// 클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수 있다.

// 상속 기본 문법
// 부모 클래스를 자식 클래스가 상속받기 위해서는 'class 자식 클래스명 extends 부모 클래스명 {}'의 형식을 사용한다.
// extends를 사용하여 다른 클래스를 상속받는다.
// 자식 클래스는 부모 클래스의 프로퍼티 메소드를 사용할 수 있고 본인 소유의 것도 사용 가능하다.

class Animal{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight){
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight){
        if(this.weight > lostWeight){
            this.weight -= lostWeight;
        }
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg이 감량되어 ${this.weight}kg이 되었습니다.`);
    }
}

class Human extends Animal{

    develop(language){
        console.log(`${this.name}(은)는 ${language}로 개발을 합니다.`);
    }
}

let human = new Human('수강생', 70);
human.eat(2);
human.develop('자바스크립트');

// 메소드 오버라이딩
// 부모 메소드를 토대로 일부 기능만 변경하거나, 부모의 기능을 확장하고 싶을 때 사용한다.

class Tiger extends Animal{

    move(target){
        // super. 을 통해 부모 클래스의 메소드를 참조할 수 있다.
        super.move(0.1);
        this.attack(target);
    }
}

let tiger = new Tiger('백두산 호랑이', 90);
tiger.move('슬픈 눈망울의 사슴');

// 생성자 오버라이딩
// 클래스가 다른 클래스를 상속 받고 constructor가 없는 경우에는 빈 constructor가 만들어진다.
// 생성자는 기본적으로 부모 생성자를 호출하는데 부모 생성자에서 인수를 모두 전달하며 클래스에 자체 생성자가 없는 경우엔 이런 일이 모두 자동으로 일어난다.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!! 더 공부하기 !!!!!!!!!!!!!!!!!!!!!!!!!!!! //

/* ----------------------------------------------------------------- */

/* 화살표 함수 */

// 화살표 함수는 기존 함수보다 표현이 간단하며 내부 동작 또한 간략화되어있다.

// 화살표 함수는 this를 가지지 않는다.
// 화살표 함수는 new와 함께 호출할 수 없다.
// 화살표 함수는 super를 가지지 않는다.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!! 더 공부하기 !!!!!!!!!!!!!!!!!!!!!!!!!!!! //

/* ----------------------------------------------------------------- */

/* 나머지 매개변수 */

// 01. 나머지 매개변수
// 기본적으로 함수를 호출할 때 함수의 정의된 인수보다 더 많은 인수를 전달하면 초과된 인수는 무시되며,
// 정의된 인수보다 더 적은 인수를 전달할 경우에는 undefined를 반환한다.
// 이 때 나머지 매개변수 ...을 사용하면 매개변수를 한 곳에 모다 배열에 담을 수 있다.
// 그럴 경우 전달된 인수의 갯수와 상관없이 모두 출력 가능하다.
// 유의할 점은 나머지 매개변수는 항상 마지막 인자로 전달되어야한다.
// function func(arg1, ...args, arg2){} => (x)
// function func(arg1, arg2, ...args){} => (o)

function mergeAll(...args){
    let message = "";
    for(let arg of args){
        message += arg;
    }

    return message;
}

console.log(mergeAll('안녕하세요.'));  // 안녕하세요.
console.log(mergeAll('안녕하세요.', '반값습니다.'));  // 안녕하세요.반값습니다.
console.log(mergeAll('안녕하세요.', '반값습니다.', '제 이름은 홍길동입니다.'));  // 안녕하세요.반값습니다.제 이름은 홍길동입니다.

// 02. 스프레드 문법, 전개 문법
// rest parameter는 매개변수 목록을 배열로 가져오는 것이라면
// 스프레드 문법은 배열을 통째로 매개변수로 넘겨주는 기능이다.
// 하나로 뭉쳐있는 여러개의 값들의 집합을 전개하여 개별적인 값들의 목록으로 만든다.

let arr = [10, 30, 20];
// 일반적인 배열은 객체이므로 Math.max() 함수를 사용할 수 없다.
console.log(`가장 큰 값 : ${Math.max(arr)}`);  // 가장 큰 값 : NaN
// 함수를 호출할 때 ...arr을 사용하면 arr이 인수 목록으로 확장된다.
console.log(`가장 큰 값 : ${Math.max(...arr)}`);  // 가장 큰 값 : 30

// 배열 객체 여러개 전달도 가능하다.
console.log(`가장 작은 값 : ${Math.min(...arr1, ...arr2)}`);

// 일반 값과 혼합해서도 가능하다.
console.log(`가장 작은 값 : ${Math.min(1, ...arr1, 3, ...arr2)}`);

// concat처럼 배열을 병합할 때도 사용가능하며 concat보다도 간결하다.
let merged = [0, ...arr1, 5, ...arr2];

// 이터러블 배열 변환
// 스프레드 문법은 for ...of 와 같은 방식으로 내부에서 이터레이터(반복자)를 사용하여 요소를 수집한다.
// 이터러블 객체 외에도 무언가를 배열로 바꿀 때 보편적으로 사용한다.
let str = "JavaScript";
console.log([...str]);  // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
console.log(Array.from(str));  // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]