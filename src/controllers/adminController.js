const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new admin
exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await Admin.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'Admin registered', adminId: newAdmin._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Admin login
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (admin && (await bcrypt.compare(password, admin.password))) {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// View assignments tagged to the admin
exports.getAssignments = async (req, res) => {
    const adminId = req.admin.id;
    try {
        const users = await User.find({});
        const assignments = users.flatMap(user => user.assignments.filter(a => a.admin === adminId));
        res.json(assignments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Accept an assignment
exports.acceptAssignment = async (req, res) => {
    const { id } = req.params;
    // Logic to accept an assignment (e.g., update its status)
    res.json({ message: `Assignment ${id} accepted` });
};

// Reject an assignment
exports.rejectAssignment = async (req, res) => {
    const { id } = req.params;
    // Logic to reject an assignment (e.g., remove it or update its status)
    res.json({ message: `Assignment ${id} rejected` });
};
