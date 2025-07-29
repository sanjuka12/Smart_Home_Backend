// routes/liveDataRoutes.js
const express = require('express');
const router = express.Router();
const { updateRealtimeData, fetchAllLiveData } = require('../controllers/liveDataController');

router.post('/realtimesolardata', updateRealtimeData);
router.get('/livedata', fetchAllLiveData);

module.exports = router;
