
var category = requires('../category');

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

            resp.send(results);

        });

    });

    app.get('/category/{id}',function(req,resp){


        category.findById(req.pathParams.id,function(err,result){
           if (err){
               resp.send(err);
               return;
           }
           if (result.length === 0){
               resp.send("invalid categoryId",'404');
               return;
           }
           resp.send(result);
        });

    });
};