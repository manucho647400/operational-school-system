import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from './config.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dashboard, setDashboard] = useState(null);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [fees, setFees] = useState([]);
  const [classes, setClasses] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [examResults, setExamResults] = useState([]);
  const [reportCards, setReportCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: 'admin@westendstar.ac.ke', password: 'admin123' });
  const [studentForm, setStudentForm] = useState({ name: '', className: '', age: '', gender: 'Female' });
  const [feeForm, setFeeForm] = useState({ student: '', amount: '', status: 'Pending', dueDate: '' });
  const [attendanceForm, setAttendanceForm] = useState({ date: '', present: '', absent: '', late: '' });
  const [examForm, setExamForm] = useState({ student: '', className: 'Grade 4', subject: 'Mathematics', score: '', term: 'Term 1' });

  const fetchAll = async () => {
    try {
      const [dashboardRes, studentsRes, teachersRes, attendanceRes, feesRes, classesRes, timetableRes, examsRes, reportsRes] = await Promise.all([
        fetch(API_ENDPOINTS.DASHBOARD),
        fetch(API_ENDPOINTS.STUDENTS),
        fetch(API_ENDPOINTS.TEACHERS),
        fetch(API_ENDPOINTS.ATTENDANCE),
        fetch(API_ENDPOINTS.FEES),
        fetch(API_ENDPOINTS.CLASSES),
        fetch(API_ENDPOINTS.TIMETABLE),
        fetch(API_ENDPOINTS.EXAMS),
        fetch(API_ENDPOINTS.REPORTS),
      ]);

      const [dashboardData, studentsData, teachersData, attendanceData, feesData, classesData, timetableData, examsData, reportsData] = await Promise.all([
        dashboardRes.json(),
        studentsRes.json(),
        teachersRes.json(),
        attendanceRes.json(),
        feesRes.json(),
        classesRes.json(),
        timetableRes.json(),
        examsRes.json(),
        reportsRes.json(),
      ]);

      setDashboard(dashboardData);
      setStudents(studentsData);
      setTeachers(teachersData);
      setAttendance(attendanceData);
      setFees(feesData);
      setClasses(classesData);
      setTimetable(timetableData);
      setExamResults(examsData);
      setReportCards(reportsData);
    } catch (error) {
      console.error('Failed to load school system data', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();
      if (!response.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      setUser(data);
      alert(`Welcome, ${data.name}!`);
    } catch (error) {
      console.error('Login error', error);
    }
  };

  const handleStudentSubmit = async (event) => {
    event.preventDefault();
    const payload = { ...studentForm, age: Number(studentForm.age), status: 'Active' };

    try {
      const response = await fetch(API_ENDPOINTS.STUDENTS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStudentForm({ name: '', className: '', age: '', gender: 'Female' });
        fetchAll();
      }
    } catch (error) {
      console.error('Error creating student', error);
    }
  };

  const handleFeeSubmit = async (event) => {
    event.preventDefault();
    const payload = { ...feeForm, amount: Number(feeForm.amount) };

    try {
      const response = await fetch(API_ENDPOINTS.FEES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFeeForm({ student: '', amount: '', status: 'Pending', dueDate: '' });
        fetchAll();
      }
    } catch (error) {
      console.error('Error creating fee record', error);
    }
  };

  const handleAttendanceSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_ENDPOINTS.ATTENDANCE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: attendanceForm.date,
          present: Number(attendanceForm.present),
          absent: Number(attendanceForm.absent),
          late: Number(attendanceForm.late),
        }),
      });

      if (response.ok) {
        setAttendanceForm({ date: '', present: '', absent: '', late: '' });
        fetchAll();
      }
    } catch (error) {
      console.error('Error saving attendance', error);
    }
  };

  const handleExamSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_ENDPOINTS.EXAMS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...examForm, score: Number(examForm.score) }),
      });

      if (response.ok) {
        setExamForm({ student: '', className: 'Grade 4', subject: 'Mathematics', score: '', term: 'Term 1' });
        fetchAll();
      }
    } catch (error) {
      console.error('Error saving exam result', error);
    }
  };

  const navItems = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'students', label: 'Students' },
    { key: 'teachers', label: 'Teachers' },
    { key: 'attendance', label: 'Attendance' },
    { key: 'fees', label: 'Fees' },
    { key: 'timetable', label: 'Timetable' },
    { key: 'exams', label: 'Exams' },
    { key: 'reports', label: 'Reports' },
  ];

  if (loading) {
    return <div className="loading">Loading school dashboard...</div>;
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <h2>West End Star</h2>
          <small>{dashboard?.location || 'School Operations'}</small>
        </div>
        <nav>
          {navItems.map((item) => (
            <button
              key={item.key}
              className={activeTab === item.key ? 'nav-button active' : 'nav-button'}
              onClick={() => setActiveTab(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">School Management System</p>
            <h1>{dashboard?.schoolName || 'West End Star Academy'}</h1>
          </div>
          <div className="header-group">
            <div className="header-pill">Principal: {dashboard?.principal || 'Admin'}</div>
            {user ? (
              <div className="header-pill user-pill">Logged in: {user.name} ({user.role})</div>
            ) : (
              <div className="header-pill user-pill">Guest</div>
            )}
          </div>
        </header>

        {!user && (
          <section className="panel login-panel">
            <h3>West End Star Academy - Login</h3>
            <form className="form-grid" onSubmit={handleLogin}>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                placeholder="Email"
                required
              />
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="Password"
                required
              />
              <button type="submit" className="primary-btn">Login</button>
            </form>
          </section>
        )}

        {user && activeTab === 'dashboard' && (
          <>
            <section className="stats-grid">
              <div className="stat-card">
                <span>Total Students</span>
                <strong>{dashboard?.totalStudents || 0}</strong>
              </div>
              <div className="stat-card">
                <span>Active Students</span>
                <strong>{dashboard?.activeStudents || 0}</strong>
              </div>
              <div className="stat-card">
                <span>Teachers</span>
                <strong>{dashboard?.totalTeachers || 0}</strong>
              </div>
              <div className="stat-card">
                <span>Pending Fees</span>
                <strong>{dashboard?.pendingFees || 0}</strong>
              </div>
            </section>

            <section className="panel-grid">
              <div className="panel">
                <h3>Latest Attendance</h3>
                {attendance.length > 0 ? (
                  <>
                    <div className="attendance-row highlight">
                      <span>{attendance[0]?.date}</span>
                      <span>Present: {attendance[0]?.present}</span>
                      <span>Absent: {attendance[0]?.absent}</span>
                      <span>Late: {attendance[0]?.late}</span>
                    </div>
                    {attendance.slice(1).map((entry) => (
                      <div key={entry.date} className="attendance-row">
                        <span>{entry.date}</span>
                        <span>Present: {entry.present}</span>
                        <span>Absent: {entry.absent}</span>
                        <span>Late: {entry.late}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>No attendance records</p>
                )}
              </div>

              <div className="panel">
                <h3>Classes</h3>
                {classes.length > 0 ? (
                  classes.map((classItem) => (
                    <div key={classItem.id} className="list-row">
                      <span>{classItem.name}</span>
                      <span>{classItem.students} students</span>
                    </div>
                  ))
                ) : (
                  <p>No classes available</p>
                )}
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
          </>
        )}

        {user && activeTab === 'students' && (
          <section className="content-stack">
            <div className="panel">
              <h3>Add Student</h3>
              <form className="form-grid" onSubmit={handleStudentSubmit}>
                <input value={studentForm.name} onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })} placeholder="Student name" required />
                <input value={studentForm.className} onChange={(e) => setStudentForm({ ...studentForm, className: e.target.value })} placeholder="Class name" required />
                <input type="number" value={studentForm.age} onChange={(e) => setStudentForm({ ...studentForm, age: e.target.value })} placeholder="Age" required />
                <select value={studentForm.gender} onChange={(e) => setStudentForm({ ...studentForm, gender: e.target.value })}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
                <button type="submit" className="primary-btn">Save Student</button>
              </form>
            </div>

            <div className="panel">
              <h3>Student Directory</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Age</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.className}</td>
                      <td>{student.age}</td>
                      <td>{student.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {user && activeTab === 'teachers' && (
          <section className="panel">
            <h3>Staff and Teachers</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id}>
                    <td>{teacher.name}</td>
                    <td>{teacher.subject}</td>
                    <td>{teacher.department}</td>
                    <td>{teacher.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {user && activeTab === 'attendance' && (
          <section className="content-stack">
            <div className="panel">
              <h3>Record Daily Attendance</h3>
              <form className="form-grid" onSubmit={handleAttendanceSubmit}>
                <input type="date" value={attendanceForm.date} onChange={(e) => setAttendanceForm({ ...attendanceForm, date: e.target.value })} required />
                <input type="number" value={attendanceForm.present} onChange={(e) => setAttendanceForm({ ...attendanceForm, present: e.target.value })} placeholder="Present" required />
                <input type="number" value={attendanceForm.absent} onChange={(e) => setAttendanceForm({ ...attendanceForm, absent: e.target.value })} placeholder="Absent" required />
                <input type="number" value={attendanceForm.late} onChange={(e) => setAttendanceForm({ ...attendanceForm, late: e.target.value })} placeholder="Late" required />
                <button type="submit" className="primary-btn">Save</button>
              </form>
            </div>

            <div className="panel">
              <h3>Attendance Logs</h3>
              {attendance.map((entry) => (
                <div key={entry.date} className="attendance-row">
                  <span>{entry.date}</span>
                  <span>Present: {entry.present}</span>
                  <span>Absent: {entry.absent}</span>
                  <span>Late: {entry.late}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {user && activeTab === 'fees' && (
          <section className="content-stack">
            <div className="panel">
              <h3>Record Fee Payment</h3>
              <form className="form-grid" onSubmit={handleFeeSubmit}>
                <input value={feeForm.student} onChange={(e) => setFeeForm({ ...feeForm, student: e.target.value })} placeholder="Student name" required />
                <input type="number" value={feeForm.amount} onChange={(e) => setFeeForm({ ...feeForm, amount: e.target.value })} placeholder="Amount" required />
                <select value={feeForm.status} onChange={(e) => setFeeForm({ ...feeForm, status: e.target.value })}>
                  <option value="Pending">Pending</option>
                  <option value="Partial">Partial</option>
                  <option value="Paid">Paid</option>
                </select>
                <input type="date" value={feeForm.dueDate} onChange={(e) => setFeeForm({ ...feeForm, dueDate: e.target.value })} required />
                <button type="submit" className="primary-btn">Save Fee</button>
              </form>
            </div>

            <div className="panel">
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
            </div>
          </section>
        )}

        {user && activeTab === 'timetable' && (
          <section className="panel">
            <h3>Academic Timetable</h3>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Period</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((item, idx) => (
                  <tr key={`${item.day}-${idx}`}>
                    <td>{item.day}</td>
                    <td>{item.period}</td>
                    <td>{item.class}</td>
                    <td>{item.subject}</td>
                    <td>{item.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {user && activeTab === 'exams' && (
          <section className="content-stack">
            <div className="panel">
              <h3>Record Exam Result</h3>
              <form className="form-grid" onSubmit={handleExamSubmit}>
                <input value={examForm.student} onChange={(e) => setExamForm({ ...examForm, student: e.target.value })} placeholder="Student name" required />
                <input value={examForm.className} onChange={(e) => setExamForm({ ...examForm, className: e.target.value })} placeholder="Class" required />
                <input value={examForm.subject} onChange={(e) => setExamForm({ ...examForm, subject: e.target.value })} placeholder="Subject" required />
                <input type="number" value={examForm.score} onChange={(e) => setExamForm({ ...examForm, score: e.target.value })} placeholder="Score" min="0" max="100" required />
                <select value={examForm.term} onChange={(e) => setExamForm({ ...examForm, term: e.target.value })}>
                  <option value="Term 1">Term 1</option>
                  <option value="Term 2">Term 2</option>
                  <option value="Term 3">Term 3</option>
                </select>
                <button type="submit" className="primary-btn">Save Result</button>
              </form>
            </div>

            <div className="panel">
              <h3>Exam Results</h3>
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Subject</th>
                    <th>Score</th>
                    <th>Grade</th>
                    <th>Term</th>
                  </tr>
                </thead>
                <tbody>
                  {examResults.map((exam) => (
                    <tr key={exam.id}>
                      <td>{exam.student}</td>
                      <td>{exam.subject}</td>
                      <td>{exam.score}</td>
                      <td>{exam.grade}</td>
                      <td>{exam.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {user && activeTab === 'reports' && (
          <section className="panel">
            <h3>Report Cards</h3>
            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Average</th>
                  <th>Term</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {reportCards.map((report) => (
                  <tr key={report.id}>
                    <td>{report.student}</td>
                    <td>{report.className}</td>
                    <td>{report.average}%</td>
                    <td>{report.term}</td>
                    <td>{report.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
}
