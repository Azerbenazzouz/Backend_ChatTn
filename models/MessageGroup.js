const Joi =require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShcema = new Schema({
    _id:String,
    Sender: String,
    senderId:String,
    img:String,
    Time: Date,
    Message: String
});


const createMessageGroup =(message)=>{
    const schema = Joi.object({
        _id: Joi.string().required(),
        sender: Joi.string().required(),
        senderId: Joi.string().required(),
        img: Joi.string().required(),
        time: Joi.date().required(),
        message: Joi.string().required(),
})
    return schema.validate(message);
}

const MessageGroup = mongoose.model("message",userShcema);

exports.MessageGroup = MessageGroup;
exports.createMessageGroup = createMessageGroup;