const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const elementsList = ingredients.map(ingredientName => {
  const element = document.createElement('li');
  element.textContent = ingredientName;
  element.classList.add('item');
  return element;
});

ingredientsEl.append(...elementsList);
