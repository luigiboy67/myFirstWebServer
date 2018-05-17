var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use('/*', (req, res, next) => {
    console.log(`request @ ${req.baseUrl}`);
    next();
});

app.use(express.static('public'));

app.listen(port, function() {
    console.log(`The server has start on port number: ${port}`);
});