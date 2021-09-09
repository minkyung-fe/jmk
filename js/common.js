/* -------------------------------------------------------------------
    @Header
------------------------------------------------------------------- */
const searchEl = document.querySelector('.sub-menu__search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 클릭시
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

// 검색창 포커스시
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('is_focus');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창 포커스 해제시
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('is_focus');
    searchInputEl.setAttribute('placeholder', '');
});


/* -------------------------------------------------------------------
    @Footer
------------------------------------------------------------------- */
const thisYear = document.querySelector('.footer__this-year');

thisYear.textContent = new Date().getFullYear();