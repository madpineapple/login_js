const db =require('./pool');
const bcrypt = require('bcrypt');

function User() {

};

User.prototype ={
  //find user by id or username
  find: function(user = null, callback)
  {
    //if(result.length) callback(result[0]);
    if(user){
      var field = Number.isInteger(user) ? "id": "username";
    }
    let sql = "SELECT * FROM users WHERE ${field} = ?";

    db.query(sql, user, function(err, result){
      if(err) throw err;

    });
  },
  //create new user
  create : function(body, callback)
  {
    let pwd = body.password;
    body.password = bycrypt.hashSync(pwd,10);

    //put values in an array called bind
    var bind = [];

    for(prop in body){
      bind.push(prop);
    }

    let sql = "INSERT INTO users (username, password) VALUES (?, ?)";

    db.query(sql, bind, function(err, lastID){
      if(err) throw err;
      callback(lastID);
    });
  },

  login : function(username, password, callback)
  {
    this.find(username, function(user){
      if(user){
        if(bcrypt.compareSync(password, user.password)){
          callback(user);
          return;
        };
      }
    });

  }
}

module.exports = User;
