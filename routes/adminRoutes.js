// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');
const auth = require('../middlewares/auth');

router.get('/assignments', auth, getAssignments);
router.post('/assignments/:id/accept', auth, acceptAssignment);
router.post('/assignments/:id/reject', auth, rejectAssignment);

module.exports = router;
