'use strict';

// 오늘 날짜 : Date()
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

let str = '';

str += "new Date() : " + today + "<br />";
str += "오늘 년도 : " + year + "년<br />";
str += "오늘 월 : " + month + "월<br />";
str += "오늘 일 : " + date + "일<br />";

document.getElementById("demo").innerHTML = str;