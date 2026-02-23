// Task 3648 - Product Display component with props: title, price, availability

function Product({ title, price, availability }) {
    return (
        <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '10px',
            padding: '18px',
            margin: '12px',
            width: '220px',
            display: 'inline-block',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            verticalAlign: 'top',
        }}>
            <div style={{
                background: '#f3f4f6',
                height: '120px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                marginBottom: '12px',
            }}>
                🛒
            </div>
            <h3 style={{ margin: '0 0 8px', fontSize: '16px' }}>{title}</h3>
            <p style={{ color: '#4f46e5', fontWeight: 'bold', margin: '0 0 8px' }}>${price}</p>
            {availability ? (
                <span style={{
                    background: '#d1fae5',
                    color: '#065f46',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '13px',
                }}>✅ In Stock</span>
            ) : (
                <span style={{
                    background: '#fee2e2',
                    color: '#991b1b',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '13px',
                }}>❌ Out of Stock</span>
            )}
        </div>
    );
}

function ProductDisplay() {
    const products = [
        { id: 1, title: 'Laptop Pro', price: 999, availability: true },
        { id: 2, title: 'Wireless Mouse', price: 25, availability: true },
        { id: 3, title: 'Mechanical Keyboard', price: 79, availability: false },
        { id: 4, title: 'Monitor 4K', price: 499, availability: true },
        { id: 5, title: 'USB-C Hub', price: 35, availability: false },
    ];

    return (
        <div>
            <h2>🛍️ Task 3648 — Product Display with Dynamic Props</h2>
            <p style={{ color: '#555' }}>Each product card gets title, price, and availability passed as props from the parent.</p>
            <div>
                {products.map((p) => (
                    <Product
                        key={p.id}
                        title={p.title}
                        price={p.price}
                        availability={p.availability}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductDisplay;
