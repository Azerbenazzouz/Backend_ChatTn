const { User } = require('../../models/User');

const GetNames=async (req,res)=>{
    await User.find().then((result)=>{
        var data=[]
        result.map(response =>{
            if (response.username.toLowerCase().includes(req.body.username.toLowerCase())) data.push({"username":response.username})
        })
        res.status(200).send(data)
    })
    .catch((err)=>res.status(299).send(err))
}

module.exports = GetNames;