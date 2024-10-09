// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, uploadAssignment, getAllAdmins } = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', auth, uploadAssignment);
router.get('/admins', auth, getAllAdmins);

module.exports = router;
