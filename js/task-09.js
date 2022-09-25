function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const changeColorButtonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeColorButtonEl.addEventListener('click', () => {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
});
