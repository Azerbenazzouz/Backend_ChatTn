const { Group  } =require('../../../models/Group')
const ChangeGroupName=async (req,res)=>{
    Group.findByIdAndUpdate(req.body._id,{name:req.body.name}).then((group)=>{
        res.send(group)
    })
}

module.exports = ChangeGroupName;