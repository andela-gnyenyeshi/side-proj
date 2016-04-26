(function() {
  'use strict';

  var Member = require('../models/members');

  module.exports = {
    createMember: function(req, res) {
      var member = new Member();
      member.name = req.body.name;
      member.isMember = req.body.member;

      Member.find({
        name: member.name
      }, function(err, exist) {
        if(exist.length > 0) {
          return res.status(409).json({
            'message': 'Sorry, this member already exists'
          });
        } else if (exist.length === 0) {
          member.save(function(err, member) {
            if (err) {
              return res.status(500).json({
                'error': 'Error saving new Member',
                err: err || err.errmessage
              });
            } else if (member) {
              return res.status(200).json({
                'message': 'Successfully created a new Member',
                'member': member
              });
            }
          });
        }
      });
    },

    findMember: function(req, res) {
      
    },

    deleteMember: function(req, res) {
      Member.findById(req.params.member_id, function(err, deleted) {
        if (err) {
          return res.status(500).json({
            'error': 'Error deleting the member',
            err: err || err.errmessage
          });
        } else if (deleted) {
          return res.status(200).json({
            'message': 'Successfully deleted Member',
            'deleted': deleted
          });
        }
      });
    }
  };
})();
