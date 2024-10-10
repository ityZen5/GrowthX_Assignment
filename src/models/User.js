const mongoose = require('mongoose');

// Define the assignment schema
const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },  // Title of the assignment
    file: { type: String },  // Optional: file associated with the assignment
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true }, // Reference to the Admin model
    status: { type: String, default: 'pending' }  // Status can be 'pending', 'accepted', or 'rejected'
});

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },  // Unique username
    password: { type: String, required: true },  // User's password
    assignments: [assignmentSchema]  // Array of assignments linked to the user
});

// Export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
