var express = require('express');
var router = express.Router();

module.exports = function(app) {
  require('./member')(app);
  require('./register')(app);
  app.get('*', function(req, res) {
    res.sendFile('index.html', {
      root: './public/'
    });
  });
};
