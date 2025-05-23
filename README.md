
# 🛍️ Plateforme E-Commerce

Ce dépôt contient le code source d'une application web de commerce électronique, offrant une plateforme complète pour la vente en ligne de produits divers.

## 🚀 Fonctionnalités principales

- **Gestion des produits** : Ajout, modification et suppression de produits avec des détails complets tels que le nom, la description, le prix et les images.
- **Authentification des utilisateurs** : Système d'inscription et de connexion sécurisé pour les clients et les administrateurs.
- **Panier d'achat** : Permet aux clients d'ajouter des produits à leur panier et de passer des commandes.
- **Interface administrateur** : Tableau de bord pour gérer les produits, les commandes et les utilisateurs.
- **Intégration de paiement** : Support pour les paiements en ligne sécurisés.

## 🛠️ Technologies utilisées

- **Frontend** :
  - HTML5, CSS3, JavaScript
  - Frameworks/libraries : ReactJs , Tailwind Css , daisyUI , NextUI
- **Backend** :
  - Node Js 
- **Base de données** :
  - MongoDB

## 📂 Structure du projet

```
.
├── Backend/
│   ├── [dossiers et fichiers backend]
│   └── ...
├── frontend/
│   ├── [dossiers et fichiers frontend]
│   └── ...
├── node_modules/
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation et exécution

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/youssefkhalifa04/E-Commerce-website.git
   ```

2. **Installer les dépendances** :

   Accédez aux répertoires `Backend` et `frontend` et exécutez :

   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :

   Créez un fichier `.env` dans le répertoire `Backend` et ajoutez les variables nécessaires, telles que les informations de connexion à la base de données et les clés secrètes.

4. **Démarrer l'application** :

   - **Backend** :

     ```bash
     npm start
     ```

   - **Frontend** :

     ```bash
     npm run serve
     ```

   L'application sera accessible à l'adresse `http://localhost:3000` (ou le port configuré).

## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre les étapes suivantes :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b nouvelle-fonctionnalite`).
3. Commitez vos modifications (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez vers la branche (`git push origin nouvelle-fonctionnalite`).
5. Ouvrez une Pull Request.


Ce modèle de `README.md` est conçu pour être informatif et structuré, facilitant la compréhension du projet par les autres développeurs et contribuant à une meilleure collaboration. 
