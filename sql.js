const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, //ilnbackend
  process.env.DATABASE_USERNAME, //root
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    port: '3306',
    host: process.env.DATABASE_HOST, //url
    }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });


module.exports = sequelize;


const User = require("../model/users.model");
const {Sequilze} = require('sequelize');
const sequelize = require('../model/index');

const createUser = async(req,res)=>{
    try{  
        console.log(req.body);
        sequelize.sync().then(async() => {

            const crtUser = await User.create(req.body);
            return res.status(200).json({
                success: true,
                message: "User detail fetched ",
                data: crtUser,
              });        
        }).catch((error) => {
            console.error('Unable to create table : ', error);
        });
      

    }catch(e){
        return res.status(400).send({ error: e });
    }
}
