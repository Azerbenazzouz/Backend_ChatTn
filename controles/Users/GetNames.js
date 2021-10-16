const { User } = require('../../models/User');

const GetNames=async (req,res)=>{
    await User.find({"username":req.body.username}).then((result)=>res.status(200).send(result))
    .catch((err)=>res.status(299).send(err))
}

module.exports = GetNames;