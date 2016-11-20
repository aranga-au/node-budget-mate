var app = require('aws-lambda-http');
//init routes
var catRoute = require('./routes/category-route')(app);

app.get('/',function(req,resp){
   resp.send("Restful API based on AWS Lambda");
});
//aws lambda call entry
exports.handler = app.handler;