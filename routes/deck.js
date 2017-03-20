const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('deck')
  .join('flashcard', 'deck.id', '=', 'flashcard.deck_id')
  .join('subject', 'subject.id', '=', 'deck.subject_id')
  .select('subject.name as subject', 'deck.username_email as email', 'flashcard.front', 'flashcard.back', 'deck.name')
  .then(function (result) {
    res.json(result);
  });
});

router.get('/:id', function(req, res) {
  knex('deck')
  .join('flashcard', 'deck.id', '=', 'flashcard.deck_id')
  .join('subject', 'subject.id', '=', 'deck.subject_id')
  .select('subject.name as subject', 'deck.username_email as email', 'flashcard.front', 'flashcard.back', 'deck.name')
  .where('deck.id', req.params.id)
  .then(function (result) {
    res.json(result);
  })
})

module.exports = router;
