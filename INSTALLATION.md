# Guide d'Installation - Projet E-commerce Training

## Prérequis

- Node.js 20+ installé
- Git installé
- Compte GitHub
- VS Code ou une autre IDE

## Installation

### 1. Cloner le Projet
# Cloner le repo
git clone https://github.com/Brahimi-Talla01/ecommerce-training.git

# Entrer dans le dossier
cd ecommerce-training
git checkout develop

### 2. Installer les Dépendances
npm install

### 3. Lancer le Projet
npm run dev

Ouvrir [http://localhost:3000](http://localhost:3000)

## Workflow Git

### Commencer une Mission
# Récupérer les dernières modifications
git pull origin develop

# Créer votre branche (remplacer VOTRE-NOM)
git checkout -b feature/products-VOTRE-NOM

# Travailler sur votre code...

# Committer vos changements
git add .
git commit -m "feat: implement Product entity"

# Pousser votre branche
git push origin feature/products-VOTRE-NOM

### Créer une Pull Request

1. Aller sur GitHub
2. Cliquer sur "Compare & pull request"
3. Base branch: develop
4. Description: Expliquer ce que vous avez fait
5. Demander une review 
6. Attendre l'approbation et merge

## Missions

### Mission 1 : Products List (feature/products-list)
Fichiers à compléter :
- src/features/products/domain/entities/Product.ts
- src/features/products/data/repositories/ProductRepository.ts
- src/features/products/presentation/hooks/useProducts.ts
- src/app/products/page.tsx

### Mission 2 : Cart Management (feature/cart-management)
Fichiers à créer :
- src/features/cart/presentation/store/cartStore.ts
- src/features/cart/presentation/components/CartItem.tsx
- src/app/cart/page.tsx

## Conseils

- Lire le README principal
- Regarder les exemples de code dans core/
- Demander de l'aide si besoin
- Committer souvent avec des messages clairs


## PHASE 5 : Checklist Finale

### Avant de Partager avec l'Équipe

- Projet Next.js créé et fonctionnel
- Structure de dossiers en place
- API routes créées et testées
- Fichiers TODO créés avec instructions claires
- README principal rédigé
- Guide d'installation créé
- Repo GitHub créé
- Branches créées (main, develop, feature/*)
- Branche main protégée
- Premier commit poussé
- `.env.local` ajouté au `.gitignore`
- Testé le clonage et l'installation en local

## NB: 
1. Jamais commit directement sur `main` ou `develop`
2. Toujours créer une branche `feature/NOM-MISSION-PRENOM`
3. Pull Request obligatoire (review avant merge)
4. 1 branche = 1 mission (ne pas mélanger)

## Message pour mes membres
Salut a tous ! 

Notre projet de remise à niveau est prêt : un e-commerce simplifié pour apprendre l'architecture Clean.

Repo GitHub : https://github.com/Brahimi-Talla01/ecommerce-training.git

À lire en priorité :
1. README.md (vue d'ensemble)
2. INSTALLATION.md (guide d'installation)
3. Les fichiers TODO dans src/features/

Premières étapes :
1. Cloner le repo
2. Installer les dépendances (npm install)
3. Lancer le projet (npm run dev)
4. Lire les missions dans le README

Workflow :
- Créer une branche feature/MISSION-VOTRE-NOM
- Coder
- Committer
- Pousser
- Créer une Pull Request vers develop