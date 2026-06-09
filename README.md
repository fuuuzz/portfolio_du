# Portfolio Fab Manager (Hugo)

Portfolio pour le diplôme universitaire Fab Manager, généré avec [Hugo](https://gohugo.io/) et déployable sur **GitHub Pages**.

## Structure

| Fichier / dossier      | Rôle                                         |
| ---------------------- | -------------------------------------------- |
| `hugo.toml`            | Configuration du site (URL, profil, contact) |
| `data/skills.yaml`     | Savoir-faire affichés sur l'accueil          |
| `data/software.yaml`   | Logiciels maîtrisés                          |
| `data/machines.yaml`   | Machines utilisées                           |
| `content/projets/*.md` | Un fichier = une page projet                 |
| `layouts/`             | Gabarits HTML                                |
| `assets/css/main.css`  | Styles                                       |
| `static/images/`       | Images (profil, projets)                     |

## Personnalisation

1. **`hugo.toml`** — Renseignez `params.profile`, `author`, `email`, `github`. La `baseURL` est réglée pour le dev local ; en production, GitHub Actions applique automatiquement la bonne URL.
2. **`data/*.yaml`** — Modifiez savoir-faire, logiciels et machines (affichés dans la section Compétences).
3. **`static/images/profile.svg`** — Remplacez par votre photo (`profile.jpg` et mettez à jour le chemin dans `hugo.toml`).
4. **Projets** — Ajoutez un fichier dans `content/projets/` :

```bash
hugo new content projets/mon-projet.md
```

Exemple de front matter :

```yaml
---
title: Titre du projet
date: 2025-06-01
summary: Courte description pour l'aperçu sur l'accueil
featured_image: /images/projets/mon-projet-thumb.jpg
images:
  - /images/projets/mon-projet-1.jpg
  - /images/projets/mon-projet-2.jpg
---
```

Placez vos images dans `static/images/projets/`.

## Développement local

```bash
hugo server -D
```

Ouvrez http://localhost:1313/

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub (ex. `portfolio_du`).
2. Poussez ce projet sur la branche `main`.
3. Dans le dépôt : **Settings → Pages → Build and deployment → Source** : choisissez **GitHub Actions**.
4. Le workflow `.github/workflows/hugo.yml` publiera le site à chaque push.

L'URL sera : `https://VOTRE-USERNAME.github.io/NOM-DU-DEPOT/`

> Le workflow CI passe `--baseURL` automatiquement à partir du nom du dépôt. Pas besoin de modifier `hugo.toml` pour GitHub Pages.

## Build de production

```bash
hugo --minify
```

Le site statique est généré dans `public/`.
