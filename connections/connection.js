const mysql = require('mysql');


const connection = mysql.createConnection({
    port:8889,
    host:"localhost",
    database:'weedstoredb',
    user:'root',
    password:'root',

    production: {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
      }
})


connection.connect(function(){
    console.log(`Connection on thread ${connection.threadId}.`)
})


module.exports = connection;