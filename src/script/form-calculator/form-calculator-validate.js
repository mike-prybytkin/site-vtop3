// Пример стартового JavaScript для отключения отправки форм при наличии недопустимых полей
const formCalculatorValidate = () => {
  // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
};

export default formCalculatorValidate;
