const Restaurant = require('../models/Restaurant');

function genCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

exports.create = async (req, res) => {
  try {
    const { name, description, address } = req.body;
    let code = genCode();
    // Garante unicidade
    while (await Restaurant.findOne({ code })) code = genCode();

    const newR = new Restaurant({ name, description, address, code });
    await newR.save();
    res.status(201).json({ code, name, description, address });
  } catch (e) {
    res.status(500).json({ message: 'Erro ao criar restaurante', error: e.message });
  }
};

exports.getByCode = async (req, res) => {
  const rest = await Restaurant.findOne({ code: req.params.code });
  if (!rest) return res.status(404).json({ message: 'Restaurante não encontrado' });
  res.json(rest);
};
