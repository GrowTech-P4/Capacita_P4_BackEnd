const multer = require('multer');
const crypto = require('crypto');
const {extname,resolve} = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname,'..','..','tmp'),
        filename:(req,file,cb) =>{
            crypto.randomBytes(16,(err,res)=>{
                if(err) return cb(res);
                
                return cb(null,res.toString('hex') + extname(file.originalname));
            });
        }
    })
};
