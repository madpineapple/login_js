//database setup
//installed util.promisify

const util = require('util');
const mysql = require('mysql');
//Create connections
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '*******',
    database: 'userpassdb'
});

//Connect to database
db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('MySql Connected!')
});

db.query= util.promisify(db.query);

module.exports= db;
