# 🎓 West End Star Academy - Deployment Guide

## Overview

Complete deployment guide for West End Star Academy with **4 deployment methods**:

1. **ngrok** - Quick testing (free, temporary URLs)
2. **Docker** - Containerized deployment (flexible)
3. **Railway** - Modern cloud platform (recommended for beginners)
4. **Heroku** - Classic PaaS (free tier ending, but still available)

---

## 🚀 Quick Start (Choose One)

### Option 1: ngrok (5 minutes - Testing Only)

**Best for:** Quick testing, demos, temporary access

```bash
# Install ngrok
# Download from: https://ngrok.com/download
# Or: brew install ngrok (macOS)

# Terminal 1: Start backend
cd backend
npm install
npm run dev

# Terminal 2: Expose with ngrok
ngrok http 5000

# Terminal 3: Start frontend
cd frontend
npm install
npm run dev

# Access via the ngrok URL: https://abcd1234.ngrok.io
```

**Pros:**
- ✅ Free and instant
- ✅ No server setup needed
- ✅ Works from home/laptop

**Cons:**
- ❌ URL changes every 2 hours (free tier)
- ❌ Not suitable for production
- ❌ Limited bandwidth

---

### Option 2: Docker (Local Container)

**Best for:** Testing deployment, local container setup

```bash
# Make sure Docker is installed
# Download: https://www.docker.com/products/docker-desktop

# Build and run
docker-compose up -d

# Access:
# Frontend: http://localhost:5173
# Backend: http://localhost:5000

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

**Pros:**
- ✅ Consistent environment
- ✅ Easy to scale
- ✅ Production-ready

**Cons:**
- ❌ Still local (need server to host)
- ❌ Requires Docker knowledge

---

### Option 3: Railway.app (⭐ RECOMMENDED)

**Best for:** Easiest cloud deployment, free tier available

#### Step 1: Prepare Repository
```bash
# Ensure both backend/package.json and frontend/package.json exist
# They already do ✅
```

#### Step 2: Deploy
1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Connect your GitHub account
4. Select `manucho647400/operational-school-system`
5. Configure environment variables:
   ```
   PORT=5000
   HOST=0.0.0.0
   APP_NAME=West End Star Academy
   APP_THEME_COLOR=green
   NODE_ENV=production
   ```
6. Click Deploy

#### Step 3: Get URL
- Railway provides a public URL
- Example: `https://west-end-star-academy.up.railway.app`
- Update frontend VITE_API_URL to point to this

**Pros:**
- ✅ One-click deployment
- ✅ Free tier available
- ✅ Automatic scaling
- ✅ GitHub integration

**Cons:**
- ⚠️ Free tier has usage limits
- ⚠️ Paid plans required for production

---

### Option 4: Heroku

**Best for:** Traditional PaaS, familiar workflow

#### Step 1: Install Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows (Chocolatey)
choco install heroku-cli

# Or download: https://devcenter.heroku.com/articles/heroku-cli
```

#### Step 2: Create Heroku Apps
```bash
heroku login

# Create backend app
heroku create west-end-star-backend

# Create frontend app (or use static hosting)
heroku create west-end-star-frontend
```

#### Step 3: Create Procfile
```bash
cat > Procfile << 'EOF'
web: npm start
EOF
```

#### Step 4: Deploy Backend
```bash
cd backend

# Add Heroku remote
heroku git:remote -a west-end-star-backend

# Set environment variables
heroku config:set APP_NAME="West End Star Academy"
heroku config:set APP_THEME_COLOR=green
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

#### Step 5: Deploy Frontend
```bash
cd frontend

# Create .env.production
echo 'VITE_API_URL=https://west-end-star-backend.herokuapp.com/api' > .env.production

# Build
npm run build

# Deploy to Netlify or Vercel (free alternatives)
# Or to Heroku static hosting
```

#### Step 6: Access
```
https://west-end-star-backend.herokuapp.com/api/health
https://west-end-star-frontend.herokuapp.com
```

**Pros:**
- ✅ Mature platform
- ✅ Good documentation
- ✅ Free tier (limited)

**Cons:**
- ❌ Paid tier required for production
- ❌ Dyno sleeps on free tier

---

## 🔧 Environment Variables for Each Platform

### Railway
```bash
PORT=5000
HOST=0.0.0.0
APP_NAME=West End Star Academy
APP_THEME_COLOR=green
NODE_ENV=production
DEPLOYMENT_MODE=railway
```

### Heroku
```bash
PORT=5000
APP_NAME=West End Star Academy
APP_THEME_COLOR=green
NODE_ENV=production
DEPLOYMENT_MODE=heroku
```

---

## 🧪 Testing Your Deployment

### 1. Check API Health
```bash
curl https://your-deployed-url.com/api/health
```

Expected response:
```json
{
  "status": "ok",
  "app": "West End Star Academy",
  "theme": "green",
  "timestamp": "2026-09-27T06:20:24Z",
  "environment": "production",
  "deployment": "your-platform"
}
```

### 2. Test from Mobile
- Use phone on different network
- Access: `https://your-deployed-url.com`
- Test login and navigation

### 3. Monitor Performance
```bash
# Check server logs
# Railway: Dashboard → Logs
# Heroku: heroku logs -t
```

---

## 📊 Comparison Table

| Feature | ngrok | Docker | Railway | Heroku |
|---------|-------|--------|---------|--------|
| Setup Time | 5 min | 10 min | 15 min | 20 min |
| Cost | Free | Free | Free/Paid | Free/Paid |
| Uptime | 99% | Depends | 99.9% | 99.9% |
| Custom Domain | ❌ | ❌ | ✅ | ✅ |
| SSL/HTTPS | ✅ | ❌ | ✅ | ✅ |
| Production Ready | ❌ | ⚠️ | ✅ | ✅ |
| Scaling | ❌ | ⚠️ | ✅ | ✅ |
| Best For | Testing | Local | Beginners | Classic |

---

## 🚨 Troubleshooting

### "Cannot reach server"
- Check firewall settings
- Verify ports are open (5000, 5173)
- Check server status: `curl http://your-ip:5000/api/health`

### "CORS Error"
- Update allowed origins in backend/src/app.js
- Restart server
- Clear browser cache (Ctrl+Shift+Delete)

### "API returns 502"
- Backend service crashed
- Check logs: platform dashboard
- Restart service

### "Slow performance"
- Check server resources (CPU, RAM)
- Enable caching headers
- Use CDN for static files
- Optimize database queries

---

## ✅ Deployment Checklist

- [ ] Update `APP_NAME` to "West End Star Academy"
- [ ] Set `APP_THEME_COLOR=green`
- [ ] Configure CORS origins
- [ ] Set up environment variables
- [ ] Test API health endpoint
- [ ] Test frontend connectivity
- [ ] Setup SSL/HTTPS
- [ ] Enable logging/monitoring
- [ ] Setup backup strategy
- [ ] Configure auto-restart
- [ ] Monitor uptime

---

## 📚 Additional Resources

- **Railway Docs:** https://railway.app/docs
- **Heroku Docs:** https://devcenter.heroku.com
- **Docker Docs:** https://docs.docker.com
- **Nginx Docs:** https://nginx.org/en/docs

---

## 🏃 Next Steps

1. **Choose a deployment method** (recommend Railway for easiest)
2. **Follow the steps above**
3. **Test the deployment**
4. **Monitor performance**
5. **Scale as needed**

---

**🏫 West End Star Academy** - Empowering Schools with Technology

Deployed and accessible worldwide! 🌍
