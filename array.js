"use strict"

let fruit = "사과";
let fruit2 = "바나나";

// 배열 만들기
let fruits = ["사과", "바나나","포도", "복숭아", "배", "한라봉"];

console.log(fruit);
console.log(fruit2);
console.log(fruits);

// 배열 길이 구하기
console.log(fruits.length);

// index로 배열의 항복에 접근하기
console.log(fruits[0]);
console.log(fruits[1]);

// index를 활용해서 배열의 마지막 항목에 접근하기
console.log(fruits[fruits.length - 1]);

console.log("----------------------------------------------------");

// 배열의 항복을 순환하기
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

console.log("----------------------------------------------------");

// 간단하게 함수 만들기
function getArrayLength(array) {
    return array.length;
}

console.log(getArrayLength(fruits));

console.log("----------------------------------------------------");

// 배열의 항목들을 순환하며 처리하기
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});

console.log("----------------------------------------------------");

// 배열 끝 항목 추가하기
fruits.push("감귤");
console.log(fruits);

// 배열 끝 항목 제거하기
fruits.pop();
console.log(fruits);

// 배열 앞 항목 제거하기
fruits.shift();
console.log(fruits);

// 배열 앞 항목 추가하기
fruits.unshift("사과");
console.log(fruits);

console.log("----------------------------------------------------");

// 배열 안 항목의 인덱스 찾기 (배열에 없는 항목을 검색하면 -1을 반환함)
let pos = fruits.indexOf("배");
console.log(pos);

// 인덱스 위치에서부터 항목 제거하기
fruits.splice(3, 2);
console.log(fruits);

// 퀴즈! 배열에서 한라봉 빼기 (단, 배열의 인덱스를 직접 지정하면 안됨)
fruits.splice(fruits.indexOf("한라봉"), 1);
console.log(fruits);

// 응용 학습
// 사용자의 입력에 따라서 배열에서 제외할 수 있도록 코드를 작성해 주세요
// 배열에 없는 과일 명을 입력할 경우, "과일 명이 존재하지 않습니다" 를 출력하고
// 배열에 있는 과일 명을 입력할 경우, 해당 과일 명을 배열에서 제외하고 배열 전체를 출력할 수 있도록 작성합니다
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("배열에서 제거할 과일 이름 :  ", function (answer) { 
    console.log("사용자가 입력한 과일 이름 : ", answer);

    let pos = fruits.indexOf(answer); 
    
    if (pos === -1) {
        console.log("과일 명이 존재하지 않습니다.");
        rl.close();
        //return;
    }

    fruits.splice(pos, 1);
    console.log(fruits);

    rl.close();
});