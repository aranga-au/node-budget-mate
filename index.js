var app = require('aws-lambda-http');
//init routes
var catRoute = require('./routes/category-route')(app);


//aws lambda call entry
exports.handler = app.handler;