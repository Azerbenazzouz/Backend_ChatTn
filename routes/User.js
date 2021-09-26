const express= require('express');
const router = express.Router();
const UserController = require("../controles/Users/UserController");
const TokenController = require("../controles/Token/TokenController");

const securityMiddleware =(req,res,next)=>{
    const api_Key=req.headers["x-api-key"]
    const token = api_Key
    if(token!="PK/X5#QsE?8lhhYsw!D2;") return res.sendStatus(299)
    next()
  }

router.post('/Regester', securityMiddleware ,UserController.Regester);
router.get('/getall', securityMiddleware ,TokenController.AuthToken , UserController.GetAll);
router.post('/login', securityMiddleware ,UserController.Login);
router.post('/token', securityMiddleware ,TokenController.Token);
router.delete('/logout', securityMiddleware ,TokenController.AuthToken ,UserController.Logout);


module.exports = router;
