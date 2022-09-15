// import models

const Category = require("./Category");
const User = require("./User");
const UserCategory = require("./UserCategory");
const Discussions = require("./Discussions")

Category.belongsToMany(User, { through: UserCategory });

User.belongsToMany(Category, { through: UserCategory });

module.exports = {
  Category,
  User,
  UserCategory,
  Discussions
};
