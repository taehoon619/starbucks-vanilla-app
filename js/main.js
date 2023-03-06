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
