var bcrypt = require('bcrypt');
//var _ = require('lodash');
var u = {
    username : "arangan",
    displayName : "Jone (dummy user:no implementation)",
    firstName : "Jone",
    lastName : "Doe",
    role:['ADMIN']

};
module.exports = function(dbcon){
    var user={};

    user.verifyUser=function(userId,password,callback){
        var con = dbcon.create();
        
        con.query("select * from user where userId= '"+userId+"'",function(err,resut){
            if (err){
                console.log(err);
                callback(err,null);
                return;
            }
            var ret = null;
            if (resut.length ===0){
                callback({name:"VerifyUser",message:"invalid user name"});
                return;
            }
            console.log("pass 1");
            console.log("result "+resut);
            bcrypt.compare(password,result.password,function(err,same){
                if (err){
                    callback(err,null);
                }
                if (!same){
                    callback({name:"VerifyUser",message:"password doesnt match"},null);
                    return;
                }
                delete result.password; 
                callback(null,result);
            });
        });
    };
    user.getInfo = function(username,callback){
        con.query("select * from user where userId= ?",[userId],function(err,resut){
            if (err){
                console.log(err);
                callback(err,null);
                return;
            }
            delete result.password; 
            callback(null,ret);
        });     
    };
    return user;
};


