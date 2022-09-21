function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  const color = getRandomHexColor();

  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
