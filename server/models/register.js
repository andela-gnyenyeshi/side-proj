(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var registerSchema = new Schema({
    age: {
      type: Number,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    maritalStatus: {
      type: String,
      required: true
    },
    profession: {
      type: String,
      required: true
    },
    hobbies: {
      type: String,
      required: true
    },
    talent: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('Register', registerSchema);
})();
