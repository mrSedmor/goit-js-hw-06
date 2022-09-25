const decrementButtonEl = document.querySelector('[data-action="decrement"');
const incrementButtonEl = document.querySelector('[data-action="increment"');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

function changeCounterBy(step) {
  counterValue += step;
  counterValueEl.textContent = counterValue;
}

decrementButtonEl.addEventListener('click', changeCounterBy.bind(null, -1));
incrementButtonEl.addEventListener('click', changeCounterBy.bind(null, 1));
