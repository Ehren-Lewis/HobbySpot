// const { Router } = require('express');
const { Router } = require('express');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hobbies extends Model {}


Hobbies.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    
      hobby_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
})

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

module.exports = Hobbies;