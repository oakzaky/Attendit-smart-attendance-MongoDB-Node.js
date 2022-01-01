const Mongoose = require("mongoose");

const SessionSchema = new Mongoose.Schema({
    sessionID:{
        type: String,
        required: true,
        unique: true

    },
    time:{
        type: String,
        required: true,
    },
    day:{
        type: String,
        required: true,
    },
    date:{
        type: String
    },
    location:{
        type: String,
        maxLength:10
    },
    moduleName:{
        type: String,
        required: true,
    },
    attendance:{ 
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'Session' 
      },
    

})

module.exports = Mongoose.model('Session',SessionSchema);