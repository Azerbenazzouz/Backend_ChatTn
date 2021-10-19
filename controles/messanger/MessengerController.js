
// * Group functions
const MakeGroup = require('./Group/MakeGroup')
const ChangeGroupName = require('./Group/ChangeGroupName')
const ChangeLastInfo = require('./Group/ChangeLastInfo')
const ChangeGroupeImg = require('./Group/ChangeGroupeImg')
const DeleteGroup = require('./Group/DeleteGroup')
const AddNewUser = require('./Group/AddNewUser')
const SendMessageInGroup = require('./Group/Messages/SendMessageInGroup')
const GetMessagesGroup = require('./Group/Messages/GetMessagesGroup')
const DeleteMessageInGroup = require('./Group/Messages/DeleteMessageInGroup')
const GetAllGroups =require('./Group/GetAllGroups')
// * P2P functions
// TODO: Make P2P functions And export them
const MakeP2P = require('./P2P/MakeP2P')
const Changep2pName = require('./P2P/ChangeP2PName')
const SendMessageInP2P = require('./P2P/Messages/SendMessageInP2P')
const GetMessagesP2P = require('./P2P/Messages/GetMessagesP2P')
const DeleteMessageInP2P = require('./P2P/Messages/DeleteMessageInP2P')

// * Exports mudule
module.exports={   
// TODO: Export Group modules

                    MakeGroup ,
                    ChangeGroupName ,
                    ChangeLastInfo ,
                    ChangeGroupeImg ,
                    DeleteGroup ,
                    AddNewUser,
                    SendMessageInGroup,
                    GetMessagesGroup,
                    DeleteMessageInGroup,
                    GetAllGroups,
// TODO: Export P2P modules
                    MakeP2P,
                    Changep2pName,
                    SendMessageInP2P,
                    GetMessagesP2P,
                    DeleteMessageInP2P
                }
