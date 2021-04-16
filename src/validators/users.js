const User = require("../models/users.js");
const hlprs = require("../helpers/helpers.js");

const expEmail = "[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$";
const expPass = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

exports.newUserParams = (req, res, next)=>{
    RegExp(expEmail).test(req.body.email)?
        RegExp(expPass).test(req.body.password)?
        User.countDocuments({email:req.body.email}).exec().then((val)=>{
            (val == 0) ? next() : next(Error(`${req.body.email} já está em uso, registre outro e-mail.`))
        })
        : next(Error("A senha deve conter letras maiúsculas, minusculas, numeros, caracteres especiais e ao menos 8 caracteres."))
    : next(Error("E-mail inválido"))
}

exports.loginParams = (req, res, next)=>{
    (RegExp(expEmail).test(req.body.email)) && (RegExp(expPass).test(req.body.password))?
        next()
    : next(Error("Falha na autenticação"));
}