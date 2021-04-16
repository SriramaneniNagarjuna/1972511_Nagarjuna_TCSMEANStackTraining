var fs = require('fs');
var mongojs = require('mongojs');
var db = mongojs('monitor', ["configurations"]);
fs.readFile('call_data.json', 'utf8', function (err, data) {
    if (err) throw err;
    //console.log(data);
    var json = JSON.parse(data);

    db.configurations.insert(json, function(err, doc) {
        console.log(data);
        if(err) throw err;
    });
});