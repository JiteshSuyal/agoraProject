const sequelize = require("../../db/connect");
const { DataTypes } = require("sequelize");
const Tokens = require("./token.model");

const Users = sequelize.define("Users", {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

//Users.assocaiate = (model) => {
Users.hasMany(Tokens,{as:'Tokens',foreignKey:'userId'});
//}

module.exports = Users;
