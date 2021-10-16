const { User } = require('../../models/User');

const GetUser=async (req,res)=>{
    await User.find({"email":req.email}).then((result)=>res.status(200).send(result))
    .catch((err)=>res.status(299).send(err))
}

module.exports = GetUser;