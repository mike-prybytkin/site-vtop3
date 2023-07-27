const selectRegion = () => {
  const selectBtn = document.querySelector('.dropdown-calculator__btn_region');
  const dropdownList = document.querySelector('.dropdown-calculator__list_region');

  dropdownList.addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.classList.contains('dropdown-calculator__item')) {
      selectBtn.innerHTML = elem.textContent;
    }
  });
};

export default selectRegion;
