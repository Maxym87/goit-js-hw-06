const categoriesList = document.querySelectorAll(".item");

const categoriesCount = categoriesList.length;

console.log(`Number of categories: ${categoriesCount}`);

categoriesList.forEach((category) => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryElCounts = category.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElCounts}`);
});
