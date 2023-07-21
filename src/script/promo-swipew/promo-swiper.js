import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const promoSwiper = () => {
  const swiper = new Swiper('.promo-swiper', {
    modules: [Autoplay],
    loop: true,
    autoplay: { delay: 5000 },
  });
  swiper.start();
};

export default promoSwiper;
