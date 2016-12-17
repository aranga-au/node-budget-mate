//config options
var config = require('./config.js');
var tokenOptions  = require('./token-options.js');
var acl = require('./acl.js');
var permisionDef = require('./permission.js');

var aclManager = require('jwt-acl-manager')(config.secret,tokenOptions,acl,permisionDef);
var app = require('aws-lambda-http');

//init routes
var catRoute = require('./routes/category-route')(app);
var authRoute = require('./routes/auth-route')(aclManager,app);


app.use(aclManager.accessController());

app.use(function(req,resp,next){
console.log(req);
next();
});

app.get('/',function(req,resp){
   resp.send("Restful API based on AWS Lambda");
});
//aws lambda call entry
exports.handler = app.handler;