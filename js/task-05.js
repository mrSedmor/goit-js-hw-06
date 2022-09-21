const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const value = event.target.value;
  // const value = nameInput.value;
  nameOutput.textContent = value !== '' ? value : 'Anonymous';
});
