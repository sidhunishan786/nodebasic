const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName :{
        type: String,
        required : true,
    },
    lastName : {
        type: String,
        required : false
    },
    gender :{
        type: String
    },
    profession:{
        type: String
    },
    email :{
        required : true,
        unique : true,
        type: String
    }
}
,{timestamps : true});

const User = mongoose.model("user",userSchema);

module.exports = User;