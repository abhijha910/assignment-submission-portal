// controllers/adminController.js
const Assignment = require('../models/Assignment');

// View Assignments Tagged to Admin
exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user.id }).populate('userId', 'username').exec();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Accept Assignment
exports.acceptAssignment = async (req, res) => {
  try {
    let assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).json({ msg: 'Assignment not found' });

    assignment.status = 'accepted';
    await assignment.save();
    res.json({ msg: 'Assignment accepted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Reject Assignment
exports.rejectAssignment = async (req, res) => {
  try {
    let assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).json({ msg: 'Assignment not found' });

    assignment.status = 'rejected';
    await assignment.save();
    res.json({ msg: 'Assignment rejected' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
