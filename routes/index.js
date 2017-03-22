const express = require('express');
const router = express.Router();
const passport = require('../passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('hello');
});

// Render the login template
router.get('/login',
  function(req, res){
      res.render('login', { env: process.env });
  });

// Perform session logout and redirect to homepage
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('https://flashrhino.com');
});

// Perform the final stage of authentication and redirect to '/user'
router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: 'https://flashrhino.com/register.html' }),
  function(req, res) {
    const userEmail = req.user._json.email;
    // res.redirect(req.session.returnTo || 'http://flashrhino.com/dashboard.html?email=' + userEmail);
    res.redirect('http://flashrhino.com/dashboard.html?email=' + userEmail);
  });

module.exports = router;
