const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('deck')
  .select()
  .then(function (result) {
    res.json(result);
  });
});

router.get('/:id', function(req, res) {
  knex('deck')
  .leftJoin('flashcard', 'deck.id', '=', 'flashcard.deck_id')
  .leftJoin('subject', 'subject.id', '=', 'deck.subject_id')
  .select('subject.name as subject', 'deck.username_email as email', 'flashcard.front', 'flashcard.back', 'deck.name as deck_name')
  .where('deck.id', req.params.id)
  .then(function (result) {
    res.json(result);
  })
})

router.post('/', function(req, res){

  knex('deck').insert({
    name: req.body.name,
    username_email: req.body.email,
    subject_id: knex('subject').where('name', req.body.subject).select('id'),
  }, 'id').then(function(result){
    res.json(result);
  });
});

router.patch('/:id', function(req, res){

knex('deck').where('id', req.params.id).update({
  name: req.body.name,
  subject_id: knex('subject').where('name', req.body.subject).select('id'),
})
.then(function(result){
  res.json(result)
  })
});

router.delete('/:id', function(req, res){

  knex('deck').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});

module.exports = router;
