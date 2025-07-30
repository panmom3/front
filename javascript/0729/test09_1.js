'use strict';

function regExCheck() {
  const regEx1 = /atom/g;   //'atom'이라는 문자열이 포함되어있는가?
  const regEx2 = /sbs|mbc|kbs/g;  //sbs또는 kbs또는 mbc라는 문자열을 포함하고 있느냐?
  const regEx3 = /홍길(동|순)/g; //이름이 '홍길동,홍길순'포함?
  const regEx4 = /[a-z]/g;  // 영문 소문자 포함?
  const regEx5 = /[A-Z]/g;  // 영문 대문자 포함?
  const regEx6 = /[가-힣]/g;  // 한글 포함?
  const regEx7 = /[^a-z]/g;   // 영문 소문자만 포함?
  const regEx8 = /[^a-zA-Z0-9]/g;  // 영문 대/소문자 + 숫자만 포함?
  const regEx9 = /[^0-9가-힣]/g;  // 한글 + 숫자만 포함?
  const regEx10 = /[^a-zA-Z0-9_-]/g; // 영문 대/소문자 + 숫자 + _ -만 포함?

  const regEx21 = /\./; //점을 포함하고 있나?
  
  let content = document.getElementById("content").value.trim();

  if(content == "") {
    alert("문자열을 입력하세요");
    document.getElementById("content").focus;
    return false;
  }

  //정규식 체크하기
  //if(!content.match(regEx3)) alert("본문에 '홍길동,홍길순 문자열을 포함하고 있지 않습니다.");
  //if(!content.match(regEx4)) alert("본문에 영문소문자를 포함하고 있지 않습니다.");
  if(regEx8.test(content)) alert("본문에 영문 대/소문자 + 숫자가 아닌 문자가 있습니다.");
  else {
    let str = '정상적으로 입력되었습니다. 통과~~';
    alert(str);
    demo.innerHTML = "<font color='red'>" + str + "("+content+")</font>";
  }

}