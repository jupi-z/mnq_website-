# Mandat Codex — audit indépendant, corrections et mise en production

## Informations fournies par la direction le 25 octobre 2026
- Dépôt : https://github.com/jupi-z/mnq_website- ; branche principale : `main`.
- Codex dispose déjà d'un accès au VPS.
- Le domaine `monarquegrp.com` est déjà disponible et configuré pour fonctionner avec le VPS.
- Ces éléments sont des déclarations de la direction; le fonctionnement effectif et la sécurité doivent être vérifiés par Codex.
- Le Groupe est constitué mais son activité commerciale n'a pas encore démarré. Le lancement commercial est envisagé en mars 2027. Le site institutionnel peut être publié avant cette date sans prétendre que l'activité commerciale a commencé.

## Phase 1 : audit indépendant
Lire `docs/STRATEGIE.md`, `docs/REGISTRE-PUBLICATION.md`, `docs/RELEASE.md`, `docs/AUDIT-CODEX.md`. Exécuter typage, build, contrôle statique, Playwright, audit de sécurité et d'accessibilité, SEO, responsive, langue FR/EN et cohérence des logos. Produire des anomalies classées P0-P3 avec preuves.

## Phase 2 : corrections et validation
Corriger dans des commits/PR traçables les P0/P1 et problèmes réellement bloquants, sans réarchitecturer arbitrairement. Réexécuter tous les tests. Vérifier que LTEX est un pôle interne et non une filiale; que Zingatia est décrite correctement; qu'aucun projet prospectif, partenaire ou client non confirmé n'est déclaré opérationnel.

## Phase 3 : audit de l'infrastructure existante
Contrôler avant modification : accès et permissions VPS, OS, espace disponible, sauvegardes, autres services installés, reverse proxy existant, ports, pare-feu, DNS A/AAAA de monarquegrp.com, sous-domaine www, certificat HTTPS et renouvellement. Ne pas modifier brutalement la configuration d'autres sites. Ne jamais recopier les identifiants et secrets dans le dépôt ou le rapport.

## Phase 4 : préproduction
Construire à partir d'un SHA Git déterminé; servir l'export statique dans un espace isolé, non indexable. Tester toutes les pages, les assets, la navigation, les redirects, la résolution du domaine, le HTTPS, les journaux, les en-têtes de sécurité et une procédure de rollback. Sauvegarder les configurations avant tout changement; tester la configuration Nginx avec `nginx -t` si Nginx est utilisé.

## Conditions bloquantes de l'ouverture publique
- Vérifier la réception réelle du courriel `contact@monarquegrp.com` ou utiliser un canal confirmé fonctionnel.
- Compléter et valider les mentions légales, RCCM/identification nationale et hébergeur suivant les exigences applicables.
- Rendre la politique de confidentialité fidèle au traitement des logs et des messages.
- Confirmer l'exactitude et l'autorisation des contenus et projets publiés.
- Zéro P0/P1 ouvert, tests verts, HTTPS/rollback/monitoring vérifiés.
- Définir explicitement l'autorisation d'indexation avant de compiler avec `NEXT_PUBLIC_SITE_READY=true` ; sinon conserver la préproduction non indexable.

## Phase 5 : publication et contrôles post-déploiement
Après levée des conditions, déployer de façon réversible sur le VPS et tester `https://monarquegrp.com/`, `/fr/`, `/en/`, les sous-pages, les redirections historiques, HTTPS, www, assets, SEO, robots, sitemap, contacts et responsive. Vérifier que l'ancien contenu ne casse pas les URLs connues.

## Livrable à retourner
Un rapport comprenant : SHA déployé, tests exécutés, problèmes et correctifs, configuration VPS pertinente (sans secrets), résultat DNS/TLS, capture des pages, URL effectivement accessible, décision d'indexation, procédure de rollback et réserves non levées. Ne pas annoncer « publié » sans validation HTTP(S) publique.

## Addendum de clôture — identité légale et email, 25 octobre 2026
Les scans officiels des deux certificats GUCE (bibliothèque privée, **ne pas les committer**) ont permis de confirmer le RCCM `CD/KWZ/RCCM/26-B-00523` et l'identification nationale `14-F4300-N00001Y`. Le code publie désormais ces seules références dans les mentions légales FR/EN. Attention : certaines factures plus anciennes écrivaient à tort `14-14300-N00001Y` ; ne pas reprendre cette valeur. Le président confirme que la boîte `contact@monarquegrp.com` est fonctionnelle et fournie par Hostinger Mail. Codex doit enregistrer un test technique si souhaité, et non maintenir ce point en blocage indéfini. Voir `docs/REGISTRE-PUBLICATION.md` pour les incohérences documentaires de fonctions/dates, à traiter avec prudence.

Vérifier la configuration effective de Nginx, obtenir un certificat pour `monarquegrp.com` et `www` et activer les redirections sans modifier les vhosts des autres projets. Avant une compilation indexable, satisfaire la protection explicite de `scripts/release-gate.mjs`. Aucune liaison avec Monarque Connect n'est une dépendance à la publication de ce portail statique.

## Décision de direction supplémentaire — 25 octobre 2026 (mise à jour)
Les rôles Président Ameno Kizele Mwine et Directeur Général Manels Muvumbi Mundu sont confirmés expressément et vérifiés dans les statuts notariés (art. 20 et 22). Selon la direction, le GUCE a indiqué oralement que l'autre libellé sur l'extrait RCCM ne posait pas de problème. **Ne plus conditionner la mise en ligne à un avis signé sur cette seule divergence**; conserver sa trace et demander une précision administrative uniquement si une règle réellement applicable l'exige.

La localisation précise des infrastructures et les détails internes de stockage sont confidentiels. Ne pas les publier dans les pages, le dépôt ou les rapports; ils peuvent cependant devoir être justifiés confidentiellement à un professionnel habilité ou une autorité. Le devoir d'information sur les prestataires, durées et éventuels transferts internationaux demeure et ne doit pas être contourné. Appliquer `docs/DONNEES-RETENTION-30J.md` : objectif 30 jours, prolongation exclusivement sur une nécessité précise, limitée et consignée; ne pas prétendre à une suppression effective sans vérifier journaux, rotations, archives, sauvegardes et emails.
