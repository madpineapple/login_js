const db =require('/pool');
const bcrypt = require('bcrypt');

function User() {

};

User prototype ={
  //find user by id or username
  find: function{user = null, callback}
  {
    if(user){
      var field = Number.isInteger(user) ? "id": "username";
    }
    let sql = "SELECT * FROM users WHERE ${field} = ?";

    db.query(sql, user, function(err, result){
      if(err) throw err;

    });
  }
}
