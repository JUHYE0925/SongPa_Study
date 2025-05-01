/* 주혜 문제 */

// 1. 50부터 100까지의 숫자를 랜덤으로 5개를 뽑은 후 내림차순으로 정렬한 배열을 구하시오.

let arr = [];
for(let i = 0; i < 5; i++){
    arr[i] = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}

console.log(arr);

const desc = arr.sort((a, b) => b - a);

console.log(desc);

