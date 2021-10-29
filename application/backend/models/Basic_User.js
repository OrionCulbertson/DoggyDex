// models/Basic_User.js

const mongoose = require('mongoose');

const BasicUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  verifyEmail: {
    type: String,
    required: true
  },
  password01: {
    type: String,
    required: true
  },
  password02: {
    type: String,
    required: true
  },
  date: {type:Date,
    default: Date.now
  }
});

module.exports = mongoose.model('basicusers', BasicUserSchema);
// Ar01 : table
// Arg02 : User sign up template