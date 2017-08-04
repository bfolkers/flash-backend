const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('myMessage')
    .select('*')
    .then((result) => {
      res.json(result);
    });
});

router.post('/', (req, res) => {
  knex('myMessage').insert({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
