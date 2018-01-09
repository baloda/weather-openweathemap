var client = require('./redis');
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

global.environment = process.env.NODE_ENV;
global.rdsClient = client;
global.cError = ()=>{
  var __Error = new Error();
  return (message, statusCode)=>{
    __Error.message = message;
    if(statusCode) __Error.code = statusCode;
    return __Error;
  }
}