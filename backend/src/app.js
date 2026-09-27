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

// CORS Configuration for internet access
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.PROD_CLIENT_URL,
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(morgan('dev'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: process.env.APP_NAME || 'West and Star Academy',
    theme: process.env.APP_THEME_COLOR || 'green',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api', dashboardRoutes);
app.use('/api', studentsRoutes);
app.use('/api', teachersRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', feesRoutes);
app.use('/api', timetableRoutes);
app.use('/api', examsRoutes);
app.use('/api', authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

export default app;
