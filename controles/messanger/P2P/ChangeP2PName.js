const { P2P } =require('../../../models/P2P')

const Changep2pName=async (req,res)=>{
    if(req.body.name==null || req.body._id== null) return res.sendStatus(299)
    P2P.findByIdAndUpdate(req.body._id,{name:req.body.name}).then((p2p)=>{
        res.send(p2p)
    })
}

module.exports = Changep2pName;