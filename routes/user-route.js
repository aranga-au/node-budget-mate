var config = require('../config');
console.log(config);
var dbcon = require('../utils/dbcon')(config);
var user = require('./user')(dbcon);


module.exports=function(app){
    app.get('/user',function(req,resp){
        resp.send('ok');
        
    });

    app.get('/user/profile',function(req,resp){
          console.log(req.jwtPayLoad);
          resp.send(req.jwtPayLoad);
    });



};