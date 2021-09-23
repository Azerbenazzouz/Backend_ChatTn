const { Group } =require('../../../../models/Group')
const { createMessageGroup } =require('../../../../models/MessageGroup')
const { v4: uuidv4 } = require('uuid');

const SendMessageInGroup=async (req,res)=>{
    const {error , value} = createMessageGroup({...req.body,_id:uuidv4(),time:Date.now()})
    if (error) return res.status(299).send(error)
    Group.findById(req.body._id).then((group)=>{
        if (group==null) return res.sendStatus(299)
        Group.findByIdAndUpdate(req.body._id,{lastSender:value.sender,lastMessage:value.message,lastTime:Date.now()}).then((result)=>{
            res.send(result)
        })
        Group.findByIdAndUpdate(req.body._id,{conversation:[...group.conversation,value]}).then((result)=>{
            res.send(result)
        })
    })
}
module.exports =SendMessageInGroup;