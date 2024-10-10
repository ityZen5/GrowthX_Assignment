const User = require('../models/User');
const Admin = require('../models/Admin'); // Import the Admin model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User registered', userId: newUser._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// User login
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// Upload assignment
exports.uploadAssignment = async (req, res) => {
    const { task, admin } = req.body;
    const userId = req.user.id;
    try {
        const user = await User.findById(userId);
        user.assignments.push({ task, admin });
        await user.save();
        res.status(201).json({ message: 'Assignment uploaded' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Fetch all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({}, { password: 0 }); // Exclude password field
        res.json(admins);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
