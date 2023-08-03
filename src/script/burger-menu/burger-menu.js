const burgerMenu = () => {
  const navbarNav = document.querySelector('.navbar-nav_mobile');
  const navbarItemFirstNesting = document.querySelectorAll('.nav-item_first-nesting');
  const navbarItemSecondNesting = document.querySelectorAll('.nav-item_second-nesting');
  const navbarItemThirdNesting = document.querySelectorAll('.nav-item_third-nesting');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinksFirst = document.querySelectorAll('.nav-link');
  const navLinksSecond = document.querySelectorAll('.nav-link_2');
  const navItemsNoNesting = document.querySelectorAll('.nav-item_no-nesting');

  const showNavLinksFirst = () => {
    navLinksFirst.forEach((el) => {
      el.classList.remove('move-to-second');
    });
  };

  const showNavLinksSecond = () => {
    navLinksSecond.forEach((el) => {
      el.classList.remove('move-to-third');
    });
  };

  const displayFirstNesting = (property) => {
    navbarItemFirstNesting.forEach((el) => {
      const item = el;
      item.style.display = property;
    });
  };

  const displaySecondNesting = (property) => {
    navbarItemSecondNesting.forEach((el) => {
      const item = el;
      item.style.display = property;
    });
  };

  const displayThirdNesting = (property) => {
    navbarItemThirdNesting.forEach((el) => {
      const item = el;
      item.style.display = property;
    });
  };

  const closeMobileMenu = () => {
    navbarCollapse.classList.remove('show');
    displayFirstNesting('block');
    displaySecondNesting('block');
    displayThirdNesting('block');
    showNavLinksFirst();
    showNavLinksSecond();
  };

  const returnToMenuAbove = (button) => {
    const moveToLevel = button.dataset.nesting;

    if (moveToLevel === 'to-first') {
      displaySecondNesting('none');
      displayFirstNesting('block');
      showNavLinksFirst();
    }

    if (moveToLevel === 'to-second') {
      displayThirdNesting('none');
      displaySecondNesting('block');
      showNavLinksSecond();
    }
  };

  navItemsNoNesting.forEach((item) => {
    item.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  navbarNav.addEventListener('click', (e) => {
    const elem = e.target;

    if (elem.closest('.nav-item_first-nesting')) {
      displayFirstNesting('none');
      displaySecondNesting('block');
      elem.closest('.nav-item_first-nesting').style.display = 'block';
      elem.classList.add('move-to-second');
    }

    if (elem.closest('.nav-item_second-nesting')) {
      displaySecondNesting('none');
      displayThirdNesting('block');
      elem.closest('.nav-item_second-nesting').style.display = 'block';
      elem.classList.add('move-to-third');
    }

    if (elem.classList.contains('button_menu-close')) {
      closeMobileMenu();
    }
    if (elem.classList.contains('button_menu-return')) {
      returnToMenuAbove(elem);
    }
  });
};

export default burgerMenu;
