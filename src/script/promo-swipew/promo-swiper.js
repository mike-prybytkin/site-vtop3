import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const promoSwiper = () =>
  new Swiper('.promo-swiper', {
    modules: [Autoplay],
    loop: true,
    // autoplay: { delay: 5000 },
  });

export default promoSwiper;
