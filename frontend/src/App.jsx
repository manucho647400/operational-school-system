import { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:5000/api';

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message || 'Failed to connect to the API'));
  }, []);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">School management</p>
          <h1>West End Star Academy</h1>
        </div>
      </header>

      <main className="card-grid">
        <section className="card highlight">
          <h2>System Status</h2>
          {error ? (
            <p className="status error">API unavailable: {error}</p>
          ) : health ? (
            <>
              <p className="status ok">{health.status}</p>
              <p>{health.app}</p>
              <small>{new Date(health.timestamp).toLocaleString()}</small>
            </>
          ) : (
            <p className="status loading">Loading...</p>
          )}
        </section>

        <section className="card">
          <h2>Quick Access</h2>
          <ul>
            <li>Dashboard</li>
            <li>Students</li>
            <li>Teachers</li>
            <li>Attendance</li>
            <li>Fees</li>
            <li>Exams</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
