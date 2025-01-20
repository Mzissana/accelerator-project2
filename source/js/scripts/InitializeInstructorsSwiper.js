import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initInstructorsSwiper() {
  let currentDevice = getCurrentDevice();
  let swiper = null;

  function initializeSwiper() {
    if (swiper) swiper.destroy(true, true);

    swiper = new Swiper('.instructors-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: getSlidesPerView(currentDevice),
      initialSlide: getFirstSlide(currentDevice),
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: ".training-swiper-container__button--next",
        prevEl: ".training-swiper-container__button--prev",
      },
      simulateTouch: currentDevice !== 'desktop',
    });
  }

  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice();
    if (newDevice !== currentDevice) {
      currentDevice = newDevice;
      initializeSwiper();
    }
  });

  initializeSwiper();
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
      return 4;
    case 'tablet':
      return 3;
    case 'mobile':
    default:
      return 1;
  }
}

function getFirstSlide(device) {
  switch (device) {
    case 'desktop':
      return 0;
    case 'tablet':
      return 0; 
    case 'mobile':
    default:
      return 2;
  }
}

export default initInstructorsSwiper;
