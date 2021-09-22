const { Group } =require('../../../models/Group')
const AddNewUser=async (req,res)=>{
    await Group.findById(req.body._id).then((group)=>{
        if(group.usersEmail.includes(req.body.usersEmail)) return res.sendStatus(299)
        Group.findByIdAndUpdate(req.body._id,{usersEmail:[...group.usersEmail,req.body.usersEmail]}).then((result)=>{
            res.send(result)
        })
    }).catch((err)=>res.sendStatus(299))
}

module.exports = AddNewUser;