var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use('/*', (req, res, next) => {
    console.log(`request @ ${req.baseUrl}`);
    next();
})

app.get("/", function(req,res) {
    console.log('Got a request, replying...');
    res.sendFile(`${__dirname}/index.html`);
    console.log("We have recieved your request.");
});

app.listen(port, function() {
    console.log(`The server has start on port number: ${port}`);
});