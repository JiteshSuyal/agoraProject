const sequelize = require("../../db/connect");
const { DataTypes } = require("sequelize");
const Users = require("./user.model");

const Subjects = sequelize.define("Subejects", {
  subjectName: {
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

Subjects.assocaiate = (model) => {
  Subjects.belongsTo(model.Users, { as: "Users", foreignKey: "userId" });
};
module.exports = Subjects;
