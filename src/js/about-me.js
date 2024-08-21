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
  spaceBetween: 0,
  loop: true,
  // slidesPerView: 3,
  // centeredSlides: true,
  // slidesPerGroup: 1,

  breakpoints: {
    1440: {
      slidesPerView: 6,
      width: 6,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true,
      // width: 120,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

const container = document.querySelector('.about-accordion-container');

const accordion = new Accordion(container, {
  openOnInit: [0],
  showMultiple: true,
  duration: 500,
  elementClass: 'about-ac',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-ac-btn',
});
window.addEventListener('resize', () => {
  setTimeout(() => {
    swiper.update();
  }, 100); // Add a slight delay
});
