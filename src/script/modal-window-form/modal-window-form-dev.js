import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';
import openThankModalWindow from './modal-window-thanks';

const modalWindowFormDev = () => {
  const modalWindow = new Modal(document.getElementById('modal-window-dev'));
  const modalForm = document.querySelector('.modal__form_dev');

  modalForm.addEventListener('submit', (event) => {
    modalForm.classList.add('was-validated');
    if (modalForm.checkValidity()) {
      event.preventDefault();
      modalWindow.hide();
      modalForm.reset();
      modalForm.classList.remove('was-validated');
      openThankModalWindow();
    }
  });
};

export default modalWindowFormDev;
