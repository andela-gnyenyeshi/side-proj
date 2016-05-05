(function() {
  'use strict';
  var Constants = require('../constants/MemberConstants');
  BaseActions = require('./BaseActions');

  var MemberActions = {
    registerMember: function(data) {
      BaseActions.post('api/member', data, Constants.REG_MEMBER);
    },
    confirmMember: function(data) {
      console.log('Confirmed');
      BaseActions.get('api/member/' + data, Constants.CONFIRM_MEMBER);
    }
  };

  module.exports = MemberActions;
})();
