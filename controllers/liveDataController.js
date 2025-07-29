// controllers/liveDataController.js
const { updateLiveSolarData, getAllLiveData  } = require('../models/liveDataModel');


const updateRealtimeData = async (req, res) => {
  try {
    const { gridStatus, voltage, current, frequency } = req.body;

    if (!gridStatus || voltage === undefined || current === undefined || frequency === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const solarpower = current * voltage;

    await updateLiveSolarData({ gridStatus, voltage, current, frequency, solarpower });

    res.status(200).json({ message: 'Live data updated' });
  } catch (error) {
    console.error("Error updating live data:", error);
    res.status(500).json({ error: 'Failed to update live data' });
  }
};

async function fetchAllLiveData(req, res) {
  try {
    const data = await getAllLiveData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching live data:', error.message);
    res.status(500).json({ error: 'Failed to fetch live data' });
  }
}

module.exports = { updateRealtimeData, fetchAllLiveData };
