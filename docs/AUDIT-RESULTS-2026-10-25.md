# Audit indépendant — 25 octobre 2026

## Périmètre et version

- Dépôt : `https://github.com/jupi-z/mnq_website-`
- SHA de base inspecté : `ede7bd1c96ecfba74b8d72d007fd945a5479fce6`
- Application : Next.js 16.4.3, export statique, React 19.2.6.
- Préproduction locale : sortie `out/`, servie sur `http://127.0.0.1:4173` avec `NEXT_PUBLIC_SITE_READY=false`.

## Contrôles exécutés

| Contrôle | Résultat | Preuve |
| --- | --- | --- |
| `npm install` | PASS | 31 paquets audités, 0 vulnérabilité signalée |
| `npm run typecheck` | PASS | `tsc --noEmit`, code 0 |
| `npm run build` | PASS | 25 pages statiques générées |
| `node scripts/check-static.mjs` | PASS | routes, marque, noindex, robots, sitemap et favicon présents |
| `npm audit --omit=dev` | PASS | `found 0 vulnerabilities` |
| `npm run test:e2e` | PASS après stabilisation | 23 tests passés, 1 worker |
| captures visuelles | PASS | desktop FR, mobile FR clair/sombre et activités |

Le premier lancement Playwright a échoué parce que `python3` n'était pas disponible sous Windows. La configuration utilise désormais `py` sous Windows et `python3` ailleurs. Le premier lancement parallèle a aussi montré deux échecs intermittents d'hydratation; l'exécution séquentielle (`workers: 1`, `fullyParallel: false`) rend la suite déterministe pour ce serveur statique local.

## Revue éditoriale et métier

Le contenu vérifié respecte les règles du handoff : LTEX est décrit comme pôle interne, Zingatia comme activité en préparation, Monarque Connect/THYSLO/ZAMUREK comme produits ou projets, et Aura/industrie/énergie comme orientations en étude. Les réalisations et actualités restent explicitement non publiées faute d'autorisation ou de preuves.

Le statut préopérationnel est présent en français et en anglais; aucune page ne certifie que les activités commerciales ont commencé. Le site mentionne le démarrage envisagé en mars 2027 avec réserve de confirmation.

## Anomalies et gates

### P1 — Publication bloquée : mentions légales incomplètes

- Fichier : `src/lib/site.ts`, pages `mentions-legales` FR/EN.
- Reproduction : ouvrir `/fr/mentions-legales/` ou `/en/mentions-legales/` dans la sortie statique.
- Constat : RCCM/identification nationale et hébergeur ne sont pas renseignés; la page se décrit elle-même comme une préparation à revoir.
- Impact : publication institutionnelle non conforme au registre de publication.
- Solution minimale : fournir les identifiants et informations d'hébergeur vérifiés, puis faire valider la formulation applicable localement.
- Décision : non corrigé par invention; gate maintenu ouvert.

### P1 — Publication bloquée : politique de confidentialité non validée contre les traitements réels

- Fichier : `src/lib/site.ts`, page `confidentialite` FR/EN.
- Reproduction : ouvrir `/fr/confidentialite/` ou `/en/confidentialite/`.
- Constat : rétention, droits et journaux techniques sont explicitement présentés comme devant être confirmés.
- Impact : le texte ne peut pas être déclaré fidèle à l'hébergement et à la messagerie réels.
- Solution minimale : obtenir la politique de logs/rétention effective du VPS, de Nginx et de la messagerie, puis publier une version validée.
- Décision : gate maintenu ouvert.

### P1 — Publication bloquée : réception de `contact@monarquegrp.com` non démontrée

- DNS MX observé : `mx1.hostinger.com` préférence 5 et `mx2.hostinger.com` préférence 10.
- Constat : le dépôt et les DNS ne prouvent pas que la boîte reçoit effectivement un nouveau message.
- Solution minimale : test de réception réalisé par un propriétaire autorisé, ou canal corporate confirmé par une preuve indépendante.
- Décision : aucun message externe n'a été envoyé depuis cette session; gate maintenu ouvert.

### P2 — E2E local non portable sous Windows (corrigé)

- Fichier : `playwright.config.ts`.
- Cause : commande `python3` indisponible malgré `py.exe` présent.
- Correctif : sélection de commande adaptée à la plateforme et limitation à un worker pour éviter la flakiness observée pendant l'audit du serveur statique.
- Preuve : suite complète relancée, 23/23 PASS.

## État de publication

Le code est techniquement prépubliable sous réserve des gates ci-dessus. Aucun déploiement ou changement VPS n'a été effectué.
