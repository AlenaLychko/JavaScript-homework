// //ex 1
// const categoriesList = document.querySelector("#categories");
// const categoryItems = categoriesList.querySelectorAll("ul");

// console.log(`in list ${categoryItems.length} categories.`);

// categoryItems.forEach((category) => {
//   const title = category.previousElementSibling.textContent;
//   const elementsCount = category.querySelectorAll("li").length;

//   console.log(`category: ${title}`);
//   console.log(`amount of categories: ${elementsCount}`);
// });

//ex 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ul = document.getElementById("ingredients");

const liElements = ingredients.map((ingredients) => {
  const li = document.createElement("li");
  li.textContent = ingredients;
  return li;
});
ul.append(...liElements);

//ex 3