var mysql = require('mysql');
module.exports = function (config){
    console.log("connection created ![db:"+config.database+",host:"+config.host);
    var ret = {
        create:create
    };

    return ret;


    function create(){

       var connection = mysql.createConnection(config);

        connection.connect(function(err){
            if(err){
                console.log('Error connecting to Db');
                return;
            }
            console.log('Connection established');
        });

        return connection;
    }



};
