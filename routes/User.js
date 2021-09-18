const express= require('express');
const router = express.Router();
const UserController = require("../controles/Users/UserController");


router.post('/Regester', UserController.Regester);
router.get('/getall', UserController.GetAll);

module.exports = router;
