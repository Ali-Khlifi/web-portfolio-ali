# Stage 1: Build
FROM node:22-alpine as builder

WORKDIR /app

# Copier les fichiers package
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le code source
COPY . .

# Builder l'application
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copier la config nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers buildés depuis le stage 1
COPY --from=builder /app/dist/web-portfolio-ali/browser /usr/share/nginx/html

# Exposer le port
EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]
