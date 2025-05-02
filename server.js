const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize dotenv to load environment variables
dotenv.config();

// MongoDB connection config (we'll create this in the next step)
const connectDB = require('./config/db');

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
connectDB();

// Placeholder route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
