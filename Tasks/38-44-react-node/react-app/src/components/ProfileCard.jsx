// Task 3605 - Reusable ProfileCard component with props: name, image, description

function ProfileCard({ name, image, description }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '20px',
            margin: '12px',
            width: '220px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'inline-block',
        }}>
            <img
                src={image}
                alt={name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <h3 style={{ margin: '12px 0 6px' }}>{name}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{description}</p>
        </div>
    );
}

export default ProfileCard;
