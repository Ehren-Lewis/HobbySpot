const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");
class Users extends Model {}

Users.init(
    {
        id: 
        {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
    }, email: 
        {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
    },password:
        {
            type: DataTypes.STRING,
            allowNull: false
    },
    
}, { hooks: {
    beforeValidate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        },
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
}
);

Users.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = Users;