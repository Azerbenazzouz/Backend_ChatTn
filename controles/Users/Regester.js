const { User , createUser } = require('../../models/User');

const Regester=async (req,res)=>{

    const { error, value } = createUser(req.body)

    if(error){
        res.status(299).send(error)
    }else{
        User.find({"email":req.body.email}).then(async(R) => {
            if(R==null){
                const resulta = await new User(value).save()
                res.status(200).send(resulta)
            }else{
                res.status(299).send({
                    "_original": {
                        "username": req.body.username,
                        "email": "",
                        "password": req.body.password
                    },
                    "details": [
                        {
                            "message": "\"email\" is already used",
                            "path": [
                                "email"
                            ],
                            "type": "string.empty",
                            "context": {
                                "label": "email",
                                "value": req.body.email,
                                "key": "email"
                            }
                        }
                    ]
                })
            }
        })
    }
}

module.exports = Regester;
