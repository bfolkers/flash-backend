var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var users = require('./routes/users');
passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'https://rhinoflash-e4988.firebaseapp.com/login.html',
  passReqToCallback : true,
  profileFields: ['id', 'displayName', 'link', 'about_me', 'photos', 'emails']
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
})

module.exports = passport
