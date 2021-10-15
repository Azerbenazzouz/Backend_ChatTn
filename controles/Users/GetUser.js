const { User  } = require('../../models/User');

const GetAll=async (req,res)=>{
    await User.findOne(res.email).then((result)=>res.status(200).send(result))
    .catch((err)=>res.status(299).send(err))
}

module.exports = GetAll;