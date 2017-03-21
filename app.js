var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./routes/index');
var users = require('./routes/users');
var badge = require('./routes/badge');
var subject = require('./routes/subject');
var username = require('./routes/username');
var deck = require('./routes/deck');
var favorite = require('./routes/favorite');
var flashcard = require('./routes/flashcard');
require('dotenv').config();
var passport = require('./passport');
var cors = require('cors');
var axios = require('axios');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard alpaca',
  saveUninitialized: true,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/badge', badge);
app.use('/subject', subject);
app.use('/username', username);
app.use('/deck', deck);
app.use('/favorite', favorite);
app.use('/flashcard', flashcard);

app.get('/login',
  function(req, res){
    res.redirect('https://rhinoflash-e4988.firebaseapp.com/login.html');
  });

app.get('/login/facebook',
  passport.authenticate('facebook', {scope: ['email']}));

app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: 'https://rhinoflash-e4988.firebaseapp.com/login.html' }),
  function(req, res) {
    const userEmail = req.user._json.email;
    const userName = req.user._json.name;
    axios.post('https://flash-backend.herokuapp.com/username', {name: userName, email: userEmail})
      .then(function(res) {
        console.log(res);
        // res.redirect('https://rhinoflash-e4988.firebaseapp.com/dashboard.html?email=' + userEmail);
      })
      .catch(function(err) {
        console.log(err);
        // res.redirect('https://rhinoflash-e4988.firebaseapp.com/dashboard.html?email=' + userEmail);
      })
      // res.status(200).send('Yes!')
    res.redirect('https://rhinoflash-e4988.firebaseapp.com/dashboard.html?email=' + userEmail);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
