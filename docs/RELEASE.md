# Critères de publication — MonarQue Group

## Réalisé dans le dépôt
- [x] Pages institutionnelles FR/EN et structure éditoriale.
- [x] Assets principaux officiels (logo horizontal, papillon, favicon).
- [x] Export statique / sitemap / robots / métadonnées / données structurées.
- [x] Parcours contact sans stockage sur le site.
- [x] Suite Playwright desktop/mobile / deux langues / navigation / thème.
- [x] Captures réelles pour contrôle graphique.
- [x] Mentions préopérationnelles et différenciation des structures.
- [x] Documentation d'exploitation et d'audit Codex.

## Conditions indépendantes du code — à lever avant publication
- [x] VPS déjà accessible à Codex, selon la direction (25/10/2026) — à tester côté serveur.
- [x] Domaine `monarquegrp.com` déjà configuré vers ce VPS, selon la direction — vérifier la résolution effective.
- [ ] Vérifier l'état du VPS, les services existants, les vhosts, le DNS effectif, TLS, renouvellement, pare-feu, sauvegarde et rollback.
- [x] La direction confirme que `contact@monarquegrp.com` fonctionne et est hébergée par Hostinger Mail.
- [ ] Documenter un test technique de réception à l'issue de la mise en ligne.
- [x] RCCM et Identification nationale renseignés à partir des deux certificats GUCE officiels (sans publier les scans).
- [ ] Compléter l'identité du prestataire VPS et ses coordonnées, puis valider les mentions applicables localement et la concordance des fonctions direction/RCCM.
- [ ] Valider la politique de confidentialité à partir des journaux et de la conservation réellement pratiquée par l'hébergeur et la messagerie.
- [ ] Valider les qualifications et les fiches d'activités publiées par la direction avant toute indexation.
- [ ] Examiner les previews desktop/mobiles et supprimer tous défauts de géométrie ou d'accessibilité bloquants.
- [ ] Réaliser un essai de déploiement sur environnement de préproduction et tester les anciennes URLs.
- [ ] Faire exécuter l'audit indépendant Codex, les corrections prioritaires et l'essai de déploiement selon `docs/CODEX-HANDOFF-PRODUCTION.md`.
- [ ] Exécuter un build avec `NEXT_PUBLIC_SITE_READY=true` uniquement après levée des conditions légales, éditoriales et techniques et décision d'indexation publique; vérifier robots, sitemap et canonical.

## Définition du terme « finalisé »
**Finalisé techniquement :** le code du portail, ses assets requis et ses tests sont prêts pour revue. **Publié :** le domaine dessert réellement les fichiers validés sur une infrastructure maintenue avec une politique de données et des mentions légales vérifiées. Les deux états ne doivent jamais être confondus.

## Important
Le démarrage envisagé des activités commerciales en mars 2027 est un projet déclaré par la direction, pas la preuve qu'elles ont commencé. Modifier le statut public seulement après confirmation de l'exploitation effective.

## Garde-fou de compilation
Par défaut, le build est non indexable. Pour une compilation de publication volontaire, `NEXT_PUBLIC_SITE_READY=true` exige `MONARQUE_RELEASE_APPROVED=YES`. Cette variable n'est pas une preuve de conformité : elle documente une approbation humaine uniquement après validation des cases ci-dessus. Les tests statiques détectent indépendamment le mode d'indexation et la présence des identifiants officiels sur les pages FR/EN.
