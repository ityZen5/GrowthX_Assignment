const express = require('express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json()); // Parse JSON requests

app.use('/api/users', userRoutes); // User routes
app.use('/api/admins', adminRoutes); // Admin routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
