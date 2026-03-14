# 🚀 Portfolio Ali - Remote Deployment Guide

## Remote Server Setup

**Server**: 94.250.202.228 (Digital Ocean VPS)  
**Port**: 3000  
**Location**: `/opt/web-portfolio-ali/`

## 🔧 Initial Setup (One-time only)

### On the remote server (root@94.250.202.228)

```bash
# Clone the repository
cd /opt
git clone git@gitlab.com:akhlifi-group/web-portfolio-ali.git web-portfolio-ali
cd web-portfolio-ali

# Deployment is handled by the central docker-compose.yml
# See: /docker-compose-deployment/ repository
```

## 🚢 Deployment Process

### Local: Update version and tag

1. **Merge develop into main** (when ready for release)
```bash
git checkout main
git pull origin main
git merge develop --no-ff -m "Merge develop into main for v1.0.1"
git push origin main
```

2. **Create version tag on main**
```bash
git tag -a v1.0.1 -m "Release v1.0.1"
git push origin v1.0.1
```

### Local: Push changes

```bash
git add .
git commit -m "Your changes"
git push origin main
```

### Remote: Deploy via central docker-compose

```bash
# From the docker-compose-deployment repository
cd /docker-compose-deployment

# Update and restart all services (including portfolio)
docker-compose pull
docker-compose up -d --build

# Verify portfolio is running
curl http://localhost:3000
```

## 📋 Required Files in Root

- ✅ **Dockerfile** - Build Angular app
- ✅ **docker-compose.yml** - Local container config (for reference)
- ✅ **nginx.conf** - Web server configuration
- ✅ **.dockerignore** - Build optimization
- ✅ **package.json** - Dependencies
- ✅ **angular.json** - Angular CLI config

## 🔗 Related Repositories

- **Portfolio**: https://gitlab.com/akhlifi-group/web-portfolio-ali
- **Deployment**: https://gitlab.com/akhlifi-group/docker-compose-deployment
- **Environment**: VPS at 94.250.202.228 with Docker & Nginx

## ✨ That's it! Deployment simplified!
