
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
// * P2P functions
// TODO: Make P2P functions And export them


// * Exports mudule
module.exports={    MakeGroup ,
                    ChangeGroupName ,
                    ChangeLastInfo ,
                    ChangeGroupeImg ,
                    DeleteGroup ,
                    AddNewUser,
                    SendMessageInGroup,
                    GetMessagesGroup,
                    DeleteMessageInGroup
                }
