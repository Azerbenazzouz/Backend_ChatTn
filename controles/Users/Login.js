const jwt = require('jsonwebtoken')
require('dotenv').config();
const { User } = require('../../models/User');
const { RefreshTokens  } = require('../../models/RefreshTokens');


const Login =async (req,res)=>{
    // check if the email is registered
    User.findOne({"email":req.body.email}).then(async(value)=>{
        if(value == null) return res.status(299).send('User not found')
    })
    // check if the password is correct and send the refresh token to user
    User.findOne({"email":req.body.email , "password":req.body.password}).then(async(value)=>{
        if(value == null) return res.status(299).send('Email or Password')
        const email = {email : req.body}
        const accessToken=generateAccessToken(email)
        const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECRET)
        const refreshTokenStr = refreshToken.toString()
        await new RefreshTokens({refreshTokens:refreshTokenStr}).save()
        res.json({ accessToken : accessToken, refreshToken: refreshToken})
    })
    
}
// generate new access token
const generateAccessToken=(email)=> {return jwt.sign(email , process.env.ACCESS_TOKEN_SECRET ,{ expiresIn: "0s"})}

module.exports = Login;
