const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const ElementsList = ingredients.map(ingredientName => {
  const element = document.createElement('li');
  element.textContent = ingredientName;
  element.classList.add('item');
  return element;
});

ingredientsList.append(...ElementsList);
