import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initToursSwiper() {
  let currentDevice = getCurrentDevice(); // Переменная для хранения текущего устройства
  const swiper = new Swiper('.tours-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: getSlidesPerView(currentDevice), // Инициализация с текущим количеством слайдов
    spaceBetween: getSpace(currentDevice),
    loop: true,
    navigation: {
      nextEl: ".tours-swiper__button--next",
      prevEl: ".tours-swiper__button--prev",
    },
    simulateTouch: true,
  });

  // Функция для обновления Swiper при изменении размера экрана
  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice(); // Получаем новое устройство при изменении экрана
    if (newDevice !== currentDevice) {
      currentDevice = newDevice; // Обновляем текущий тип устройства
      const newSlidesPerView = getSlidesPerView(newDevice); // Получаем новое количество слайдов

      swiper.params.slidesPerView = newSlidesPerView; // Обновляем параметры Swiper
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
