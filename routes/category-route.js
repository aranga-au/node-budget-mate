var config = require('../config');
console.log(config);
var dbcon = require('../utils/dbcon')(config);
var category = require('../category')(dbcon);

module.exports =function (app){

    app.get('/category',function(req,resp){

        //list by name;
        if (req.params.name){

            category.findByName(req.params.name,function(err,result){
               if (err){
                   resp.send(err);
                   return;
               }
               resp.send(result);

            });
            return;
        }
        //list all
        category.list(function (err,results) {

            if (err){
                resp.send(err,'500');
                return;
            }
            resp.send(results);

        });

    });

    app.get('/category/{id}',function(req,resp){

        var id = +req.pathParams.id;

        category.findById(id,function(err,result){
           if (err){
               resp.send(err);
               return;
           }
           if (result === null || result.length === 0){
               resp.send("invalid categoryId",'404');
               return;
           }
           resp.send(result);
        });

    });
    app.post('/category',function(req,resp){

        category.insert(req.body,function(err,c){
           if (err){
               resp.send(err,'500');
               return;
           }
           resp.send(c,'201');
        });
    });
    app.put('/category/{id}',function(req,resp){

        var id = +req.pathParams.id;
        category.update(req.body,function(err,c){
            if (err){
                resp.send(err,'500');
                return;
            }
            resp.send(c);
        });
    });
    app.delete('/category/{id}',function(req,resp){

        var id = +req.pathParams.id;
        category.delete(id,function(err,r){
            if (err){
                resp.send(err,'500');
                return;
            }
            resp.send(r,'204');
        });
    });
};