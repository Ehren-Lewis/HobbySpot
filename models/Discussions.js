const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const Hobbies = require("./Hobbies.js");
// const Users = require("./User");

class Discussions extends Model {}

Discussions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hobby_topic: {
      type: DataTypes.STRING,
      allowNull: false,
      // references: {
      //   model: Hobbies,
      // on hobby name
      // },
    },
    discussion_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    text_field: {
      type: DataTypes.STRING,
    },

    // username: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,  
    
  }
);

module.exports = Discussions;
