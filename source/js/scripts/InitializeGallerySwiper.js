import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initGallerySwiper() {
  let currentDevice = getCurrentDevice(); // Переменная для хранения текущего устройства
  const swiper = new Swiper('.gallery-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: getSlidesPerView(currentDevice), // Инициализация с текущим количеством слайдов
    spaceBetween: getSpace(currentDevice),
    loop: true,
    navigation: {
      nextEl: ".gallery-swiper-container__button--next",
      prevEl: ".gallery-swiper-container__button--prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    simulateTouch: currentDevice !== 'desktop',
    
  });

  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice(); 
    if (newDevice !== currentDevice) {
      currentDevice = newDevice; 
      const newSlidesPerView = getSlidesPerView(newDevice); 
      const newSpaceBetween = getSpace(newDevice);
      swiper.params.spaceBetween = newSpaceBetween;
      swiper.params.slidesPerView = newSlidesPerView; 
      swiper.params.simulateTouch = newDevice !== 'desktop';
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
      return 7; 
    case 'tablet':
      return 3;
    case 'mobile':
    default:
      return 2;
  }
}

function getSpace(device) {
  switch (device) {
    case 'desktop':
      return 0; 
    case 'tablet':
      return 5;
    case 'mobile':
    default:
      return 5;
  }
}


export default initGallerySwiper;
