const { P2P } =require('../../../../models/P2P')
const { createMessageP2P } =require('../../../../models/MessageP2P')
const { v4: uuidv4 } = require('uuid');

const SendMessageInP2P=async (req,res)=>{
    const {error , value} = createMessageP2P({...req.body,_id:uuidv4(),time:Date.now()})
    if (error) return res.status(299).send(error)
    P2P.findById(req.body._id).then((p2p)=>{
        if (p2p==null) return res.sendStatus(299)
        P2P.findByIdAndUpdate(req.body._id,{lastSender:value.sender,lastMessage:value.message,lastTime:Date.now()}).then((result)=>{
            res.send(result)
        })
        P2P.findByIdAndUpdate(req.body._id,{conversation:[...p2p.conversation,value]}).then((result)=>{
            res.send(result)
        })
    })
}
module.exports =SendMessageInP2P;
