// import models

const Category = require("./Category");
const User = require("./User");
const UserCategory = require("./UserCategory");

Category.belongsToMany(User, { through: UserCategory });

User.belongsToMany(Category, { through: UserCategory });

module.exports = {
  Category,
  User,
  UserCategory,
};
