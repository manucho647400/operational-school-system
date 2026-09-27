# Operational School System

A single-school operational management system built with a Node.js/Express backend and a React frontend.

## Features

- Student management
- Teacher and staff records
- Attendance tracking
- Class and timetable overview
- Fee collection and payment monitoring
- Academic dashboard and KPIs
- Parent communication support

## Architecture

- Backend: Express API with JSON data store
- Frontend: React + Vite dashboard
- Data model: Centralized sample school dataset for local development and prototyping

## Project structure

```text
backend/
  src/
    app.js
    server.js
    data/
      store.js
    routes/
      dashboard.js
      students.js
      teachers.js
      attendance.js
      fees.js
    services/
      schoolService.js
    utils/
      sampleData.js

frontend/
  src/
    App.jsx
    main.jsx
    styles.css
  index.html
  package.json
  vite.config.js
```

## Getting started

### 1. Install backend dependencies

```bash
cd backend
npm install
```

### 2. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 3. Run the backend

```bash
cd backend
npm run dev
```

### 4. Run the frontend

```bash
cd frontend
npm run dev
```

### 5. Open the app

Visit http://localhost:5173

## Default API endpoints

- GET /api/dashboard
- GET /api/students
- GET /api/teachers
- GET /api/attendance
- GET /api/fees
- GET /api/classes

## Notes

This version is designed as a strong starter for a single-school operation system and is intended for local development, prototyping, and expansion.
