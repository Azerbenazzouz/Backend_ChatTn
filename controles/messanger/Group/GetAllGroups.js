const { Group  } =require('../../../models/Group')
const GetAllGroups=async (req,res)=>{
    Group.find().then((group)=>{
        var data = []
        group.map(grp=>{
            if(grp.usersEmail.includes(req.body.email)) data.push(grp)
        })
        
        res.send(data.reverse(this.lastTime))
    })
}

module.exports = GetAllGroups;