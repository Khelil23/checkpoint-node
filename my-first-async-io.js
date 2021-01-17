const fs = require("fs");
fs.readFile(process.argv[2],(err,data)=>{
    if(err) throw err;
    let buftextString = data.toString();
    var numberOfNewLines = buftextString.split("\n").length-1;
    console.log(numberOfNewLines);
});