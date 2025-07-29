// test04_4.js

'use strict';

let arr1 = [
  '문자자료',
  5,
  [2,4,6,8],
  {tel: '010-1234-5678'},
  function() { console.log("안녕하세요");}
];

console.log("arr1 : ", arr1);
console.log("arr2[2] : ", arr1[2]);
console.log("arr2[4] : ", arr1[4]);

console.log('');
arr1.push(25);
console.log("arr1 : ", arr1);
console.log("============================");

let arr2 = new Array();
arr2[0] = '감자';
arr2[1] = 15;
arr2[2] = [1,3,5,7,9];
arr2[3] = {name: '홍길동'};
arr2[4] = function() { console.log("감사합니다.");};
console.log("arr2 : ", arr2);

let str1 = arr2.join("-");
console.log("str1 : ", str1);
console.log('');

arr2.forEach((data, i) => console.log(data + " , " + i));
console.log('');

arr2.map((data, i) => console.log(data + " , " + i));
console.log('');

arr2.map((data, i) => {
  if(i % 2 == 0) console.log(data + " , " + i);
});
console.log('==================================');

// 걸러내기 : filter()
arr2.filter(function(data, i) {console.log(data, " , " + i)});
console.log('');

arr2.filter((data, i) => console.log(data, " , " + i));
console.log('');

let filterArr = arr2.filter((data, i) => i % 2 == 0);
console.log(filterArr);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

arr2.filter((data, i) => i % 2 == 0).map(data => console.log(data));
console.log('====================================');

// 정렬 : sort()
let arr3 = [10,8,20,15,11,17];
let res3 = arr3.sort();
console.log("res3 : ", res3);

res3 = arr3.sort((a, b) => a - b);  // a>b : 오름차순, a<b :내림차순, 0 : 같다.
console.log("res3 : ", res3);
console.log('');

res3 = arr3.sort((a, b) => b - a);
console.log("res3 : ", res3);
console.log('');

// 역순 출력 : reverse()
arr3 = [10,8,20,15,11,17];
res3 = arr3.reverse();
console.log("res3 : ", res3);
console.log('');

// 최대(max())/최소(min())
let max = Math.max(10,8,20,15,11,17);
console.log("max : ", max);
let min = Math.min(10,8,20,15,11,17);
console.log("min : ", min);