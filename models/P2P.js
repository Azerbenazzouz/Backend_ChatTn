const Joi =require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShcema = new Schema({
    name:String,
    users_id: Array,
    lastSender: String,
    lastMessage: String,
    lastTime: Date,
    conversation: Array,
    // TODO:any one of the p2p users can block the ather user
});


const createP2p =(group)=>{
    const schema = Joi.object({
        name: Joi.string(),
        users_id: Joi.array().required(),
        lastSender: Joi.string(),
        lastMessage: Joi.string(),
        lastTime: Joi.date().required(),
        conversation:Joi.array().required(),
})
    return schema.validate(group);
}

const P2P = mongoose.model("p2p",userShcema);

exports.P2P = P2P;
exports.createP2p = createP2p;