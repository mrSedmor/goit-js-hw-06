function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const numberInput = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const INITIAL_SIZE = 30;
const SIZE_INCREMENT = 10;

function createBoxes(amount) {
  const elements = [];

  let size = INITIAL_SIZE;
  for (let i = 0; i < amount; i += 1) {
    const stringTag = `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()};"></div>`;
    elements.push(stringTag);

    size += SIZE_INCREMENT;
  }
  boxes.innerHTML = elements.join('');
}

function createBoxesV2(amount) {
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
  boxes.replaceChildren(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const boxesAmount = Number(numberInput.value);
  createBoxesV2(boxesAmount);
});

destroyButton.addEventListener('click', destroyBoxes);
