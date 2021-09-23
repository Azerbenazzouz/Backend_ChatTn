const { Group } =require('../../../../models/Group')


const GetMessagesGroup=async (req,res)=>{
    Group.findById(req.body._id).then((group)=>{
        res.status(299).send(group.conversation)
    })

}
module.exports = GetMessagesGroup;
