const swiperInsta = new Swiper('.swiper-insta', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 6,
    spaceBetween: 22,
    speed: 10000,
    autoplay : {
        delay: 1,
        disableOnInteraction: false,
    }
});