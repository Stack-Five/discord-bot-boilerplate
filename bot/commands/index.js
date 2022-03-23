// ** Prepares commands in this directory for deployment. DO NOT MODIFY! **

const glob = require('glob');
const path = require('path');

const commands = [];

glob.sync('bot/commands/*.js').forEach( function(file) {
  if (file.indexOf('index.js') === -1) {
    commands.push(require( path.resolve( file ) ));
  }
});

console.log(commands);
module.exports = commands;
