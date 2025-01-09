// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function initHeroSwiper() {
  const isDesktop = window.matchMedia('(min-width: 1440px)').matches;
  const swiper = new Swiper('.hero-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    simulateTouch: !isDesktop, 
  });

  window.addEventListener('resize', () => {
    const isDesktopNow = window.matchMedia('(min-width: 1440px)').matches;
    swiper.params.simulateTouch = !isDesktopNow;
    swiper.update();
  });
}



export default initHeroSwiper;
