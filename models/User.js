const mongoose = require('mongoose');
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
      ref: 'keyboard',
    },
  ],

  favoriteSwitchType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', UserSchema);
