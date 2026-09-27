// API Configuration - Works on localhost and internet

const getAPIBase = () => {
  // Check if we're in production (deployed)
  if (import.meta.env.PROD) {
    // Use the same domain as the frontend
    return `${window.location.protocol}//${window.location.host}/api`;
  }
  
  // Development: use localhost
  return 'http://localhost:5000/api';
};

export const API_BASE = getAPIBase();

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE}/health`,
  LOGIN: `${API_BASE}/login`,
  DASHBOARD: `${API_BASE}/dashboard`,
  STUDENTS: `${API_BASE}/students`,
  TEACHERS: `${API_BASE}/teachers`,
  ATTENDANCE: `${API_BASE}/attendance`,
  FEES: `${API_BASE}/fees`,
  CLASSES: `${API_BASE}/classes`,
  TIMETABLE: `${API_BASE}/timetable`,
  EXAMS: `${API_BASE}/exams`,
  REPORTS: `${API_BASE}/reports`
};

console.log('🌐 Using API Base:', API_BASE);
