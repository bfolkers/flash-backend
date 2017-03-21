const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('flashcard')
  .select()
  .then(function (result) {
    res.json(result);
  })
})

router.get('/:id', function(req, res) {
  knex('flashcard')
  .select()
  .where('id', req.params.id)
  .then(function (result) {
    res.json(result);
  })
})

router.post('/', function(req, res){

  knex('flashcard').insert({
    back: req.body.front,
    front: req.body.back,
    deck_id: knex('deck').where('name', req.body.name).select('id'),
  }, 'id').then(function(result){
    res.json(result);
  });
});

router.patch('/:id', function(req, res){

knex('flashcard').where('id', req.params.id).update({
  front: req.body.front,
  back: req.body.back,
})
.then(function(result){
  res.json(result)
  })
});

router.delete('/:id', function(req, res){

  knex('flashcard').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});

module.exports = router;
