import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initInstructorsSwiper() {
  let currentDevice = getCurrentDevice(); // Переменная для хранения текущего устройства
  const swiper = new Swiper('.instructors-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: getSlidesPerView(currentDevice), // Инициализация с текущим количеством слайдов
    spaceBetween:20,
    loop: true,
    navigation: {
      nextEl: ".training-swiper__button--next",
      prevEl: ".training-swiper__button--prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    simulateTouch: currentDevice !== 'desktop',
    
  });

  // Функция для обновления Swiper при изменении размера экрана
  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice(); // Получаем новое устройство при изменении экрана
    if (newDevice !== currentDevice) {
      currentDevice = newDevice; // Обновляем текущий тип устройства
      const newSlidesPerView = getSlidesPerView(newDevice); // Получаем новое количество слайдов

      swiper.params.slidesPerView = newSlidesPerView; // Обновляем параметры Swiper
      swiper.params.simulateTouch = newDevice !== 'desktop'; // Обновляем simulateTouch
      swiper.update(); // Пересчитываем и применяем новые параметры
    }
  });
}

// Функция для определения текущего устройства
function getCurrentDevice() {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    return 'desktop';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 'tablet';
  } else {
    return 'mobile';
  }
}

// Функция для получения количества слайдов в зависимости от устройства
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

export default initInstructorsSwiper;
