const Module = require('../model/module')
const { auth } = require('../middleware/auth')
const User = require('../model/user')

async function GetAuth(ID) { 
     console.log(ID)
          return loginChecker =  await auth(ID,[1])
}

exports.GetByID = async (req, res, next) => {
    try {
  
        return await res.status(200).json({
            success: true,
            data:(await Module.where("moduleCode").equals(req.params.id))
        })
     
    
    } catch(err){
      return  res.status(500).json({ error:'server error'});
    }
};

exports.Add = async (req, res, next) => {
    try {
        // if (!(await GetAuth(req.body.id))) { 
        //    return  res.status(403).json("unauthorized");
        // }
    const user = await sessions.create(req.body);
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
exports.AddStudent = async (req, res, next) => {
    try {


        const student = (await User.where("userID").equals(req.body.Students))
        const module=   (await Module.where("moduleCode").equals(req.body.moduleCode))
        const Attend = await Module.where("moduleCode").equals(req.body.moduleCode).updateOne({...module._doc, enrolledStudents:[...module._doc.Students,student[0]]});
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
exports.AddTA = async (req, res, next) => {
    try {


        const student = (await User.where("userID").equals(req.body.Students))
        const module=   (await Module.where("moduleCode").equals(req.body.moduleCode))
        const Attend = await Module.where("moduleCode").equals(req.body.moduleCode).updateOne({...module._doc, TAs:[...module._doc.Students,student[0]]});
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
 
exports.Update = async (req, res, next) => {
    try {
    //   if (!(await GetAuth(req.body.id))) { 
    //        return  res.status(403).json("unauthorized");
    //     }
        let OldModule= await Module.where("moduleCode").equals(req.body.moduleCode)
    const module = await module.findOneAndUpdate(OldModule,req.body);
        return res.status(200).json({
            success: true,
            data:module
        });
    }catch(err){
        console.error(err);
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
        res.status(500).json({ error:'server error'});
    }
};
exports.Delete = async (req, res, next) => {
    try {
        // if (!(await GetAuth(req.body.id))) { 
        //    return  res.status(403).json("unauthorized");
        // }
    const user = await sessions.deleteOne(req.params.id);
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