const fs = require("fs");
fs.readdir(process.argv[2], "utf8",(err,files)=>{
    if(err) throw err;
    files.forEach(file=>{
        if(file.split(".")[1]==process.argv[3]){
            console.log(file);
        }
    });
   
});