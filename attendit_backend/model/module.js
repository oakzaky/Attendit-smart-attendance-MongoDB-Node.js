const Mongoose = require("mongoose");

const ModuleSchema = new Mongoose.Schema({
    moduleCode:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength:10,
    },
    moduleName:{
        type: String,
        required:true
    },
    teacher:   {
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    } ,
    TAs:[
        {
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    }  
    ]
    ,
    enrolledStudents:[
        {
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'users'
        }  
    ],
    Session:[{ 
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'Session' 
      }]
    

})

module.exports = Mongoose.model('Module',ModuleSchema);