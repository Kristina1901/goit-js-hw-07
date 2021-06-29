const menuItemsByClass = document.querySelectorAll(".item");
console.log(`В списке ${menuItemsByClass.length} категории.`); // ..

const menuItemsByTagName = document.querySelectorAll("h2").forEach((num) => console.log(`Категория:${num.textContent}`));


const menuItemsByChildren = document.querySelectorAll("ul > li");
console.log( menuItemsByChildren);

