import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initToursSwiper() {
  let currentDevice = getCurrentDevice(); 
  const swiper = new Swiper('.tours-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: getSlidesPerView(currentDevice), 
    spaceBetween: getSpace(currentDevice),
    loop: false,
    navigation: {
      nextEl: ".tours-swiper-container__button--next",
      prevEl: ".tours-swiper-container__button--prev",
    },
    simulateTouch: true,
  });

  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice(); 
    if (newDevice !== currentDevice) {
      currentDevice = newDevice; 
      const newSlidesPerView = getSlidesPerView(newDevice); 

      swiper.params.slidesPerView = newSlidesPerView; 
      swiper.update(); 
    }
  });
}

function getCurrentDevice() {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    return 'desktop';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 'tablet';
  } else {
    return 'mobile';
  }
}

function getSlidesPerView(device) {
  switch (device) {
    case 'desktop':
      return 3; 
    case 'tablet':
      return 2;
    case 'mobile':
    default:
      return 1;
  }
}

function getSpace(device) {
  switch (device) {
    case 'desktop':
      return 30; 
    case 'tablet':
      return 18;
    case 'mobile':
    default:
      return 15;
  }
}

export default initToursSwiper;
