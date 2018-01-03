var express = require('express');
var router = express.Router();

var {
  CheckAuthorization
} = require('./../middleware');

router.get('/', CheckAuthorization, (req, res, next) => {
  res.send('respond with a resource');
}).post('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;