const User = require('../model/user')
async function auth(ID,Authtype) {
    const user = await User.where("userID").equals(ID)
 
    if (user.length==0){
        return false
    }
    if( Authtype.includes(parseInt(user[0].AccountType))){
        
        return true;
    }
    return false
   
}

module.exports = {auth}