new Swiper('.swiper', {
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    }
});