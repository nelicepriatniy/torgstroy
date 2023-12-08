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
    pagination: {
      el: '.main-slider-paggination',
      clickable: true,
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
if(closePopus) {
  closePopus.onclick = ()=>{
    closePopus.classList.remove('active')
    popups.forEach(el=>{
      el.classList.remove('active')
    })
  }

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

let scrollbtn = [1, 2, 3, 54]

scrollbtn.forEach(el=>{
  el.onclick = ()=>{
    closePopus.classList.remove('active')
    popups.forEach(el=>{
      el.classList.remove('active')
    })

  }
})

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;
document.write(today);

let allDataBlock = document.querySelectorAll('.data-text-block')

allDataBlock.forEach(el=>{
  el.innerHTML = today;
})

let formPopupBtn = document.querySelectorAll('.form-btn-popup');
for(let i = 0; formPopupBtn.length > i; i++) {
  formPopupBtn[i].onclick = ()=>{
    let formPopup = document.querySelector('.popup-form');
    formPopup.classList.add('active')
    closePopus.classList.remove('active')
  }
}


if(document.querySelector('.arrow-up')) {
  document.querySelector('.arrow-up').onclick = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
}

let phoines = document.querySelectorAll('[name=phone]');
for(let i = 0; phoines.length > i; i++) {
  phoines[i].mask("+7 (999) 99-99-999");
}


let secondHeadUsl = document.querySelector('.header-menu-second')
let secondHeadUslBtn = document.querySelectorAll('.second-head-usl-btn')


secondHeadUslBtn.forEach(el=>{
  el.onclick = ()=>{
    secondHeadUsl.classList.add('active');
    document.querySelector('header').classList.add('active')
    document.querySelector('header').classList.add('active-sec');
	
  closePopus.classList.add('active')

  }
})




const cardSlider = new Swiper('.card-slider', {
  speed: 400,
  breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      1024: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
    }
});

//харрактеристики и отзывы в карточке товара


const productCard = document.querySelector('.product-card-btm');

if(productCard) {
  const harBtn = productCard.querySelector('.har-btn'),
        harBlock = productCard.querySelector('.product-card-har'),
        revBtn = productCard.querySelector('.rev-btn'),
        revBlock = productCard.querySelector('.product-rew');
  harBtn.onclick = ()=>{
    harBlock.classList.add('active')
    revBlock.classList.remove('active')
    harBtn.classList.add('active')
    revBtn.classList.remove('active')
  }
  revBtn.onclick = ()=>{
    revBlock.classList.add('active')
    harBlock.classList.remove('active')
    harBtn.classList.remove('active')
    revBtn.classList.add('active')
  }
}

let filtersList = document.querySelectorAll('.filter-list__item');
if(filtersList.length > 0) {
  for(let i = 0; filtersList.length > i; i++) {
    filtersList[i].onclick = ()=>{
      filtersList[i].classList.toggle('open')
    }
  }
}

const mobFilterBtnBtn = document.querySelector('.mobFilterBtnBtn');

if(mobFilterBtnBtn) {
  let filtersList = document.querySelector('.filters-list')
  mobFilterBtnBtn.onclick = ()=>{
    filtersList.classList.toggle('active')
  }
}

const vidSpiskaBtn = document.querySelectorAll('.vid-spiska-list__item')
if(vidSpiskaBtn.length >0) {
  let tovaryItemsList = document.querySelector('.tovary-items-list')
  let tovarItem = document.querySelectorAll('.tovar-item')
  for(let i = 0; vidSpiskaBtn.length > i; i++) {
    vidSpiskaBtn[i].onclick = ()=>{
      tovarItem.forEach(el=>{
        for(let o = 0; vidSpiskaBtn.length > o; o++) {
          el.classList.remove(vidSpiskaBtn[o].getAttribute('data-value'))
        }
        el.classList.add(vidSpiskaBtn[i].getAttribute('data-value'))
      })
      for(let j = 0; vidSpiskaBtn.length > j; j++) {
        vidSpiskaBtn[j].classList.remove('active')
      }
      for(let j = 0; vidSpiskaBtn.length > j; j++) {
        tovaryItemsList.classList.remove(vidSpiskaBtn[j].getAttribute('data-value'))
      }
      vidSpiskaBtn[i].classList.add('active')
      tovaryItemsList.classList.add(vidSpiskaBtn[i].getAttribute('data-value'))
    }
  }
}

let tovarIzbImg = document.querySelectorAll('.tovar-kod__img');
if(tovarIzbImg.length > 0 ) {
  tovarIzbImg.forEach(el=>{
    el.onclick = ()=>{
      el.classList.toggle('active')
    }
  })
}


//сортировка в избранном

let izbrannoeSort = document.querySelector('.izbrannoe-sort-block');
if(izbrannoeSort) {
  let izbKategories = document.querySelector('.izb-kategories')
  izbrannoeSort.onclick = ()=>{
    izbKategories.classList.toggle('active')
  }
  izbKategories.onmouseleave  = () => {
    izbKategories.classList.remove('active')
  }
  // izbKategories.onmouseout = () => {
  //   izbKategories.classList.add('active')
  // }
}