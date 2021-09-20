const { RefreshTokens  } = require('../../models/RefreshTokens');

const Logout=async (req,res)=>{
    RefreshTokens.findOneAndRemove({"refreshTokens":req.body.refreshTokens }).then((result)=>{
        res.send(result)
    }).catch(err=>{return res.status().send(err)})
}
module.exports = Logout;
