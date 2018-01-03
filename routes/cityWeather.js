var express = require('express');
var router = express.Router();

var {
  CityWeather: CityWeatherController
} = require('./../controllers');



router.get('/auto-complete', function (req, res, next) {
  CityWeatherController.autoComplete(req).then(resp => {
    res.send(resp);
  }).catch(err => {
    res.send({
      error: err.message,
      code: 403
    });
  })
});

router.get('/:userId', function (req, res, next) {
  CityWeatherController.getByUserId(req).then(resp => {
    res.send(resp);
  }).catch(err => {
    if(err.code===11000) {err.message = 'User already exists'}
    res.send({
      error: err.message,
      code: 403
    });
  })
});



router.post('/', function (req, res, next) {
  CityWeatherController.post(req).then(resp=>{
    console.log(resp);
    res.send(resp);
  }).catch(err => {
    res.send({
      error: err.message,
      code: 403
    });
  })
});

module.exports = router;