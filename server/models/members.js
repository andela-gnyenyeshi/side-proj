(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  //Member Schema
  var memberSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    isMember: {
      type: Boolean,
      required: true
    }
  });

  module.exports = mongoose.model('Member', memberSchema);
})();
