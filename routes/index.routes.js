const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const { detail } = require('../controllers/productsController');

/* Home */
router.get('/', indexController.index);
router.get('/detalle/:id', detail);

module.exports = router;
