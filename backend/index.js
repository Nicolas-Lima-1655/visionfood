require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const restaurantRoutes = require('./routes/restaurant');
const menuRoutes       = require('./routes/menu');
const orderRoutes      = require('./routes/order');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro MongoDB:', err));

app.use('/api/restaurant', restaurantRoutes);
app.use('/api/menu',       menuRoutes);
app.use('/api/order',      orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
