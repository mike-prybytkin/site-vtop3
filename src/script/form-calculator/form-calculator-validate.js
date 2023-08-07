import formCalculatorProgressBar from './form-calculator-progress-bar';

const isFirstSlideBlock = () => {
  const firstSlide = document.querySelector('.form-calculator__slide_1');
  const computedStyle = window.getComputedStyle(firstSlide);
  const displayValue = computedStyle.getPropertyValue('display');

  if (displayValue === 'block') {
    return true;
  }
  return false;
};

const prepareLastCalculatorSlide = (form) => {
  const calculatorTitle = document.querySelector('.calculator__title');
  const calculatorTitleSlide = document.querySelector('.calculator__title_slide');
  const submitBtn = document.querySelector('.form-calculator__btn_submit');
  const closeBtn = document.querySelector('.form-calculator__btn_close');
  calculatorTitle.style.display = 'none';
  submitBtn.style.display = 'none';
  calculatorTitleSlide.style.display = 'block';
  closeBtn.style.display = 'block';
  form.classList.remove('was-validated');
};

const addRequiredToInputs = (nodeList) => {
  const inputsInCurrentSlide = nodeList.querySelectorAll('.form-calculator__input');
  inputsInCurrentSlide.forEach((el) => {
    const input = el;
    input.required = true;
  });
};

const nextFormSlide = (slideIndex, form) => {
  const allFormSlides = document.querySelectorAll('.form-calculator__slide');
  if (slideIndex === allFormSlides.length - 1) {
    prepareLastCalculatorSlide(form);
  }

  allFormSlides.forEach((_, i) => {
    allFormSlides[i].style.display = 'none';
  });
  console.log(slideIndex);
  allFormSlides[slideIndex].style.display = 'block';

  addRequiredToInputs(allFormSlides[slideIndex]);
};

const formCalculatorValidate = () => {
  let nextProgressStep = 1;
  formCalculatorProgressBar(nextProgressStep);

  const form = document.querySelector('.form-calculator');
  form.addEventListener('submit', (event) => {
    form.classList.add('was-validated');

    if (isFirstSlideBlock()) {
      nextProgressStep = 1;
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      nextProgressStep += 1;
      formCalculatorProgressBar(nextProgressStep);
      nextFormSlide(nextProgressStep - 1, form);
    }
  });
};

export default formCalculatorValidate;
