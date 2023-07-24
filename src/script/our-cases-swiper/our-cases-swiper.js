import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const ourCasesSwiper = () =>
  new Swiper('.swiper-our-cases', {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

export default ourCasesSwiper;
