var permissionDef = require('../permission.js');
var _ = require('lodash');
var config = require('../config');
var dbcon = require('../utils/dbcon')(config);
var user = require('../user')(dbcon);
module.exports = function (aclManager, app) {

    app.post('/auth', function (req, resp) {
        var args = req.body;
        console.log("REQUEST-AN:" + args);


        if (!args | !args.username | !args.password) {
            resp.send({ "name": "Auth", "messaage": "cannot find username/password field" }, 400);
            return;
        }
        console.log("about to verify user");
        //give everyone admin rights :) and number .. should get from db or somthing


        user.verifyUser(args.username, args.password, function (err, result) {
            if (err) {
                resp.send({ "name": "Auth", "messaage": "Internal error", "err": err }, 500);
                return;
            }
            console.log("no errors");
            if (!result) {
                console.log("no result");
                resp.send({ "name": "Auth", "messaage": "Invalid username/password" }, 401);
                return;
            }

            var roles = [];
            console.log("checking permission");

            var payLoad = {
                userId: result.userId,
                loggedInAs: permissionDef.ADMIN,
            };

            aclManager.generateToken(payLoad).then(function (token) {
                var tokenResponse = {
                    access_token: token,
                    expire_in: 182728
                };
                resp.send(tokenResponse);
            }).catch(function (err) {
                resp.send({ "name": "Auth", "message": "error while generating auth token" }, 500);
            });

        });



    });
};

