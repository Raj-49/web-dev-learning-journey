// Controller — contains the actual logic for each route handler
// Keeps the routes file clean and organized

const UserModel = require('../models/userModel');

// GET all users
const getAllUsers = (req, res) => {
    const users = UserModel.getAll();
    res.json({ success: true, count: users.length, data: users });
};

// GET user by ID
const getUserById = (req, res) => {
    const user = UserModel.getById(req.params.id);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, data: user });
};

// POST - Create new user
const createUser = (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Name and email are required' });
    }
    const newUser = UserModel.create({ name, email, age });
    res.status(201).json({ success: true, data: newUser });
};

// DELETE user
const deleteUser = (req, res) => {
    const deleted = UserModel.delete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, message: 'User deleted' });
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
