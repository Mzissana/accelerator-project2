import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initReviewsSwiper() {
  let currentDevice = getCurrentDevice(); 
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1, 
    spaceBetween: getSpace(currentDevice),
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: ".reviews-swiper__button--next",
      prevEl: ".reviews-swiper__button--prev",
    },
    simulateTouch: true,
    
  });


  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice();
    if (newDevice !== currentDevice) {
      currentDevice = newDevice;
      const newSpaceBetween = getSpace(newDevice);
      swiper.params.spaceBetween = newSpaceBetween;
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


function getSpace(device) {
  switch (device) {
    case 'desktop':
      return 120; 
    case 'tablet':
      return 30;
    case 'mobile':
    default:
      return 15;
  }
}

export default initReviewsSwiper;
