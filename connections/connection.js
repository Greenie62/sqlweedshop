const mysql = require('mysql');
const connection={}

if(process.env.JAWSDB_URL){

 connection = process.env.JAWSDB_URL
 
}

else{
  connection=mysql.createConnection({
    port:8889,
    host:"localhost",
    database:'weedstoredb',
    user:'root',
    password:'root',
  })
}





connection.connect()

module.exports = connection;