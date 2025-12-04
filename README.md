# 🏠 Portfolio Interactif 3D - Jérémie PIRES

Un portfolio immersif sous forme de chambre 3D interactive, développé avec React, Three.js et TypeScript.

## 🎮 Démo

🔗 [Voir le portfolio en ligne](https://jeremie-pires.github.io)

## ✨ Fonctionnalités

- **Exploration 3D** : Naviguez librement dans une chambre virtuelle modélisée en 3D
- **Contrôles intuitifs** :
  - `ZQSD` pour se déplacer
  - `Souris` pour regarder autour
  - `Clic` sur les icônes pour interagir
- **Points d'intérêt interactifs** :
  - 💻 **Ordinateur** : Découvrez mes projets (Bot Instagram, DApp Ethereum, Portfolio)
  - 📱 **Téléphone** : Mes coordonnées de contact
  - 🎹 **Piano** : Mes passions et hobbies
  - 📚 **Étagère** : Mes compétences techniques (React, TypeScript, Java, Python...)
  - 🎒 **Sac d'école** : Mon parcours académique
  - 📄 **CV** : Téléchargez mon CV en PDF
- **Système de collision** : Déplacement réaliste avec détection des meubles
- **Design responsive** : Interface adaptée à tous les écrans

## 🛠️ Technologies utilisées

| Catégorie       | Technologies                                  |
| --------------- | --------------------------------------------- |
| **Frontend**    | React 19, TypeScript                          |
| **3D**          | Three.js, React Three Fiber, React Three Drei |
| **Build**       | Vite 7                                        |
| **Déploiement** | GitHub Pages                                  |
| **Linting**     | ESLint                                        |

## 📁 Structure du projet

```
src/
├── App.tsx                     # Composant principal avec scène 3D et contrôles
├── components/
│   ├── Room/                   # Modèle 3D de la chambre
│   ├── UI/                     # Interface utilisateur
│   │   ├── Modal.tsx           # Fenêtres modales
│   │   ├── Instructions.tsx    # Guide de navigation
│   │   └── InteractiveHotspots.tsx  # Points cliquables
│   ├── Desk/                   # Contenus du bureau
│   │   ├── Computer/           # Projets
│   │   ├── CV/                 # Présentation personnelle
│   │   └── Phone/              # Contact
│   ├── Bookshelf/              # Compétences
│   ├── Piano/                  # Passions
│   └── Schoolbag/              # Parcours
├── types/                      # Types TypeScript
└── assets/                     # Images et icônes
```

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/Jeremie-pires/Jeremie-pires.github.io.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

## 🎯 Compétences présentées

- **Langages** : HTML5, CSS3, JavaScript ES6+, TypeScript, Python, Java
- **Frameworks** : React, Angular, Node.js, Spring Boot
- **Bases de données** : MySQL, MongoDB, Firebase
- **Outils** : Git, Vite, ESLint

## 📧 Contact

- **GitHub** : [@Jeremie-pires](https://github.com/jeremie-pires)

---

⭐ N'hésitez pas à laisser une étoile si vous aimez ce projet !
