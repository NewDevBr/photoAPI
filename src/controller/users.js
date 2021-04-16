const User = require("../models/users.js");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

exports.newUser = async (req, res, next)=> {
    try {
        var user = new User({
            fullName: req.body.fullName,
            email:req.body.email,
            password: req.body.password
        });
        await user.save();
        res.json({msg:'Bem vindo a PhotoAPI'});
    } catch{
        next(Error("Falha ao tentar adicionar usuário"));
    }
}

exports.sendToken = (req, res, next)=>{
    User.findOne({email:req.body.email}).exec().then((result)=>{
        !result? next(Error("Falha na autenticação")) :
            bcrypt.compareSync(req.body.password, result["password"]) ? (
                token = jwt.sign({
                    idUser:result["_id"],
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                },
                process.env.JWT_KEY),
                res.json({token:token, userData:result})
            )
            : next(Error("Falha na autenticação"))
    })
}

exports.changeUser = (req, res, next)=>{
    try{
        User.updateOne(
            {_id:req.idUser},
            {
                fullName: req.body.fullName,
                password: req.body.password
        }).then(res.json({msg:"Dados alterados com sucesso"}));
    }catch{
        next(Error("Falha ao tentar atualizar os dados do usuário"))
    }
}

exports.deleteUser = (req, res, next)=>{
    try {
        User.deleteOne({_id:req.idUser}).then(
            res.json({msg:"Usuário deletado com sucesso"})
        );
    } catch {
        next(Error("Falha ao apagar usuário"))
    }
}