const fontSizeControlEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

function updateFontSize() {
  textSpanEl.style.fontSize = fontSizeControlEl.value + 'px';
}

updateFontSize();

fontSizeControlEl.addEventListener('input', updateFontSize);
