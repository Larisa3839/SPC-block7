import '../scss/style.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiperList = document.querySelectorAll('.swiper-wrapper');
const buttonsMore = document.querySelectorAll('.swiper-button');
const buttonText = document.querySelector('.button');
const texDescription = document.querySelector('.description__text');

const sideBarFooter = document.querySelector('.sidebar__footer');
let contactsIcon = document.querySelector('.contacts-icon');
const cloneContactsIcon = contactsIcon.cloneNode(true);
sideBarFooter.prepend(cloneContactsIcon);

buttonText.addEventListener('click', () => {
  texDescription.classList.toggle('hidden');
  buttonText.classList.toggle('button--open');
  buttonText.textContent = texDescription.classList.contains('hidden') ? 'Скрыть' : 'Показать все';
});

buttonsMore.forEach((button, index) =>{
  button.addEventListener('click', () => {
    swiperList[index].classList.toggle('hidden');
    button.classList.toggle('button--open');
    button.textContent = swiperList[index].classList.contains('hidden') ? 'Скрыть' : 'Показать все';
  });
})

const iconBurger = document.querySelectorAll('.burger');
if (iconBurger) {
  const sidebarPopup = document.querySelector('.sidebar');
  console.log(sidebarPopup)
  iconBurger.forEach(burger => burger.addEventListener('click', ()=>{
    document.body.classList.toggle('_lock');
    burger.classList.toggle('b_active');
    sidebarPopup.classList.toggle('_active');
  }))
}

const buttonPopupCall = document.querySelectorAll('.button-popup-call');
if (buttonPopupCall) {
  const callPopup = document.querySelector('.popup-call');
  buttonPopupCall.forEach(burger => burger.addEventListener('click', ()=>{
    document.body.classList.toggle('_lock');
    burger.classList.toggle('b_active');
    callPopup.classList.toggle('popup-call--visible');
  }))
}

const buttonPopupFeedback = document.querySelectorAll('.button-popup-feedback');
console.log(buttonPopupCall)
if (buttonPopupCall) {
  const feedbackPopup = document.querySelector('.popup-feedback');
  console.log(feedbackPopup)
  buttonPopupFeedback.forEach(burger => burger.addEventListener('click', ()=>{
    document.body.classList.toggle('_lock');
    burger.classList.toggle('b_active');
    feedbackPopup.classList.toggle('popup-feedback--visible');
  }))
}


let init = false;
const swiperCard = () => {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 16,
        width: 240,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    //init = false;
  }
}

swiperCard();

window.addEventListener("resize", () => {
  swiperCard();
});



  


/*console.log('Works!');
window.onload =  () => {  // ожидаем загрузку окна браузера
    if (window.matchMedia('(max-width: 767px)').matches) {
      console.log("1235r3tgqv ") // // свайпер у нас будет работать, если разрешение эерана не превышает 767px
      const swiper = new Swiper('.swiper-container', {
        modules: [Pagination],  // инициализируем новый Swiper
        direction: 'horizontal', // устанавливаем напрвление Swiper
        loop: true,  // делаем Swiper зацикленным (Swiper самостоятельно добавит слайды в начало и конец .swiper-wrapper для создания иллюзии "бесконечности" слайдов)
        spaceBetween: 20, // отступ между слайдами в px
        slidesPerView: 'auto', // позволит устанавливать произвольную ширину слайдов, в противном случае - растянет на ширину контейнера .swiper-wrapper
        pagination: { // подключаем пагинацию
          el: '.swiper-pagination', // контейнер для пагинации
          clickable: true // добавляем параметр, если хотим сделать bullets кликабельными
        },
        init: true
      })
    }
  }*/