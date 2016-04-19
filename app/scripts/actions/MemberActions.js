(function() {
  'use strict';
  var Constants = require('../constants/MemberConstants');
  BaseActions = require('./BaseActions');

  module.exports = {
    registerMember: function() {
      BaseActions.post('api/member', Costants.REG_MEMBER);
    }
  };
})();
