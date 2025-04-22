/* 타이머 */

// 01. 타이머 메소드

// setTimeout
// setTimeout(func|code[, delay, param1, param2, ...]);
// 두 번째 인수로 전달 받은 시간으로 첫 번째 인자로 전달받은 콜백 함수를 호출하여 한 번만 동작하는 타이머를 생성한다.
// 이때 두 번째로 전달 받은 시간은 ms 단위이므로 1000은 1초를 의미한다.
// 첫 번째로 전달받은 콜백 함수에 매개변수가 필요할 때는 세 번째 이후의 인수로 전달할 수 있다.

setTimeout(() => console.log('1초'), 1000);
setTimeout((message) => console.log(`${message}야 안녕`), 1000, '아무개');

// clearTimeout
// clearTimeout(고유한id);
// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 id를 반환한다.
// 이 때 반환한 id를 clearTimeout의 인자로 전달하여 타이머를 취소할 수 있다.

// setInterval
// setInterval(func|code[, delay, param1, param2, ...]);
// 두 번째 인수로 전달 받은 시간맏 첫 번째 인자로 전달 받은 콜백 함수를 반복 호출하여 반복 동작하는 타이머를 생성한다.
// 즉 타이머가 만료될 때마다 첫 번째 인자로 전달 받은 콜백 함수를 반복 호출하여 반복적으로 동작하는 것처럼 보이게 한다.
// 이는 타이머가 취소될 때 까지 계속 되며 콜백 함수에 전달 인자가 존재하는 경우 세 번째 이후의 인자로 전달할 수 있다.

// clearInterval
// setInterval 함수도 setTimeout 함수와 똑같이 생성된 타이머를 식별할 수 있는 타이머 고유의 id를 반환한다.
// 반환된 id를 clearInterval 함수의 전달 인자로 사용하여 타이머를 취소할 수 있다.

let count = 1;
const timerId = setInterval(() => {
    console.log(count);
    if(count++ === 5) clearInterval(timerId);
}, 1000);
