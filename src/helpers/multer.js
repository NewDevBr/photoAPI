const multer = require('multer');

exports.upload = multer({
    limits:{ fileSize: 1024*1024*6 },
    fileFilter: (req, file, cb)=>{
        (file.mimetype === 'image/jpeg' || file.mimetype ==='image/png' || file.mimetype === 'image/jpg')?
        cb(null, true):
        cb(new Error('A foto está corrompida.'), false);
    }, 
    storage: multer.diskStorage({
        destination: (req, file, cb)=> cb(null, './src/imgs'),
        filename: (req, file, cb)=>cb(null, new Date().getTime()+file.originalname)
    })
});