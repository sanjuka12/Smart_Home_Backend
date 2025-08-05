const express = require('express');
const router = express.Router();
const { saveInverterData, fetchInverterData } = require('../controllers/batterycontroller');

// POST /api/inverter
router.post('/batteryinverterdata', saveInverterData);
router.get('/batteryinverterdata', fetchInverterData);

module.exports = router;