const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPreferences extends Model {}


// UserPreferences.init({

//     preferences
// })


module.exports = UserPreferences;