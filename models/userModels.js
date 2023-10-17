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
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isDoctor: {
        type: Boolean,
        default: false,
    },
    notifcation: {
        type: Array,
        default: [],
    },
    seennotification: {
        type: Array,
        default: [],
    },
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel;