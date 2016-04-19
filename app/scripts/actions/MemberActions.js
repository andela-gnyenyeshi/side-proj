(function() {
  'use strict';
  var Constants = require('../constants/MemberConstants');
  BaseActions = require('./BaseActions');

  module.exports = {
    registerMember: function(data) {
      BaseActions.post('api/member', data, Constants.REG_MEMBER);
    }
  };
})();
