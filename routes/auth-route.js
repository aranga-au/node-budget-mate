var permissionDef = require('../permission.js');
module.exports = function (aclManager, app) {

    app.get('/auth', function (req, resp) {
        resp.send({status:400,"message":"bad request-not supported","name":"Auth"});
    });
    app.post('/auth', function (req, resp) {
        var args = req.body;

        if (!args | !args.username| !args.password) {
            resp.send({"name":"Auth","messaage":"cannot find username/password field"}, 400);
            return;
        }
        //give everyone admin rights :) and number .. should get from db or somthing
        userId = '_aeerFdd'+ new Date().getTime();
        var payLoad={
            userId: userId,
            loggedInAs : permissionDef.ADMIN
        };
        aclManager.generateToken(payLoad).then(function(token){
            
            resp.send({userId:payLoad.userId,auth_token:token});
        }).catch(function(err){
            resp.send({"name":"Auth","message":"error while generating auth token"},500);
        });

    });
};

