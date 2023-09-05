let menuBlock    = document.querySelector('.header-menu'),
    openMenuBtn  = document.querySelector('.header__burger'),
    closeMenuBtn = document.querySelector('.closeMomMenu');
    
if(menuBlock) {
    openMenuBtn.onclick = ()=>{
        menuBlock.classList.add('active')
    }
    closeMenuBtn.onclick = ()=>{
        menuBlock.classList.remove('active')
    }
}

const partnersSlider = new Swiper('.partners-slider', {
    speed: 400,
    navigation: {
      nextEl: '.partners-slider__arrow-next',
      prevEl: '.partners-slider__arrow-prew',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 4,
            spaceBetween: 70,
        },
      }
});
const sertifSlider = new Swiper('.sertif-slider', {
    speed: 400,
    navigation: {
      nextEl: '.sertif-next-img',
      prevEl: '.sertif-prev-img',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
      }
});