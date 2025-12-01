#!/bin/bash

echo "🚀 Démarrage de l'application..."
echo ""

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Démarrer PostgreSQL
echo "📦 Démarrage de PostgreSQL..."
docker-compose up -d

# Attendre que PostgreSQL soit prêt
echo "⏳ Attente de PostgreSQL..."
sleep 5

# Backend
echo ""
echo "🔧 Configuration du Backend..."
cd backend

if [ ! -d "vendor" ]; then
    echo "📥 Installation des dépendances PHP..."
    composer install
fi

if [ ! -f "config/jwt/private.pem" ]; then
    echo "🔐 Génération des clés JWT..."
    php bin/console lexik:jwt:generate-keypair
fi

# Créer la base de données si elle n'existe pas
php bin/console doctrine:database:create --if-not-exists

# Créer les tables
echo "🗄️  Création des tables..."
php bin/console doctrine:schema:create --dump-sql
php bin/console doctrine:schema:update --force

echo ""
echo "✅ Backend configuré!"
echo "Pour démarrer le serveur backend:"
echo "  cd backend && symfony server:start"
echo "  ou"
echo "  cd backend && php -S localhost:8000 -t public/"
echo ""

# Frontend
cd ../frontend

if [ ! -d "node_modules" ]; then
    echo "📥 Installation des dépendances Node.js..."
    npm install
fi

if [ ! -f ".env" ]; then
    echo "⚙️  Création du fichier .env..."
    cp .env.example .env
fi

echo ""
echo "✅ Frontend configuré!"
echo "Pour démarrer le serveur frontend:"
echo "  cd frontend && npm run dev"
echo ""

cd ..

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Installation terminée!"
echo ""
echo "📝 Prochaines étapes:"
echo "  1. Créer un admin: cd backend && php bin/console app:create-admin"
echo "  2. Démarrer le backend: cd backend && symfony server:start"
echo "  3. Démarrer le frontend: cd frontend && npm run dev"
echo ""
echo "🌐 URLs:"
echo "  Frontend: http://localhost:5173"
echo "  Backend:  http://localhost:8000"
echo "  Adminer:  http://localhost:8081"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
