@echo off
echo 🚀 Démarrage de l'application...
echo.

REM Vérifier si Docker est installé
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker n'est pas installé. Veuillez l'installer d'abord.
    exit /b 1
)

REM Démarrer PostgreSQL
echo 📦 Démarrage de PostgreSQL...
docker-compose up -d

REM Attendre que PostgreSQL soit prêt
echo ⏳ Attente de PostgreSQL...
timeout /t 5 /nobreak >nul

REM Backend
echo.
echo 🔧 Configuration du Backend...
cd backend

if not exist "vendor" (
    echo 📥 Installation des dépendances PHP...
    composer install
)

if not exist "config\jwt\private.pem" (
    echo 🔐 Génération des clés JWT...
    php bin/console lexik:jwt:generate-keypair
)

REM Créer la base de données si elle n'existe pas
php bin/console doctrine:database:create --if-not-exists

REM Créer les tables
echo 🗄️  Création des tables...
php bin/console doctrine:schema:update --force

echo.
echo ✅ Backend configuré!
echo Pour démarrer le serveur backend:
echo   cd backend ^&^& php -S localhost:8000 -t public/
echo.

REM Frontend
cd ..\frontend

if not exist "node_modules" (
    echo 📥 Installation des dépendances Node.js...
    call npm install
)

if not exist ".env" (
    echo ⚙️  Création du fichier .env...
    copy .env.example .env
)

echo.
echo ✅ Frontend configuré!
echo Pour démarrer le serveur frontend:
echo   cd frontend ^&^& npm run dev
echo.

cd ..

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo ✨ Installation terminée!
echo.
echo 📝 Prochaines étapes:
echo   1. Créer un admin: cd backend ^&^& php bin/console app:create-admin
echo   2. Démarrer le backend: cd backend ^&^& php -S localhost:8000 -t public/
echo   3. Démarrer le frontend: cd frontend ^&^& npm run dev
echo.
echo 🌐 URLs:
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:8000
echo   Adminer:  http://localhost:8081
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
pause
