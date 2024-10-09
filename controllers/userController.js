// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Assignment = require('../models/Assignment');

// Register User
exports.registerUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    let user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ msg: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: user.id, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Upload Assignment
exports.uploadAssignment = async (req, res) => {
  const { task, admin } = req.body;
  try {
    const assignment = new Assignment({ userId: req.user.id, task, admin });
    await assignment.save();
    res.status(201).json({ msg: 'Assignment uploaded' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch All Admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' }).select('username');
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
