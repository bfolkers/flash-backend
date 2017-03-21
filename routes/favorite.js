const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('favorite')
  .select()
  .then(function (result) {
    res.json(result);
  });
});

router.post('/', function(req, res){

  knex('favorite').insert({
    username_email: req.body.email,
    deck_id: knex('deck').where('id', req.body.id).select('id'),
  }, 'id').then(function(result){
    res.json(result);
  });
});

router.delete('/:deck_id', function(req, res){

  knex('favorite')
  .where({
    deck_id: req.params.id,
    username_email: req.params.email
  })
  .del().then(function(result){
      res.json(result);
    });
  });

module.exports = router;
