const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let i = 0; i < ingredients.length; i += 1) {
   const items = document.createElement('li');
   const list = document.querySelector('ul')

  list.appendChild(items);
  items.textContent = ingredients[i];
   console.log(items.textContent);
 
}


