const fs = require("fs");
module.exports = function(directory_name,
     file_extension,
     callback){
        fs.readdir(directory_name, "utf8",(err,files)=>{
            if(err) return callback(err);
            let filtreLS =[]
            files.forEach(file=>{
                if(file.split(".")[1]==file_extension){
                    filtreLS.push(file);


}  });
   return callback(null, filtreLS)
});
     };