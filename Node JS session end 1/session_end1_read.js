let fs = require("fs");
let data = fs.readFileSync("details.json");
console.log(data.toString());

let jsonString = data.toString();
let newdetailsJSON = JSON.parse(jsonString);
console.log("Number of record entered are " + newdetailsJSON.length);
