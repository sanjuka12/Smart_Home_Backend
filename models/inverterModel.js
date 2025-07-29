const db = require('../config/firebaseConfig');

const addInverterData = async (data) => {
  const docRef = await db.collection('InverterData').add({
    timestamp: new Date(),
    ...data
  });
  return docRef.id;
};

const getAllInverterData = async () => {
  const snapshot = await db.collection('InverterData')
                           .orderBy('timestamp', 'asc')
                           .get();

  const data = [];

  snapshot.forEach(doc => {
    // Avoid the 'counter' document if you have one
    if (doc.id !== 'counter') {
      data.push({ id: doc.id, ...doc.data() });
    }
  });

  return data;
};



module.exports = { addInverterData, getAllInverterData };
