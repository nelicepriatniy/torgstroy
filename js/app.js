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
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 4,
            spaceBetween: 70,
        },
      }
});

const mainSlider = new Swiper('.main-slider', {
    speed: 1200,
    loop: true,
    autoplay: {
      delay: 6000,
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 1,
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

window.onscroll = ()=>{
  if(window.scrollY > 200) {
    document.querySelector('header').classList.add('dixedActive')
  }
  if(window.scrollY > 100) {
    document.querySelector('header').classList.add('dixed')
  } else {
    document.querySelector('header').classList.remove('dixed')
    document.querySelector('header').classList.remove('dixedActive')
  }
}

const closePopus = document.querySelector('.popupClose');
const popups = document.querySelectorAll('.popup');
closePopus.onclick = ()=>{
  closePopus.classList.remove('active')
  popups.forEach(el=>{
    el.classList.remove('active')
  })
}

//открытие картиновк во весь экран

const imgsOpen = document.querySelectorAll('.img-open-popup');//блок с картинкой которую надо увеличить
const imgPopup = document.querySelector('.popupInsightImg'); //изабражение внутри попапа
const imgPupupBlock = document.querySelector('.img-popup'); //блок попапа
imgsOpen.forEach(el=>{
    el.onclick = ()=>{
      let imgSrc = el.querySelector('.img-open-popup-src').getAttribute('src');
      imgPupupBlock.classList.add('active');
      imgPopup.setAttribute('src', imgSrc)
      closePopus.classList.add('active');
    }
})