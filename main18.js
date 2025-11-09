//ex 1
const categoriesList = document.querySelector("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`there is ${categoriesItems.lenght} categories`);

categorieItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementCount = item.querySelectorAll('ul li').lenght
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});
