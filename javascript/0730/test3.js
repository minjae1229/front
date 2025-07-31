'use strict';

// 클래스 만들기
class Member {
  
  // 사용자 정의 생성자
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  // getter / setter : this 다음에 _ 빼도 가능.
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age){ // 유효성 검사
    // this._age = age;
    if(age < 1) age = 1;
    this._age = age;
  }

  // 메소드
  memberPrinting() {
    let job = '학생';
    console.log("1.성명 : ", this.name, ", 나이 : ", this.age, ", 직업 : ", job);
  }

  // 원 면적 구하기 (for test4.html 다형성 연습)
  getArea(r) {
    return r * r* 3.14 ;
  }
}
