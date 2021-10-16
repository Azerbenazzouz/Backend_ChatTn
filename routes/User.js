const express= require('express');
const router = express.Router();
const UserController = require("../controles/Users/UserController");
const TokenController = require("../controles/Token/TokenController");
require('dotenv').config();

const securityMiddleware =(req,res,next)=>{
    const api_Key=req.headers["x-api-key"]
    const token = api_Key
    if(token!=process.env.APIKEY) return res.sendStatus(299)
    next()
  }

router.post('/Regester', securityMiddleware ,UserController.Regester);
router.post('/login', securityMiddleware ,UserController.Login);
router.post('/token',TokenController.Token);
router.delete('/logout', securityMiddleware ,TokenController.AuthToken ,UserController.Logout);

router.get('/getall', securityMiddleware ,TokenController.AuthToken , UserController.GetAll);
router.get('/getuser', securityMiddleware ,TokenController.AuthToken , UserController.GetUser);
router.get('/getname', securityMiddleware ,TokenController.AuthToken , UserController.GetNames);


module.exports = router;
