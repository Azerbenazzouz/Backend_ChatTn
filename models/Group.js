const Joi =require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShcema = new Schema({
    name:String,
    usersEmail: Array,
    img:String,
    lastSender: String,
    lastMessage: String,
    lastTime: Date,
    adminsEmail: Array,
    conversation: Array,
    // TODO:any one of the mumbers can invite users => Boolean if true =>any one can invite users if false => just admins can invite users
});


const createGroup =(group)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        usersEmail: Joi.array().required(),
        img: Joi.string(),
        lastSender: Joi.string().required(),
        lastMessage: Joi.string().required(),
        lastTime: Joi.date().required(),
        adminsEmail: Joi.array().required(),
        conversation:Joi.array().required(),
})
    return schema.validate(group);
}

const Group = mongoose.model("groups",userShcema);

exports.Group = Group;
exports.createGroup = createGroup;
