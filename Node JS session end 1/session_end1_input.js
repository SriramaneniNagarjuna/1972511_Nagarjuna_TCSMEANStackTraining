let fs = require("fs");
let obj = require("readline-sync");



// Asking the user to enter the values
let firstName = obj.question("Enter the First Name");
console.log("Your first Name is " + firstName);
let lastName = obj.question("Enter the Last Name");
console.log("Your Last Name "+lastName);
let gender = obj.question("Enter your Gender");
console.log("Your Gender is "+gender);
let email = obj.question("Enter your Email");
console.log("Your Email is " + email)



// Storing the values into a new array
let details = new Array();
details.push(firstName);
details.push(lastName);
details.push(gender);
details.push(email);


// Converting the array object into the JSON file
let jsonData = JSON.stringify(details);
fs.writeFileSync("details.json", jsonData, {flag:"a"},(store)=>{
    
});
console.log("File Successfully written");



