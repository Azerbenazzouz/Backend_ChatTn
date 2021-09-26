const { P2P } =require('../../../../models/P2P')


const GetMessagesP2P=async (req,res)=>{
    P2P.findById(req.body._id).then((p2p)=>{
        res.status(299).send(p2p.conversation)
    })

}
module.exports = GetMessagesP2P;