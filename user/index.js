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
        
        con.query("select * from user where userId= '"+userId+"'",function(err,result){
            if (err){
                console.log(err);
                callback(err,null);
                return;
            }
            var ret = null;
            if (result.length ===0){
                callback({name:"VerifyUser",message:"invalid user name"});
                return;
            }
            console.log("pass 1");
            console.log("result "+result[0].password);
            if (!result[0].password){
                 callback({name:"VerifyUser",message:"no password in the file"});
                 return;
            }
            console.log(password);
            bcrypt.compare(password,result[0].password,function(err,same){
                if (err){
                    callback(err,null);
                }
                if (!same){
                    callback({name:"VerifyUser",message:"password doesnt match"},null);
                    return;
                }
                
                delete result.password; 
                console.log(JSON.stringify(result));
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


