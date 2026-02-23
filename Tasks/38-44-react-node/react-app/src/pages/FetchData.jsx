// Task 3660 - useEffect for fetching data from a public API on component mount

import { useState, useEffect, useCallback } from 'react';

function FetchData() {
    const [apiUrl, setApiUrl] = useState('https://jsonplaceholder.typicode.com/posts?_limit=8');
    const [inputValue, setInputValue] = useState('https://jsonplaceholder.typicode.com/posts?_limit=8');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback((url) => {
        setLoading(true);
        setError(null);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP Error ${res.status}: ${res.statusText || 'Failed to fetch'}`);
                }
                return res.json();
            })
            .then((data) => {
                // Some APIs return a single object, others an array
                const displayData = Array.isArray(data) ? data.slice(0, 10) : [data];
                setPosts(displayData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchData(apiUrl);
    }, [apiUrl, fetchData]);

    return (
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>🌐 Task 3660 — Dynamic API Fetch</h2>
            <p style={{ color: '#555' }}>
                Enter any public API URL below to fetch data dynamically.
            </p>

            {/* Dynamic Input Field */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '6px',
                        border: '2px solid #4f46e5',
                        outline: 'none'
                    }}
                    placeholder="Enter API URL..."
                />
                <button
                    onClick={() => setApiUrl(inputValue)}
                    style={{
                        padding: '10px 20px',
                        background: '#4f46e5',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer'
                    }}
                >
                    Fetch
                </button>
            </div>

            <div style={{ marginBottom: '20px', fontSize: '13px', color: '#666' }}>
                <strong>Current URL:</strong> <code>{apiUrl}</code>
            </div>

            {loading && (
                <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                    ⏳ Fetching data...
                </div>
            )}

            {error && (
                <div style={{
                    background: '#fee2e2', color: '#991b1b',
                    padding: '12px', borderRadius: '8px', marginBottom: '10px'
                }}>
                    ❌ Error: {error}
                </div>
            )}

            {!loading && !error && posts.map((post, index) => (
                <div key={post.id || index} style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '14px',
                    marginBottom: '10px',
                    background: '#f9fafb',
                    overflow: 'hidden'
                }}>
                    <strong style={{ color: '#4f46e5' }}>
                        {post.title || post.name || `Item ${index + 1}`}
                    </strong>
                    <pre style={{ margin: '6px 0 0', color: '#6b7280', fontSize: '12px', whiteSpace: 'pre-wrap', maxHeight: '150px', overflowY: 'auto' }}>
                        {JSON.stringify(post, null, 2)}
                    </pre>
                </div>
            ))}
        </div>
    );
}

export default FetchData;
