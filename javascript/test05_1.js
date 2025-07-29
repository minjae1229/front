//test05_1.js

'use strict';
//           0         1         2         3         4         5         6         7
//           01234567890123456789012345678901234567890123456789012345678901234567890
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let text2 = '     ABC         BC  ABC GHI       JKLABMNB..........a abc     opq'

//length : 길이
//substing() : 서브 문자열
// indexOf() : 문자열 검색 (index 반환, 없으면 -1)
// lastIndexOf() : 뒤에서 부터 검색 (index 반환, 없으면 -1)
// includes() : 특정 문자열의 포함유무(true or false)
// concat() : 문자열 결함
// slice() : 시작 i, 종료 i-1 까지 문자열 가져옴
// trim() : 공백삭제
// replace() : 첫번쨰로 검색한 문자열만 치환함.
// replaceAll() : 모두 검색하여 치환.
// charAt() : 1개 문자 추출
// charCodeAt() : 1개 문자 아스키 코드값 비교

let str ='';

str += "length : " + text1.length +"<br>";
str += "substring(6) : " + text1.substring(6)+"<br/>";  // 6번 부터 끝까지 가져옴.
str += "substring(6,10) : " + text1.substring(6,10)+"<br/>";
str += "indexOf('abc') : " + text1.indexOf('abc')+"<br/>";
str += "indexOf('abc') : " + text2.indexOf('abc')+"<br/>";
str += "lastIndexOf('abc') : " + text2.lastIndexOf('abc')+"<br/>";
str += "includes('abc') : " + text2.includes('abc')+"<br/>";
str += "text1.concat(text2) : " + text1.concat(text2)+"<br/>";
str += "text1.concat(text2.trim()) : " + text1.concat(text2.trim())+"<br/>";
str += "text1.slice(5) : " + text1.slice(5) + "<br/>";
str += "text1.slice(5, 10) : " + text1.slice(5, 10) + "<br/>";
str += text1.replace("abc", 'opq')+"<br/>";
str += text2.replace("BC", '12345')+"<br>";
str += text2.replaceAll("BC", '12345')+"<br>";
str += text1.charAt(5)+"<br>";
str += text1.charCodeAt(0)+"<br>";

// document.getElementById("demo").innerText = str;
demo.innerHTML = str;


let tel = '010-1234-5678'; // 문자열 1개
let tels = tel.split('-'); // - 기준으로 분할
console.log(tels[0]);
console.log(tels[1]);
console.log(tels[2]);

tels.forEach(data => console.log(data))

console.log(tels.join("/"));