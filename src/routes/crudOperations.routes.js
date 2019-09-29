const express = require('express');
const router = express.Router();
const createOperation = require('../controllers/create.controller');
const readOperation = require('../controllers/read.controller');
const updateOperation = require('../controllers/update.controller');
const deleteOperation = require('../controllers/delete.controller');

router.post('/create',createOperation.main);
router.post('/read',readOperation.main);
router.post('/update',updateOperation.main);
router.post('/delete',deleteOperation.main);

module.exports = router;