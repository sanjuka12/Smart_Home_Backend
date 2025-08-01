const express = require("express");
const cors = require("cors");
const app = express();

const loginRoutes = require("./routes/loginRoutes");
const userLogRoutes = require("./routes/userLogRoutes");
const inverterRoutes = require('./routes/inverterRoutes');
const liveDataRoutes = require('./routes/liveDataRoutes');
const inverterListRoutes = require('./routes/inverterListRoutes');


// ✅ Enable CORS for both local frontend & Vercel frontend
app.use(cors({
  origin: [
    "http://localhost:3001", // local React frontend
    "https://smart-home-frontend-three.vercel.app" // deployed Vercel frontend
  ],
  credentials: true
}));


app.use(express.json());

// ✅ Routes
app.use("/", loginRoutes);
app.use("/", userLogRoutes);
app.use("/", inverterRoutes);
app.use('/', liveDataRoutes);
app.use("/", inverterListRoutes);



module.exports = app;
