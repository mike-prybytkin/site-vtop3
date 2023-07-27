const selectSiteType = () => {
  const selectBtn = document.querySelector('.dropdown-calculator__btn_site');
  const dropdownList = document.querySelector('.dropdown-calculator__list_site');

  dropdownList.addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.classList.contains('dropdown-calculator__item')) {
      selectBtn.innerHTML = elem.textContent;
    }
  });
};

export default selectSiteType;
