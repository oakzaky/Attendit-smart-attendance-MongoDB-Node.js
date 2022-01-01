const Mongoose = require("mongoose");

const AttendanceSchema = new Mongoose.Schema({
    Students:[{
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        required:false 
    }],
    Session:{ 
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'Session' 
      },
   
    

})

module.exports = Mongoose.model('Attendance',AttendanceSchema);