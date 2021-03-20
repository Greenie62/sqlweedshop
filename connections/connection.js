const mysql = require('mysql');

// if(process.env.JAWSDB_URL){

//  connection = process.env.JAWSDB_URL
 
// }

// else{
//   connection=mysql.createConnection({
//     port:8889,
//     host:"localhost",
//     database:'weedstoredb',
//     user:'root',
//     password:'root',
//   })
// }

let connection = 'mysql://skd9iqj2225a000e:onamvytpzcvf1k86@xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/m486dkyp7sg4d0e1'





connection.connect()

module.exports = connection;