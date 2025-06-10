const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  address:     { type: String },
  code:        { type: String, unique: true, required: true },
  createdAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
