const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Hobbies = require("./Hobbies.js");
const Users = require("./Users");
class Discussions extends Model {}


Discussions.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hobby_topic: {
        allowNull: false,
        references: {
            model: Hobbies,
            // on hobby name
        }
    },
    discussion_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Users
            // on username
        }
    },
    text_field: {
        type: DataTypes.STRING
    },
    timestamp: {
        //timestamp somehow
    }


});


module.exports = Discussions;