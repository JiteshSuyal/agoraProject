const { Sequilze } = require("sequelize");
const sequelize = require("../../db/connect");
const Tokens = require("../model/token.model");
const Users = require("../model/user.model");

const createToken = async (req, res) => {
  try {
    //    console.log(req.body);
    sequelize
      .sync()
      .then(async () => {
        const crtUser = await Tokens.create(req.body);
        return res.status(200).json({
          success: true,
          message: "Tokens table created",
          data: crtUser,
        });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
      });
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

const getToken = async (req, res) => {
  try {
    console.log("fgsdfgaskj", req.body);
    sequelize
      .sync()
      .then(async () => {
        const crtUser = await Users.findAll({
          include: [
            { model: Tokens, as: "Tokens"},
          ],
        });
        return res.status(200).json({
          success: true,
          message: "Tokens fetched",
          data: crtUser,
        });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
      });
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

module.exports = { createToken, getToken };
