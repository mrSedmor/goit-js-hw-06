const validationInput = document.querySelector('#validation-input');

function validate(event) {
  const textInput = event.target;

  if (textInput.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.add('invalid');
    return;
  }

  textInput.classList.add('valid');
}

validationInput.addEventListener('focus', () => {
  validationInput.classList.remove('valid', 'invalid');
});

validationInput.addEventListener('blur', validate);
