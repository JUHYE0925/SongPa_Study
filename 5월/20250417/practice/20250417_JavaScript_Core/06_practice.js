/* 
    (1) user 객체에 email 프로퍼티를 추가하고 "koala.ohgiraffers@gmail.com" 값을 넣으세요.
    (2) age 값을 21로 수정하세요.
    (3) name 값을 삭제하세요.

    const user = {
    name : "koala",
    age : 20
    };
*/

const user = {
    name : "koala",
    age : 20
};

user.email = "koala.ohgiraffers@gmail.com";
user.age = 21;
delete user.name;

console.log(user);