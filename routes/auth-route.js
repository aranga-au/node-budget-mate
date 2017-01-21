var permissionDef = require('../permission.js');
var _ = require('lodash');
var config = require('../config');
var dbcon = require('../utils/dbcon')(config);
var user = require('../user')(dbcon);
module.exports = function (aclManager, app) {
    
    app.post('/auth', function (req, resp) {
        var args = req.body;
        console.log("REQUEST-AN:"+args);
       
        
        if (!args | !args.username | !args.password) {
            resp.send({ "name": "Auth", "messaage": "cannot find username/password field" }, 400);
            return;
        }
        console.log("about to verify user");
        //give everyone admin rights :) and number .. should get from db or somthing
     
        
        user.verifyUser(args.username, args.password, function (err, result) {
             resp.send("heloo");
        
        });
        


    });
};

