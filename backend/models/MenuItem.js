const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  restaurantCode: { type: String, required: true },
  name:           { type: String, required: true },
  description:    String,
  price:          { type: Number, required: true },
  category:       String,
  imageUrl:       String
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
