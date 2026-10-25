# MonarQue Group S.A.S. — Corporate Portal

Site institutionnel officiel : groupe entrepreneurial multisectoriel basé à Kolwezi, Lualaba, République démocratique du Congo.

**État :** code fonctionnel en prépublication; pas de déploiement public autorisé avant levée des conditions du document `docs/RELEASE.md`.

## Contenu
- Accueil, Groupe, Activités, Écosystème, Réalisations, Partenariats, Actualités, Contact, Mentions légales, Confidentialité.
- Français et anglais avec URLs distinctes `/fr/` et `/en/`, navigation adaptée aux mobiles et mode sombre.
- Logos officiels originaux utilisés comme base des versions WebP optimisées et du favicon.
- Formulaires inexistants : les prises de contact utilisent le logiciel courriel de l'utilisateur via `mailto:`, sans backend de stockage.
- Différenciation explicite entre MonarQue Group (société), LTEX (pôle interne), Zingatia (activité), produits numériques et projets prospectifs.
- Statut préopérationnel explicite : aucune présentation trompeuse d'exploitation déjà démarrée.

## Installation
Prérequis : Node.js 22 et npm.

```bash
npm install
npm run typecheck
npm run build
node scripts/check-static.mjs
npx playwright install chromium
npm run test:e2e
```

`npm run dev` lance le serveur de développement. La sortie de `npm run build` est le répertoire statique `out/`. Pour tester cette sortie localement :

```bash
python3 -m http.server 4173 --directory out
```

## Paramétrage
Copier `.env.example` dans `.env.local` si nécessaire :
- `NEXT_PUBLIC_SITE_URL` : URL canonique après validation de la configuration DNS;
- `NEXT_PUBLIC_SITE_READY` : reste `false` avant publication autorisée (le site est alors `noindex`).

Ne jamais publier de secrets ni de coordonnées privées dans le dépôt.

## Documentation
- `docs/STRATEGIE.md` : vision, publics, structure des activités et règles éditoriales.
- `docs/REGISTRE-PUBLICATION.md` : vérifiabilité de l'information.
- `docs/DESIGN.md` : principes visuels.
- `docs/DEPLOIEMENT.md` : déploiement, exploitation et limites.
- `docs/RELEASE.md` : critères de sortie et points de blocage.
- `docs/AUDIT-CODEX.md` : mandat et méthode de la revue indépendante.

## Garantie de cohérence
Les statuts officiels encadrent le périmètre juridique et la direction du Groupe. Ils ne sont pas publiés en entier, et aucune donnée personnelle des associés n'est incluse. Les capacités, marques et projets sont présentés selon leur nature et leur maturité réelle.

## Licence
Tous droits réservés sur les logos et contenus de MonarQue Group. Aucune licence open source de redistribution n'est accordée implicitement par la visibilité publique de ce dépôt.
