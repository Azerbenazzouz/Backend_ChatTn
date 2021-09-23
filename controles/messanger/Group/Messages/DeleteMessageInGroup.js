const { Group } =require('../../../../models/Group')


const DeleteMessageInGroup=async (req,res)=>{
    Group.findById(req.body._id).then((group)=>{
        var Data=[]
        for (let i = 0; i < group.conversation.length; i++) {
            if(!req.body.message_id.includes(group.conversation[i]._id)) Data.push(group.conversation[i])            
        }
        Group.findByIdAndUpdate(req.body._id,{"conversation":Data}).then((result)=>{
        })
        res.status(299).send(group.conversation)
    })

}
module.exports = DeleteMessageInGroup;