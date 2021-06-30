const menuItemsByClass = document.querySelectorAll(".item");
console.log(`В списке ${menuItemsByClass.length} категории.`); // ..

for (let i = 0; i < menuItemsByClass.length; i += 1) {
  const title = menuItemsByClass[i].firstElementChild;
  const category = menuItemsByClass[i].lastElementChild;
  const item = category.querySelectorAll("li")
  console.log(`Категория: ${title.textContent}`);
  console.log(`Количество элементов: ${item.length}`);
}




