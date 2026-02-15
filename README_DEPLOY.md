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
└── portfolio-deploy/          (déploiement Docker)
    ├── docker-compose.yml
    ├── Dockerfile
    ├── nginx.conf
    └── .dockerignore
```

## 🔧 Setup manuel (une fois)

### Sur le serveur (root@94.250.202.228)

```bash
# Si pas encore cloné, cloner le repo depuis GitHub
cd /opt
git clone git@gitlab.com:akhlifi-group/web-portfolio-ali.git web-portfolio-ali
cd web-portfolio-ali

# Créer le dossier portfolio-deploy
mkdir -p portfolio-deploy

# Copier les fichiers Docker
cp Dockerfile portfolio-deploy/
cp docker-compose.yml portfolio-deploy/
cp nginx.conf portfolio-deploy/
cp .dockerignore portfolio-deploy/
```

## 🚢 Déployer (chaque fois)

### Locale: Commit et push

```bash
git add .
git commit -m "Mon changement"
git push origin main
```

### Sur le serveur: Pull code et redémarrer Docker

```bash
# 1️⃣  Mettre à jour le code source
cd /opt/web-portfolio-ali
git pull

# 2️⃣  Redémarrer les conteneurs (depuis le dossier portfolio-deploy)
cd portfolio-deploy
docker-compose up -d --build
```

## ✅ Fichiers nécessaires

- ✅ **Dockerfile** - Build image
- ✅ **docker-compose.yml** - Lancer les conteneurs
- ✅ **nginx.conf** - Config web server
- ✅ **.dockerignore** - Optimisation build

Voila! 🎉
