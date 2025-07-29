// models/liveDataModel.js
const db = require('../config/firebaseConfig');

const updateLiveSolarData = async (data) => {
  const docRef = db.collection('realtimesolardata').doc('latest'); // fixed document
  await docRef.set({
    timestamp: new Date(),
    ...data
  });
};

async function getAllLiveData() {
  try {
    const snapshot = await db.collection('realtimesolardata').get();

    const data = [];
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = { updateLiveSolarData, getAllLiveData };
