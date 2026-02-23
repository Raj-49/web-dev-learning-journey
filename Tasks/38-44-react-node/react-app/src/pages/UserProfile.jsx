// Task 3654 - Dynamic Route with useParams to show user profile based on URL

import { useParams, Link } from 'react-router-dom';

const users = [
    { id: '1', name: 'Raj Sharma', age: 22, role: 'Frontend Developer', email: 'raj@example.com' },
    { id: '2', name: 'Alice Johnson', age: 25, role: 'React Engineer', email: 'alice@example.com' },
    { id: '3', name: 'Bob Patel', age: 28, role: 'Full Stack Dev', email: 'bob@example.com' },
];

function UserProfile() {
    const { userId } = useParams();
    const user = users.find((u) => u.id === userId);

    if (!user) {
        return (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h2>❌ User Not Found</h2>
                <p>No user found with ID: <strong>{userId}</strong></p>
                <Link to="/users" style={{ color: '#4f46e5' }}>← Back to All Users</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2>👤 Task 3654 — Dynamic Route with Parameters</h2>
            <p style={{ color: '#555' }}>URL: <code>/users/{userId}</code> → loads user #{userId}'s profile via <code>useParams()</code></p>
            <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '24px',
                background: '#f9fafb',
            }}>
                <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '16px' }}>👤</div>
                <h3 style={{ margin: '0 0 8px' }}>{user.name}</h3>
                <p style={{ color: '#555', margin: '4px 0' }}>🎂 Age: {user.age}</p>
                <p style={{ color: '#555', margin: '4px 0' }}>💼 Role: {user.role}</p>
                <p style={{ color: '#555', margin: '4px 0' }}>📧 Email: {user.email}</p>
            </div>
            <br />
            <Link to="/users" style={{ color: '#4f46e5' }}>← Back to All Users</Link>
        </div>
    );
}

// User list page — shows links to each user profile
export function UserList() {
    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2>👥 All Users</h2>
            <p style={{ color: '#555' }}>Click a user to see their dynamic profile page.</p>
            {users.map((u) => (
                <div key={u.id} style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '14px',
                    marginBottom: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <span>👤 {u.name}</span>
                    <Link
                        to={`/users/${u.id}`}
                        style={{
                            background: '#4f46e5',
                            color: 'white',
                            padding: '6px 14px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontSize: '13px',
                        }}
                    >View Profile →</Link>
                </div>
            ))}
        </div>
    );
}

export default UserProfile;
