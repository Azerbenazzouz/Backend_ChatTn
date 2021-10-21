const express= require('express');
const router = express.Router();
const MessengerController = require("../controles/messanger/MessengerController")
const TokenController = require("../controles/Token/TokenController");

// * Security Middleware
const securityMiddleware =(req,res,next)=>{
    const api_Key=req.headers["x-api-key"]
    const token = api_Key
    if(token!=process.env.APIKEY) return res.sendStatus(299)
    next()
  }


// *Group routers
router.post('/group/make',securityMiddleware, TokenController.AuthToken,MessengerController.MakeGroup)
router.post('/group/changeName', securityMiddleware ,TokenController.AuthToken,MessengerController.ChangeGroupName)
router.post('/group/ChangeLastInfo', securityMiddleware ,TokenController.AuthToken,MessengerController.ChangeLastInfo)
router.post('/group/ChangeGroupeImg', securityMiddleware ,TokenController.AuthToken,MessengerController.ChangeGroupeImg)
router.delete('/group/DeleteGroup', securityMiddleware ,TokenController.AuthToken,MessengerController.DeleteGroup)
router.post('/group/AddNewUser', securityMiddleware ,TokenController.AuthToken,MessengerController.AddNewUser)
router.post('/group/SendMessageInGroup', securityMiddleware ,TokenController.AuthToken,MessengerController.SendMessageInGroup)
router.get('/group/GetMessagesGroup', securityMiddleware ,TokenController.AuthToken,MessengerController.GetMessagesGroup)
router.delete('/group/DeleteMessageInGroup', securityMiddleware ,TokenController.AuthToken,MessengerController.DeleteMessageInGroup)
router.get('/group/GetAllGroups', securityMiddleware ,TokenController.AuthToken,MessengerController.GetAllGroups)


// *P2P routers
router.post('/p2p/MakeP2P', securityMiddleware ,TokenController.AuthToken,MessengerController.MakeP2P)
router.post('/p2p/Changep2pName', securityMiddleware ,TokenController.AuthToken,MessengerController.Changep2pName)
router.post('/p2p/SendMessageInP2P', securityMiddleware ,TokenController.AuthToken,MessengerController.SendMessageInP2P)
router.get('/p2p/GetMessagesP2P', securityMiddleware ,TokenController.AuthToken,MessengerController.GetMessagesP2P)
router.get('/p2p/GetAllP2P', securityMiddleware ,TokenController.AuthToken,MessengerController.GetAllP2P)
router.delete('/P2P/DeleteMessageInP2P', securityMiddleware ,TokenController.AuthToken,MessengerController.DeleteMessageInP2P)

// * Exports mudule router
module.exports = router;
