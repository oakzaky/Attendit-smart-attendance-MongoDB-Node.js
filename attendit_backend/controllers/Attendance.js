const Attendance = require('../model/Attendance')
const { auth } = require('../middleware/auth')
const User = require('../model/user')
const sessions = require('../model/session')
async function GetAuth(ID) { 
     console.log(ID)
          return loginChecker =  await auth(ID,[1])
}

exports.GetByID = async (req, res, next) => {
    try {
        
        return await res.status(200).json({
            success: true,
            data:(await Attendance.find())
        })
     
    
    } catch(err){
      return  res.status(500).json({ error:'server error'});
    }
};

exports.Add = async (req, res, next) => {
    try {

    const session=   (await sessions.where("sessionID").equals(req.body.Session))
    const Attend = await Attendance.create({Students:[] , Session:session[0] });
        return res.status(200).json({
            success: true,
            data:Attend
        });
    }catch(err){
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
        res.status(500).json({ error:'server error'});
    }
};
exports.Update = async (req, res, next) => {
    try {


        const student = (await User.where("userID").equals(req.body.Students))
        const session=   (await sessions.where("sessionID").equals(req.body.Session))
        const attend =  (await Attendance.where("Session").equals(session[0]._id))[0]
        console.log({...attend._doc, Students:[...attend._doc.Students,student[0]._id]})
        const Attend = await Attendance.where("Session").equals(session[0]._id).updateOne({...attend._doc, Students:[...attend._doc.Students,student[0]]});
        return res.status(200).json({
            success: true,
        ///   Attend:Attend,
            old:Attend,

        });
    }catch(err){
    
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
        res.status(500).json({ error:err});
    }
};
exports.Delete = async (req, res, next) => {
    try {
        // if (!(await GetAuth(req.body.id))) { 
        //    return  res.status(403).json("unauthorized");
        // }
    const user = await Attendance.deleteOne(req.params.id);
        return res.status(200).json({
            success: true,
            data:user
        });
    }catch(err){
        console.error(err);
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
        res.status(500).json({ error:'server error'});
    }
};