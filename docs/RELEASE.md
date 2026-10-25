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
- [x] Vérifier l'état du VPS, les services existants, les vhosts, le DNS effectif, TLS, renouvellement, pare-feu, sauvegarde et rollback. Vhost HTTPS dédié préparé; le portail reste absent de la racine active tant que les validations documentaires ne sont pas levées.
- [x] La direction confirme que `contact@monarquegrp.com` fonctionne et est hébergée par Hostinger Mail.
- [ ] Documenter un test technique de réception à l'issue de la mise en ligne.
- [x] RCCM et Identification nationale renseignés à partir des deux certificats GUCE officiels (sans publier les scans).
- [x] Fonctions de direction confirmées par la direction et les statuts notariés : Président Ameno Kizele Mwine; DG Manels Muvumbi Mundu. Divergence d'intitulé au RCCM signalée au GUCE; selon la direction, réponse orale : « pas grave / okay ». **Ne pas maintenir cette divergence seule comme gate de publication**; ne pas prétendre qu'une rectification écrite a été délivrée.
- [ ] Compléter les mentions applicables concernant l'éditeur et le prestataire VPS selon les documents contractuels; ne pas publier la localisation technique détaillée de l'infrastructure.
- [ ] Vérifier et appliquer la politique de conservation « 30 jours sauf nécessité documentée » aux journaux Nginx, archives, backups et correspondances, puis aligner la page Confidentialité FR/EN sur les pratiques vérifiées. Voir `docs/DONNEES-RETENTION-30J.md`. Vérifier les obligations d'information sur d'éventuels transferts sans publier la localisation technique exacte.
- [ ] Valider les qualifications et les fiches d'activités publiées par la direction avant toute indexation.
- [x] Examiner les previews desktop/mobiles et supprimer tous défauts de géométrie ou d'accessibilité bloquants. Captures et contrôles détaillés dans `docs/FINALISATION-2026-10-25.md`; l'approbation éditoriale de la direction reste requise.
- [x] Réaliser un essai de déploiement sur environnement de préproduction, tester les anciennes URLs et préparer la release VPS sans l'activer.
- [x] Faire exécuter l'audit indépendant Codex, les corrections prioritaires et l'essai de déploiement selon `docs/CODEX-HANDOFF-PRODUCTION.md`; voir le rapport de finalisation pour les éléments encore bloquants.
- [ ] Exécuter un build avec `NEXT_PUBLIC_SITE_READY=true` uniquement après levée des conditions légales, éditoriales et techniques et décision d'indexation publique; vérifier robots, sitemap et canonical.

## Définition du terme « finalisé »
**Finalisé techniquement :** le code du portail, ses assets requis et ses tests sont prêts pour revue. **Publié :** le domaine dessert réellement les fichiers validés sur une infrastructure maintenue avec une politique de données et des mentions légales vérifiées. Les deux états ne doivent jamais être confondus.

## Important
Le démarrage envisagé des activités commerciales en mars 2027 est un projet déclaré par la direction, pas la preuve qu'elles ont commencé. Modifier le statut public seulement après confirmation de l'exploitation effective.

## Garde-fou de compilation
Par défaut, le build est non indexable. Pour une compilation de publication volontaire, `NEXT_PUBLIC_SITE_READY=true` exige `MONARQUE_RELEASE_APPROVED=YES`. Cette variable n'est pas une preuve de conformité : elle documente une approbation humaine uniquement après validation des cases ci-dessus. Les tests statiques détectent indépendamment le mode d'indexation et la présence des identifiants officiels sur les pages FR/EN.

## Arbitrage de gouvernance du 25/10/2026
Le Président confirme ses fonctions et celles de Manels Muvumbi Mundu conformément aux statuts notariés. Le GUCE aurait indiqué oralement que le libellé différent sur l'extrait RCCM ne constituait pas un problème. Cette divergence reste consignée à titre administratif non bloquant; aucun acte de rectification ni avis écrit n'est présumé. Les autres exigences réellement applicables à l'information et à la protection des données demeurent à vérifier indépendamment.
