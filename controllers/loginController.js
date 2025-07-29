// controllers/loginController.js
const loginModel = require("../models/loginModel");

exports.login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await loginModel.findUserByUsername(userName);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful", role: user.role, firstName: user.firstName });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
