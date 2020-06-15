const mongoose = require('mongoose');
const Keyboard = require('./Keyboard');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: Keyboard,
    },
  ],

  favoriteSwitchType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema, 'users');
