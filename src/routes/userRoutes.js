const express = require('express');
const User = require('../models/User');
const { registerUser, loginUser, uploadAssignment, getAllAdmins } = require('../controllers/userController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body; // Expecting password as well
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered', userId: newUser._id });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error: error.message });
    }
});

// User Login
router.post('/login', loginUser);

// Upload Assignment
router.post('/upload', authenticateUser, async (req, res) => {
    const { title, file, adminId } = req.body; // Expecting title and file info
    const userId = req.user._id; // Get user ID from the authenticated user

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        user.assignments.push({ title, file, admin: adminId }); // Add assignment details
        await user.save();
        res.json({ message: 'Assignment uploaded' });
    } catch (error) {
        res.status(400).json({ message: 'Error uploading assignment', error: error.message });
    }
});

// Get All Admins
router.get('/admins', authenticateUser, getAllAdmins); // Route to fetch all admins

module.exports = router;
