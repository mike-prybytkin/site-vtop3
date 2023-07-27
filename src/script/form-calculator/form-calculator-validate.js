import formCalculatorProgressBar from './form-calculator-progress-bar';

const prepareLastCalculatorSlide = () => {
  const calculatorTitle = document.querySelector('.calculator__title');
  const submitBtn = document.querySelector('.form-calculator__btn_submit');
  const closeBtn = document.querySelector('.form-calculator__btn_close');
  calculatorTitle.style.display = 'none';
  submitBtn.style.display = 'none';
  closeBtn.style.display = 'block';
};

const addRequiredToInputs = (nodeList) => {
  const inputsInCurrentSlide = nodeList.querySelectorAll('.form-calculator__input');
  inputsInCurrentSlide.forEach((el) => {
    const input = el;
    input.required = true;
  });
};

const nextFormSlide = (slideIndex) => {
  const allFormSlides = document.querySelectorAll('.form-calculator__slide');

  if (slideIndex === allFormSlides.length - 1) {
    prepareLastCalculatorSlide();
  }

  allFormSlides.forEach((_, i) => {
    allFormSlides[i].style.display = 'none';
  });
  allFormSlides[slideIndex].style.display = 'block';

  addRequiredToInputs(allFormSlides[slideIndex]);
};

const formCalculatorValidate = () => {
  let nextProgressStep = 1;
  formCalculatorProgressBar(nextProgressStep);

  const forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      form.classList.add('was-validated');
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        nextProgressStep += 1;
        formCalculatorProgressBar(nextProgressStep);
        nextFormSlide(nextProgressStep - 1);
      }
    });
  });
};

export default formCalculatorValidate;
