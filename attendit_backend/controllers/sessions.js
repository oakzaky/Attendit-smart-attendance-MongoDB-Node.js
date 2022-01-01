const sessions = require('../model/session')
const { auth } = require('../middleware/auth')


async function GetAuth(ID) { 
     console.log(ID)
          return loginChecker =  await auth(ID,[2,1])
}

exports.GetByID = async (req, res, next) => {
    try {
     
        return await res.status(200).json({
            success: true,
            data:(await sessions.where("sessionID").equals(req.params.id))
        })
     
    
    } catch(err){
    
     return   res.status(500).json({ error:'server error'});
    }
};

exports.Add = async (req, res, next) => {
    try {

    const user = await sessions.create(req.body);
        return res.status(200).json({
            success: true,
            data:user
        });
    }catch(err){
        
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
       return res.status(500).json({ error:err});
    }
};
exports.Update = async (req, res, next) => {
    try {
    //   if (!(await GetAuth(req.body.id))) { 
    //        return  res.status(403).json("unauthorized");
    //     }
    const user = await sessions.findOneAndUpdate(req.body);
        return res.status(200).json({
            success: true,
            data:user
        });
    }catch(err){
        console.error(err);
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
      return  res.status(500).json({ error:'server error'});
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
      return  res.status(500).json({ error:'server error'});
    }
};