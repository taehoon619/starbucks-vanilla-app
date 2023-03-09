const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

function searchInputFocus() {
  searchInputEl.focus();
}
const searchAddFocused = () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
};
const searchRemoveFocused = () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
};

searchEl.addEventListener('click', searchInputFocus);
searchInputEl.addEventListener('focus', searchAddFocused);
searchInputEl.addEventListener('blur', searchRemoveFocused);

const badgeEl = document.querySelector('header .badges');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log('scroll!');
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300),
);
// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션);

const fadeEls = document.querySelectorAll('.visual .fade_in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(요소, 옵션);
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});
