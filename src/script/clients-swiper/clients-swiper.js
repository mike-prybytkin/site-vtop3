import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const clientsSwiper = () =>
  new Swiper('.clients__swiper', {
    modules: [Navigation],
    grid: { rows: 1 },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        centeredSlides: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      1200: {
        grid: { rows: 2 },
        slidesPerView: 5,
        spaceBetween: 0,
        allowTouchMove: false,
      },
    },
  });

export default clientsSwiper;
