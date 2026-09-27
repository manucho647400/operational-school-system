# 🎓 West and Star Academy - School Management System

A modern, scalable operational school management system for single schools with modules for admin, academics, attendance, and finance.

## 🌐 Features

- **Dashboard** - Real-time overview of school operations
- **Student Management** - Enrollment, profiles, and status tracking
- **Teacher Management** - Staff directory and assignments
- **Attendance** - Daily attendance recording and tracking
- **Finance** - Fee management and payment tracking
- **Timetable** - Academic schedule management
- **Exams** - Exam results and grading
- **Reports** - Report cards and analytics
- **Internet-Ready** - Deploy anywhere for global access

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

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

## 🌍 Deployment (Internet Access)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deploy Options:

1. **ngrok** (Testing): Expose locally to internet
2. **Railway.app** (Easy): One-click deployment
3. **Heroku** (Free tier available)
4. **DigitalOcean** (Affordable VPS)
5. **Docker** (Container deployment)

### One-Command Docker Deploy:
```bash
docker-compose up -d
```

Then access:
- Frontend: http://YOUR_SERVER_IP:5173
- Backend: http://YOUR_SERVER_IP:5000/api

## 📁 Project Structure

```
operational-school-system/
├── backend/
│   ├── src/
│   │   ├── app.js          # Express app configuration
│   │   ├── server.js       # Server entry point
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── data/           # Data models
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── config.js       # API configuration
│   │   ├── styles.css      # Green theme styling
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
├── docker-compose.yml      # Docker orchestration
├── DEPLOYMENT.md           # Deployment guide
└── .env.example            # Environment template
```

## 🎨 Customization

### Change School Name
Update `APP_NAME` in `.env`:
```bash
APP_NAME=West and Star Academy
```

### Change Theme Color
Update `APP_THEME_COLOR` in `.env`:
```bash
APP_THEME_COLOR=green
```

## 🔐 Security

- CORS configured for safe cross-origin requests
- JWT authentication support
- Environment variables for sensitive data
- Production-ready error handling

## 📝 Environment Variables

See [.env.example](./.env.example) for all available options:

```bash
# Server
PORT=5000
HOST=0.0.0.0

# Client
CLIENT_URL=http://localhost:5173

# App
APP_NAME=West and Star Academy
APP_THEME_COLOR=green
```

## 🛠️ Development

### Backend Commands
```bash
cd backend
npm install      # Install dependencies
npm run dev      # Run in development mode
npm start        # Run in production mode
```

### Frontend Commands
```bash
cd frontend
npm install      # Install dependencies
npm run dev      # Run in development mode
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📊 API Endpoints

- `GET /api/health` - Health check
- `POST /api/login` - User authentication
- `GET /api/dashboard` - Dashboard data
- `GET/POST /api/students` - Student management
- `GET /api/teachers` - Teacher directory
- `GET/POST /api/attendance` - Attendance records
- `GET/POST /api/fees` - Fee management
- `GET /api/timetable` - Academic schedule
- `GET/POST /api/exams` - Exam results
- `GET /api/reports` - Report cards

## 🌐 Making it Internet-Accessible

### Simple Steps:

1. **Find your public IP:**
   ```bash
   curl ifconfig.me
   ```

2. **Deploy on a server:**
   - Use cloud platform (Railway, Heroku, etc.)
   - Or VPS (DigitalOcean, AWS, etc.)

3. **Access from anywhere:**
   - Browser: `https://yourdomain.com`
   - Mobile: Same URL
   - Anywhere: Full internet access

4. **Use custom domain:**
   - Point domain to server IP
   - Set up HTTPS/SSL certificate

## 📚 Learn More

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- React: https://react.dev
- Express: https://expressjs.com
- Vite: https://vitejs.dev

## 📞 Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md)
2. Review logs: `npm run dev` output
3. Check browser console (F12)
4. Check network requests in DevTools

## 📄 License

MIT License - feel free to use for educational and commercial purposes.

---

**🎓 West and Star Academy** - Empowering Schools with Technology
