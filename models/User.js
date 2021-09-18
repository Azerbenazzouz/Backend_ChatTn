const Joi =require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShcema = new Schema({
    username:String,
    email: String,
    icon:String,
    password: String
});


const createUser =(user)=>{
    const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

})
    return schema.validate(user);
}

const User = mongoose.model("users",userShcema);


exports.User = User;
exports.createUser = createUser;
