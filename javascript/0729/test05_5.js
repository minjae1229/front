// test05_5.js
'use strict'
// 숫자 함수는 Math() 클래스에서 호출

// max(), min(), ceil():무조건 올림, floor():무조건 내림, trunc():무조건 버림, toFixed(소수아래 자리수):반올림 
// pow():거듭제곱, abs():절대값, sqrt():루트 제곱근, random():랜덤

let su1 = 10, su2 = -20, su3 = 3.14, su4 = -3.14, su5 = 1234.5;
let str = '';

str += 'max() : ' + Math.max(su1, su2, su3, su4, su5) + '<br/>';
str += 'min() : ' + Math.min(su1, su2, su3, su4, su5) + '<br/>';
str += 'ceil(3.14) : ' + Math.ceil(su3) + '<br/>';
str += 'ceil(-3.14) : ' + Math.ceil(su4) + '<br/>';
str += 'floor(3.14) : ' + Math.floor(su3) + '<br/>';
str += 'floor(-3.14) : ' + Math.floor(su4) + '<br/>';
str += 'trunc(3.14) : ' + Math.trunc(su3) + '<br/>';
str += 'trunc(-3.14) : ' + Math.trunc(su4) + '<br/>';
str += 'pow(a,b) : ' + Math.pow(2,5) + '<br/>'; // 2의 5승
str += 'abs(3.14) : ' + Math.abs(su3) + '<br/>';
str += 'abs(-3.14) : ' + Math.abs(su4) + '<br/>';
str += 'sqrt(25) : ' + Math.sqrt(25) + '<br/>';
str += 'toFixed(3.14) : ' + su3.toFixed(2) + '<br/>'; // 소수이하 2자리
str += 'toFixed(-3.14) : ' + su4.toFixed(2) + '<br/>'; // 소수이하 2자리
str += 'toFixed(1234.5) : ' + su5.toFixed(0) + '<br/>'; 
str += 'random() : ' + Math.random() + '<br/>'; // 0~1 사이 실수형 난수
str += 'random() : ' + (parseInt(Math.random() * 10) +1) + '<br/>'; // 1~10 사이 정수형 난수
str += 'random() : ' + (parseInt(Math.random() * (10-5+1)) +5) + '<br/>'; // 5~10 사이 정수형 난수


document.getElementById("demo").innerHTML = str;