// const { Router } = require('express');
const { Router } = require('express');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hobbies extends Model {}





// Hobbies.hasMany(Discussion);


// // Getting all discussions based off of a single hobby
// Router.get("/hobbies/:hobbyName", async (req, res) => {
//     const finder = req.params.hobbyName;

//     const allDiscussionsUnderHobby = await Discussion.findAll({
//         where: {
//             hobby_topic:  finder
//         }
//     })

//     `SELET * FROM discussions WHERE hobby_topic = ${finder}`
// })

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
