const express= require('express');
const router = express.Router();
const UserController = require("../controles/Users/UserController");
const TokenController = require("../controles/Token/TokenController");


router.post('/Regester', UserController.Regester);
router.get('/getall', TokenController.AuthToken , UserController.GetAll);
router.post('/login', UserController.Login);
router.post('/token', TokenController.Token);
router.delete('/logout', TokenController.AuthToken ,UserController.Logout);


module.exports = router;
