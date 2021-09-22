const { Group } =require('../../../models/Group')
const DeleteGroup=async (req,res)=>{
    Group.findOne({ _id:req.body._id }).then((request)=>{
        if(request==null) return res.sendStatus(299)
        if(!request.adminsEmail.includes(req.body.email))return res.sendStatus(299)
        Group.findOneAndRemove({_id:req.body._id}).then((result)=>{
            res.send(result)
        })
    })
    
}

module.exports = DeleteGroup;