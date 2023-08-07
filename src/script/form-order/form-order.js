const initFormOrder = () => {
  const form = document.querySelector('.form-order');

  form.addEventListener('submit', (event) => {
    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      form.reset();
      form.classList.remove('was-validated');
    }
  });
};

export default initFormOrder;
