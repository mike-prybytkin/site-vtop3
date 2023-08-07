import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

const promoSwiper = () =>
  new Swiper('.promo-swiper', {
    modules: [Autoplay, EffectFade],
    loop: true,
    autoplay: { delay: 5000 },
    effect: 'fade',
    fadeEffect: { crossFade: true },
  });

export default promoSwiper;
