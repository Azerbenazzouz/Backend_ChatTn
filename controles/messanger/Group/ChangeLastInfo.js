const { Group  } =require('../../../models/Group')
const ChangeLastInfo=async (req,res)=>{
    Group.findByIdAndUpdate(req.body._id,{lastSender:req.body.lastSender,lastMessage:req.body.lastMessage,lastTime:Date.now()}).then((group)=>{
        res.send(group)
    })
}

module.exports = ChangeLastInfo;