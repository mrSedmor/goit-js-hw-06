let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"');
const incrementButton = document.querySelector('[data-action="increment"');
const counterValueElement = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  counterValueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  counterValueElement.textContent = counterValue;
});
