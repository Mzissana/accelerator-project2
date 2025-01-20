const form = document.querySelector(".subscription__form");
const inputs = form.querySelectorAll(".subscription-form__input");
const submitButton = form.querySelector(".subscription-form__button");

const setupFormValidation = () => {


  submitButton.addEventListener("click", (event) => {
    let isValid = true;
    inputs.forEach((input) => {
      if (input.name === "phone") {
        const phonePattern = /^\+?\d{0,15}$/;
        if (!phonePattern.test(input.value)) {
          isValid = false;
          input.classList.add("subscription-form__input--invalid");
        } else {
          input.classList.remove("subscription-form__input--invalid");
        }
      }

      if (input.name === "email") {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(ru|рф|com|net|org)$/i; 
        if (!emailPattern.test(input.value)) {
          isValid = false;
          input.classList.add("subscription-form__input--invalid");
        } else {
          input.classList.remove("subscription-form__input--invalid");
        }
      }

      if (!input.checkValidity()) {
        isValid = false;
        input.classList.add("subscription-form__input--invalid");
      } else {
        input.classList.remove("subscription-form__input--invalid");
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });
};

export default setupFormValidation;
