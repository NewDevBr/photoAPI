const bcrypt = require("bcrypt");
const del = require("del");
const saltRounds = 10;

function makeHash(password){
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

exports.hashPassword = (req, res, next)=>{
    req.body.password = makeHash(req.body.password);
    next();
}

exports.delOnePhoto = (path) =>{
    del.sync("./" + path);
}