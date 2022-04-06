const express = require('express');
const controllerUser = require('../controllers/user');
const router = express.Router();
const passport = require("passport")

const authentication = passport.authenticate("jwt",{session:false});

router.get("/",(req,res) => {res.send("It's working")})
router.post('/register',controllerUser.registerUser);
router.post('/login',controllerUser.loginUser);
router.post('/logout',controllerUser.logout);
router.get('/home',authentication, controllerUser.home);

module.exports = router