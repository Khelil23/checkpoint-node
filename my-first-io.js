const fs = require("fs");
let buftextString = fs.readFileSync(process.argv[2]).toString();
let numberOfNewLines = buftextString.split("\n").length-1;
console.log(numberOfNewLines);