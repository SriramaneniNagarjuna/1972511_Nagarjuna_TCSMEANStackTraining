var fs = require("fs");
var mongojs = require('mongojs');
var db = mongojs('monitor', ["configurations"]);
let obj = require("mongoose");   // to load the module 
obj.Promise = global.Promise;    // creating the reference
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption= {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url, mongooseDbOption);   //Connected to the object
let db1 = obj.connection;   //conected to the database

db1.on("error",(err)=>console.log(err));
db1.once("open",()=>{
    // To define the schema

    let callSchema = obj.Schema({
        
        _id :Number, 
        source:Number, 
        destination:Number, 
        sourceLocation:String, 
        destinationLocation:String, 
        callDuration:String, 
        roaming:String,
        callCharge:Number
        
    });

    // Creating the model with schema

    let CallData = obj.model("",callSchema,"CallData");

    // creaing refernce using the above model


    fs.readFile('call_data.json', 'utf8', function (err, data) {
        if (err) throw err;
        //console.log(data);
        var json = JSON.parse(data);
    
        db.configurations.insert(json, function(err, doc) {
            console.log(data);
            if(err) throw err;
        });
    
        obj.disconnect();  // to close the connection.
    })

});


