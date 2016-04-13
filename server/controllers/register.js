(function() {
  'use strict';

  var Register = require('../models/register');

  module.exports = {
    registerMember: function(req, res) {
      console.log('Registering');
      var register = new Register();
      register.name = req.body.name;
      register.age = req.body.age;
      register.phoneNumber = req.body.phone;
      register.maritalStatus = req.body.relationship;
      register.profession = req.body.profession;
      register.hobbies = req.body.hobbies;
      register.talent = req.body.talent;

      Register.find({
        name: req.body.name
      }, function(err, reg){
        if (err) {
          return res.status(500).json({
            err: err.errmessage || err
          });
        }
        else if (reg.length > 0) {
          return res.status(409).json({
            'message': 'Sorry, your name matches an existing member.'
          });
        } else if (reg.length === 0) {
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
        }
      });
    },

    findAll: function(req, res) {
      console.log('Finding');
      Register.find(function(err, registered) {
        console.log('REGISTERED', registered);
        if (err) {
          return res.status(500).json({
            'error': 'Error finding registered users',
            err: err || err.errmessage
          });
        } else {
          return res.status(200).json(registered);
        }
      });
    },

  };
})();
