const express = require('express');

const router = express.Router();

router.get('/other-router', (req, res, next) => {
  console.log('I am in the other router');
  res.send('hello from other router');
});

module.exports = router;
