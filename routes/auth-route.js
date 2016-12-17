var permissionDef = require('../permission-def');
moduel.exports = function (aclManager, app) {

    app.post('/auth', function (req, resp) {
        var args = req.body;

        if (!args | !args.userId || !args.password) {
            resp.send({"name":"Auth","messaage":"cannot find userId/password field"}, 400);
            return;
        }
        var payLoad={
            userId: args.userId,
            loggedInAs : permissionDef.ADMIN
        };
        aclManager.generateToken(payLoad).then(function(token){
            
            resp.send({UserId:args.userId,auth_token:token});
        }).catch(function(err){
            resp.send({"name":"Auth","message":"error while generating auth token"},500);
        });

    });
};

