const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require("./User");
class Discussions extends Model {}


Discussions.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hobby_topic: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //     model: Hobbies,
        //     // on hobby name
        // }
    },
    discussion_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //     model: Users
        //     // on username
        // }
    },
    text_field: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);


module.exports = Discussions;