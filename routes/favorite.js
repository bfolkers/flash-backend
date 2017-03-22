const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('favorite')
  .select()
  .then(function (result) {
    res.json(result);
  });
});

router.get('/:username_email', function(req, res) {
  knex('favorite')
  .join('deck', 'favorite.deck_id', '=', 'deck.id')
  .select('favorite.username_email as email', 'deck.name as deck_name', 'deck.id as deck_id')
  .where('favorite.username_email', req.params.username_email)
  .then(function (result) {
    res.json(result);
  });
});

router.post('/', function(req, res){

  knex('favorite').insert({
    username_email: knex('username').where('email', req.body.email).select('email'),
    deck_id: knex('deck').where('id', req.body.id).select('id'),
  }, 'deck_id').then(function(result){
    res.json(result);
  });
});

router.delete('/', function(req, res){

  knex('favorite')
  .where({
    deck_id: req.body.id,
    username_email: req.body.email
  })
  .del().then(function(result){
      res.json(result);
    });
  });

module.exports = router;
