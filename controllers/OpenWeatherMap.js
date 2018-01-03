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
    console.log(CONFIG.URL, options);
    return axios.get(CONFIG.URL, options)
  }
}
module.exports = OpenWeatherMap;