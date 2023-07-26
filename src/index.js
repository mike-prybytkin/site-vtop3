import './style/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import promoSwiper from './script/promo-swipew/promo-swiper';
import formCalculatorValidate from './script/form-calculator/form-calculator-validate';
import formCalculatorProgressBar from './script/form-calculator/form-calculator-progress-bar';
import ourCasesSwiper from './script/our-cases-swiper/our-cases-swiper';
import mentionSwiper from './script/mention-swiper/mention-swiper';
import advantagesTabsFirstLoad from './script/advantages-tabs/advantages-tabs';
import clientsSwiper from './script/clients-swiper/clients-swiper';
import showHideContacts from './script/show-hide-contacts/show-hide-contacts';

promoSwiper();
formCalculatorValidate();
formCalculatorProgressBar();
ourCasesSwiper();
mentionSwiper();
clientsSwiper();
showHideContacts();

setTimeout(() => advantagesTabsFirstLoad(), 0);
