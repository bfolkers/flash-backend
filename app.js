const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const myMessage = require('./routes/message');
const index = require('./routes/index');
// const users = require('./routes/users');
// const badge = require('./routes/badge');
// const subject = require('./routes/subject');
// const username = require('./routes/username');
// const deck = require('./routes/deck');
// const favorite = require('./routes/favorite');
// const flashcard = require('./routes/flashcard');
// const isLoggedIn = require('./routes/isLoggedIn')
require('dotenv').config();
const passport = require('./passport');
const cors = require('cors');
const app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard alpaca',
  saveUninitialized: true,
  resave: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/messages', myMessage);
// app.use('/users', users);
// app.use('/badge', badge);
// app.use('/subject', subject);
// app.use('/username', username);
// app.use('/deck', deck);
// app.use('/favorite', favorite);
// app.use('/flashcard', flashcard);
// app.use('/isLoggedIn', isLoggedIn);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
