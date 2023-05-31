// // 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// const categoriesList = document.querySelectorAll(".item");

// const categoriesCount = categoriesList.length;

// console.log(`Number of categories: ${categoriesCount}`);

// // 2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
// // заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// categoriesList.forEach((category) => {
//   const categoryTitle = category.firstElementChild.textContent;
//   const categoryElCounts = category.lastElementChild.children.length;

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${categoryElCounts}`);
// });
