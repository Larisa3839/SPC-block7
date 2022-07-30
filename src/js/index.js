import '../scss/style.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import Swiper, { Pagination } from 'swiper';

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
  iconBurger.forEach(burger => burger.addEventListener('click', ()=>{
    document.body.classList.toggle('_lock');
    burger.classList.toggle('b_active');
    sidebarPopup.classList.toggle('_active');
  }))
}
const sidebarBody = document.querySelector('.sidebar');
sidebarBody.addEventListener('click', (e)=>{
    if(e.target.className === "sidebar _active") {
      sidebarBody.classList.remove('_active');
      document.body.classList.remove('_lock');
    }
})


const buttonPopupCall = document.querySelectorAll('.button-popup-call');
if (buttonPopupCall) {
  const callPopup = document.querySelector('.popup-call');
  buttonPopupCall.forEach(burger => burger.addEventListener('click', ()=>{
    document.body.classList.toggle('_lock');
    burger.classList.toggle('b_active');
    callPopup.classList.toggle('popup-call--visible');
  }))
}
const callPopupBody = document.querySelector('.popup-call');
callPopupBody.addEventListener('click', (e)=>{
    if(e.target.className === "popup-call popup-call--visible") {
      callPopupBody.classList.remove('popup-call--visible');
      document.body.classList.remove('_lock');
    }
})


const buttonPopupFeedback = document.querySelectorAll('.button-popup-feedback');
const feedbackPopup = document.querySelector('.popup-feedback');
if (buttonPopupFeedback) {
  buttonPopupFeedback.forEach(burger => burger.addEventListener('click', ()=>{
    document.body.classList.toggle('_lock');
    burger.classList.toggle('b_active');
    feedbackPopup.classList.toggle('popup-feedback--visible');
  }))
}
const feedbackPopupBody = document.querySelector('.popup-feedback');
feedbackPopupBody.addEventListener('click', (e)=>{
    if(e.target.className === "popup-feedback popup-feedback--visible") {
      feedbackPopup.classList.remove('popup-feedback--visible');
      document.body.classList.remove('_lock');
    }
})

window.onload =  () => {
  if (window.matchMedia('(max-width: 767px)').matches) { 
    const swiper = new Swiper('.swiper-container', { 
      modules: [Pagination],
      direction: 'horizontal',
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      init: true
    })
  }
}
