# Backend API - Symfony

API REST pour la gestion du back-office (utilisateurs, chauffeurs, patients, rendez-vous).

## Architecture

Cette API est conçue pour être **facilement remplaçable**. Le frontend communique uniquement via des endpoints REST standards, ce qui permet de remplacer Symfony par n'importe quelle autre technologie (Java/Spring, Node.js, etc.) sans modifier le frontend.

## Prérequis

- PHP 8.2+
- Composer
- PostgreSQL 16+
- OpenSSL (pour JWT)

## Installation

1. Installer les dépendances :
```bash
composer install
```

2. Configurer la base de données dans `.env` :
```
DATABASE_URL="postgresql://username:password@127.0.0.1:5432/dbname?serverVersion=16&charset=utf8"
```

3. Générer les clés JWT :
```bash
php bin/console lexik:jwt:generate-keypair
```

4. Créer la base de données et exécuter les migrations :
```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

5. Créer un utilisateur admin :
```bash
php bin/console app:create-admin
```

## Démarrage

```bash
symfony server:start
# ou
php -S localhost:8000 -t public/
```

## Endpoints API

### Authentification
- `POST /api/auth/login` - Connexion (retourne JWT)

### Admin - Utilisateurs
- `GET /api/admin/users` - Liste des utilisateurs
- `GET /api/admin/users/{id}` - Détails d'un utilisateur
- `POST /api/admin/users` - Créer un utilisateur
- `PUT /api/admin/users/{id}` - Modifier un utilisateur
- `DELETE /api/admin/users/{id}` - Supprimer un utilisateur

### Admin - Chauffeurs
- `GET /api/admin/drivers` - Liste des chauffeurs
- `GET /api/admin/drivers/{id}` - Détails d'un chauffeur
- `POST /api/admin/drivers` - Créer un chauffeur
- `PUT /api/admin/drivers/{id}` - Modifier un chauffeur
- `DELETE /api/admin/drivers/{id}` - Supprimer un chauffeur

### Admin - Patients
- `GET /api/admin/patients` - Liste des patients
- `GET /api/admin/patients/{id}` - Détails d'un patient
- `POST /api/admin/patients` - Créer un patient
- `PUT /api/admin/patients/{id}` - Modifier un patient
- `DELETE /api/admin/patients/{id}` - Supprimer un patient

### Admin - Rendez-vous
- `GET /api/admin/appointments` - Liste des rendez-vous
- `GET /api/admin/appointments/{id}` - Détails d'un rendez-vous
- `POST /api/admin/appointments` - Créer un rendez-vous
- `PUT /api/admin/appointments/{id}` - Modifier un rendez-vous
- `DELETE /api/admin/appointments/{id}` - Supprimer un rendez-vous

### Admin - Dashboard
- `GET /api/admin/dashboard/stats` - Statistiques globales
- `GET /api/admin/dashboard/recent-appointments` - Derniers rendez-vous

## Structure des données

Tous les endpoints retournent du JSON. Exemple de réponse :

```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com"
}
```

## Sécurité

- Authentification JWT
- CORS configuré pour le frontend
- Tokens avec expiration (1h)
- Refresh token via cookie HttpOnly

## Migration vers une autre technologie

Pour remplacer ce backend par Java/Spring, Node.js, etc. :

1. Implémenter les mêmes endpoints REST
2. Utiliser le même format JSON
3. Configurer CORS et JWT de la même manière
4. Le frontend continuera de fonctionner sans modification
