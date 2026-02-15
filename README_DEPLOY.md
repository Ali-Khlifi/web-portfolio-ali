# 🚀 Portfolio Ali - Déploiement Simple

## Infrastructure serveur

```
/opt/web-portfolio-ali/       (code source complet)
├── src/
├── public/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
├── README_DEPLOY.md
└── ...
```

## 🔧 Setup manuel (une fois)

### Sur le serveur (root@94.250.202.228)

```bash
# Cloner le repo depuis GitHub
cd /opt
git clone git@gitlab.com:akhlifi-group/web-portfolio-ali.git web-portfolio-ali
cd web-portfolio-ali

# Lancer Docker
docker-compose up -d --build
```

## 🚢 Déployer (chaque fois)

### Locale: Commit et push

```bash
git add .
git commit -m "Mon changement"
git push origin main
```

### Sur le serveur: Pull et redémarrer Docker

```bash
cd /opt/web-portfolio-ali
git pull
docker-compose up -d --build
```

## ✅ Fichiers nécessaires à la racine

- ✅ **Dockerfile** - Build image
- ✅ **docker-compose.yml** - Lancer les conteneurs
- ✅ **nginx.conf** - Config web server
- ✅ **.dockerignore** - Optimisation build

Voila! C'est tout ce qu'il faut! 🎉
