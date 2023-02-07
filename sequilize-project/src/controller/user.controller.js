const {Sequilze} = require('sequelize');
const sequelize = require('../../db/connect');
const User = require("../model/user.model");

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

module.exports = {createUser}