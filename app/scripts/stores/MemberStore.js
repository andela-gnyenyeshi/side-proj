(function() {
  'use strict';
  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/MemberConstants'),
    assign = require('object-assign'),
    BaseStore = require('./BaseStore');

    var MemberStore = assign({}, BaseStore, {
      regMember: null,

      setRegMember: function(member) {
        this.regMember = member;
      },

      getRegMember: function() {
        return this.regMember;
      }
    });

    AppDispatcher.register(function(action) {
      switch(action.actionType) {
        case Constants.REG_MEMBER:
        MemberStore.setRegMember(action.actionType);
        break;
      }
    });
})();
