const Joi =require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShcema = new Schema({
    name:String,
    users_Emails: Array,
    lastSender: String,
    lastMessage: String,
    lastTime: Date,
    conversation: Array,
    // TODO:any one of the p2p users can block the ather user
});


const createP2p =(p2p)=>{
    const schema = Joi.object({
        name: Joi.string().required().allow(null).allow(''),
        users_Emails: Joi.array().required(),
        lastSender: Joi.string().required().allow(null).allow(''),
        lastMessage: Joi.string().required().allow(null).allow(''),
        lastTime: Joi.date().required(),
        conversation:Joi.array().required(),
})
    return schema.validate(p2p);
}

const P2P = mongoose.model("p2p",userShcema);

exports.P2P = P2P;
exports.createP2p = createP2p;