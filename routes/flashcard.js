const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('flashcard')
  .select()
  .then(function (result) {
    res.json(result);
  })
})
module.exports = router;

router.post('/', function(req, res){

  knex('flashcard').insert({
    back: req.body.front,
    front: req.body.back,
    deck_id: knex('deck').where('name', req.body.name).select('id'),
  }, 'id').then(function(result){
    res.json(result);
  });
});
