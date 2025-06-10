const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/restaurantController');

router.post('/',  ctrl.create);
router.get('/:code', ctrl.getByCode);

module.exports = router;
