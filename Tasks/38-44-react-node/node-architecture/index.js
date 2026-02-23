// Task 3365 — Node.js Project Architecture Entry Point
// This is the main file that starts the server

const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/users', userRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Node.js server is running!', status: 'OK' });
});

// Error handler (must be last middleware)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
