const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        if(file.fieldname === "employeePic"){
            return cb(null,'./Imgs/EmployeePfp')
        }
        cb(new Error("Invalid field name"),null)
    },
    filename: function(req,file,cb){
        cb(null,new Date().getTime() + '_' + file.originalname)
    },
});

const fileSaver = multer({
    storage:storage,
    fileFilter: function(req,file,callback){
        const fileType = file.mimetype;
        if(fileType === 'image/png' || fileType === 'image/jpg' || fileType === 'image/jpeg'){
            return callback(null,true);
        }
        callback(new Error('Invalid file type'),false);
    },
    limits:{
        fileSize:1024 * 1024 * 10,
    }
});

module.exports = fileSaver;