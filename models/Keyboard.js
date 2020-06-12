const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeyboardSchema = Schema({
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
  featuredIten: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('keyboard', KeyboardSchema);
