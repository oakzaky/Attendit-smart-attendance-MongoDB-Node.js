const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    userID:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength:6,
    },
    AccountType:{
        type: String,
        required:true,
        maxLength:1
    },
    FullName:{
        type: String,
        required:true
    },
    Password:{
        type: String,
    }

    


})

module.exports = Mongoose.model('User',UserSchema);