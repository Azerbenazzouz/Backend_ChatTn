const express= require('express');
const router = express.Router();
const MessengerController = require("../controles/messanger/MessengerController")
const TokenController = require("../controles/Token/TokenController");

router.post('/group/make', TokenController.AuthToken,MessengerController.MakeGroup)
router.post('/group/changeName', TokenController.AuthToken,MessengerController.ChangeGroupName)
router.post('/group/ChangeLastInfo', TokenController.AuthToken,MessengerController.ChangeLastInfo)
router.post('/group/ChangeGroupeImg', TokenController.AuthToken,MessengerController.ChangeGroupeImg)
router.delete('/group/DeleteGroup', TokenController.AuthToken,MessengerController.DeleteGroup)
router.post('/group/AddNewUser',TokenController.AuthToken,MessengerController.AddNewUser)
router.post('/group/SendMessageInGroup',TokenController.AuthToken,MessengerController.SendMessageInGroup)
router.get('/group/GetMessagesGroup',TokenController.AuthToken,MessengerController.GetMessagesGroup)


module.exports = router;
