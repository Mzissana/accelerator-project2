
import form from './scripts/InitializeForm';
import setupFormValidation from './scripts/ValidateForm.js';
import initHeroSwiper from './scripts/InitializeHeroSwiper';
import initGallerySwiper from './scripts/InitializeGallerySwiper';
import initAdvantagesSwiper from './scripts/InitializeAdvantagesSwiper';
import initReviewsSwiper from './scripts/InitializeReviewsSwiper';
import initToursSwiper from './scripts/InitializeToursSwiper';
import initInstructorsSwiper from './scripts/InitializeInstructorsSwiper';
import initMenu from './scripts/InitializeMenu';
import addDuplicateHeadings from './scripts/DuplicateHeadings.js';


//form 
document.addEventListener('DOMContentLoaded', form);

document.addEventListener("DOMContentLoaded", () => {
  setupFormValidation();
});

//slider
document.addEventListener('DOMContentLoaded', initHeroSwiper);


document.addEventListener('DOMContentLoaded', initGallerySwiper);

document.addEventListener('DOMContentLoaded', initAdvantagesSwiper);

document.addEventListener('DOMContentLoaded', initReviewsSwiper);


document.addEventListener('DOMContentLoaded', initToursSwiper);


document.addEventListener('DOMContentLoaded', initInstructorsSwiper);
//menu

document.addEventListener('DOMContentLoaded', initMenu);

//headings
document.addEventListener('DOMContentLoaded', addDuplicateHeadings)