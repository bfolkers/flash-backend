var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var users = require('./routes/users');
passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/login/facebook/return',
  passReqToCallback : true,
  profileFields: ['id', 'displayName', 'emails']
  },
  function(accessToken, refreshToken, _, profile, done) {
    return done(null, profile);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
})

module.exports = passport
