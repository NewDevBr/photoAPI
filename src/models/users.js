var mongoose = require('mongoose');
var conn = require('../db/connection.js').pool;
 
var user = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true,
        lowercase:true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase:true
    },
    password:{
        type:String,
        required: true
    }
});
var userModel = conn.model('user', user);
module.exports = userModel;