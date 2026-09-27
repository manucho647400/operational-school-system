:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #122033;
  background: #eef4ff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-width: 100%;
}

body {
  margin: 0;
  background: linear-gradient(180deg, #edf6ff 0%, #f5f7fb 100%);
}

button, input, select {
  font: inherit;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 240px;
  background: #0f172a;
  color: #edf6ff;
  padding: 24px 18px;
}

.brand {
  border-bottom: 1px solid rgba(255,255,255,0.12);
  margin-bottom: 24px;
  padding-bottom: 16px;
}

.brand h2 {
  margin: 0;
  font-size: 1.5rem;
}

.brand small {
  display: block;
  margin-top: 5px;
  color: #c9d9f5;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-button {
  background: transparent;
  color: #dfeafc;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-button.active,
.nav-button:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.12);
}

.main-content {
  flex: 1;
  padding: 28px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.eyebrow {
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px;
  font-size: 0.74rem;
  font-weight: 700;
}

.topbar h1 {
  margin: 0;
  font-size: 2rem;
}

.header-group {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.header-pill {
  background: #e0ecff;
  color: #1849a9;
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 600;
}

.user-pill {
  background: #dcfce7;
  color: #166534;
}

.primary-btn {
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.stat-card,
.panel {
  background: rgba(255,255,255,0.92);
  border: 1px solid #dbe7ff;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.04);
}

.stat-card {
  padding: 20px 18px;
}

.stat-card span {
  display: block;
  color: #42526e;
  font-size: 0.82rem;
  margin-bottom: 8px;
}

.stat-card strong {
  font-size: 2rem;
}

.panel-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 18px;
  margin-bottom: 18px;
}

.panel {
  padding: 20px;
}

.panel h3 {
  margin-top: 0;
  margin-bottom: 16px;
}

.login-panel {
  margin-bottom: 18px;
}

.content-stack {
  display: grid;
  gap: 18px;
}

.attendance-row,
.list-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid #edf2f7;
}

.attendance-row.highlight {
  background: #eef6ff;
  border-radius: 10px;
  padding: 12px 14px;
  margin-bottom: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 10px 8px;
  border-bottom: 1px solid #edf2f7;
}

th {
  color: #42526e;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}

input,
select {
  width: 100%;
  border: 1px solid #d3dceb;
  border-radius: 10px;
  background: white;
  padding: 10px 12px;
  color: #18314b;
}

.loading {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1d4ed8;
}

@media (max-width: 980px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .stats-grid,
  .panel-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}
