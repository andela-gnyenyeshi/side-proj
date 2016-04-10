(function() {
  'use strict';

  var Register = require('../models/register');

  module.exports = {
    registerMember: function(req, res) {
      var register = new Register();
      register.name = req.body.name;
      register.age = req.body.age;
      register.phoneNumber = req.body.phone;
      register.maritalStatus = req.body.relationship;
      register.profession = req.body.profession;
      register.hobbies = req.body.hobbies;
      register.talent = req.body.talent;

      register.save(function(err, registered) {
        if (err) {
          return res.status(500).json({
            'error': 'Error registering member',
            err: err || err.errmessage
          });
        } else if (registered) {
          return res.status(200).json({
            'message': 'Successfully registered member',
            'registered': registered
          });
        }
      });
    },

    findAll: function(req, res) {
      Register.find(function(err, registerd) {
        if (err) {
          return res.status(500).json({
            'error': 'Error finding registered users',
            err: err || err.errmessage
          });
        }
      });
    }
  };
})();
