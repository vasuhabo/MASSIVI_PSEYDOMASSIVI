"use strict";

const arr = [2,13,26,8,10];

arr.sort(по_порядку_числа);

console.log(arr);

function по_порядку_числа(a,b){
  return a-b;
}

// Array(5)
// 0: 2
// 1: 8
// 2: 10
// 3: 13
// 4: 26
// length: 5
