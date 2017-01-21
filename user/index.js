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
        
        con.query("select * from user where userId= ?",[userId],function(err,result){
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

            if (!result[0].password){
                 callback({name:"VerifyUser",message:"no password in the file"});
                 return;
            }
           
            bcrypt.compare(password,result[0].password,function(err,same){
                if (err){
                    callback(err,null);
                }
                if (!same){
                    callback({name:"VerifyUser",message:"password doesnt match"},null);
                    return;
                }
                
                delete result[0].password; 
                console.log(JSON.stringify(result[0]));
                
                callback(null,result[0]);
                
            });
        });
    };

    user.getInfo = function(userId,callback){
        con.query("select * from user where userId= ?",[userId],function(err,result){
            if (err){
                console.log(err);
                callback(err,null);
                return;
            }
            if (result.length===0){
                 callback(null,null);
            }
            delete result.password; 
            callback(null,result[0]);
        });     
    };
    return user;
};


