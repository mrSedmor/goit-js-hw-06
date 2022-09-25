const categoriesEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesEl.querySelectorAll('.item');

console.log('Number of categories:', categoriesItemsEl.length);

function countElements(category) {
  console.log('');
  const heading = category.querySelector('h2');
  console.log('Category:', heading.textContent);
  const itemsCount = category.querySelectorAll('li').length;
  console.log('Elements:', itemsCount);
}

categoriesItemsEl.forEach(countElements);
