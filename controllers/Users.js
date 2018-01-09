var models = require('./../models');
var {
  jwt: JWTConfig
} = require('./../config');

var jwt = require('jsonwebtoken');

var {
  Users: usersModel
} = models;

const signin = (req) => {
    var {
      body
    } = req;
    var existingUser = null;
    if(!body.email || !body.password)
      throw Error('Missing parameters');
    return Promise.resolve().then(data=>{
      return usersModel.findOne({email: body.email});
    }).then(_existingUser => {
      existingUser = _existingUser;
      if(!existingUser)
        throw Error('No user found');
      return existingUser.isPasswordValid(body.password);
    }).then(status=>{
      if(!status) 
        throw Error('Invalid password');
      existingUser = JSON.parse(JSON.stringify(existingUser));

      delete existingUser.password;
      var xAccessToken = jwt.sign(existingUser, JWTConfig.secret, { 
        expiresIn: 60 * 60 
      });
      rdsClient.set(xAccessToken, existingUser._id, rdsClient.print);
      existingUser.xAccessToken = xAccessToken;
      return existingUser;
    }).catch(err=>{
      console.log(err);
      throw err;
    })
}

const signup = (req) => {
  var {
    body
  } = req;
  return Promise.resolve().then(() => {
    usr = new usersModel(body);
		return usr.save();
  })
}

const verifyOtp = (req) => {

}

const logout = (req) => {
  return new Promise((resolve, reject)=>{
    var _err = new Error('xAccessToen not found');
    rdsClient.del(req.headers.xAccessToken,function(err, data){
      if(err){
        _err.message = err.message;
        _err.status = 403;
        reject(_err);
      }
      resolve();
    })
  });
}


const Users = {
  signup,
  signin,
  verifyOtp,
  logout
};

module.exports = Users