function initializeForm() {
  const inputs = document.querySelectorAll('.subscription-form__input');

  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.placeholder = this.getAttribute('data-placeholder');
    });

    input.addEventListener('blur', function() {
      if (!this.value) {
        this.placeholder = this.id === 'phone' ? 'Телефон' : 'E-mail';
      }
    });
  });
}

export default initializeForm;