const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('username')
  .leftJoin('deck', 'username.email', '=', 'deck.username_email')
  .leftJoin('subject', 'subject.id', '=', 'deck.subject_id')
  .select('deck.name as deck_name', 'username.email', 'username.fiveDeckBadge', 'username.perfectScore', 'deck.id as deck_id', 'subject.id as subject_id', 'subject.name as subject_name', 'username.name as name', 'userImage as userImage')
  .then(function (result) {
    res.json(result);
  });
});

router.get('/:email', function(req, res) {
  knex('username')
  .leftJoin('favorite', 'favorite.username_email', '=', 'username.email')
  .leftJoin('deck', 'username.email', '=', 'deck.username_email')
  .leftJoin('subject', 'subject.id', '=', 'deck.subject_id')
  // .select()
  .select('deck.name as deck_name', 'username.email', 'username.fiveDeckBadge', 'username.perfectScore', 'deck.id as deck_id', 'subject.id', 'subject.name as subject_name', 'username.name as name', 'userImage as userImage')
  .where('username.email', req.params.email)
  .then(function (result) {
    res.json(result);
  });
});

router.post('/', function(req, res){

  knex('username').insert({
    email: req.body.email,
    name: req.body.name,
    userImage: req.body.userImage,
    fiveDeckBadge: 0,
    perfectScore: 0,
    fiveFavorites: 0,
  }, 'email').then(function(result){
    res.json(result);
  });
});

router.patch('/:email', function(req, res){

knex('username').where('email', req.params.email).update({
  name: req.body.name,
})
.then(function(result){
  res.json(result)
});
});

router.delete('/:email', function(req, res){

  knex('username').where('email', req.params.email).del().then(function(result){
    res.json(result);
  });

});

module.exports = router;
