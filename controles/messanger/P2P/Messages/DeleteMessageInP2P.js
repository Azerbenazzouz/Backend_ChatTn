const { P2P } =require('../../../../models/P2P')


const DeleteMessageInP2P=async (req,res)=>{
    P2P.findById(req.body._id).then((p2p)=>{
        var Data=[]
        for (let i = 0; i < p2p.conversation.length; i++) {
            if(!req.body.message_id.includes(p2p.conversation[i]._id)) Data.push(p2p.conversation[i])            
        }
        P2P.findByIdAndUpdate(req.body._id,{"conversation":Data}).then((result)=>{
        })
        res.status(299).send(p2p.conversation)
    })

}
module.exports = DeleteMessageInP2P;