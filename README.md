# 🏫 West End Star Academy - School Management System

A modern, scalable operational school management system for single schools with modules for admin, academics, attendance, and finance. **Now with full internet accessibility!**

## 🌟 Features

- **Dashboard** - Real-time overview of school operations
- **Student Management** - Enrollment, profiles, and status tracking
- **Teacher Management** - Staff directory and assignments
- **Attendance** - Daily attendance recording and tracking
- **Finance** - Fee management and payment tracking
- **Timetable** - Academic schedule management
- **Exams** - Exam results and grading system
- **Reports** - Report cards and analytics
- **🌍 Internet-Ready** - Deploy worldwide with 4 different methods
- **🎨 Theme** - Beautiful green interface for West End Star Academy

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- (Optional) Docker for containerized deployment

### Local Development

```bash
# Clone the repository
git clone https://github.com/manucho647400/operational-school-system.git
cd operational-school-system

# Setup Backend
cd backend
npm install
npm run dev  # Runs on http://localhost:5000

# In another terminal, Setup Frontend
cd frontend
npm install
npm run dev  # Runs on http://localhost:5173
```

### Access the Application
- **Frontend:** http://localhost:5173
- **API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health

## 🌍 Deploy Online (Choose One)

### 🎯 4 Deployment Options Available

1. **ngrok** - Quick testing (5 min)
   ```bash
   # Temporary public URL for testing
   ngrok http 5000
   ```

2. **Docker** - Container deployment
   ```bash
   docker-compose up -d
   ```

3. **Railway.app** - Recommended for beginners ⭐
   - One-click deployment
   - Free tier available
   - Full guide in DEPLOYMENT.md

4. **Heroku** - Classic PaaS
   - Traditional workflow
   - See DEPLOYMENT.md for setup

### Complete Deployment Guide

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed instructions on all 4 methods:
- Step-by-step setup
- Environment configuration
- SSL/HTTPS setup
- Troubleshooting

## 🏗️ Project Structure

```
west-end-star-academy/
├── backend/
│   ├── src/
│   │   ├── app.js          # Express app with CORS config
│   │   ├── server.js       # Server with network IP detection
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── data/           # Data models
│   ├── Dockerfile          # Container image
│   └── package.json        # Dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── config.js       # Flexible API configuration
│   │   ├── styles.css      # Green theme styling
│   │   └── main.jsx        # Entry point
│   ├── Dockerfile          # Nginx container
│   ├── vite.config.js      # Build configuration
│   └── package.json        # Dependencies
├── docker-compose.yml      # Multi-container orchestration
├── DEPLOYMENT.md           # Deployment guide
├── railway.json            # Railway.app config
├── Procfile                # Heroku configuration
└── .env.example            # Environment template
```

## 🎨 Customization

### Change School Name
Update in `.env`:
```bash
APP_NAME=West End Star Academy
```

### Change Theme Color
Update in `.env`:
```bash
APP_THEME_COLOR=green
```

### Change API Base URL
In `frontend/src/config.js`:
```javascript
VITE_API_URL=https://yourdomain.com/api
```

## 🔐 Security

- ✅ CORS configured for safe cross-origin requests
- ✅ JWT authentication prepared
- ✅ Environment variables for sensitive data
- ✅ Production-ready error handling
- ✅ Support for HTTPS/SSL

## 📋 Environment Variables

See [.env.example](./.env.example) for all options:

```bash
# Server
PORT=5000
HOST=0.0.0.0
NODE_ENV=production

# Client
CLIENT_URL=http://localhost:5173
PROD_CLIENT_URL=https://yourdomain.com
VITE_API_URL=https://yourdomain.com/api

# App
APP_NAME=West End Star Academy
APP_THEME_COLOR=green
DEPLOYMENT_MODE=docker  # local, docker, railway, heroku, ngrok
```

## 🛠️ Development Commands

### Backend
```bash
cd backend
npm install       # Install dependencies
npm run dev       # Development mode
npm start         # Production mode
```

### Frontend
```bash
cd frontend
npm install       # Install dependencies
npm run dev       # Development mode
npm run build     # Build for production
npm run preview   # Preview production build
```

### Docker
```bash
docker-compose up -d      # Start all services
docker-compose down        # Stop all services
docker-compose logs -f     # View live logs
docker-compose ps          # View running containers
```

## 📡 API Endpoints

```
GET  /api/health           - Health check
POST /api/login            - User authentication
GET  /api/dashboard        - Dashboard data
GET  /api/students         - List students
POST /api/students         - Create student
GET  /api/teachers         - Teacher directory
GET  /api/attendance       - Attendance records
POST /api/attendance       - Record attendance
GET  /api/fees             - Fee information
POST /api/fees             - Record fees
GET  /api/timetable        - Academic schedule
GET  /api/exams            - Exam results
POST /api/exams            - Record exam results
GET  /api/reports          - Report cards
```

## 🧪 Testing

### Health Check
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "app": "West End Star Academy",
  "theme": "green",
  "timestamp": "2026-09-27T06:20:24Z",
  "environment": "production",
  "deployment": "docker"
}
```

## 🌐 Network Access

Once deployed, access from:
- 🖥️ Desktop browser
- 📱 Mobile phone
- 🌍 Anywhere in the world
- 🔐 With HTTPS/SSL (recommended for production)

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide (4 methods)
- [README.md](./README.md) - This file
- [.env.example](./.env.example) - Configuration template

## 🚨 Troubleshooting

### "Cannot reach server"
1. Check firewall (allow ports 5000, 5173)
2. Verify server running: `curl http://localhost:5000/api/health`
3. Check network connectivity

### "CORS error"
1. Update `ALLOWED_ORIGINS` in backend/src/app.js
2. Restart backend
3. Clear browser cache (Ctrl+Shift+Delete)

### "API not responding"
1. Check frontend .env API URL
2. Check network tab in browser DevTools (F12)
3. Verify backend is running

## 📞 Support

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section
2. Review backend logs: `npm run dev`
3. Check browser console (F12)
4. Check network requests in DevTools

## 📄 License

MIT License - Feel free to use for educational and commercial purposes.

---

**🏫 West End Star Academy** - Modern School Management System

**Deployed. Accessible. Worldwide.** 🌍✅
