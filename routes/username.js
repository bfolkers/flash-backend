const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('username')
  .join('favorite', 'favorite.username_email', '=', 'username.email')
  .join('deck', 'favorite.username_email', '=', 'deck.username_email')
  .join('subject', 'subject.id', '=', 'deck.subject_id')
  .select('deck.name as deck_name', 'username.email', 'username.fiveDeckBadge', 'username.perfectScore', 'deck.id', 'subject.id', 'subject.name as subject_name', 'username.name as name')
  .then(function (result) {
    res.json(result);
  });
});

router.get('/:email', function(req, res) {
  knex('username')
  .join('favorite', 'favorite.username_email', '=', 'username.email')
  .join('deck', 'favorite.username_email', '=', 'deck.username_email')
  .join('subject', 'subject.id', '=', 'deck.subject_id')
  .select('deck.name as deck_name', 'username.email', 'username.fiveDeckBadge', 'username.perfectScore', 'deck.id', 'subject.id', 'subject.name as subject_name', 'username.name as name')
  .where('username.email', req.params.email)
  .then(function (result) {
    res.json(result);
  });
});

module.exports = router;
