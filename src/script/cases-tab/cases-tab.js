const selectOurCasesTab = () => {
  const dropdownList = document.querySelectorAll('.dropdown-cases__list_tabs');
  dropdownList.forEach((list, i) => {
    list.addEventListener('click', (e) => {
      const elem = e.target;
      if (elem.classList.contains('button_cases-mobile')) {
        const selectBtn = document.querySelector(`#ourCasesSlideMobile-${i + 1}`);
        const allItemsContainer = document.querySelector(`[aria-labelledby=ourCasesSlideMobile-${i + 1}]`);
        const allItems = allItemsContainer.querySelectorAll('.nav-item_tab-control');
        const currentAllTabs = document.querySelectorAll(`#${elem.getAttribute('data-tab-name')}-content .tab-pane`);
        const selectTab = document.querySelector(`#${elem.getAttribute('aria-controls')}`);

        allItems.forEach((item) => {
          item.classList.remove('active');
        });
        currentAllTabs.forEach((item) => {
          item.classList.remove('active', 'show');
        });

        selectBtn.innerHTML = elem.textContent;
        elem.parentNode.classList.add('active');
        selectTab.classList.add('active', 'show');
      }
    });
  });
};

export default selectOurCasesTab;
