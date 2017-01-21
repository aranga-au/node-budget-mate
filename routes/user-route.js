var config = require('../config');
console.log(config);
var dbcon = require('../utils/dbcon')(config);
var u = {
    username : "arangan",
    displayName : "Jone (dummy user:no implementation)",
    firstName : "Jone",
    lastName : "Doe",
    role:['ADMIN']

};

module.exports=function(app){
    app.get('/user',function(req,resp){
       resp.send(u);
    });

    app.get('/user/{userid}',function(req,resp){
          resp.send(u);
    });



};