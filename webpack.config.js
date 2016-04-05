(function(){
  'use strict';
  var path = require('path'),
  webpack = require('webpack'),
  nodeModulesPath = path.resolve(__dirname, 'node_modules'),
  buildPath = path.resolve(__dirname, 'public'),
  mainPath = path.resolve(__dirname, 'app', 'app.js');

  module.exports = {
    entry: './app/scripts/trial.js',
    output: {
      filename: './public/js/bundle.js'
    },
    watch: true
  };
})();
