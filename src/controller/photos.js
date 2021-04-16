const Photos = require("../models/photos.js");
const hlprs = require("../helpers/helpers.js");

exports.savePhoto = async (req, res, next)=>{
    try{
        var photo = new Photos({
            path: req.file.path,
            idUser: req.idUser
        });
        await photo.save();
        res.json({msg:"Foto salva com sucesso"});
    }catch(e){
        hlprs.delOnePhoto(req.file.path);
        next(Error("Erro ao tentar salvar sua foto"));
    }
}

exports.getAll = async (req, res, next) =>{
    try{
        Photos.find({idUser: req.idUser}).then((result)=>{
            result.length > 0 ?
            res.json({msg:"Veja suas fotos", index:[result[0]]}):
            res.json({msg:"Você ainda não possui fotos"});
        })
    }catch{
        next(Error("Falha ao tentar encontrar suas fotos"))
    }
}

exports.delOnePhoto = async (req, res, next) =>{
    try{
        Photos.findOneAndDelete({_id:req.params.idPhoto, idUser: req.idUser}).then((result)=>{
            result.path != null ?
            (
                hlprs.delOnePhoto(result.path),
                res.json({msg:"Foto apaga com sucesso"})
            ):
            next(Error("Ou esta foto não existe, ou não te pertence, ou algum erro ocorreu"));
        });
    }catch{
        next(Error("Erro ao tentar apagar uma foto"))
    }
}