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

## État d'exploitation — 25 octobre 2026
- [x] Accès VPS, DNS, vhost dédié, TLS et renouvellement vérifiés. Le portail est en ligne sur le domaine canonique.
- [x] Configuration logrotate dédiée au site : rotation quotidienne et purge maximale à 30 jours; journald limité à 7 jours; configuration globale des autres sites inchangée. Simulation syntaxique et test de purge sur fichier synthétique de 31 jours réussis.
- [x] La direction confirme que `contact@monarquegrp.com` fonctionne et est hébergée par Hostinger Mail.
- [x] Test de réception du courriel effectué par un envoi à la même boîte; message de test supprimé après vérification.
- [x] RCCM et Identification nationale renseignés à partir des deux certificats GUCE officiels (sans publier les scans).
- [x] Fonctions de direction confirmées par la direction et les statuts notariés : Président Ameno Kizele Mwine; DG Manels Muvumbi Mundu. Divergence d'intitulé au RCCM signalée au GUCE; selon la direction, réponse orale : « pas grave / okay ». **Ne pas maintenir cette divergence seule comme gate de publication**; ne pas prétendre qu'une rectification écrite a été délivrée.
- [x] Mentions FR/EN renseignées avec l'éditeur, dirigeants, identifiants et fournisseur VPS issu des conditions Hostinger publiques, sous réserve d'une entité différente au contrat. Localisation technique précise non publiée.
- [x] Politique FR/EN alignée sur les traitements constatés et limites d'automatisation; voir `docs/DONNEES-RETENTION-30J.md`. Les messages professionnels anciens nécessitent une qualification de finalité par le responsable de boîte.
- [ ] Les pièces formelles de déclaration et d'autorisation/exemption des traitements et transferts n'ont pas été fournies. La direction a ordonné la mise en ligne et assume cette décision; cela ne vaut pas certification juridique par Codex.
- [x] La direction a explicitement ordonné la mise en ligne. Les contenus restent préopérationnels; l'indexation demeure fermée.
- [x] Contrôles Playwright FR/EN et responsive : 24 tests réussis sur le candidat; après déploiement, les 20 routes publiques ont répondu 200 et 140 mesures sur sept largeurs ont confirmé l'absence de débordement. Captures du domaine public dans `docs/qa-captures/2026-10-25/`.
- [x] Préproduction et publication réalisées; l'artefact du commit fusionné a été vérifié avant bascule.
- [x] Exécuter l'audit, les corrections de confidentialité et l'essai de préproduction; voir le rapport actualisé pour les preuves et les limites.
- [x] Build public avec `NEXT_PUBLIC_SITE_READY=false`; `robots.txt` renvoie `Disallow: /` et les pages portent `noindex, nofollow`. L'indexation reste désactivée.

## Décision d'indexation — 26 octobre 2026
- La direction autorise explicitement l'indexation publique à compter de cette date. Cette instruction permet le changement technique de visibilité; elle ne vaut pas certification juridique indépendante.
- Les routes institutionnelles substantielles et les six fiches d'initiatives bilingues sont destinées à l'indexation. Les pages « Actualités » et « Réalisations », encore éditorialement provisoires, restent `noindex` et sont exclues du sitemap jusqu'à leur enrichissement.
- Le site reste préopérationnel : aucune activité, réalisation, filiale, clientèle ou disponibilité commerciale n'est déclarée par le seul fait de l'indexation.
- Les formalités déclaratives et de transfert de données non documentées plus haut restent une réserve de conformité à traiter; elles ne sont pas présentées comme résolues par cette décision.

## Définition du terme « finalisé »
**Finalisé techniquement :** le code du portail, ses assets requis et ses tests sont prêts pour revue. **Publié :** le domaine dessert réellement les fichiers validés sur une infrastructure maintenue avec une politique de données et des mentions légales vérifiées. Les deux états ne doivent jamais être confondus.

## Important
Le démarrage envisagé des activités commerciales en mars 2027 est un projet déclaré par la direction, pas la preuve qu'elles ont commencé. Modifier le statut public seulement après confirmation de l'exploitation effective.

## Garde-fou de compilation
Par défaut, le build est non indexable. Pour une compilation de publication volontaire, `NEXT_PUBLIC_SITE_READY=true` exige `MONARQUE_RELEASE_APPROVED=YES`. Cette variable n'est pas une preuve de conformité : elle documente une approbation humaine uniquement après validation des cases ci-dessus. Les tests statiques détectent indépendamment le mode d'indexation et la présence des identifiants officiels sur les pages FR/EN.

## Arbitrage de gouvernance du 25/10/2026
Le Président confirme ses fonctions et celles de Manels Muvumbi Mundu conformément aux statuts notariés. Le GUCE aurait indiqué oralement que le libellé différent sur l'extrait RCCM ne constituait pas un problème. Cette divergence reste consignée à titre administratif non bloquant; aucun acte de rectification ni avis écrit n'est présumé. Les autres exigences réellement applicables à l'information et à la protection des données demeurent à vérifier indépendamment.
