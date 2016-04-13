(function() {
  'use strict';

  var Register = require('../controllers/register');

  module.exports = function(app) {
    app.post('/api/register', Register.registerMember);
    app.get('/api/find', Register.findAll);
  };
})();
