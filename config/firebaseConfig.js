
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Check if database is accessible
(async () => {
  try {
    await db.collection("Login").limit(1).get(); // simple test query
    console.log("✅ Firestore DB Connected");
  } catch (error) {
    console.error("❌ Firestore DB Disconnected", error.message);
  }
})();

module.exports = db;

// const admin = require('firebase-admin');

// // Safety check: make sure all required env variables are present
// const privateKey = process.env.FIREBASE_PRIVATE_KEY;
// const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
// const projectId = process.env.FIREBASE_PROJECT_ID;

// if (!privateKey || !clientEmail || !projectId) {
//   console.error('❌ Missing Firebase environment variables');
//   throw new Error('Missing Firebase config.');
// }

// // Initialize Firebase only once
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId,
//       clientEmail,
//       privateKey: privateKey.replace(/\\n/g, '\n'),
//     }),
//   });
// }

// module.exports = admin.firestore();
