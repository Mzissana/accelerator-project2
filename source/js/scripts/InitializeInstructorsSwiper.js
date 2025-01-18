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
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".training-swiper__button--next",
        prevEl: ".training-swiper__button--prev",
      },
      simulateTouch: currentDevice !== 'desktop',
      on: {
        init: function () {
          // Переключение на нужный слайд после инициализации
          this.slideToLoop(getFirstSlide(currentDevice), 0, false);
        },
      },
    });
  }

  // Обновляем Swiper при изменении размера экрана
  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice();
    if (newDevice !== currentDevice) {
      currentDevice = newDevice;
      initializeSwiper();
    }
  });

  initializeSwiper();
}

// Определение текущего устройства
function getCurrentDevice() {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    return 'desktop';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 'tablet';
  } else {
    return 'mobile';
  }
}

// Определение количества слайдов
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

// Установка первого слайда
function getFirstSlide(device) {
  switch (device) {
    case 'desktop':
      return 4;
    case 'tablet':
      return 3; // Устанавливаем 3-й слайд как начальный на планшете
    case 'mobile':
    default:
      return 0;
  }
}

export default initInstructorsSwiper;
