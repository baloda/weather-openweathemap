var express = require('express');
var router = express.Router();

var sample = require('./sample');
var users = require('./users');
var cityWeather = require('./cityWeather');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.use('/sample', sample);
router.use('/users', users);
router.use('/city-weather', cityWeather)

module.exports = router;