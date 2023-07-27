import formCalculatorProgressBar from './form-calculator-progress-bar';

const resetForm = () => {
  const calculatorForm = document.querySelector('.form-calculator');
  const allFormSlides = document.querySelectorAll('.form-calculator__slide');
  const closeBtn = document.querySelector('.form-calculator__btn_close');
  const submitBtn = document.querySelector('.form-calculator__btn_submit');
  const calculatorTitle = document.querySelector('.calculator__title');
  const calculatorTitleSlide = document.querySelector('.calculator__title_slide');
  const allInputs = calculatorForm.querySelectorAll('.form-calculator__input');

  closeBtn.addEventListener('click', () => {
    allFormSlides.forEach((_, i) => {
      allFormSlides[i].style.display = 'none';
    });
    allFormSlides[0].style.display = 'block';

    allInputs.forEach((_, i) => {
      allInputs[i].required = false;
    });
    allInputs[0].required = true;

    calculatorTitle.style.display = 'block';
    calculatorTitleSlide.style.display = 'none';
    closeBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    calculatorForm.reset();
    formCalculatorProgressBar(1);
  });
};

export default resetForm;
