import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';
import openThankModalWindow from './modal-window-thanks';

const modalWindowFormContacts = () => {
  const modalWindow = new Modal(document.getElementById('modal-window-contact-us'));
  const modalForm = document.querySelector('.modal__form_contacts');

  modalForm.addEventListener('submit', (event) => {
    modalForm.classList.add('was-validated');
    if (modalForm.checkValidity()) {
      event.preventDefault();
      modalWindow.hide();
      modalForm.reset();
      modalForm.classList.remove('was-validated');
      openThankModalWindow();
    } else {
      event.preventDefault();
    }
  });
};

export default modalWindowFormContacts;
