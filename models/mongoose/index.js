// Using Node.js `require()`
const mongoose = require('mongoose');
var config = require('./../../config');
var {
	datasource
} = config;

mongoose.connection.on('connected', function () {
	console.log('Mongodb Connected to ' + mongodbURI());
});
mongoose.connection.on('error', function (err) {
	console.log('Mongodb connection error: ' + err.message);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongodb connection disconnected');
});
process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('Mongodb terminated through app termination');
		process.exit(0);
	});
});
const mongodbURI = function () {
	var {
		mongodb: mongodbConfig
	} = datasource;
	return mongodbConfig.dbURL + ":" + mongodbConfig.port + "/" + mongodbConfig.databaseName;
}

mongoose.connect(mongodbURI());


var Users = require('./Users');
var CityWeather = require('./CityWeather');

module.exports = {
	Users,
	CityWeather
}