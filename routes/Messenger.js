const express= require('express');
const router = express.Router();
const MessengerController = require("../controles/messanger/MessengerController")
const TokenController = require("../controles/Token/TokenController");

// *Group routers
router.post('/group/make', TokenController.AuthToken,MessengerController.MakeGroup)
router.post('/group/changeName', TokenController.AuthToken,MessengerController.ChangeGroupName)
router.post('/group/ChangeLastInfo', TokenController.AuthToken,MessengerController.ChangeLastInfo)
router.post('/group/ChangeGroupeImg', TokenController.AuthToken,MessengerController.ChangeGroupeImg)
router.delete('/group/DeleteGroup', TokenController.AuthToken,MessengerController.DeleteGroup)
router.post('/group/AddNewUser',TokenController.AuthToken,MessengerController.AddNewUser)
router.post('/group/SendMessageInGroup',TokenController.AuthToken,MessengerController.SendMessageInGroup)
router.get('/group/GetMessagesGroup',TokenController.AuthToken,MessengerController.GetMessagesGroup)
router.post('/group/DeleteMessageInGroup',TokenController.AuthToken,MessengerController.DeleteMessageInGroup)
// *P2P routers
// TODO:Routers of P2P Messanger


// * Exports mudule router
module.exports = router;
