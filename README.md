# Portfolio — Benoit Paquier

Site portfolio statique réalisé avec [Hugo](https://gohugo.io/), dans le cadre du **Diplôme Universitaire Fabmanager — Techniques de facilitation et fabrication numérique**.

Il présente mon parcours, mes projets de fablab et les compétences mobilisées au regard du référentiel officiel du DU.

**Site en ligne :** [https://fuuuzz.github.io/portfolio_du/](https://fuuuzz.github.io/portfolio_du/)

## Contenu du site

- **Présentation** — photo, texte d'introduction et coordonnées
- **Projets** — fiches détaillées (contexte, démarche, compétences) avec filtrage par blocs de compétences du DU
- **Savoir-faire & outils** — compétences techniques, logiciels et machines
- **Blocs de compétences** — les 4 blocs du référentiel Fabmanager

## Stack technique

| Élément     | Détail                                     |
| ----------- | ------------------------------------------ |
| Générateur  | Hugo (version Extended)                    |
| Langue      | Français                                   |
| Styles      | CSS custom (`assets/css/main.css`)         |
| Déploiement | GitHub Pages via GitHub Actions            |
| Thème       | Layouts personnalisés (pas de thème tiers) |

## Prérequis

- [Hugo Extended](https://gohugo.io/installation/) (v0.120 ou supérieur recommandé)
- Git

Vérifier l'installation :

```bash
hugo version
# doit afficher « extended » dans la version
```

### Installation de Hugo (macOS)

```bash
brew install hugo
```

## Installation et développement local

```bash
# Cloner le dépôt
git clone https://github.com/fuuuzz/portfolio_du.git
cd portfolio_du

# Lancer le serveur de développement
hugo server -D
```

Le site est accessible sur [http://localhost:1313/](http://localhost:1313/). Les modifications dans `content/`, `layouts/`, `assets/` et `data/` sont rechargées automatiquement.

### Build de production en local

```bash
hugo --minify
```

Les fichiers générés se trouvent dans le dossier `public/` (ignoré par Git).

## Structure du projet

```
portfolio_du/
├── content/
│   └── projets/          # Fiches projets (Markdown + front matter)
├── data/
│   ├── blocs.yaml        # Référentiel des 4 blocs de compétences
│   ├── skills.yaml       # Savoir-faire techniques
│   ├── software.yaml     # Logiciels maîtrisés
│   └── machines.yaml     # Machines et équipements
├── layouts/              # Templates HTML Hugo
├── assets/css/           # Feuilles de style source
├── static/               # Fichiers statiques (images, JS)
├── hugo.toml             # Configuration du site
└── .github/workflows/    # CI/CD GitHub Pages
```

## Ajouter ou modifier du contenu

### Informations générales

Éditer `hugo.toml` : auteur, description, e-mail, GitHub, texte de présentation et photo de profil.

### Nouveau projet

Créer un fichier dans `content/projets/`, par exemple `mon-projet.md` :

```markdown
---
title: Titre du projet
date: 2025-06-01
summary: Résumé court affiché sur la carte projet.
featured_image: /images/projets/mon-projet.svg
images:
  - /images/projets/mon-projet.svg
blocs:
  - id: concevoir-fabriquer
    note: Lien avec le bloc et justification courte.
draft: false
---

## Contexte

...

## Démarche

...
```

Les identifiants de blocs disponibles sont définis dans `data/blocs.yaml` (`gerer-fablab`, `communaute`, `faciliter`, `concevoir-fabriquer`).

### Compétences, logiciels et machines

Modifier les fichiers YAML correspondants dans `data/`.

## Déploiement

Le déploiement est automatisé : à chaque push sur `main`, GitHub Actions build le site avec Hugo Extended et le publie sur GitHub Pages.

1. Activer **GitHub Pages** dans les paramètres du dépôt (source : _GitHub Actions_)
2. Pousser sur la branche `main`

```bash
git push origin main
```

Le workflow `.github/workflows/hugo.yml` génère le site avec la bonne `baseURL` (`https://<owner>.github.io/<repo>/`).
