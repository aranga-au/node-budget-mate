var _ = require("lodash");
var perm = require('./permission');
var bcrypt = require('bcrypt');

console.log(perm);
_.each(perm,function(v,k){
    console.log(k);
});

bcrypt.hash('cntrfs72',10,function(err,result){
    if (err){
        console.log(err);
        return ;
    }
    console.log(result);
});

bcrypt.compare('cntrfs72','$2a$15$AhXmQ/giXqxKYAGtOYOFOeXFwqVXybXG./Yz/HM5Ptm11z7jjyFVK',function(err,same){
    console.log(same);
});