const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', event => {
  const value = event.target.value;
  // const value = nameInputEl.value;
  nameOutputEl.textContent = value !== '' ? value : 'Anonymous';
});
