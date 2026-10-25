# Mandat d'exécution finale Codex — portail MonarQue Group

**Décision de direction du 25 octobre 2026.** Lire en complément `docs/FINALISATION-2026-10-25.md`, `docs/DONNEES-RETENTION-30J.md` et `docs/RELEASE.md`. Ce document décrit la dernière phase de livraison de la PR #4 et ne remplace pas les preuves techniques.

## État de départ à vérifier

- Branche en cours : `codex/monarque-production-finalization-2026-10-25`; récupérer le HEAD le plus récent avant de modifier.
- La CI du dernier commit disponible était réussie. Le site statique FR/EN a été testé en préproduction.
- Le VPS possède désormais, selon le dernier rapport Codex, un vhost Nginx dédié, un certificat HTTPS valide et une release candidate présente **mais non exposée**. Le domaine ne sert pas encore le portail : répondre 503 n'est pas une livraison.
- Préserver les autres services du VPS.

## Arbitrages finaux

1. **Président : Ameno Kizele Mwine. Directeur Général : Manels Muvumbi Mundu.** Ces qualités sont confirmées par les statuts notariés, art. 20 et 22, ainsi que par la direction. L'écart de titre relevé au RCCM a été soumis au GUCE selon la direction, qui l'a considéré oralement comme non problématique. Il n'est plus, à lui seul, une condition bloquante de publication. Ne pas prétendre à une correction administrative écrite.
2. **Identifiants :** RCCM `CD/KWZ/RCCM/26-B-00523`; ID nationale `14-F4300-N00001Y`, provenant des certificats GUCE officiels. Pas de scans dans ce dépôt public.
3. **Contact :** `contact@monarquegrp.com` confirmé actif et fourni par Hostinger Mail. Tester les liens et, si possible, la réception de manière autorisée.
4. **Conservation :** objectif de 30 jours au maximum pour les données personnelles dont la conservation n'est plus nécessaire; au-delà seulement pour une nécessité réelle, limitée, consignée, revue et assortie d'une date de suppression. Politique cible à prouver dans les réglages réels, pas à annoncer sans vérification.
5. **Confidentialité :** ne jamais publier le centre de données exact, la topologie du VPS, les chemins secrets, les accès, les sauvegardes ou les contrats privés. Les pages publiques doivent décrire honnêtement le traitement effectif des données, ses finalités, les prestataires concernés et les durées applicables, sans exposer les secrets d'infrastructure.
6. **Présentation :** le lancement commercial du Groupe est encore en préparation, envisagé en mars 2027; pas de réalisations, filiales, activités ou clients opérationnels inventés. LTEX reste un pôle interne.
7. **Architecture :** pas de CMS/back-office ni d'intégration bloquante à Monarque Connect pour cette publication.

## Exécution attendue

### 1. Vérifications opérationnelles
- Synchroniser dépôt, PR et branche; lire tous les changements reçus.
- Identifier seulement les corrections réellement nécessaires. Ne pas refaire l'audit général ou réarchitecturer.
- Exécuter `npm ci`, typecheck, build, contrôle statique, Playwright, tests FR/EN, mobile et thèmes.
- Examiner la rotation et la purge des logs propres au vhost MonarQue, les sauvegardes, les données de sécurité liées au portail et les pratiques de messagerie; mettre en place la règle de 30 jours lorsque techniquement maîtrisable, sans affecter les autres services.
- Pour les emails, vérifier corbeille, spam et archives; documenter une procédure manuelle réaliste si le fournisseur ne permet pas une purge automatisée. Les cas devant être conservés plus longtemps doivent être limités et justifiés.
- Rectifier les pages de confidentialité FR/EN pour qu'elles correspondent **aux pratiques réellement contrôlées**, sans prétendre que des suppressions automatiques existent si elles ne sont pas prouvées.
- Vérifier les informations publiées : noms/fonctions, email, références GUCE, identité de l'éditeur, état des activités et informations d'hébergement vérifiées. Ne pas inventer de fournisseur contractuel ou de coordonnées non démontrées. Éviter toute divulgation de localisation technique exacte.

### 2. Livraison
- Valider que le site est prêt éditorialement et techniquement; lever seulement les réserves concrètes encore existantes, en les distinguant des recommandations facultatives.
- Faire passer la CI, puis fusionner la PR après revue. Identifier le SHA fusionné.
- Construire depuis le SHA approuvé. N'activer l'indexation qu'avec décision de publication, en respectant `scripts/release-gate.mjs`.
- Sauvegarder la configuration active, déployer une release immuable, tester la procédure de retour arrière et basculer atomiquement le pointeur `current`. Appliquer `nginx -t` avant tout rechargement.
- Tester publiquement `https://monarquegrp.com/`, `/fr/`, `/en/`, les autres pages, SSL, redirections `www`, robots, sitemap, anciens liens, contact, thèmes et médias. Contrôler l'absence de régression sur les autres domaines du VPS.

### 3. Rapport final
Livrer SHA exact du site publié, date, URL accessible, résultats réels des tests, DNS/HTTPS, contrôle des purges et exceptions, méthode de rollback, contrôle des autres services et captures public/mobile. Si un blocage indispensable et démontré persiste, le décrire précisément sans annoncer de publication ni exiger de travaux génériques sans rapport avec le site.

**But : publier réellement le portail institutionnel stable et vérifiable; ne pas conclure au seul stade de préproduction.**
