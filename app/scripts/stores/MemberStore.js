(function() {
  'use strict';
  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/MemberConstants'),
    assign = require('object-assign'),
    BaseStore = require('./BaseStore');

    var MemberStore = assign({}, BaseStore, {
      regMember: null,
      confirmMember: null,

      setRegMember: function(member) {
        this.regMember = member;
        this.emitChange('set');
      },

      getRegMember: function() {
        return this.regMember;
      },

      setConfirm: function(member) {
        this.confirmMember = member;
        console.log('store', member);
        this.emitChange('emit');
      },

      getConfirm: function() {
        return this.confirmMember;
      }
    });

    AppDispatcher.register(function(action) {
      switch(action.actionType) {
        case Constants.REG_MEMBER:
        MemberStore.setRegMember(action.data);
        break;
        case Constants.CONFIRM_MEMBER:
        MemberStore.setConfirm(action.data);
        break;
      default:
      }
      return true;
    });
    module.exports = MemberStore;
})();
