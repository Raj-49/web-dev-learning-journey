// Task 3642 - Input field with live preview using useState + onChange

import { useState } from 'react';

function LivePreview() {
    const [text, setText] = useState('');

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>📝 Task 3642 — Input Field with Live Preview</h2>
            <p style={{ color: '#555' }}>Type something below and watch the live preview update instantly.</p>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something here..."
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: '2px solid #4f46e5',
                    outline: 'none',
                    marginBottom: '16px',
                    boxSizing: 'border-box',
                }}
            />
            <div style={{
                background: '#f0f0ff',
                border: '1px solid #c7d2fe',
                borderRadius: '8px',
                padding: '14px',
                minHeight: '50px',
            }}>
                <strong>Live Preview:</strong>
                <p style={{ margin: '6px 0 0', color: text ? '#1e1b4b' : '#aaa' }}>
                    {text || 'Your text will appear here...'}
                </p>
            </div>
        </div>
    );
}

export default LivePreview;
