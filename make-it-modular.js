const mymodule = require("./mymodule.js");
mymodule(process.argv[2], process.argv[3], (err, data)=>{
    if(err)throw err;
    data.forEach(file => {
        console.log(file);
        
    });
})