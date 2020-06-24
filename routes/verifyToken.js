const jwt = require('jsonwebtoken')
const KEY_SECRECT = "this is key secret";


 module.exports= function (req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('A litle problem.');
    try{
        const verified = jwt.verify(token,KEY_SECRECT);
        req.user = verified;
        next();
    }catch(err){
            res.status(400).send('Invalib Token')
    }
}