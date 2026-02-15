# 🚀 Portfolio Ali - Déploiement Simple

## Infrastructure serveur

```
/opt/portfolio-ali/
├── portfolio-ali.git/         (dépôt Git bare)
├── portfolio-ali/             (code source cloné)
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── nginx.conf
│   ├── package.json
│   └── ...
└── portfolio-deploy/          (déploiement Docker)
    ├── docker-compose.yml
    ├── Dockerfile
    ├── nginx.conf
    └── .dockerignore
```

## 🔧 Setup manuel (une fois)

### Sur le serveur (root@94.250.202.228)

```bash
# Créer la structure
mkdir -p /opt/portfolio-ali/portfolio-deploy
cd /opt/portfolio-ali

# Initialiser le dépôt bare
git init --bare portfolio-ali.git

# Cloner le code source
git clone portfolio-ali.git portfolio-ali

# Copier les fichiers Docker dans portfolio-deploy
cp portfolio-ali/Dockerfile portfolio-deploy/
cp portfolio-ali/docker-compose.yml portfolio-deploy/
cp portfolio-ali/nginx.conf portfolio-deploy/
cp portfolio-ali/.dockerignore portfolio-deploy/
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
cd /opt/portfolio-ali/portfolio-ali
git pull

# 2️⃣  Redémarrer les conteneurs
cd /opt/portfolio-ali/portfolio-deploy
docker-compose up -d
```

## ✅ Fichiers nécessaires

- ✅ **Dockerfile** - Build image
- ✅ **docker-compose.yml** - Lancer les conteneurs
- ✅ **nginx.conf** - Config web server
- ✅ **.dockerignore** - Optimisation build

Voila! 🎉
