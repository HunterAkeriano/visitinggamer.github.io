const burger = document.querySelector('.burger');
const content = document.querySelector('.header__content');
const navLink = document.querySelectorAll('.nav-link');


function openMenu(){
    const activeBurger =  burger.classList.toggle('active');
    const activeContent = content.classList.toggle('active');
    if(activeBurger){
        document.body.style.overflow = 'hidden';
    }if(!activeBurger){
        document.body.style.overflow = 'auto';
    }
}

burger.addEventListener('click', openMenu)

function closeMenu(){
    burger.classList.remove('active');
    content.classList.remove('active');
    document.body.style.overflow = 'scroll';
}




navLink.forEach(n => n.addEventListener('click', closeMenu));



// fixed header

const header = document.querySelector('.header-header');
const main = document.getElementById('main');
let headerHeight = header.offsetHeight;
const mainHeight = main.offsetHeight;
window.addEventListener('scroll', ()=>{
  let scrollDistance = window.scrollY;

  if(scrollDistance >= 80){
    header.classList.add('header-fixed');
  }else{
    header.classList.remove('header-fixed');
  }
})


let swiper = new Swiper(".swiper1",{
  spaceBetween: 30,

  centerSlides: 'true',
  fade: 'true',
  breakpoints: {
      320: {
          slidesPerView: 1.3,
          centerSlides: 'true',
      },
      950: {
          slidesPerView: 1.5,
          spaceBetween: 30,
      },
      1095: {
          slidesPerView: 2.5,
      },
      1290:{
        slidesPerView: 3,
      }
  }
});


// табы блядские

const btnTab = document.querySelectorAll('.button-tab');
const tabsItem = document.querySelectorAll('.buttin__right-img');


btnTab.forEach(function(item){
  item.addEventListener('click', function(){
    let currentBTN = item;
    let tabId = currentBTN.getAttribute('data-tab');
    let cuurentTab = document.querySelector(tabId);
    btnTab.forEach(function(item){
      item.classList.remove('active')
  })
  tabsItem.forEach(function(item){
    item.classList.remove('active')
})


    currentBTN.classList.add('active');
    cuurentTab.classList.add('active');
  })
  
});


let swiperTwo = new Swiper(".swiper2",{
  spaceBetween: 50,

  centerSlides: 'true',
  fade: 'true',
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 15,
      centerSlides: 'true',
  },
  950: {
      slidesPerView: 1.5,
      spaceBetween: 30,
  },
  1095: {
      slidesPerView: 3,
  },
  }
});


// span btn

const spanBtn = document.getElementById('span-sellers');
const textPata = document.querySelector('.sellers__text-text');
const imgSpan = document.getElementById('img-span');
function openText(){
  textPata.classList.toggle('active');
  imgSpan.classList.toggle('active');
}

spanBtn.addEventListener('click', openText);
imgSpan.addEventListener('click', openText);