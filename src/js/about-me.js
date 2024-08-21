import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const swiperCont = document.querySelector('.about-skills');

const swiper = new Swiper(swiperCont, {
  navigation: {
    nextEl: '.about-swiper-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  touchEventsTarget: 'wrapper',
  slideClass: 'about-skills-item',
  slideActiveClass: 'about-skills-item-accent',
  wrapperClass: 'about-skills-list',
  loop: true,
  with: 6,
  breakpoints: {
    // when window width is >= 375px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6, // Правильно вказуємо кількість слайдів
      width: 6,
    },
  },
});
