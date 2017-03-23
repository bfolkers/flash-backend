const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  if (req.user === undefined) {
    res.json(false);
  } else {
    res.json(true);
  }
})

module.exports = router
