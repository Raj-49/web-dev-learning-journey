// Task 3605 - Components page showcasing ProfileCard reusable component

import ProfileCard from '../components/ProfileCard';

function Components() {
    const profiles = [
        { id: 1, name: 'Raj Sharma', image: 'https://i.pravatar.cc/150?img=11', description: 'Web Dev Intern at Brainlybeans' },
        { id: 2, name: 'Alice Johnson', image: 'https://i.pravatar.cc/150?img=23', description: 'React Developer & UI Designer' },
        { id: 3, name: 'Bob Patel', image: 'https://i.pravatar.cc/150?img=7', description: 'Full Stack JavaScript Developer' },
        { id: 4, name: 'Sara Khan', image: 'https://i.pravatar.cc/150?img=45', description: 'Node.js Backend Engineer' },
    ];

    return (
        <div>
            <h2>🧩 Task 3605 — Components in React</h2>
            <p style={{ color: '#555', maxWidth: '600px' }}>
                The <code>ProfileCard</code> component is <strong>reusable</strong> — it's defined once
                and used multiple times by passing different <strong>props</strong> (name, image, description).
            </p>
            <div style={{ marginTop: '20px' }}>
                {profiles.map((p) => (
                    <ProfileCard
                        key={p.id}
                        name={p.name}
                        image={p.image}
                        description={p.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Components;
