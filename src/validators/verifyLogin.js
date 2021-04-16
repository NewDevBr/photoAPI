var jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        req.idUser = jwt.verify(token, process.env.JWT_KEY)["idUser"];
        next();
    }catch(error){
        next(Error("Autentique-se para usar essa funcionalidade"));
    }
}