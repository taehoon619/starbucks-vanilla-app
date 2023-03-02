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
