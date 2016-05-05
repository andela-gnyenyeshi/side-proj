(() => {
  'use strict';
  let Constants = require('../constants/MemberConstants'),
  BaseActions = require('./BaseActions');

  module.exports = {
    registerMmember: function(data) {
      BaseActions.post('api/member', data, Constants.REG_MEMBER);
    }
    confirmMember: function(data) {
      BaseActions.get('api/member/' + data, Constants.CONFIRM_MEMBER);
    }
  };
})();
