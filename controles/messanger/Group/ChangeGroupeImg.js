const { Group  } =require('../../../models/Group')
const ChangeGroupeImg=async (req,res)=>{
    Group.findByIdAndUpdate(req.body._id,{img:req.body.img}).then((group)=>{
        res.send(group)
    })
}

module.exports = ChangeGroupeImg;