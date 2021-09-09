/* -------------------------------------------------------------------
    @Common
------------------------------------------------------------------- */
/* 스크롤 */
const spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8,
        })
        .setClassToggle(spyEl, 'is_show')
        .addTo(new ScrollMagic.Controller());
})

/* 탑버튼 */
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    })
})



/* -------------------------------------------------------------------
    @Header
------------------------------------------------------------------- */
const badgeEl = document.querySelector('.badges');

// 배지
window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {

        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            display: 'none',
            opacity: 0
        });

        // 탑버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0,
        })
    } else {

        // 배지 보이기
        gsap.to(badgeEl, .6, {
            display: 'block',
            opacity: 1
        });

        // 탑버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100,
        })
    }
}, 300));



/* -------------------------------------------------------------------
    @Visual
------------------------------------------------------------------- */
const fadeEls = document.querySelectorAll('.visual-sec .fade-in');

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})


/* -------------------------------------------------------------------
    @Notice
------------------------------------------------------------------- */
// 공지사항
new Swiper('.notice-sec__line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

// 프로모션
new Swiper('.notice-sec__promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.notice-sec__promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.notice-sec__promotion .swiper-prev',
        nextEl: '.notice-sec__promotion .swiper-next'
    }
});

// 프로모션 숨김처리
const promotionEl = document.querySelector('.notice-sec__promotion');
const promotionToggleBtn = document.querySelector('.notice-sec__btn');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;

    if (isHidePromotion) {
        
        // 숨김 처리
        promotionEl.classList.add('is_hide');
    } else {
        
        // 보임 처리
        promotionEl.classList.remove('is_hide');
    }
});


/* -------------------------------------------------------------------
    @Youtube
------------------------------------------------------------------- */
// 랜덤 함수
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 플로팅
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    })
    
}
floatingObject('.sec__floating_1', 1, 15);
floatingObject('.ec__floating_2', .5, 15);
floatingObject('.ec__floating_3', 1.5, 20);


/* -------------------------------------------------------------------
    @Awards
------------------------------------------------------------------- */
new Swiper('.awards-sec .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards-sec .swiper-prev',
        nextEl: '.awards-sec .swiper-next',
    }
});


/* -------------------------------------------------------------------
    @Footer
------------------------------------------------------------------- */
const thisYear = document.querySelector('.footer__this-year');

thisYear.textContent = new Date().getFullYear();