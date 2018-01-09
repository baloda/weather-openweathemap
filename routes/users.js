var express = require('express');
var router = express.Router();

var {
  Users: usersController
} = require('./../controllers');

var {
  CheckAuthorization
} = require('./../middleware');

router.post('/register', function (req, res, next) {
  usersController.signup(req).then(resp => {
    res.send({
      message: 'User created successfully',
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

router.post('/logout', CheckAuthorization, function (req, res, next) {
  usersController.logout(req).then(resp=>{
    res.send({
      message: 'logout',
      code: 200,
      status: 200
    });
  }).catch(err => {
    res.status((err.code || 403)).send({
      error: err.message,
      code: 403
    });
  })
});

module.exports = router;