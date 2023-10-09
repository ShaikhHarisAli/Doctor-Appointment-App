const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"name is require"]
    },
    email:{
        type: String,
        required: [true,"email is require"]
    },
    password:{
        type:String,
        required:[true,"passsword is require"]
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel;