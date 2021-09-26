const Joi =require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShcema = new Schema({
    _id:String,
    Sender: String,
    senderId:String,
    Time: Date,
    Message: String
});


const createMessageP2P =(message)=>{
    const schema = Joi.object({
        _id: Joi.string().required(),
        sender: Joi.string().required(),
        senderId: Joi.string().required(),
        time: Joi.date().required(),
        message: Joi.string().required(),
})
    return schema.validate(message);
}

const MessageP2P = mongoose.model("messagep2p",userShcema);

exports.MessageP2P = MessageP2P;
exports.createMessageP2P = createMessageP2P;