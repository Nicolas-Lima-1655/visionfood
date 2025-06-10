const Order = require('../models/Order');

exports.create = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ orderId: order._id });
  } catch (e) {
    res.status(400).json({ message: 'Erro ao criar pedido', error: e.message });
  }
};

exports.getById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('items.item');
  if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
  res.json(order);
};
