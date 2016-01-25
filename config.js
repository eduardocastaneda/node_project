'use strict';
var version = require('package.json').version;

module.exports = function() {
  return {
    version: version,
    hostname: 'www.minsida.se',
    pagename: 'Min sida',
  };
};