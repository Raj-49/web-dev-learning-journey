// Model — represents the data and data operations
// In a real app this would talk to a database (MongoDB, MySQL etc.)
// For this demo we use an in-memory array

let users = [
    { id: '1', name: 'Raj Sharma', email: 'raj@example.com', age: 22 },
    { id: '2', name: 'Alice Johnson', email: 'alice@example.com', age: 25 },
    { id: '3', name: 'Bob Patel', email: 'bob@example.com', age: 28 },
];

let nextId = 4;

const UserModel = {
    // Get all users
    getAll: () => users,

    // Get user by id
    getById: (id) => users.find((u) => u.id === id),

    // Create new user
    create: ({ name, email, age }) => {
        const newUser = { id: String(nextId++), name, email, age: age || null };
        users.push(newUser);
        return newUser;
    },

    // Delete user by id
    delete: (id) => {
        const index = users.findIndex((u) => u.id === id);
        if (index === -1) return null;
        const deleted = users.splice(index, 1);
        return deleted[0];
    },
};

module.exports = UserModel;
