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
