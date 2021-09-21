const { Group } =require('../../../models/Group')
const DeleteGroup=async (req,res)=>{
    Group.findOneAndRemove(req.body._id).then((result)=>{
        res.send(result)
    })
}

module.exports = DeleteGroup;