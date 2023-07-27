const toggleLanguage = () => {
  const langWrapper = document.querySelector('.language');
  const langToggleBtn = document.querySelector('.language__toggle');
  langToggleBtn.addEventListener('click', () => {
    langWrapper.classList.toggle('active');
  });
};

export default toggleLanguage;
