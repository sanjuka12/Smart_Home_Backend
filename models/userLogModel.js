// models/userLogModel.js
const admin = require('firebase-admin');
const db = admin.firestore();

const userLogCollection = db.collection('userlog');

const addUserLog = async ({ userName, role }) => {
  const now = new Date();

  const formattedDate = now.toLocaleDateString('en-GB'); // e.g., "29/05/2025"
  const loginTime = now.toLocaleTimeString(); // e.g., "14:40:33"
  const logout = ' - ';

  const data = {
    userName,
    role,
    date: formattedDate,
    login: loginTime,
    logout:logout
  };

  const docRef = await userLogCollection.add(data);
  return { id: docRef.id, ...data };
};

module.exports = {
  addUserLog,
};

exports.formatUserLog = function(snapshot) {
  const data = snapshot.val();
  if (!data) return [];

  return Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  }));
};
