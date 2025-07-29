'use strict';

  function atom1() {
    alert("atom1 함수 호출");
  }

  function atom2(msg) {
    alert("atom2 함수 호출 : " + msg)
  }
  function atom3(su) {
    alert("atom3 함수 호출 : " + (su+100))
  }
  function atom4(su1,su2) {
    alert("atom4 함수 호출 : \n" +(su1+su2) + "\n" + (su1-su2)+ "\n" + (su1*su2) + "\n" + (su1/su2));
  }
  function atom5(name, age) {
    // 강제 형변환
    let intAge = parseInt(age);
    alert("atom5 함수 호출 : " + "\n성명 : " + name + "\n나이 : " +(intAge+1));
  }
  function atom6() {

  }