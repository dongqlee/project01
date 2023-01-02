document.addEventListener('DOMContentLoaded', () => {

  let btnLogin = document.querySelector('.login');
  let loginSheet = document.querySelector('.login_bg');
  let btnClose = document.querySelector('.btn_close_log');

  btnLogin.addEventListener('click', () => {
    loginSheet.style.display ='block'
  })
  btnClose.addEventListener('click', () => {
    loginSheet.style.display = 'none'
  })

  let loginId = document.querySelector('.user_id');
  let loginPw = document.querySelector('.user_pw');
  let btn = document.querySelector('.btn_login');

  btn.addEventListener('click', () => {
    if(loginId.value == 'green') {
      if(loginPw.value === '1234') {
        alert('로그인 되었습니다.');
      } else if(loginPw.value === '') {
        alert('비밀번호를 입력해주세요.');
        document.querySelector('.user_pw').focus()
      } else {
        alert('비밀번호가 일치하지 않습니다.')
        document.querySelector('.user_pw').select()
      }
    } else {
      alert('등록된 아이디가 아닙니다.')
    }
  })

});//login_bg

const swiper = new Swiper(".mySwiper1", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});//visual_section

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
});//hot_product_box

const swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});//new_box

document.addEventListener('DOMContentLoaded', function() {
  let mainRevImg = document.querySelector('.rev_img_box > img');
  let thumbRevImg = this.documentElement.querySelectorAll('.rev_thumb > div')

  for(let i=0; i<thumbRevImg.length;i++) {
    thumbRevImg[i].onclick = revImg
  }
  function revImg() {
    let imgSrc = this.children[0].src
    mainRevImg.setAttribute('src',imgSrc)
  }

  let btnRev = document.querySelector('.review_box .btn_more');
  let revMore = document.querySelector('.rev_bg');
  let btnClose = document.querySelector('.rev_bg .close');

  btnRev.addEventListener('click', () => {
    revMore.style.display = 'block'
  });
  btnClose.addEventListener('click', () => {
    revMore.style.display = 'none'
  })


  let revTxt01 = document.querySelector('.rev_txt01');
  let revTxt02 = document.querySelector('.rev_txt02');
  let revTxt03 = document.querySelector('.rev_txt03');
  let revTxt04 = document.querySelector('.rev_txt04');
  let revTxt05 = document.querySelector('.rev_txt05');
  let revTxt06 = document.querySelector('.rev_txt06');
  let revTxt07 = document.querySelector('.rev_txt07');
  let revTxt08 = document.querySelector('.rev_txt08');
  let revTxt09 = document.querySelector('.rev_txt09');
  let revTxt10 = document.querySelector('.rev_txt10');
  let revTxt11 = document.querySelector('.rev_txt11');
  let revTxt12 = document.querySelector('.rev_txt12');

  let thumImg01 = document.querySelector('.thum01');
  let thumImg02 = document.querySelector('.thum02');
  let thumImg03 = document.querySelector('.thum03');
  let thumImg04 = document.querySelector('.thum04');
  let thumImg05 = document.querySelector('.thum05');
  let thumImg06 = document.querySelector('.thum06');
  let thumImg07 = document.querySelector('.thum07');
  let thumImg08 = document.querySelector('.thum08');
  let thumImg09 = document.querySelector('.thum09');
  let thumImg10 = document.querySelector('.thum10');
  let thumImg11 = document.querySelector('.thum11');
  let thumImg12 = document.querySelector('.thum12');

  thumImg01.addEventListener('click', () => {
    revTxt01.style.display ='block'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg02.addEventListener('click', () => {
    revTxt02.style.display ='block'
    revTxt01.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg03.addEventListener('click', () => {
    revTxt03.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg04.addEventListener('click', () => {
    revTxt04.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg05.addEventListener('click', () => {
    revTxt05.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg06.addEventListener('click', () => {
    revTxt06.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg07.addEventListener('click', () => {
    revTxt07.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg08.addEventListener('click', () => {
    revTxt08.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg09.addEventListener('click', () => {
    revTxt09.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg10.addEventListener('click', () => {
    revTxt10.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt11.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg11.addEventListener('click', () => {
    revTxt11.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt12.style.display ='none'
  })
  thumImg12.addEventListener('click', () => {
    revTxt12.style.display ='block'
    revTxt01.style.display ='none'
    revTxt02.style.display ='none'
    revTxt03.style.display ='none'
    revTxt04.style.display ='none'
    revTxt05.style.display ='none'
    revTxt06.style.display ='none'
    revTxt07.style.display ='none'
    revTxt08.style.display ='none'
    revTxt09.style.display ='none'
    revTxt10.style.display ='none'
    revTxt11.style.display ='none'
  })


}); //rev_bg


















$(function() {
  $('.top_tab').click(function(e) {
    e.preventDefault();
    $(window).scrollTo(this.hash || 0, 1000);
  })
})//top_tab

