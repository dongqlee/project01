document.addEventListener('DOMContentLoaded', () => {
  let userId = document.getElementById('user_id');
  let userPw1 = document.getElementById('user_pw');
  let userPw2 = document.getElementById('chk_user_pw');
  //let idBtn = document.getElementById('chk_btn_id');
  let pwBtn = document.getElementById('chk_btn_pw');
  let userName = document.getElementById('user_name');
  let telSecond = document.getElementById('tel_second');
  let telThird = document.getElementById('tel_third');
  
  userId.addEventListener('change', checkId);
  userPw1.addEventListener('change', checkPw);
  pwBtn.addEventListener('click', comparePw);
  telSecond.addEventListener('keyup', moveTelNo)

  function checkId() {
    if(userId.value.length < 6 || userId.value.length > 15) {
      document.querySelector('.id_message').textContent = '아이디는 6 ~ 15자로 입력하세요!'
      userId.value = ''
      userId.focus()
    } else {
      document.querySelector('.id_message').textContent = '';
    }
  }

  function checkPw() {
    if(userPw1.value.length < 4) {
      document.querySelector('.pw_message01').textContent = '비밀번호는 4자 이상 입력해주세요.'
      userPw1.value = '';
      userPw1.focus();
    } else {
      document.querySelector('.pw_message01').textContent = '사용 가능한 비밀번호 입니다.';
      userPw2.focus();
    }
  }

  function comparePw() {
    if(userPw1.value != userPw2.value) {
      document.querySelector('.pw_message02').textContent = '비밀번호가 일치하지않습니다. 다시 확인해주세요.';
      userPw2.select();
    } else {
      document.querySelector('.pw_message02').textContent = '비밀번호가 일치합니다.';
      userName.focus();
    }
  }

  function moveTelNo() {
    if(telSecond.value.length >= 4) {
      telThird.focus();
    }
  }
  
  let email02 = document.getElementById('email02')
  let domain = document.getElementById('site')
  domain.onchange = selectSite

  function selectSite() {
    let domainSite =domain.options[domain.selectedIndex].innerText
    email02.value = domainSite

    if(domain.selectedIndex == 0) {
      email02.value = ''
      email02.focus()
    }
  }//domain



  const totalTerms = document.getElementById('total_terms');
  const termsEls = document.querySelectorAll('.terms_el');
  const terms01 = document.getElementById('terms_01');
  const terms02 = document.getElementById('terms_02');
  const terms03 = document.getElementById('terms_03');
  const terms04 = document.getElementById('terms_04');

  totalTerms.addEventListener('click', totalCheck);
  terms01.addEventListener('click', termsCheck);
  terms02.addEventListener('click', termsCheck);
  terms03.addEventListener('click', termsCheck);
  terms04.addEventListener('click', termsCheck);

  function totalCheck() {
    if(totalTerms.checked == true) {
      termsEls.forEach((termsEl) => {
      termsEl.checked = true  
      }) 
    } else {
      termsEls.forEach((termsEl) => {
        termsEl.checked = false
      })
    }
  }
  
  function termsCheck() {
    if(terms01.checked == true && terms02.checked == true && terms03.checked == true &&terms04.checked == true) {
      totalTerms.checked = true
    } else {
      totalTerms.checked = false
    }
  }
  


});