const User = require('../model/user')
const { auth } = require('../middleware/auth')


async function GetAuth(ID) { 
     console.log(ID)
          return loginChecker =  await auth(ID,[1])
}

exports.GetByID = async (req, res, next) => {
    try {
        
       return  (await GetAuth(req.params.id)) ? res.status(200).json("authorized") : res.status(400).json("unauthorized");
     
    
    } catch(err){
        console.error(err);
        return  res.status(500).json({ error:'server error'});
    }
};

exports.Add = async (req, res, next) => {
    try {
        
    const user = await User.create(req.body);
        return res.status(200).json({
            success: true,
            data:user
        });
    }catch(err){
     
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
      return  res.status(500).json({ error:req});
    }
};
exports.Update = async (req, res, next) => {
    try {
    const user = await User.findOneAndUpdate(req.body);
        return res.status(200).json({
            success: true,
            data:user
        });
    }catch(err){
        console.error(err);
        if (err.code === 11000){
            return res.status(400).json({ error:'This User ID already exists'});
        }
     return   res.status(500).json({ error:'server error'});
    }
};
exports.Delete = async (req, res, next) => {
    try {
    const user = await User.deleteOne(req.params.id);
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