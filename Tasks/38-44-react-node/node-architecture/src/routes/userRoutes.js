// Routes — define API endpoints for users
// This file maps URLs to controller functions

const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, deleteUser } = require('../controllers/userController');

// GET /api/users         → Get all users
router.get('/', getAllUsers);

// GET /api/users/:id     → Get single user by ID
router.get('/:id', getUserById);

// POST /api/users        → Create a new user
router.post('/', createUser);

// DELETE /api/users/:id  → Delete a user
router.delete('/:id', deleteUser);

module.exports = router;
