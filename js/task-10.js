function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const numberInputEl = controlsEl.querySelector('input[type="number"]');
const createButtonEl = controlsEl.querySelector('[data-create]');
const destroyButtonEl = controlsEl.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const INITIAL_SIZE = 30;
const SIZE_INCREMENT = 10;

// Можна створити розмітку за домопогою шаблонних строк
// function createBoxesMarkup(amount) {
//   const elements = [];

//   let size = INITIAL_SIZE;
//   for (let i = 0; i < amount; i += 1) {
//     const tagMarkup = `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()};"></div>`;
//     elements.push(tagMarkup);

//     size += SIZE_INCREMENT;
//   }

//   return elements.join('');
// }

// Або можна створити масив елементів DOM
function createBoxesArray(amount) {
  const elements = [];

  let size = INITIAL_SIZE;
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = size + 'px';
    element.style.height = size + 'px';
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);

    size += SIZE_INCREMENT;
  }
  return elements;
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

createButtonEl.addEventListener('click', () => {
  const boxesAmount = Number(numberInputEl.value);

  // boxesEl.innerHTML = createBoxesMarkup(boxesAmount);
  boxesEl.replaceChildren(...createBoxesArray(boxesAmount));
});

destroyButtonEl.addEventListener('click', destroyBoxes);
