const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const index = require('./routes/index');
const users = require('./routes/users');
const badge = require('./routes/badge');
const subject = require('./routes/subject');
const username = require('./routes/username');
const deck = require('./routes/deck');
const favorite = require('./routes/favorite');
const flashcard = require('./routes/flashcard');
require('dotenv').config();
const passport = require('./passport');
const cors = require('cors');
const axios = require('axios');
const app = express();

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
  passport.authenticate('facebook', { failureRedirect: 'https://flashrhino.com/login.html' }),
  function(req, res) {
    const userEmail = req.user._json.email;
    const userName = req.user._json.name;
    axios.post('https://rhinocards.herokuapp.com/username', {name: userName, email: userEmail})
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      })
    res.status(200).cookie('token', req.sessionID).redirect('https://flashrhino.com/dashboard.html?email=' + userEmail);
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
