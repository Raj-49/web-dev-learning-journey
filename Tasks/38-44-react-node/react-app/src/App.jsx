import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Components from './pages/Components';
import LivePreview from './pages/LivePreview';
import ProductDisplay from './pages/ProductDisplay';
import UserProfile, { UserList } from './pages/UserProfile';
import FetchData from './pages/FetchData';
import ReduxCounter from './pages/ReduxCounter';
import './App.css';

const tasks = [
  { path: '/components', label: '🧩 3605 Components' },
  { path: '/live-preview', label: '📝 3642 Live Preview' },
  { path: '/products', label: '🛍️ 3648 Products' },
  { path: '/users', label: '👥 3654 Dynamic Routes' },
  { path: '/fetch', label: '🌐 3660 Fetch Data' },
  { path: '/redux', label: '🔄 3359 Redux' },
];

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Sidebar Navigation */}
        <nav className="sidebar">
          <div className="sidebar-header">
            <h2>⚛️ React Tasks</h2>
            <p>38-44 React & Node</p>
            <div style={{
              marginTop: '15px',
              padding: '8px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '6px',
              fontSize: '11px',
              color: '#fff',
              border: '1px solid rgba(129, 140, 248, 0.4)'
            }}>
              <span>Global Count: </span>
              <strong style={{ fontSize: '14px', color: '#818cf8' }}>{count}</strong>
            </div>
          </div>
          <ul>
            {tasks.map((t) => (
              <li key={t.path}>
                <NavLink
                  to={t.path}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {t.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="sidebar-footer">
            <p>🌿 Node: <code>node-architecture/</code></p>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/live-preview" element={<LivePreview />} />
            <Route path="/products" element={<ProductDisplay />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserProfile />} />
            <Route path="/fetch" element={<FetchData />} />
            <Route path="/redux" element={<ReduxCounter />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div style={{ maxWidth: '700px' }}>
      <h1>⚛️ React & Node Tasks</h1>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7' }}>
        This app implements all remaining MERN internship tasks (IDs 3359–3660).
        Use the sidebar to navigate between tasks.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '24px' }}>
        {tasks.map((t) => (
          <NavLink key={t.path} to={t.path} style={{
            display: 'block',
            padding: '16px',
            background: '#f0f0ff',
            border: '1px solid #c7d2fe',
            borderRadius: '10px',
            textDecoration: 'none',
            color: '#1e1b4b',
            fontWeight: '500',
            transition: 'background 0.2s',
          }}>
            {t.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default App;
