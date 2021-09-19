const { RefreshTokens  } = require('../../models/RefreshTokens');
const jwt = require('jsonwebtoken')
require('dotenv').config();


const Token=async (req,res)=>{
    const refreshToken = req.body.token
    // console.log(refreshToken)

    // check if the refresh token is valid
    if(refreshToken == null) return sendStatus(299)

    RefreshTokens.find().then(async(val)=>{
        // if(val==null) return res.sendStatus(299)
        refreshTokens=[]
        val.map((value)=>{
            refreshTokens.push(value.refreshTokens)
        })
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(299)
        
        // verify if the refresh token is valid with the refresh token secret
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err, email)=>{
            if ( err ) return res.sendStatus(299)
            const accessToken= generateAccessToken({email : email.email.email})
            res.json({accessToken : accessToken})
        })
    })

    // res.send(refreshToken)
}
const generateAccessToken=(email)=> {return jwt.sign(email , process.env.ACCESS_TOKEN_SECRET ,{ expiresIn: "2592000s"})}

module.exports = Token;