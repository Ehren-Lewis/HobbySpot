const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const UserCategory = sequelize.define(
  "UserCategory",
  {},
  { timestamps: false }
);

module.exports = UserCategory;
