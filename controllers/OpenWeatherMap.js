var {
  openWeatherMap: CONFIG
} = require('./../config');
var axios = require('axios');

class OpenWeatherMap {

  constructor(body) {
    this.body = body;
  }

  fetch() {
    var options = {
      params: {
        APPID: CONFIG.APPID
      }
    }
    Object.assign(options, this.body)
    if (this.body.cityId)
      options.params.id = this.body.cityId
    if (this.body.city)
      options.params.q = this.body.city
    console.log(CONFIG.FORECAST, options);
    return axios.get(CONFIG.FORECAST, options)
  }
  weatherForeCastCase() {
    var mock = {
      "cod": "200",
      "message": 0.0024,
      "cnt": 39,
      "list": [{
          "dt": 1514948400,
          "main": {
            "temp": 281.87,
            "temp_min": 281.87,
            "temp_max": 283.973,
            "pressure": 1015.1,
            "sea_level": 1024.85,
            "grnd_level": 1015.1,
            "humidity": 100,
            "temp_kf": -2.1
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 8.22,
            "deg": 297.005
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-03 03:00:00"
        },
        {
          "dt": 1514959200,
          "main": {
            "temp": 282.57,
            "temp_min": 282.57,
            "temp_max": 284.147,
            "pressure": 1014.99,
            "sea_level": 1024.64,
            "grnd_level": 1014.99,
            "humidity": 100,
            "temp_kf": -1.58
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 6.42,
            "deg": 319.502
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-03 06:00:00"
        },
        {
          "dt": 1514970000,
          "main": {
            "temp": 282.3,
            "temp_min": 282.3,
            "temp_max": 283.349,
            "pressure": 1018.05,
            "sea_level": 1027.69,
            "grnd_level": 1018.05,
            "humidity": 100,
            "temp_kf": -1.05
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 7.85,
            "deg": 351.001
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-03 09:00:00"
        },
        {
          "dt": 1514980800,
          "main": {
            "temp": 281.64,
            "temp_min": 281.64,
            "temp_max": 282.17,
            "pressure": 1020.13,
            "sea_level": 1029.78,
            "grnd_level": 1020.13,
            "humidity": 100,
            "temp_kf": -0.53
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 6.91,
            "deg": 341.001
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-03 12:00:00"
        },
        {
          "dt": 1514991600,
          "main": {
            "temp": 281.369,
            "temp_min": 281.369,
            "temp_max": 281.369,
            "pressure": 1020.69,
            "sea_level": 1030.42,
            "grnd_level": 1020.69,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.63,
            "deg": 340.002
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-03 15:00:00"
        },
        {
          "dt": 1515002400,
          "main": {
            "temp": 280.672,
            "temp_min": 280.672,
            "temp_max": 280.672,
            "pressure": 1020.68,
            "sea_level": 1030.5,
            "grnd_level": 1020.68,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.05,
            "deg": 14.0007
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-03 18:00:00"
        },
        {
          "dt": 1515013200,
          "main": {
            "temp": 280.608,
            "temp_min": 280.608,
            "temp_max": 280.608,
            "pressure": 1021.21,
            "sea_level": 1031.09,
            "grnd_level": 1021.21,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.18,
            "deg": 46.0035
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-03 21:00:00"
        },
        {
          "dt": 1515024000,
          "main": {
            "temp": 281.179,
            "temp_min": 281.179,
            "temp_max": 281.179,
            "pressure": 1022.65,
            "sea_level": 1032.42,
            "grnd_level": 1022.65,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 2.93,
            "deg": 48.5032
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-04 00:00:00"
        },
        {
          "dt": 1515034800,
          "main": {
            "temp": 280.947,
            "temp_min": 280.947,
            "temp_max": 280.947,
            "pressure": 1021.78,
            "sea_level": 1031.44,
            "grnd_level": 1021.78,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 0.41,
            "deg": 150.001
          },
          "rain": {
            "3h": 0.24
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-04 03:00:00"
        },
        {
          "dt": 1515045600,
          "main": {
            "temp": 280.874,
            "temp_min": 280.874,
            "temp_max": 280.874,
            "pressure": 1020.86,
            "sea_level": 1030.21,
            "grnd_level": 1020.86,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }],
          "clouds": {
            "all": 88
          },
          "wind": {
            "speed": 1.6,
            "deg": 119.514
          },
          "rain": {
            "3h": 0.44
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-04 06:00:00"
        },
        {
          "dt": 1515056400,
          "main": {
            "temp": 281.076,
            "temp_min": 281.076,
            "temp_max": 281.076,
            "pressure": 1021.67,
            "sea_level": 1031.11,
            "grnd_level": 1021.67,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }],
          "clouds": {
            "all": 36
          },
          "wind": {
            "speed": 2.91,
            "deg": 67.502
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-04 09:00:00"
        },
        {
          "dt": 1515067200,
          "main": {
            "temp": 281.692,
            "temp_min": 281.692,
            "temp_max": 281.692,
            "pressure": 1022.27,
            "sea_level": 1031.9,
            "grnd_level": 1022.27,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 80
          },
          "wind": {
            "speed": 5.66,
            "deg": 57.0001
          },
          "rain": {
            "3h": 0.03
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-04 12:00:00"
        },
        {
          "dt": 1515078000,
          "main": {
            "temp": 281.417,
            "temp_min": 281.417,
            "temp_max": 281.417,
            "pressure": 1022.32,
            "sea_level": 1031.96,
            "grnd_level": 1022.32,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 6.31,
            "deg": 58.0013
          },
          "rain": {
            "3h": 0.04
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-04 15:00:00"
        },
        {
          "dt": 1515088800,
          "main": {
            "temp": 281.145,
            "temp_min": 281.145,
            "temp_max": 281.145,
            "pressure": 1022.05,
            "sea_level": 1031.83,
            "grnd_level": 1022.05,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 6.16,
            "deg": 53.5003
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-04 18:00:00"
        },
        {
          "dt": 1515099600,
          "main": {
            "temp": 280.927,
            "temp_min": 280.927,
            "temp_max": 280.927,
            "pressure": 1021.69,
            "sea_level": 1031.33,
            "grnd_level": 1021.69,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }],
          "clouds": {
            "all": 80
          },
          "wind": {
            "speed": 6.1,
            "deg": 52.5004
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-04 21:00:00"
        },
        {
          "dt": 1515110400,
          "main": {
            "temp": 281.122,
            "temp_min": 281.122,
            "temp_max": 281.122,
            "pressure": 1022.14,
            "sea_level": 1031.81,
            "grnd_level": 1022.14,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }],
          "clouds": {
            "all": 88
          },
          "wind": {
            "speed": 5.41,
            "deg": 53.0016
          },
          "rain": {
            "3h": 0.005
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-05 00:00:00"
        },
        {
          "dt": 1515121200,
          "main": {
            "temp": 281.263,
            "temp_min": 281.263,
            "temp_max": 281.263,
            "pressure": 1019.85,
            "sea_level": 1029.57,
            "grnd_level": 1019.85,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }],
          "clouds": {
            "all": 88
          },
          "wind": {
            "speed": 4.76,
            "deg": 49.5013
          },
          "rain": {
            "3h": 0.065
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-05 03:00:00"
        },
        {
          "dt": 1515132000,
          "main": {
            "temp": 280.502,
            "temp_min": 280.502,
            "temp_max": 280.502,
            "pressure": 1018.27,
            "sea_level": 1027.98,
            "grnd_level": 1018.27,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 3.22,
            "deg": 49.0001
          },
          "rain": {
            "3h": 0.74
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-05 06:00:00"
        },
        {
          "dt": 1515142800,
          "main": {
            "temp": 279.785,
            "temp_min": 279.785,
            "temp_max": 279.785,
            "pressure": 1017.48,
            "sea_level": 1027.16,
            "grnd_level": 1017.48,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 3.71,
            "deg": 28.5064
          },
          "rain": {
            "3h": 1.3
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-05 09:00:00"
        },
        {
          "dt": 1515153600,
          "main": {
            "temp": 279.62,
            "temp_min": 279.62,
            "temp_max": 279.62,
            "pressure": 1016.68,
            "sea_level": 1026.28,
            "grnd_level": 1016.68,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 4.36,
            "deg": 22.0009
          },
          "rain": {
            "3h": 0.71
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-05 12:00:00"
        },
        {
          "dt": 1515164400,
          "main": {
            "temp": 280.021,
            "temp_min": 280.021,
            "temp_max": 280.021,
            "pressure": 1015.31,
            "sea_level": 1024.88,
            "grnd_level": 1015.31,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 4.81,
            "deg": 16.0012
          },
          "rain": {
            "3h": 0.53
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-05 15:00:00"
        },
        {
          "dt": 1515175200,
          "main": {
            "temp": 280.539,
            "temp_min": 280.539,
            "temp_max": 280.539,
            "pressure": 1014.53,
            "sea_level": 1024.16,
            "grnd_level": 1014.53,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 56
          },
          "wind": {
            "speed": 6.32,
            "deg": 19.5003
          },
          "rain": {
            "3h": 0.11
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-05 18:00:00"
        },
        {
          "dt": 1515186000,
          "main": {
            "temp": 280.522,
            "temp_min": 280.522,
            "temp_max": 280.522,
            "pressure": 1014.86,
            "sea_level": 1024.44,
            "grnd_level": 1014.86,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.95,
            "deg": 14.0005
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-05 21:00:00"
        },
        {
          "dt": 1515196800,
          "main": {
            "temp": 281.11,
            "temp_min": 281.11,
            "temp_max": 281.11,
            "pressure": 1015.56,
            "sea_level": 1025.25,
            "grnd_level": 1015.56,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.72,
            "deg": 330.507
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-06 00:00:00"
        },
        {
          "dt": 1515207600,
          "main": {
            "temp": 282.39,
            "temp_min": 282.39,
            "temp_max": 282.39,
            "pressure": 1014.86,
            "sea_level": 1024.49,
            "grnd_level": 1014.86,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.94,
            "deg": 255.501
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-06 03:00:00"
        },
        {
          "dt": 1515218400,
          "main": {
            "temp": 283.995,
            "temp_min": 283.995,
            "temp_max": 283.995,
            "pressure": 1013.78,
            "sea_level": 1023.28,
            "grnd_level": 1013.78,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.62,
            "deg": 283.504
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-06 06:00:00"
        },
        {
          "dt": 1515229200,
          "main": {
            "temp": 284.306,
            "temp_min": 284.306,
            "temp_max": 284.306,
            "pressure": 1016.26,
            "sea_level": 1025.76,
            "grnd_level": 1016.26,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.22,
            "deg": 9.00476
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-06 09:00:00"
        },
        {
          "dt": 1515240000,
          "main": {
            "temp": 283.084,
            "temp_min": 283.084,
            "temp_max": 283.084,
            "pressure": 1019.61,
            "sea_level": 1029.13,
            "grnd_level": 1019.61,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 56
          },
          "wind": {
            "speed": 6.01,
            "deg": 42.5008
          },
          "rain": {
            "3h": 0.08
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-06 12:00:00"
        },
        {
          "dt": 1515250800,
          "main": {
            "temp": 282.453,
            "temp_min": 282.453,
            "temp_max": 282.453,
            "pressure": 1020.89,
            "sea_level": 1030.61,
            "grnd_level": 1020.89,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.22,
            "deg": 61.0003
          },
          "rain": {
            "3h": 0.0099999999999998
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-06 15:00:00"
        },
        {
          "dt": 1515261600,
          "main": {
            "temp": 282.363,
            "temp_min": 282.363,
            "temp_max": 282.363,
            "pressure": 1022.38,
            "sea_level": 1032.17,
            "grnd_level": 1022.38,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.02,
            "deg": 85.5009
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-06 18:00:00"
        },
        {
          "dt": 1515272400,
          "main": {
            "temp": 282.316,
            "temp_min": 282.316,
            "temp_max": 282.316,
            "pressure": 1023.9,
            "sea_level": 1033.55,
            "grnd_level": 1023.9,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.97,
            "deg": 71.0018
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-06 21:00:00"
        },
        {
          "dt": 1515283200,
          "main": {
            "temp": 282.699,
            "temp_min": 282.699,
            "temp_max": 282.699,
            "pressure": 1026.02,
            "sea_level": 1035.57,
            "grnd_level": 1026.02,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 5.76,
            "deg": 61.501
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-07 00:00:00"
        },
        {
          "dt": 1515294000,
          "main": {
            "temp": 282.965,
            "temp_min": 282.965,
            "temp_max": 282.965,
            "pressure": 1026.04,
            "sea_level": 1035.46,
            "grnd_level": 1026.04,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.86,
            "deg": 80.5088
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-07 03:00:00"
        },
        {
          "dt": 1515304800,
          "main": {
            "temp": 283.707,
            "temp_min": 283.707,
            "temp_max": 283.707,
            "pressure": 1025.42,
            "sea_level": 1034.82,
            "grnd_level": 1025.42,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }],
          "clouds": {
            "all": 24
          },
          "wind": {
            "speed": 3.51,
            "deg": 105.502
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-01-07 06:00:00"
        },
        {
          "dt": 1515315600,
          "main": {
            "temp": 284.718,
            "temp_min": 284.718,
            "temp_max": 284.718,
            "pressure": 1026.04,
            "sea_level": 1035.41,
            "grnd_level": 1026.04,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 3.47,
            "deg": 135.001
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-07 09:00:00"
        },
        {
          "dt": 1515326400,
          "main": {
            "temp": 286.229,
            "temp_min": 286.229,
            "temp_max": 286.229,
            "pressure": 1025.15,
            "sea_level": 1034.85,
            "grnd_level": 1025.15,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.92,
            "deg": 201.003
          },
          "rain": {
            "3h": 0.03
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-07 12:00:00"
        },
        {
          "dt": 1515337200,
          "main": {
            "temp": 285.817,
            "temp_min": 285.817,
            "temp_max": 285.817,
            "pressure": 1024.27,
            "sea_level": 1033.82,
            "grnd_level": 1024.27,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }],
          "clouds": {
            "all": 92
          },
          "wind": {
            "speed": 6.36,
            "deg": 246.001
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-07 15:00:00"
        },
        {
          "dt": 1515348000,
          "main": {
            "temp": 285.405,
            "temp_min": 285.405,
            "temp_max": 285.405,
            "pressure": 1022.65,
            "sea_level": 1032.18,
            "grnd_level": 1022.65,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }],
          "clouds": {
            "all": 20
          },
          "wind": {
            "speed": 8.16,
            "deg": 242.504
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-07 18:00:00"
        },
        {
          "dt": 1515358800,
          "main": {
            "temp": 286.35,
            "temp_min": 286.35,
            "temp_max": 286.35,
            "pressure": 1020.6,
            "sea_level": 1030.1,
            "grnd_level": 1020.6,
            "humidity": 100,
            "temp_kf": 0
          },
          "weather": [{
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }],
          "clouds": {
            "all": 12
          },
          "wind": {
            "speed": 8.21,
            "deg": 232.501
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-01-07 21:00:00"
        }
      ],
      "city": {
        "id": 1851632,
        "name": "Shuzenji",
        "coord": {
          "lat": 34.9667,
          "lon": 138.9333
        },
        "country": "JP"
      }
    }
    return mock;
  }
}
module.exports = OpenWeatherMap;
