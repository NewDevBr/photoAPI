const mongoose = require("mongoose");
var conn = require('../db/connection.js').pool;

const Schema = mongoose.Schema;

const photos = new Schema({
    path:{
        type: String,
        required: true
    },
    idUser:{
        type: String,
        required: true
    }
});

var photoModel = conn.model('photo', photos);
module.exports = photoModel;