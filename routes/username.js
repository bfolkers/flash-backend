const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('username')
  // .join('deck', 'deck.username_email', '=', 'username.email')
  .select()
  // .where('username.email', req.params.id)
  .then(function (result) {
    res.json(result);
  })
})
module.exports = router;
