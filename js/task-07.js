const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

function updateFontSize() {
  textSpan.style.fontSize = fontSizeControl.value + 'px';
}

updateFontSize();

fontSizeControl.addEventListener('input', updateFontSize);
