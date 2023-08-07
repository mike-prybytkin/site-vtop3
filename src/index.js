import './style/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import promoSwiper from './script/promo-swipew/promo-swiper';
import ourCasesSwiper from './script/our-cases-swiper/our-cases-swiper';
import mentionSwiper from './script/mention-swiper/mention-swiper';
import advantagesTabsFirstLoad from './script/advantages-tabs/advantages-tabs';
import clientsSwiper from './script/clients-swiper/clients-swiper';
import showHideContacts from './script/show-hide-contacts/show-hide-contacts';
import toggleLanguage from './script/toggle-language/toggle-language';
import initFormCalculator from './script/form-calculator/init-form-calculator';
import burgerMenu from './script/burger-menu/burger-menu';
import modalWindowInit from './script/modal-window-form/modal-window-init';
import selectOurCasesTab from './script/cases-tab/cases-tab';
import initFormOrder from './script/form-order/form-order';

promoSwiper();
ourCasesSwiper();
mentionSwiper();
clientsSwiper();
showHideContacts();
toggleLanguage();
initFormCalculator();
burgerMenu();
modalWindowInit();
selectOurCasesTab();
initFormOrder();

setTimeout(() => advantagesTabsFirstLoad(), 0);
