const express = require('express');
const router = express.Router();
const statistics = require('../controllers/restaurants.controller');

router.get('/statistics',statistics.main);

module.exports = router;