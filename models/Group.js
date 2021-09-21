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
});


const createGroup =(group)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        usersEmail: Joi.array().required(),
        img: Joi.string().required(),
        lastSender: Joi.string().required(),
        lastMessage: Joi.string().required(),
        lastTime: Joi.date().required(),
})
    return schema.validate(group);
}

const Group = mongoose.model("groups",userShcema);

exports.Group = Group;
exports.createGroup = createGroup;
