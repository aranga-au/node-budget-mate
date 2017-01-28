var config = require('../config');
console.log(config);
var dbcon = require('../utils/dbcon')(config);
var user = require('../user')(dbcon);
var perm = require('../permission');


module.exports = function (app) {
    app.get('/user', function (req, resp) {
        resp.send('ok');

    });

    app.get('/user/profile', function (req, resp) {
        console.log(req.jwtPayLoad.userId);
        console.log('/user/profile');
        user.getInfo(req.jwtPayLoad.userId, function (err, result) {
            if (err) {
                console.log("err:user.getInfo", err);
                resp.send(err, 500);
                return;
            }
            if (!result) {
                result = {};
            }
            var roles = [];
            _.each(perm, function (v, k) {
                if ((v & result.permissionMask) > 0) {
                    roles.push(k);
                }
            });
            delete result.permissionMask;
            result.roles = roles;
            resp.send(result);
        });
    });



};