// ** Prepares events in this directory for deployment. DO NOT MODIFY! **

const glob = require('glob');
const path = require('path');
const { getEventTypeFromPath } = require('../utilities');

const events = {};

glob.sync(`${__dirname}/**/*.js`).forEach( function(file) {
  if (file.indexOf('index.js') === -1) {
    const eventType = getEventTypeFromPath(file, __dirname);

    if (!events[eventType]) events[eventType] = [];

    events[eventType].push(require( path.resolve( file ) ));
  }
});

module.exports = events;
