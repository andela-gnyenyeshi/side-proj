(function(){
  'use strict';
  var EventEmitter = require('events').EventEmitter,
  assign = require('object-assign');

  var BaseStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function() {},
    removeChangeListener: function() {},
    emitChange: function() {}
  });
})();
