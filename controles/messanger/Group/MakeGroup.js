const { Group , createGroup } =require('../../../models/Group')
const MakeGroup=async (req,res)=>{
    const {error , value} =createGroup({...req.body,lastTime:Date.now()})
    if (error) return res.status(266).send(error)
    const result = await new Group(value).save()
    res.send(result)
}

module.exports = MakeGroup;