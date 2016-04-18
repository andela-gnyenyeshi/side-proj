(function() {
  'use strict';
  var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

  var BaseStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback, event) {
      this.on('change' || event, calback);
    },

    removeChangeListener: function(callback, event) {
      this.removeListener('change' || event, callback);
    },

    emitChange: function(callback, event) {
      this.emit('change' || event, callback);
    }
    
  });
})();
