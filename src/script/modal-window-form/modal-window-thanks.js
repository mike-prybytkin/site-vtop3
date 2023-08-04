import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';

const openThankModalWindow = () => {
  const modalWindowThanks = new Modal(document.getElementById('modal-window-thanks'));
  modalWindowThanks.show();
};

export default openThankModalWindow;
