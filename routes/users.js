var express = require('express');
var router = express.Router();

var {
  Users: usersController
} = require('./../controllers');

router.post('/register', function (req, res, next) {
  usersController.signup(req).then(resp => {
    res.send({
      message: 'created',
      code: 202
    });
  }).catch(err => {
    if(err.code===11000) {err.code = 403;err.message = 'User already exists'}
    res.status((err.code || 403)).send({
      error: err.message,
      code: 403
    });
  })
});

router.post('/login', function (req, res, next) {
  usersController.signin(req).then(resp=>{
    res.send({
      data: resp
    });
  }).catch(err => {
    res.status((err.code ||403)).send({
      error: err.message,
      code: 403
    });
  })
});

router.post('/otp-verify', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/logout', function (req, res, next) {
  usersController.logout(req).then(resp=>{
    res.send({
      message: 'logout',
      code: 200
    });
  }).catch(err => {
    res.status((err.code || 403)).send({
      error: err.message,
      code: 403
    });
  })
});

module.exports = router;