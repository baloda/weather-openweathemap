var fse = require('fs-extra');

var configFileName = `${__dirname}/${environment}Config.json`;
var file = fse.readFileSync(configFileName);


configFile = file.toString();
configFile = JSON.parse(file);
//configFile.jwt.secret = fse.readFileSync(`${__dirname}/${configFile.jwt.keyFileName}`,'utf8');

module.exports = configFile;