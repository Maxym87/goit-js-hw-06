const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById("ingredients")

const listItemsArr = [];

ingredients.forEach(ingredient => {
const listItem = document.createElement('li');
listItem.textContent = ingredient;
listItem.classList.add('items');
console.log(listItem);
listItemsArr.push(listItem);
});

listEl.append(...listItemsArr);

