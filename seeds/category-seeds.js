const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Climbing",
  },
  {
    category_name: "Piano",
  },
  {
    category_name: "Badminton",
  },
  {
    category_name: "Football",
  },
  {
    category_name: "Programming",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);
console.log(categoryData);
module.exports = seedCategories;
