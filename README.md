This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
# lancer front et back
npm run dev

#lancer frontend
npm run frontend

#lancer backend
npm run backend
```

# Documentation de l'API utilisateur

Cette API fournit des fonctionnalités pour gérer les utilisateurs.

## Endpoints

- Enregistrer un nouvel utilisateur :

  - URL : `localhost:5000/api/user/register`
  - Méthode : POST
  - Description : Permet d'enregistrer un nouvel utilisateur dans le système.

- Mettre à jour un utilisateur existant :

  - URL : `localhost:5000/api/user/update/id`
  - Méthode : PUT
  - Description : Met à jour les informations d'un utilisateur spécifié par son identifiant (`id`).

- Se connecter :

  - URL : `localhost:5000/api/user/login`
  - Méthode : POST
  - Description : Permet à un utilisateur de se connecter au système.

- Obtenir tous les utilisateurs :

  - URL : `localhost:5000/api/user/getall`
  - Méthode : GET
  - Description : Récupère tous les utilisateurs enregistrés dans le système.

- Obtenir un utilisateur spécifique :

  - URL : `localhost:5000/api/user/getone`
  - Méthode : GET
  - Description : Récupère les informations d'un utilisateur spécifié par son identifiant.

- Supprimer un utilisateur :
  - URL : `localhost:5000/api/user/delete`
  - Méthode : DELETE
  - Description : Supprime un utilisateur spécifié par son identifiant.

## Remarques

- Assurez-vous d'inclure les données nécessaires dans le corps des requêtes POST et PUT.
- Les identifiants (`id`) doivent être spécifiés dans l'URL pour les requêtes qui nécessitent une identification spécifique.
- Veillez à utiliser les bonnes méthodes HTTP correspondant aux opérations que vous souhaitez effectuer.
- Les réponses de l'API seront renvoyées au format JSON.
