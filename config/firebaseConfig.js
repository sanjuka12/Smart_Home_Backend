
// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const db = admin.firestore();

// // Check if database is accessible
// (async () => {
//   try {
//     await db.collection("Login").limit(1).get(); // simple test query
//     console.log("✅ Firestore DB Connected");
//   } catch (error) {
//     console.error("❌ Firestore DB Disconnected", error.message);
//   }
// })();

// module.exports = db;


const admin = require("firebase-admin");
require("dotenv").config();

// 🧠 Decode the base64 and parse the JSON
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf-8")
);

// ✅ Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// ✅ Export Firestore database
const db = admin.firestore();

module.exports = db;



