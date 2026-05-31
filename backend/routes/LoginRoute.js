const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const User = require("../models/UserModel");
const auth = require("../middleware/auth");

router.post("/register/", async (request, response) => {
  const { username, password, email } = request.body;

  if (!username || !password || !email) {
    return response.status(400).json({ error: "All fields are required" });
  }
  if (password.length < 6) {
    return response.status(400).json({ error: "Password must be at least 6 characters" });
  }

  const existing = await User.findOne({ $or: [{ Username: username }, { Email: email }] });
  if (existing) {
    const field = existing.Username === username ? "Username" : "Email";
    return response.status(409).json({ error: `${field} already exists` });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ Username: username, HashedPassword: hashedPassword, Email: email });
  response.status(201).json({ message: "User created successfully" });
});

router.post("/login/", async (req, res) => {
  const { username, password } = req.body;
  const dbuser = await User.findOne({ Username: username }); // Changed to findOne
  
  if (!dbuser) {
    return res.status(400).json({ error: "Invalid user" }); // Return JSON response
  }

  const checkPw = await bcrypt.compare(password, dbuser.HashedPassword);
  if (checkPw) {
    const payload = {
      username: username,
      user_id: dbuser._id.toString(), // Corrected to use dbuser._id
    };
    const jwtoken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token: jwtoken }); // Return as JSON
  } else {
    return res.status(400).json({ error: "Invalid password" }); // Return JSON response
  }
});

router.get('/api/auth/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.user_id).select('-HashedPassword');
    // console.log(req.user.user_id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
