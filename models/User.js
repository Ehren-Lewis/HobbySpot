const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

// Users.prototype.validatePassword = async function(password) {
//     return await bcrypt.compare(password, this.password)
// }

module.exports = User;


// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const bcrypt = require("bcrypt");
// class Users extends Model {}

// Users.init(
//     {
//         id: 
//         {
//             type: Sequelize.UUID,
//             defaultValue: Sequelize.UUIDV4,
//             primaryKey: true,
//     }, email: 
//         {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isEmail: true
//             }
//     },password:
//         {
//             type: DataTypes.STRING,
//             allowNull: false
//     },
    
// }, { hooks: {
//     beforeValidate: async (user) => {
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(user.password, salt);
//         },
//     },
// },
// {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'users',
// }
// );

// Users.prototype.validatePassword = async function(password) {
//     return await bcrypt.compare(password, this.password)
// }

// module.exports = Users;