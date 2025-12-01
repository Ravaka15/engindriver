# Guide d'installation détaillé

## Prérequis

- **PHP** 8.2 ou supérieur
- **Composer** (gestionnaire de dépendances PHP)
- **Node.js** 18+ et npm
- **Docker** et Docker Compose (pour PostgreSQL)
- **Symfony CLI** (optionnel mais recommandé)

## Installation pas à pas

### Étape 1 : Cloner le projet

```bash
git clone <votre-repo>
cd <nom-du-projet>
```

### Étape 2 : Démarrer PostgreSQL

```bash
# Démarrer les conteneurs Docker
docker-compose up -d

# Vérifier que PostgreSQL fonctionne
docker-compose ps
```

Vous pouvez accéder à Adminer (interface web pour PostgreSQL) :
- URL : http://localhost:8081
- Système : PostgreSQL
- Serveur : postgres
- Utilisateur : app
- Mot de passe : app_password
- Base de données : app

### Étape 3 : Configurer le Backend

```bash
cd backend

# Installer les dépendances PHP
composer install

# Copier et configurer .env
cp .env .env.local
# Éditer .env.local si nécessaire

# Générer les clés JWT pour l'authentification
php bin/console lexik:jwt:generate-keypair

# Créer la base de données
php bin/console doctrine:database:create

# Créer les tables
php bin/console doctrine:schema:create
# OU utiliser les migrations
php bin/console doctrine:migrations:migrate

# Créer un utilisateur administrateur
php bin/console app:create-admin
# Suivre les instructions (email, mot de passe, prénom, nom)
```

### Étape 4 : Démarrer le serveur Backend

Option A - Avec Symfony CLI (recommandé) :
```bash
symfony server:start
```

Option B - Avec PHP built-in server :
```bash
php -S localhost:8000 -t public/
```

Le backend sera accessible sur : http://localhost:8000

### Étape 5 : Configurer le Frontend

```bash
# Ouvrir un nouveau terminal
cd frontend

# Installer les dépendances Node.js
npm install

# Créer le fichier .env
cp .env.example .env

# Le fichier .env devrait contenir :
# VITE_API_URL=http://localhost:8000/api
```

### Étape 6 : Démarrer le serveur Frontend

```bash
npm run dev
```

Le frontend sera accessible sur : http://localhost:5173

## Vérification de l'installation

### 1. Tester l'API Backend

```bash
# Test de connexion (remplacer par vos identifiants admin)
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"votre_password"}'
```

Vous devriez recevoir un token JWT.

### 2. Tester le Frontend

1. Ouvrir http://localhost:5173 dans votre navigateur
2. Naviguer vers la page de connexion admin
3. Se connecter avec les identifiants créés

## Données de test (optionnel)

Pour ajouter des données de test, vous pouvez créer une commande Symfony :

```bash
# Dans backend/
php bin/console app:load-fixtures
```

Ou ajouter manuellement via l'interface admin une fois connecté.

## Problèmes courants

### Erreur : "Connection refused" sur PostgreSQL

```bash
# Vérifier que Docker est démarré
docker-compose ps

# Redémarrer les conteneurs
docker-compose restart
```

### Erreur : "JWT key not found"

```bash
cd backend
php bin/console lexik:jwt:generate-keypair
```

### Erreur : Port 8000 déjà utilisé

```bash
# Utiliser un autre port
php -S localhost:8001 -t public/

# Puis mettre à jour frontend/.env
# VITE_API_URL=http://localhost:8001/api
```

### Erreur : "CORS policy" dans le navigateur

Vérifier que `backend/config/packages/nelmio_cors.yaml` contient :
```yaml
nelmio_cors:
    defaults:
        allow_origin: ['http://localhost:5173']
```

## Structure des URLs

- **Frontend** : http://localhost:5173
- **Backend API** : http://localhost:8000/api
- **Adminer (PostgreSQL)** : http://localhost:8081

## Commandes utiles

### Backend
```bash
# Voir les routes disponibles
php bin/console debug:router

# Créer une migration
php bin/console make:migration

# Vider le cache
php bin/console cache:clear

# Créer un nouvel admin
php bin/console app:create-admin
```

### Frontend
```bash
# Build pour production
npm run build

# Preview du build
npm run preview

# Linter
npm run lint
```

### Docker
```bash
# Voir les logs PostgreSQL
docker-compose logs postgres

# Arrêter les conteneurs
docker-compose down

# Supprimer les volumes (⚠️ supprime les données)
docker-compose down -v
```

## Prochaines étapes

1. Personnaliser les entités selon vos besoins
2. Ajouter des pages frontend pour chaque section
3. Implémenter la validation des formulaires
4. Ajouter des tests
5. Configurer un environnement de production

## Support

Pour toute question, consulter :
- Documentation Symfony : https://symfony.com/doc
- Documentation React : https://react.dev
- Documentation PostgreSQL : https://www.postgresql.org/docs/
