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
- [x] Accès VPS, DNS, vhost dédié, TLS et renouvellement vérifiés. Le portail reste absent de la racine active.
- [x] Configuration logrotate dédiée au site : rotation quotidienne et purge maximale à 30 jours; journald limité à 7 jours; configuration globale des autres sites inchangée. Simulation syntaxique logrotate réussie; purge réelle et test de fichiers synthétiques encore à vérifier.
- [x] La direction confirme que `contact@monarquegrp.com` fonctionne et est hébergée par Hostinger Mail.
- [x] Test de réception du courriel effectué par un envoi à la même boîte; message de test supprimé après vérification.
- [x] RCCM et Identification nationale renseignés à partir des deux certificats GUCE officiels (sans publier les scans).
- [x] Fonctions de direction confirmées par la direction et les statuts notariés : Président Ameno Kizele Mwine; DG Manels Muvumbi Mundu. Divergence d'intitulé au RCCM signalée au GUCE; selon la direction, réponse orale : « pas grave / okay ». **Ne pas maintenir cette divergence seule comme gate de publication**; ne pas prétendre qu'une rectification écrite a été délivrée.
- [x] Mentions FR/EN renseignées avec l'éditeur, dirigeants, identifiants et fournisseur VPS issu des conditions Hostinger publiques, sous réserve d'une entité différente au contrat. Localisation technique précise non publiée.
- [x] Politique FR/EN alignée sur les traitements constatés et limites d'automatisation; voir `docs/DONNEES-RETENTION-30J.md`. Les messages professionnels anciens nécessitent une qualification de finalité par le responsable de boîte.
- [ ] Produire le récépissé de déclaration préalable du traitement personnel applicable et, pour les transferts hors RDC, la décision d'autorisation applicable ou confirmation écrite de l'autorité sur l'exemption. Art. 186, 201 et 220 du Code du numérique; voir le rapport de finalisation.
- [ ] Obtenir l'approbation éditoriale globale requise par `docs/PROCEDURE-PUBLICATION.md`.
- [x] Contrôles Playwright FR/EN et responsive précédemment examinés; 24 tests Playwright réussis sur le candidat actualisé. Captures disponibles sur un candidat antérieur, pas du domaine public ni de ce dernier texte.
- [x] Réaliser un essai de déploiement sur environnement de préproduction, tester les anciennes URLs et préparer la release VPS sans l'activer.
- [x] Exécuter l'audit, les corrections de confidentialité et l'essai de préproduction; voir le rapport actualisé pour les preuves et les limites.
- [ ] Exécuter un build avec `NEXT_PUBLIC_SITE_READY=true` uniquement après levée des conditions légales, éditoriales et techniques et décision d'indexation publique; vérifier robots, sitemap et canonical.

## Définition du terme « finalisé »
**Finalisé techniquement :** le code du portail, ses assets requis et ses tests sont prêts pour revue. **Publié :** le domaine dessert réellement les fichiers validés sur une infrastructure maintenue avec une politique de données et des mentions légales vérifiées. Les deux états ne doivent jamais être confondus.

## Important
Le démarrage envisagé des activités commerciales en mars 2027 est un projet déclaré par la direction, pas la preuve qu'elles ont commencé. Modifier le statut public seulement après confirmation de l'exploitation effective.

## Garde-fou de compilation
Par défaut, le build est non indexable. Pour une compilation de publication volontaire, `NEXT_PUBLIC_SITE_READY=true` exige `MONARQUE_RELEASE_APPROVED=YES`. Cette variable n'est pas une preuve de conformité : elle documente une approbation humaine uniquement après validation des cases ci-dessus. Les tests statiques détectent indépendamment le mode d'indexation et la présence des identifiants officiels sur les pages FR/EN.

## Arbitrage de gouvernance du 25/10/2026
Le Président confirme ses fonctions et celles de Manels Muvumbi Mundu conformément aux statuts notariés. Le GUCE aurait indiqué oralement que le libellé différent sur l'extrait RCCM ne constituait pas un problème. Cette divergence reste consignée à titre administratif non bloquant; aucun acte de rectification ni avis écrit n'est présumé. Les autres exigences réellement applicables à l'information et à la protection des données demeurent à vérifier indépendamment.
