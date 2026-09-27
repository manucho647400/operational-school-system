# West and Star Academy - Deployment Guide

## Making the App Accessible Over the Internet

### Overview
This guide explains how to deploy the West and Star Academy school management system so it's accessible from anywhere on the internet.

---

## Option 1: Using ngrok (Quick Testing)

**Best for:** Testing internet access without complex setup

### Setup:
1. Download [ngrok](https://ngrok.com/download)
2. Run the backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. In another terminal, expose with ngrok:
   ```bash
   ngrok http 5000
   ```
4. Note the URL provided (e.g., `https://abc123.ngrok.io`)
5. Set in frontend environment and run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
6. Access via: `https://abc123.ngrok.io:5173`

---

## Option 2: Cloud Deployment (Recommended)

### A. Heroku (Free option with limitations)

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   choco install heroku-cli
   ```

2. **Create Heroku apps**
   ```bash
   heroku login
   heroku create west-star-academy-api
   heroku create west-star-academy-web
   ```

3. **Add Procfile for backend**
   Create `backend/Procfile`:
   ```
   web: npm start
   ```

4. **Deploy backend**
   ```bash
   cd backend
   git init
   heroku git:remote -a west-star-academy-api
   git add .
   git commit -m "Deploy West Star Academy backend"
   git push heroku main
   ```

5. **Update frontend environment**
   Create `frontend/.env.production`:
   ```
   VITE_API_URL=https://west-star-academy-api.herokuapp.com/api
   ```

6. **Deploy frontend**
   ```bash
   cd frontend
   npm run build
   # Deploy to Vercel, Netlify, or GitHub Pages
   ```

### B. Railway.app (Modern, easier)

1. **Sign up** at [railway.app](https://railway.app)
2. **Connect GitHub repository**
3. **Set environment variables:**
   - `PORT=5000`
   - `HOST=0.0.0.0`
   - `NODE_ENV=production`
4. **Deploy with one click**

### C. DigitalOcean / AWS / Azure

1. **Create a droplet/instance**
2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
3. **Install PM2 (process manager):**
   ```bash
   sudo npm install -g pm2
   ```
4. **Clone repository:**
   ```bash
   git clone https://github.com/manucho647400/operational-school-system.git
   cd operational-school-system
   ```
5. **Setup backend:**
   ```bash
   cd backend
   npm install
   pm2 start "npm start" --name "school-api"
   ```
6. **Setup frontend:**
   ```bash
   cd ../frontend
   npm install
   npm run build
   # Use Nginx to serve the dist folder
   ```

---

## Option 3: Docker Deployment (Production)

### Create Docker files:

**backend/Dockerfile**
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

**frontend/Dockerfile**
```dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**docker-compose.yml**
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - PORT=5000
      - HOST=0.0.0.0
      - APP_NAME=West and Star Academy
      - APP_THEME_COLOR=green
    restart: unless-stopped

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped
```

### Deploy with Docker:
```bash
docker-compose up -d
```

---

## Configuration for Internet Access

### Environment Variables

Create a `.env` file in the root:

```bash
# Backend
PORT=5000
HOST=0.0.0.0
NODE_ENV=production

# Frontend
VITE_API_URL=https://yourdomain.com/api

# App
APP_NAME=West and Star Academy
APP_THEME_COLOR=green

# CORS Origins (separate by comma)
ALLOWED_ORIGINS=https://yourdomain.com,https://app.yourdomain.com
```

---

## Security Considerations

✅ **Always use HTTPS** in production
✅ **Enable CORS properly** (already configured)
✅ **Use environment variables** for sensitive data
✅ **Add authentication** (JWT is prepared)
✅ **Keep dependencies updated**
✅ **Use a reverse proxy** (Nginx/Apache)
✅ **Enable rate limiting**
✅ **Regular backups**

---

## Testing Internet Accessibility

1. **Get your public IP:**
   - Linux/Mac: `curl ifconfig.me`
   - Or check: https://whatismyipaddress.com

2. **Access the app:**
   - `http://YOUR_IP:5000` (backend)
   - `http://YOUR_IP:5173` (frontend dev)

3. **Test with external device:**
   - Use phone on different network
   - Ask friend to visit your IP

4. **Monitor logs:**
   ```bash
   # Using PM2
   pm2 logs
   
   # Using Docker
   docker-compose logs -f
   ```

---

## Troubleshooting

### "Cannot reach server"
- Check firewall allows ports 5000 and 5173
- Check server is running: `curl http://localhost:5000/api/health`
- Check CORS settings in `.env`

### "CORS error"
- Update `ALLOWED_ORIGINS` in `.env`
- Restart backend: `npm run dev` or `pm2 restart all`

### "API not responding"
- Check internet connection
- Verify `VITE_API_URL` in frontend config
- Check network tab in browser DevTools

---

## Next Steps

1. ✅ Deploy backend
2. ✅ Deploy frontend
3. ✅ Configure custom domain (optional)
4. ✅ Set up SSL/HTTPS certificate
5. ✅ Monitor uptime and logs
6. ✅ Regular backups

---

## Support

For issues:
1. Check backend logs: `npm run dev`
2. Check browser console (F12)
3. Check network requests in DevTools
4. Review this guide's troubleshooting section
