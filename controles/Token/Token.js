const { RefreshTokens  } = require('../../models/RefreshTokens');
const jwt = require('jsonwebtoken')
require('dotenv').config();


const Token=async (req,res)=>{
    //* Get the refresh token
    const refreshToken = req.body.token

    //* Check if the refresh token is not null
    if(refreshToken == null) return sendStatus(299)
    //* Search for the refresh token in the database
    RefreshTokens.find().then(async(val)=>{
        // if(val==null) return res.sendStatus(299)
        //* Create local refresh token array 
        refreshTokens=[]
        //* Add the refresh token to the array
        val.map((value)=>{
            refreshTokens.push(value.refreshTokens)
        })
        //* Check if the refresh token is included in the refresh token array
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(299)
        
        //* Verify if the refresh token is valid with the refresh token secret
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err, email)=>{
            //* if error send status 299
            if ( err ) return res.sendStatus(299)
            //* Generate New Access Token
            const accessToken= generateAccessToken({email : email.email.email})
            //* Send the accessToken
            res.json({accessToken : accessToken})
        })
    })
}
//* Generate New Access Token
const generateAccessToken=(email)=> {return jwt.sign(email , process.env.ACCESS_TOKEN_SECRET ,{ expiresIn: "2592000s"})}

module.exports = Token;