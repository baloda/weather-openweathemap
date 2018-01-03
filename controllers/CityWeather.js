var bp = require('bluebird');
var moment = require('moment');
var models = require('./../models');
var owm = require('./OpenWeatherMap');

var {
  CityWeather: CityWeatherModel
} = models;

const formatQueryFilter = (req) => {
  var defaultFilter = {
    where: {},
    limit: 25,
    skip: 0,
    sort: {
      _id: -1
    }
  };
  let filter = (req.query.filter && typeof req.query.filter == 'string' && JSON.parse(req.query.filter)) || (req.query.filter && typeof req.query.filter == 'object' && req.query.filter) || defaultFilter;
  Object.keys(defaultFilter).forEach(key => {
    filter[key] = filter[key] || defaultFilter[key];
  })
  req.query.filter = filter;
}
const get = (req) => {
  formatQueryFilter(req);
  var {
    filter
  } = req.query;

  return CityWeatherModel.find(filter.where).
  sort(filter.sort).
  skip(filter.skip).
  limit(filter.limit).
  exec();
  //return CityWeatherModel.find(filter);
  //return Promise.resolve([]);
}

const post = (req) => {
  var {
    body
  } = req;
  var _own = new owm(body);

  return _own.fetch().then(resp => {
    //console.log(resp.data);
    resp = resp.data;
    /*
    var pktWeather = {
      userId: body.userId,
      cityId: resp.id,
      city: resp.name,
      country: (resp.sys && resp.sys.country || null),
      weather: resp
    }
    */
    resp.list = resp.list || [];
    var weather = {}
    resp.list.forEach((item, index) => {
      var todayDate = moment(),
        tomorrow = moment().add(1, 'days'),
        nextTomorrow = moment().add(2, 'days'),
        dt = moment(item.dt_txt);
      // console.log('----------------');
      // console.log(todayDate.diff(dt, 'hours'));
      // console.log(tomorrow.diff(dt, 'hours'))
      // console.log(nextTomorrow.diff(dt, 'hours'));

      if (todayDate.diff(dt, 'hours') >= 2 && todayDate.diff(dt, 'hours') <= 6)
        weather.today = item;
      else if (tomorrow.diff(dt, 'hours') >= 2 && tomorrow.diff(dt, 'hours') <= 6)
        weather.tomorrow = item;
      else if (nextTomorrow.diff(dt, 'hours') >= 2 && nextTomorrow.diff(dt, 'hours') <= 6) {
        weather.dayAfterTomorrow = item;
      } else {
        //delete resp.list[index];
      }
    })
    var pktForecast = {
      userId: body.userId,
      cityId: resp.city.id,
      city: resp.city.name,
      country: resp.city.country,
      weather: weather
    }
    var _cweather = new CityWeatherModel(pktForecast);
    return _cweather.save().then((data) => data);
  }).catch(err => {
    console.log(err);
    return {};
  })
}

const getByUserId = (req) => {
  if (!req.params.userId) throw new cError("Missing parameters", 422);
  req.query.filter = {
    where: {
      userId: req.params.userId
    }
  }
  return get(req);
}

const autoComplete = (req) => {
  // filter={"where":{"city":{ "$regex": "jaipur", "$options": "i" }}}
  formatQueryFilter(req);
  var {
    filter
  } = req.query;
  return CityWeatherModel.distinct('cityId', filter.where).then(cityIds => {
    cityIds = (cityIds && JSON.parse(JSON.stringify(cityIds))) || [];
    var promiseArray = [];
    cityIds.forEach(cityId => {
      promiseArray.push(CityWeatherModel.findOne({
        'cityId': cityId
      }).select('cityId city country -_id').exec())
    })
    return bp.map(promiseArray, (promise) => {
      return promise;
    }, {
      concurrency: 50
    })
  }).then(results => {
    return results;
  })
}

var weatherTestCase = {
  coord: {
    lon: 75.82,
    lat: 26.92
  },
  weather: [{
    id: 711,
    main: 'Smoke',
    description: 'smoke',
    icon: '50n'
  }],
  base: 'stations',
  main: {
    temp: 292.15,
    pressure: 1013,
    humidity: 30,
    temp_min: 292.15,
    temp_max: 292.15
  },
  visibility: 2000,
  wind: {
    speed: 0.5
  },
  clouds: {
    all: 0
  },
  dt: 1514811600,
  sys: {
    type: 1,
    id: 7814,
    message: 0.0026,
    country: 'IN',
    sunrise: 1514771154,
    sunset: 1514808905
  },
  id: 1269515,
  name: 'Jaipur',
  cod: 200
}
const CityWeather = {
  get,
  post,
  getByUserId,
  autoComplete
};

module.exports = CityWeather
