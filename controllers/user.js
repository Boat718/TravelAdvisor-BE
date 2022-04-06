const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../service/db");
const service = require("../service/user");
require('dotenv').config();

const secrectKey = process.env.SECRET_OR_KEY;

const registerUser = async (req,res) => {
    const {username, email, password } = req.body;
    try {
        if(username == null || email == null || password == null){
            return res.status(201).send({message:"Data's missing"});
        }
        const checkUsername = await service.getUser();
        const found = checkUsername.find(e=>e.username == username)
        if(found){
            return res.status(200).send({
                message:"User is exist!"
            })
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password,salt);
            await service.addUser(username, email, hash);
            return res.status(200).send({message:"Complete",status:true})
        }
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

const loginUser = async (req, res) => {
    const {username, password } = req.body;
    
    try {
        if(username == null || password == null){
            return res.status(201).send({message:"Data's missing"});
        }
        const checkUsername = await service.loginUser(username);
        const id = checkUsername[0].id;
        const user = checkUsername[0].username;
        if(checkUsername.length != 0) {
            bcrypt.compareSync(password,checkUsername[0].password);
            const token = jwt.sign({id:id, username:user},secrectKey);
            return res.status(200).send({message:"Complete", token:token})
        } else {
            return res.status(200).send({message:"Your email or password is wrong"});
        }
    } catch (error) {
        res.send(erro)
        console.log(error);
    }
}

const home = (req,res) => {
    // console.log(req.user)
    res.status(200).send({
        sucess: true,
        username:req.user.username
    });
}

const logout = (req,res) => {
    res.clearCookie("accesstoken");
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}


module.exports = {
    registerUser,
    loginUser,
    logout,
    home
}