import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initAdvantagesSwiper() {
  const desktopBreakpoint = 1440; // Минимальная ширина для активации Swiper
  let swiperInstance = null;

  function enableSwiper() {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.advantages-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 2,
        loop: true,
        navigation: {
          nextEl: ".advantages-swiper__button--next",
          prevEl: ".advantages-swiper__button--prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        simulateTouch: true,
      });
    }
  }

  function disableSwiper() {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  function handleResize() {
    if (window.innerWidth >= desktopBreakpoint) {
      enableSwiper();
    } else {
      disableSwiper();
    }
  }

  // Инициализация при загрузке страницы
  handleResize();

  // Переключение при изменении размера окна
  window.addEventListener('resize', handleResize);
}

export default initAdvantagesSwiper;
