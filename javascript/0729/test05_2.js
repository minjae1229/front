/*test05_2.js*/

'use strict';

// 오늘 날짜 : Date()
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();
let str ='';

str += "new Date() : " + today + "<br>";
str += "오늘 년 : " + year + "년<br>";
str += "오늘 월 : " + month + "월<br>";
str += "오늘 일 : " + date + "일<br>";
str += "오늘 일 : " + date + "일<br>";
str += "오늘 시 : " + hour + "시<br>";
str += "오늘 분 : " + min + "분<br>";
str += "오늘 초 : " + sec + "초<br>";
str += "오늘 초(밀리sec) : " + today.getMilliseconds() + "밀리초<br>";
str += "오늘 초(국제표준) : " + today.getTime() + "초<br>"; // 연산에서 사용

// 0:일요일, 1:월요일, 2:화, 3:수...
let strWeek =['일','월','화','수','목','금','토'];
let week = today.getDay();
str += "숫자 요일 : " + week + "<br/>";
str += "오늘 요일 : " + strWeek[week] + "요일<br/>";

// 이번달의 마지막 일자는?
// let lastDate = new Date(year, month, 0);
let lastDate = new Date(2024, 2, 0); // 윤년 때문에...
str += "이번달 마지막 일자는 : " + lastDate.getDate();

demo.innerHTML = str;