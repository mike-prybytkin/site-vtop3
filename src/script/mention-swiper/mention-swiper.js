import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const mentionSwiper = () =>
  new Swiper('.mention-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: { slidesPerView: 1 },
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1900: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

export default mentionSwiper;
