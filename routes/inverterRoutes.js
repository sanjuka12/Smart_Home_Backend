const express = require('express');
const router = express.Router();
const { saveInverterData, fetchInverterData } = require('../controllers/inverterController');

// POST /api/inverter
router.post('/solarinverterdata', saveInverterData);
router.get('/solarinverterdata', fetchInverterData);

module.exports = router;