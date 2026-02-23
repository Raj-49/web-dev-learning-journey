// Task 3359 - React Redux + Redux Toolkit counter demo

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../store/counterSlice';
import { useState } from 'react';

function ReduxCounter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [customAmount, setCustomAmount] = useState(5);

    const btnStyle = (color) => ({
        padding: '10px 20px',
        margin: '6px',
        fontSize: '16px',
        background: color,
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    });

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>🔄 Task 3359 — React Redux + Redux Toolkit</h2>
            <p style={{ color: '#555' }}>
                The counter value is stored in a <strong>Redux store</strong> (global state).
                Any component can read or change it using <code>useSelector</code> and <code>useDispatch</code>.
            </p>

            {/* Counter Display */}
            <div style={{
                textAlign: 'center',
                padding: '30px',
                background: '#f0f0ff',
                borderRadius: '12px',
                marginBottom: '20px',
            }}>
                <div style={{ fontSize: '72px', fontWeight: 'bold', color: '#4f46e5' }}>{count}</div>
                <div style={{ color: '#6b7280' }}>Counter Value (from Redux Store)</div>
            </div>

            {/* Basic Buttons */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <button style={btnStyle('#ef4444')} onClick={() => dispatch(decrement())}>
                    ➖ Decrement
                </button>
                <button style={btnStyle('#6b7280')} onClick={() => dispatch(reset())}>
                    🔄 Reset
                </button>
                <button style={btnStyle('#22c55e')} onClick={() => dispatch(increment())}>
                    ➕ Increment
                </button>
            </div>

            {/* Custom amount */}
            <div style={{
                textAlign: 'center',
                padding: '16px',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
            }}>
                <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>Add Custom Amount</p>
                <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    style={{ padding: '8px', width: '80px', fontSize: '16px', textAlign: 'center', borderRadius: '6px', border: '1px solid #d1d5db', marginRight: '10px' }}
                />
                <button style={btnStyle('#4f46e5')} onClick={() => dispatch(incrementByAmount(customAmount))}>
                    Add {customAmount}
                </button>
            </div>

            {/* How it works explanation */}
            <div style={{ marginTop: '24px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '14px' }}>
                <strong>⚙️ How Redux works here:</strong>
                <ul style={{ margin: '8px 0 0', color: '#555', fontSize: '14px', lineHeight: '1.8' }}>
                    <li><code>counterSlice.js</code> → defines the state + reducers (increment, decrement, etc.)</li>
                    <li><code>store.js</code> → combines all slices into one global store</li>
                    <li><code>useSelector</code> → reads the current count from the store</li>
                    <li><code>useDispatch</code> → sends an action to change the state</li>
                </ul>
            </div>
        </div>
    );
}

export default ReduxCounter;
