const Joi =require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShcema = new Schema({
    refreshTokens:String
});

const RefreshTokens = mongoose.model("RefreshTokens",userShcema);
exports.RefreshTokens = RefreshTokens;
