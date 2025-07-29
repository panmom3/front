// test05_1.js

'use strict';
//           0         1         2         3         4         5         6
//           0123456789012345678901234567890123456789012345678901234567890
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let text2 = '       ABC    BC  ABC  GHI   JKLABCMN...... A AC .. OPQ.. abc opq';

// length : 길이
// substring() : 특정문자열의 지정된 위치의 문자열을 추출한다.
// indexOf() : 문자열(문자) 검색(찾는값이 있으면 위치값 반환, 없으면 -1 반환)
// lastIndexOf() : 뒤에서부터 문자열 검색.. 없으면 -1 반환
// includes() : 특정 문자열을 포함유무(true/false를 반환)
// concat() : 문자열 결합
// slice() : 지정된 인덱스위치부터, 지정인덱스-1 까지의 문자열을 가져온다.
// trim() : 문자열의 앞뒤 공백을 삭제한다.
// replace() : 특정 문자(문자열)로 치환(첫번째 검색한 문자(문자열)만 치환한다.)
// replaceAll() : 특정 문자(문자열)로 모두 검색하여 치환해준다.
// charAt() :  1개 문자의 추출
// charCodeAt() : 1개 문자의 아스키 코드값을 추출
// toUpperCase()
// toLowerCase()

let str = '';
str += "데이터(text1) : " + text1 + "<br/>";
str += "데이터(text2) : " + text2 + "<br/><hr/>";

str += "<font color='red'>length :</font> " + text1.length + "<br/>";
str += "<font color='red'>substring(6)</font> : " + text1.substring(6) + "<br/>";
str += "<font color='red'>substring(6,10)</font> : " + text1.substring(6,10) + "<br/>";
str += "<font color='red'>indexOf('abc')</font> : " + text1.indexOf('abc') + "<br/>";
str += "<font color='red'>indexOf('abc')</font> : " + text2.indexOf('abc') + "<br/>";
str += "<font color='red'>lastIndexOf('abc')</font> : " + text2.lastIndexOf('abc') + "<br/>";
str += "<font color='red'>includes('abc')</font> : " + text2.includes('abc') + "<br/>";
str += "<font color='red'>text1.concat(text2)</font> : " + text1.concat(text2) + "<br/>";
str += "<font color='red'>text1.concat(text2.trim())</font> : " + text1.concat(text2.trim()) + "<br/>";
str += "<font color='red'>text1.slice(5)</font> : " + text1.slice(5) + "<br/>";
str += "<font color='red'>text1.slice(5, 10)</font> : " + text1.slice(5,10) + "<br/>";
str += "<font color='red'>text1.replace('abc', 'opq')</font> : " + text1.replace("abc", 'opq') + "<br/>";
str += "<font color='red'>text2.replace('BC', '12345')</font> : " + text2.replace("BC", '12345') + "<br/>";
str += "<font color='red'>text2.replaceAll('BC', '12345')</font> : " + text2.replaceAll("BC", '12345') + "<br/>";
str += "<font color='red'>text1.charAt(5)</font> : " + text1.charAt(5) + "<br/>";
str += "<font color='red'>text1.charCodeAt(5)</font> : " + text1.charCodeAt(5) + "<br/>";

console.log("str : ", str);
// document.getElementById("demo").innerText = str;

demo.innerHTML = str;

let tel = '010-1234-5678';
let tels = tel.split('-');
console.log(tels[0]);
console.log(tels[1]);
console.log(tels[2]);
console.log('');

tels.forEach(data => console.log(data));

console.log(tels.join("/"));