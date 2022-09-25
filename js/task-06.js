const validationInputEl = document.querySelector('#validation-input');

function validate(event) {
  const textInputEl = event.target;

  if (textInputEl.value.length !== Number(textInputEl.dataset.length)) {
    textInputEl.classList.add('invalid');
    return;
  }

  textInputEl.classList.add('valid');
}

validationInputEl.addEventListener('focus', () => {
  validationInputEl.classList.remove('valid', 'invalid');
});

validationInputEl.addEventListener('blur', validate);
