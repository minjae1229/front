// test09_1.js
'use strict';

function regExCheck() {
  const regEx1 = /atom/g;   // 'atom'이라는 문자열이 포함되어있는가?
  const regEx2 = /mbc|kbs|sbs/g;  // mbc또는 kbs 또는 sbs 라는 문자열을 포함하느냐?
  const regEx3 = /홍길(동|순)/g;  // 이름이 '홍길동,홍길순'  을 포함?
  const regEx4 = /[a-z]/g;  // 영문 소문자 포함?
  const regEx5 = /[A-Z]/g;  // 영문 대문자 포함?
  const regEx6 = /[가-힣]/g;  // 한글 포함?
  const regEx7 = /[^a-z]/g;  // 영문 소문자만 포함?
  const regEx8 = /[^a-zA-Z0-9]/g;  // '영문 대/소문자'+'숫자'만 포함?
  const regEx9 = /[^0-9가-힣]/g;  // '한글'+'숫자'만 포함?
  const regEx10 = /[^a-zA-Z0-9_-]/g;  // '영문 대/소문자'+'숫자'+'_'+'-'만 포함?

  const regEx21 = /\./g; // 점포함?
  const regEx22 = /\d/g; // 숫자포함?
  const regEx23 = /\D/g; // 숫자 아닌 다른값을 포함하는가?
  const regEx24 = /\w/g; // 영문자, 숫자, 밑줄 포함하는가?
  const regEx25 = /\W/g; // 영문자, 숫자, 밑줄이 아닌 다른값을 포함하는가?
  const regEx26 = /\s/g; // 공백





  let content = document.getElementById("content").value.trim();

  if(content == "") {
    alert("문자열을 입력하세요");
    document.getElementById("content").focus();
    return false;
  }

  // 정규식 체크하기
  // if(!content.match(regEx1)) alert("본문에 atom문자열을 포함하고있지 않습니다.");
  // if(!content.match(regEx2)) alert("본문에 'mbc/kbs/sbs'문자열을 포함하고있지 않습니다.");
  // if(!content.match(regEx3)) alert("본문에 '홍길동, 홍길순'문자열을 포함하고있지 않습니다.");
  // if(!content.match(regEx4)) alert("본문에 영문 소문자를 포함하고있지 않습니다.");
  // if(!content.match(regEx5)) alert("본문에 영문 대문자를 포함하고있지 않습니다.");
  // if(!content.match(regEx6)) alert("본문에 한글을 포함하고있지 않습니다.");
  // if(content.match(regEx7)) alert("본문에 영문 소문자가 아닌 문자가 있습니다.");
  // if(regEx8.test(content)) alert("본문에 영문 '대/소문자/숫자'가 아닌 문자가 있습니다.");
  // if(regEx9.test(content)) alert("본문에 영문 '한글/숫자'가 아닌 문자가 있습니다.");
  // if(regEx10.test(content)) alert("영문 숫자 - _");
  // if(!regEx21.test(content)) alert(".이 아닌 문자가 있음.");
  // if(!regEx22.test(content)) alert("숫자가 아닌 문자가 있음.");
  // if(regEx23.test(content)) alert("숫자가 아닌 값이 있음.");
  // if(!regEx24.test(content)) alert("영문자 숫자 밑줄이 아닌 값이 있음");
  if(regEx26.test(content)) alert("공백없음");



  else {
    let str = '정상적으로 입력되었습니다. 통과~~';
    alert(str);
    demo.innerHTML = "<font color='red'><b>"+content+"</b></font>";
  }
}