/*
다음 배열이 주어졌을 때:
arr = [1, 2, 3]

이 배열을 아래와 같이 변경해보세요:
arr = [3, 4, 5, 6, 7]
*/

// for문 사용해보기!

let arr = [1, 2, 3];

arr.shift();
arr.shift();

console.log(arr);

for(let i = 4; i < 8; i++){
    arr.push(i);
}

console.log(arr);