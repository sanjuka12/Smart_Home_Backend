const express = require("express");
const router = express.Router();
const { addUserLog, getUserLogs  } = require("../controllers/userLogController");


router.post("/userlog", addUserLog);
router.get("/userlog", getUserLogs);

module.exports = router;
