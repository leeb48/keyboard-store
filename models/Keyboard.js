const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeyboardSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  featuredItem: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Keyboard', KeyboardSchema, 'keyboards');
