const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', categoriesItems.length);

function countElements(category) {
  console.log('');
  const heading = category.querySelector('h2');
  console.log('Category:', heading.textContent);
  const itemsCount = category.querySelectorAll('li').length;
  console.log('Elements:', itemsCount);
}

categoriesItems.forEach(countElements);
