# Pokémon Project

Bienvenue dans le **Pokémon Project**, une application web interactive conçue pour les fans de Pokémon. Ce projet utilise **React**, **Redux**, et **React Router** pour gérer les données et la navigation, tout en étant construit avec **Vite** pour un développement rapide et performant.

### 🌐 [Voir le projet déployé ici](https://3wa-binome.github.io/pokemon-project/)  

---

## 👥 Auteurs
- **Julien Loiseau** - Développeur full stack
- **Bastien Raoult** - Développeur full stack

---

## 🚀 Fonctionnalités

- **Liste des Pokémon** : Parcourez une liste de Pokémon avec des détails interactifs.
- **Player** : Choisissez 2 pseudonymes de joueurs.
- **Deck** : Choisissez votre deck et préparez-vous à vous lancer dans la bataille.
- **Combat** : Combattez avec votre ami en incarnant les joueurs que vous avez créés, avec les decks que vous avez choisis.
- **Gestion d'état global** : Utilisation de Redux pour gérer l'état de l'application.
- **Navigation dynamique** : Routes dynamiques configurées avec React Router.
- **Design réactif** : Adapté aux mobiles, tablettes et ordinateurs.
- **Performances optimales** : Build rapide avec Vite.

---

## 🛠️ Technologies utilisées

- **[React](https://reactjs.org/)** : Pour créer des composants réactifs.
- **[Redux Toolkit](https://redux-toolkit.js.org/)** : Pour la gestion simplifiée de l'état global.
- **[React Router](https://reactrouter.com/)** : Pour gérer la navigation entre les différentes pages.
- **[Axios](https://axios-http.com/)** : Pour interagir avec l'API Pokémon.
- **[Vite](https://vitejs.dev/)** : Pour un développement et une compilation rapides.
- **[GitHub Pages](https://pages.github.com/)** : Pour héberger et déployer l'application.

---

## 📂 Structure du projet

Voici un aperçu de l'arborescence du projet :

```plaintext
pokemon-project/
├── public/               # Fichiers publics (favicon, etc.)
├── src/
│   ├── Components/       # Composants réutilisables
│   ├── css/              # Feuille de style css
│   ├── Features/         # Slices
│   ├── pages/            # Pages principales
│   ├── App/              # Store Redux
│   ├── App.jsx           # Composant des routes
│   └── index.jsx         # Point d'entrée de l'application
├── .gitignore            # Fichiers à ignorer par Git
├── package.json          # Dépendances et scripts npm
├── vite.config.js        # Configuration de Vite
└── README.md             # Documentation du projet
