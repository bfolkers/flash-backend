const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('username')
  .select()
  .then(function (result) {
    res.json(result);
  })
})
module.exports = router;
