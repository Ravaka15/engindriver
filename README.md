# Application de Gestion - Frontend + Backend

Application complète avec frontend React et backend Symfony/PostgreSQL pour la gestion de chauffeurs, patients et rendez-vous.

## 🏗️ Architecture

L'architecture est conçue pour être **modulaire et facilement remplaçable** :

```
┌─────────────────┐
│   Frontend      │
│   React + TS    │
└────────┬────────┘
         │
         │ REST API (JSON)
         │
┌────────▼────────┐
│   Backend       │
│   Symfony/PHP   │  ← Facilement remplaçable par Java, Node.js, etc.
└────────┬────────┘
         │
┌────────▼────────┐
│   PostgreSQL    │
└─────────────────┘
```

### Principe de séparation

- **Frontend** : Communique uniquement via API REST standard
- **Backend** : Expose des endpoints REST avec JSON
- **Couche d'abstraction** : `frontend/src/service/apiClient.ts` centralise tous les appels API

✅ **Avantage** : Vous pouvez remplacer Symfony par Java/Spring, Node.js/Express, Python/Django, etc. sans toucher au frontend !

## 📁 Structure du projet

```
.
├── frontend/               # Application React
│   ├── src/
│   │   ├── api/           # Configuration Axios
│   │   ├── service/       # Couche d'abstraction API
│   │   ├── pages/
│   │   │   ├── admin/     # Pages back-office
│   │   │   └── front/     # Pages front-office
│   │   └── components/    # Composants réutilisables
│   └── package.json
│
├── backend/               # API Symfony
│   ├── src/
│   │   ├── Entity/       # Modèles de données
│   │   ├── Controller/   # Endpoints API
│   │   └── Command/      # Commandes CLI
│   ├── config/           # Configuration
│   └── composer.json
│
└── docker-compose.yml    # PostgreSQL + Adminer
```

## 🚀 Installation

### 1. Base de données (PostgreSQL)

```bash
docker-compose up -d
```

Accès Adminer : http://localhost:8081
- Serveur : postgres
- Utilisateur : app
- Mot de passe : app_password
- Base : app

### 2. Backend (Symfony)

```bash
cd backend

# Installer les dépendances
composer install

# Configurer .env (copier .env et ajuster si nécessaire)
# DATABASE_URL="postgresql://app:app_password@127.0.0.1:5432/app?serverVersion=16&charset=utf8"

# Générer les clés JWT
php bin/console lexik:jwt:generate-keypair

# Créer la base de données
php bin/console doctrine:database:create

# Créer les tables
php bin/console doctrine:schema:create

# Créer un admin
php bin/console app:create-admin

# Démarrer le serveur
symfony server:start
# ou
php -S localhost:8000 -t public/
```

### 3. Frontend (React)

```bash
cd frontend

# Installer les dépendances
npm install

# Configurer l'API
cp .env.example .env
# VITE_API_URL=http://localhost:8000/api

# Démarrer le dev server
npm run dev
```

## 📡 API Endpoints

### Authentification
- `POST /api/auth/login` - Connexion

### Dashboard
- `GET /api/admin/dashboard/stats` - Statistiques
- `GET /api/admin/dashboard/recent-appointments` - Derniers rendez-vous

### Utilisateurs (CRUD)
- `GET /api/admin/users` - Liste
- `GET /api/admin/users/{id}` - Détails
- `POST /api/admin/users` - Créer
- `PUT /api/admin/users/{id}` - Modifier
- `DELETE /api/admin/users/{id}` - Supprimer

### Chauffeurs (CRUD)
- `GET /api/admin/drivers` - Liste
- `GET /api/admin/drivers/{id}` - Détails
- `POST /api/admin/drivers` - Créer
- `PUT /api/admin/drivers/{id}` - Modifier
- `DELETE /api/admin/drivers/{id}` - Supprimer

### Patients (CRUD)
- `GET /api/admin/patients` - Liste
- `GET /api/admin/patients/{id}` - Détails
- `POST /api/admin/patients` - Créer
- `PUT /api/admin/patients/{id}` - Modifier
- `DELETE /api/admin/patients/{id}` - Supprimer

### Rendez-vous (CRUD)
- `GET /api/admin/appointments` - Liste
- `GET /api/admin/appointments/{id}` - Détails
- `POST /api/admin/appointments` - Créer
- `PUT /api/admin/appointments/{id}` - Modifier
- `DELETE /api/admin/appointments/{id}` - Supprimer

## 🔄 Remplacer le backend

Pour migrer vers une autre technologie (Java, Node.js, etc.) :

1. **Implémenter les mêmes endpoints REST** (voir liste ci-dessus)
2. **Utiliser le même format JSON** pour les réponses
3. **Configurer CORS** pour autoriser le frontend
4. **Implémenter JWT** pour l'authentification
5. **Mettre à jour** `VITE_API_URL` dans le frontend

Le frontend continuera de fonctionner sans modification grâce à la couche d'abstraction `apiClient.ts`.

## 🎨 Pages Back-Office

- **Dashboard** : Statistiques et aperçu
- **Gestion utilisateurs** : CRUD complet
- **Gestion chauffeurs** : CRUD complet
- **Gestion patients** : CRUD complet
- **Gestion rendez-vous** : CRUD complet avec assignation de chauffeurs

## 🔐 Sécurité

- Authentification JWT
- Tokens avec expiration (1h)
- Refresh token via cookie HttpOnly
- CORS configuré
- Mots de passe hashés (bcrypt)
- Rôles utilisateurs (ROLE_USER, ROLE_ADMIN)

## 🛠️ Technologies

### Frontend
- React 19
- TypeScript
- Vite
- TailwindCSS
- Axios
- React Router

### Backend
- Symfony 7.1
- PHP 8.2+
- Doctrine ORM
- JWT Authentication
- CORS

### Base de données
- PostgreSQL 16

## 📝 Prochaines étapes

1. Ajouter la validation des formulaires
2. Implémenter la pagination
3. Ajouter des filtres de recherche
4. Créer des graphiques pour le dashboard
5. Ajouter l'upload de fichiers (photos de profil, documents)
6. Implémenter les notifications en temps réel
