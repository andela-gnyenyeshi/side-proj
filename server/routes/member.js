(function() {
  'use strict';

  var Member = require('../controllers/members');

  module.exports = function(app) {
    app.post('/api/member', Member.createMember);
    app.delete('/api/delete/:member_id', Member.deleteMember);
  };
})();
