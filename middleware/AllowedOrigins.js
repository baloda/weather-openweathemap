let allowedOriginsArray = [
  'http://localhost',
  'http://localhost:3000'
]

let allowedOrigins = function () {
	return function (req, res, next) {
		let origin = req.headers.origin;
		if (allowedOriginsArray.indexOf(origin) > -1)
			res.setHeader('Access-Control-Allow-Origin', origin);
		else
			res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', "source, utoken, Origin,If-Modified-Since,Cache-Control,Pragma, X-Requested-With, Content-Type, Accept, Authorization, x-access-token, x-version, version, accept-version");
		res.setHeader('Access-Control-Expose-Headers', 'x-version');
		res.setHeader('Access-Control-Allow-Credentials', true);
		return next();
	}
}

module.exports = allowedOrigins;