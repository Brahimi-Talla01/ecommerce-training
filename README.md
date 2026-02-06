# E-commerce Training Project

Projet pour comprendre l'architecture Clean Architecture avec Next.js 16.

## Objectifs

- Comprendre la séparation en couches (Domain / Data / Presentation)
- Maîtriser le flux de données dans une application Next.js
- Apprendre Zustand pour le state management
- Utiliser TanStack Query pour le data fetching
- Pratiquer TypeScript

## Structure globale du Projet
src/
├── app/              # Routes Next.js
├── core/             # Infrastructure (API, Store, UI)
└── features/         # Features (Products, Cart)
    └── [feature]/
        ├── domain/       # Logique métier (entities, use-cases)
        ├── data/         # Implémentation (API calls, mappers)
        └── presentation/ # UI (components, hooks)

## Installation
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

Ouvrir [http://localhost:3000](http://localhost:3000)

## Missions

### Mission 1 : Feature Products (Jour 1-2)
- Créer l'entité Product (domain)
- Implémenter le repository (data)
- Créer le hook useProducts (presentation)
- Afficher la liste des produits

### Mission 2 : Feature Cart (Jour 3-4)
- Créer le store Zustand pour le panier
- Implémenter l'ajout au panier
- Afficher le panier avec total

### Mission 3 : Détails Produit (Jour 5)
- Créer la page de détail produit
- Ajouter au panier depuis la page détail

## Stack Technique

- Next.js 16 : Framework React
- TypeScript : Type safety
- Tailwind CSS : Styling
- Zustand : State management
- TanStack Query : Server state
- Axios : HTTP client

## Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [TanStack Query](https://tanstack.com/query/latest)