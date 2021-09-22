const { Group } =require('../../../models/Group')
const AddNewUser=async (req,res)=>{
    Group.findById(req.body._id).then((group)=>{
        Group.findByIdAndUpdate(req.body._id,{usersEmail:[...group.usersEmail,req.body.usersEmail]}).then((result)=>{
            res.send(result)
        })
        res.send(group)
    })
}

module.exports = AddNewUser;