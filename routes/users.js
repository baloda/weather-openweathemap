var express = require('express');
var router = express.Router();

var {
  Users: usersController
} = require('./../controllers');

router.post('/signup', function (req, res, next) {
  usersController.signup(req).then(resp => {
    res.send({
      message: 'created',
      code: 202
    });
  }).catch(err => {
    if(err.code===11000) {err.message = 'User already exists'}
    res.send({
      error: err.message,
      code: 403
    });
  })
});

router.post('/signin', function (req, res, next) {
  usersController.signin(req).then(resp=>{
    res.send({
      resp
    });
  }).catch(err => {
    res.send({
      error: err.message,
      code: 403
    });
  })
});

router.post('/otp-verify', function (req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;