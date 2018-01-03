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
    if(!body.email || !body.password)
      throw Error('Missing parameters');
    return Promise.resolve().then(data=>{
      return usersModel.findOne({email: body.email});
    }).then(existingUser => {
      if(!existingUser)
        throw Error('No user found');
      if(!existingUser.isPasswordValid(existingUser.password)) 
        throw Error('Invalid password');
      existingUser = JSON.parse(JSON.stringify(existingUser));
      
      delete existingUser.password;
      var xAccessToken = jwt.sign(existingUser, JWTConfig.secret, { 
        expiresIn: 60 * 60 
      });

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
  return Promise.resolve();
}


const Users = {
  signup,
  signin,
  verifyOtp,
  logout
};

module.exports = Users