const showHideContacts = () => {
  const showContact = (e) => {
    const hideElement = e.target.closest('.company-contacts__show');
    hideElement.classList.add('active');
  };

  const allHideContacts = document.querySelectorAll('.company-contacts__show');
  allHideContacts.forEach((el) => {
    el.addEventListener('click', showContact);
  });
};

export default showHideContacts;
