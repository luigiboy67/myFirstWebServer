var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(req,res) {
    console.log('Got a request, replying...');
    res.send('I am hungry. Feed me food Michael.\n');
    console.log("We have recieved your request.");
});

app.listen(port, function() {
    console.log("The server has start on port number: " + port);
});