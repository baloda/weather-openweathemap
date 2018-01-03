var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	userId: {
    type: Schema.ObjectId,
    required: [true, "User Id is required"]
  },
  cityId: {
		type: String,
  },
	city: {
		type: String,
  },
  country: {
    type: String
  },
  weather: {
    type: Object
  },
	createdAt: {
		type: Date,
		default: Date.now()
	},
	updatedAt: {
		type: Date,
		default: Date.now()
	}
});

var CityWeather = mongoose.model('CityWeather', schema, 'CityWeather');


module.exports = CityWeather;