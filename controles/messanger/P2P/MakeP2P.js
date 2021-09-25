const { P2P , createP2p } =require('../../../models/Group')

const MakeP2P=async (req,res)=>{
    const {error , value} =createP2p({...req.body,lastTime:Date.now()})
    if (error) return res.status(266).send(error)
    const result = await new P2P(value).save()
    res.send(result)
}

module.exports = MakeP2P;