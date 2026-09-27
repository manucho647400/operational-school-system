import { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:5000/api';

function App() {
  const [dashboard, setDashboard] = useState(null);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [fees, setFees] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardRes, studentsRes, teachersRes, attendanceRes, feesRes, classesRes] = await Promise.all([
          fetch(`${API_BASE}/dashboard`),
          fetch(`${API_BASE}/students`),
          fetch(`${API_BASE}/teachers`),
          fetch(`${API_BASE}/attendance`),
          fetch(`${API_BASE}/fees`),
          fetch(`${API_BASE}/classes`)
        ]);

        const [dashboardData, studentsData, teachersData, attendanceData, feesData, classesData] = await Promise.all([
          dashboardRes.json(),
          studentsRes.json(),
          teachersRes.json(),
          attendanceRes.json(),
          feesRes.json(),
          classesRes.json()
        ]);

        setDashboard(dashboardData);
        setStudents(studentsData);
        setTeachers(teachersData);
        setAttendance(attendanceData);
        setFees(feesData);
        setClasses(classesData);
      } catch (error) {
        console.error('Failed to load data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading school dashboard...</div>;
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <h2>SchoolOps</h2>
        </div>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Students</a>
          <a href="#">Teachers</a>
          <a href="#">Attendance</a>
          <a href="#">Fees</a>
          <a href="#">Reports</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Single School Operations</p>
            <h1>{dashboard?.schoolName || 'School Dashboard'}</h1>
          </div>
          <button className="primary-btn">Add Student</button>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <span>Total Students</span>
            <strong>{dashboard?.totalStudents}</strong>
          </div>
          <div className="stat-card">
            <span>Active Students</span>
            <strong>{dashboard?.activeStudents}</strong>
          </div>
          <div className="stat-card">
            <span>Teachers</span>
            <strong>{dashboard?.totalTeachers}</strong>
          </div>
          <div className="stat-card">
            <span>Pending Fees</span>
            <strong>{dashboard?.pendingFees}</strong>
          </div>
        </section>

        <section className="panel-grid">
          <div className="panel">
            <h3>Attendance</h3>
            {attendance.map((entry) => (
              <div key={entry.date} className="attendance-row">
                <span>{entry.date}</span>
                <span>Present: {entry.present}</span>
                <span>Absent: {entry.absent}</span>
                <span>Late: {entry.late}</span>
              </div>
            ))}
          </div>

          <div className="panel">
            <h3>Classes</h3>
            {classes.map((classItem) => (
              <div key={classItem.id} className="list-row">
                <span>{classItem.name}</span>
                <span>{classItem.students} students</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-grid two-columns">
          <div className="panel">
            <h3>Students</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.slice(0, 5).map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.className}</td>
                    <td>{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="panel">
            <h3>Teachers</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id}>
                    <td>{teacher.name}</td>
                    <td>{teacher.subject}</td>
                    <td>{teacher.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <h3>Fee Tracker</h3>
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr key={fee.id}>
                  <td>{fee.student}</td>
                  <td>KES {fee.amount.toLocaleString()}</td>
                  <td>{fee.status}</td>
                  <td>{fee.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
