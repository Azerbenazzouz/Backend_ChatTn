const jwt = require('jsonwebtoken')
require('dotenv').config();

const AuthToken=async (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)return res.sendStatus(299)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err , user )=>{
        if (err) return res.sendStatus(299)
        req.email = user.email
        next()
    })
}
module.exports = AuthToken;
