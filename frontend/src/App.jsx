import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import dashboardRoutes from './routes/dashboard.js';
import studentsRoutes from './routes/students.js';
import teachersRoutes from './routes/teachers.js';
import attendanceRoutes from './routes/attendance.js';
import feesRoutes from './routes/fees.js';
import timetableRoutes from './routes/timetable.js';
import examsRoutes from './routes/exams.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: process.env.APP_NAME || 'Operational School System',
    timestamp: new Date().toISOString()
  });
});

app.use('/api', dashboardRoutes);
app.use('/api', studentsRoutes);
app.use('/api', teachersRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', feesRoutes);
app.use('/api', timetableRoutes);
app.use('/api', examsRoutes);
app.use('/api', authRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
