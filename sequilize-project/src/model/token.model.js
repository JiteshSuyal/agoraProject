const sequelize = require("../../db/connect");
const { DataTypes } = require("sequelize");
const Users = require("./user.model");

const Tokens = sequelize.define("Tokens", {
  tokens: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Users",
      key: "userId",
    },
  },
});

Tokens.assocaiate = (model) => {
  Tokens.belongsTo(model.Users, { as: "Users", foreignKey: "userId" });
};
module.exports = Tokens;
