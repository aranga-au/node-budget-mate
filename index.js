//config options
var config = require('./config');
var tokenOptions  = require('./token-options');
var acl = require('./acl');
var permisionDef = require('permision-def');

var aclManager = require('jwt-acl-manager')(config.key,tokenOptions,acl,permisionDef);
var app = require('aws-lambda-http');

//init routes
var catRoute = require('./routes/category-route')(app);
var authRoute = require('./routes/auth-route')(aclManager,app);


app.use(aclManager.accessController());

app.get('/',function(req,resp){
   resp.send("Restful API based on AWS Lambda");
});
//aws lambda call entry
exports.handler = app.handler;