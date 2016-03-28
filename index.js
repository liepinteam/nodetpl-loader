'use strict';
var NodeTplPlus = require('nodetpl-plus').default;

module.exports = function(source) {
  return new NodeTplPlus({
    library: 'commonjs'
  }).compile(source);
};