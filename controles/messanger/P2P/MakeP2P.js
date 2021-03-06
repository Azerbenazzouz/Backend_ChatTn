const { P2P , createP2p } =require('../../../models/P2P')

const MakeP2P=async (req,res)=>{
    P2P.find({users_Emails:req.body.users_Emails}).then((val)=>{
        if(val.length==0) {
            P2P.find({users_Emails:[req.body.users_Emails[1],req.body.users_Emails[0]]}).then(async val=>{
                if(val.length==0) {
                    const {error , value} =createP2p({...req.body,lastTime:Date.now()})
                    if (error) return res.status(266).send(error)
                    const result = await new P2P(value).save()
                    res.send(result)
                }else{return res.status(299).send("299")}
            })
        }else{return res.status(299).send("299")}
    })
    
}

module.exports = MakeP2P;