// test05_2.js

'use strict';

// 오늘날짜 : Date()
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth() + 1;   // 월 1자리(0월~11월)
const date = today.getDate();   // 일
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let str = '';

str += "new Date() : " + today + "<br/>";
str += "오늘 년도 : " + year + "년<br/>";
str += "오늘 월 : " + month + "월<br/>";
str += "오늘 일 : " + date + "일<br/>";
str += "오늘 시 : " + hour + "시<br/>";
str += "오늘 분 : " + minute + "분<br/>";
str += "오늘 초 : " + second + "초<br/>";
str += "오늘 초(밀리초) : " + today.getMilliseconds() + "밀리초<br/>";
str += "오늘 초(국제표준시) : " + today.getTime() + "초<br/>";

// 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
let strWeek = ['일','월','화','수','목','금','토'];
let week = today.getDay();
str += "오늘 요일 : " + week + " (숫자요일)<br/>";
str += "오늘 요일 : " + strWeek[week] + " 요일<br/>";

// 이번달의 마지막 일자는? 
let lastDate = new Date(year, month, 0);  // (년,월,일)
str += "이번달 마지막 일자는 : " + lastDate.getDate();

demo.innerHTML = str;