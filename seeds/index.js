const seedCategories = require("./category-seeds");
const seedUsers = require("./users");
const UserCategory = require("../models/UserCategory");
const User = require("../models/User");
const Category = require("../models/Category");
const Discussions = require("../models/Discussions");
const seedDiscussions = require("./discussion");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
  await seedDiscussions();
  console.log("\n----- DISCUSSIONS SEEDED -----\n");
  await Discussions.sync();
  await UserCategory.sync();
  await User.sync();
  await Category.sync();
  process.exit(0);
};

seedAll();
