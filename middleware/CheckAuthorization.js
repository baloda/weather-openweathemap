var {
  jwt: JWTConfig
} = require('./../config');

var jwt = require('jsonwebtoken');

const CheckAuthorization = (req, res, next) => {
  var error = new Error('Access token not found. Please login');
  error.code = 403;
  req.headers.xAccessToken =  req.headers.xAccessToken || req.headers.xaccesstoken;
  if (!req.headers.xAccessToken)
    next(error);
  jwt.verify(req.headers.xAccessToken, JWTConfig.secret,(err, decoded) => {
    if(err){
      error.message = "Please retry for login";
      next(error);
    }
    rdsClient.get(req.headers.xAccessToken,function(err, userId){
      if(err){
        error.message = "Please retry for login";
        next(error);
      }
      req.profile = decoded;
      next();
    })
  })
}

module.exports = CheckAuthorization;