const { User  } = require('../../models/User');

const GetAll=async (req,res)=>{
    await User.find().then((result)=>res.status(200).send(result))
    .catch((err)=>res.status(180).send(err))
}

module.exports = GetAll;