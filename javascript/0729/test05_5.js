'use strict';

// 숫자 함수는 Math()클래스에서 가져온다.
// max(), min(), ceil() : 무조건 올림, floor() : 무조건 내림, trunc() : 무조건 버림, pow() : 거듭제곱, abs() : 절대값, sqrt() : 제곱근 , random() : 난수발생, toFixed(소수이하자리수) 반올림

let su1=10, su2=-20, su3=3.156, su4=-3.156, su5=1234.5;
let str = '';

str += 'max() : ' + Math.max(su1, su2, su3, su4, su5) + '<br/>';
str += 'min() : ' + Math.min(su1, su2, su3, su4, su5) + '<br/>';
str += 'ceil() : ' + Math.ceil(su3) + '<br/>';
str += 'ceil() : ' + Math.ceil(su4) + '<br/>';
str += 'floor() : ' + Math.floor(su3) + '<br/>';
str += 'floor() : ' + Math.floor(su4) + '<br/>';
str += 'trunc() : ' + Math.trunc(su3) + '<br/>';
str += 'trunc() : ' + Math.trunc(su4) + '<br/>';
str += 'pow(a,b) : ' + Math.pow(2,5) + '<br/>';  //2의 5승 = 32
str += 'abs() : ' + Math.abs(su3) + '<br/>';   //양수
str += 'abs() : ' + Math.abs(su4) + '<br/>';  //양수
str += 'sqrt() : ' + Math.sqrt(25) + '<br/>';
str += 'toFixed() : ' + su3.toFixed(2) + '<br/>';
str += 'toFixed() : ' + su4.toFixed(2) + '<br/>';
str += 'toFixed() : ' + su5.toFixed(0) + '<br/>'; //정수

str += 'random() : ' + Math.random() + '<br/>';   //0~1사이의 실수형 난수
str += 'random() : ' + (parseInt(Math.random() * 10) + 1) + '<br/>';  // 1~10사이의 정수형 난수
str += 'random() : ' + (parseInt(Math.random() * (10-5+1)) + 5) + '<br/>'; // 5~10사이의 정수형 난수

demo.innerHTML = str;