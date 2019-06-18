//installed consolidate and swig
const express = require('express');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();


//for body parser
app.use(express.urlencoded( {extended : false}));

//serve static files
app.set(express.static(path.join(__dirname, 'public')));

var cons = require('consolidate'),
  swig= require('swig');
//template engine
app.engine('.html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','html');

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/profile', function(req, res) {
    res.render('profile');
});


// set up server
app.listen(3000, ()=> {
  console.log("server started on port 3000");
});

module.exports = app;
