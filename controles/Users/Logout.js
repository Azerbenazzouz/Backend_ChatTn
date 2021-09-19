const { RefreshTokens  } = require('../../models/RefreshTokens');

const Logout=async (req,res,next)=>{
    RefreshTokens.findOneAndRemove({"refreshTokens":req.body.token }).then(()=>{
        res.send('SUCCESS')
    }).catch(err=>{return res.status(299).send(err)})
}
module.exports = Logout;