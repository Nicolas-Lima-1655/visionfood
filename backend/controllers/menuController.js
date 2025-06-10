const MenuItem = require('../models/MenuItem');

exports.getAll = async (req, res) => {
  const filter = { restaurantCode: req.query.code };
  if (req.query.category) filter.category = req.query.category;
  const list = await MenuItem.find(filter);
  res.json(list);
};

exports.create = async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ message: 'Erro ao salvar item', error: e.message });
  }
};
