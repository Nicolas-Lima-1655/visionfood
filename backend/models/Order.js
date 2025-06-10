const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  item:     { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  quantity: Number,
  note:     String
});

const OrderSchema = new mongoose.Schema({
  restaurantCode: String,
  items:          [OrderItemSchema],
  createdAt:      { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
