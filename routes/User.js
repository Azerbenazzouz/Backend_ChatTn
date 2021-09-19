const express= require('express');
const router = express.Router();
const UserController = require("../controles/Users/UserController");


router.post('/Regester', UserController.Regester);
router.get('/getall', UserController.AuthToken , UserController.GetAll);
router.post('/login', UserController.Login);
router.post('/Token', UserController.Token);



module.exports = router;
