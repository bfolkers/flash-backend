const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const myMessage = require('./routes/message');
const index = require('./routes/index');
require('dotenv').config();
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

app.use('/', index);
app.use('/messages', myMessage);
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
