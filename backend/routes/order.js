const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/orderController');

router.post('/',    ctrl.create);
router.get('/:id',  ctrl.getById);

module.exports = router;
