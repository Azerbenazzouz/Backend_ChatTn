const { User } = require('../../models/User');

const GetUser=async (req,res)=>{
    console.log()
    await User.find({"email":req.query.email}).then((result)=>res.status(200).send(result))
    .catch((err)=>res.status(299).send(err))
}

module.exports = GetUser;