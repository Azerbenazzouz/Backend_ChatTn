const { User , createUser } = require('../../models/User');

const Regester=async (req,res)=>{
    const { error, value } = createUser(req.body)

    if(error){
        res.status(180).send(error)
    }else{
        await new User(value).save()
        res.status(200).send(value)
    }
}

module.exports = Regester;