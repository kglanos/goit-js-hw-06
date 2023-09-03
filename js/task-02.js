const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector("#ingredients");

// ingredients.forEach((ingredient) => {
//   const listElement = document.createElement("li");

//   listElement.textContent = ingredient;
  
//   listElement.classList.add("item");
  
//   ulElement.appendChild(listElement);
// });

const ingredientsArr = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  return listElement;
});

ulElement.append(...ingredientsArr);