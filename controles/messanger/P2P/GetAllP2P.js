const { P2P  } =require('../../../models/P2P')
const GetAllP2P=async (req,res)=>{
    P2P.find().then((P2p)=>{
        var data = []
        P2p.map(p2p=>{
            if(p2p.users_Emails.includes(req.email)) data.push(p2p)
        })
        
        res.send(data.reverse(this.lastTime))
    })
}

module.exports = GetAllP2P;