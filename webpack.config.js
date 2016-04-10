(function() {
  'use strict';
  var path = require('path'),
    webpack = require('webpack'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'public'),
    mainPath = path.resolve(__dirname, 'app', 'app.js');

  module.exports = {
    entry: ['./app/scripts/app.jsx', './app/styles/style.css'],
    output: {
      filename: './public/js/bundle.js'
    },
    watch: true,

    module: {
      preLoaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }],
      loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(jpg|jpeg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?=100000'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.(ttf|eot)$/,
        loader: 'url-loader'
      }]
    }
  };
})();
