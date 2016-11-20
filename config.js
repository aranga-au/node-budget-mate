var AWS = require('aws-sdk');
var ENV = process.env;

module.exports={
    database: ENV.database|| "budget",
    user: ENV.user|| 'root',
    password: ENV.password || 'password',
    host: ENV.host||'localhost',
    port:ENV.port ||3306
};