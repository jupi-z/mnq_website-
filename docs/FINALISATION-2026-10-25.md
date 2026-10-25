# Rapport de mise en ligne — 25 octobre 2026

## État de publication

**Portail publié sur `https://monarquegrp.com`; indexation publique désactivée.** Le domaine sert la release statique du commit fusionné `7d6a83bf837b3b0ded73e9104664969880741996` (PR #4). Les robots renvoient `Disallow: /` et les pages portent `noindex, nofollow`. La direction a explicitement ordonné la mise en ligne et indiqué assumer sa décision au regard du Code du numérique. Ce rapport ne constitue pas une certification juridique indépendante.

La PR #4 est fusionnée. La CI `verify` a réussi sur le SHA du candidat avant fusion. La release produite après synchronisation de `main` est construite avec `NEXT_PUBLIC_SITE_READY=false`, sans activation de l'indexation.

## Décisions institutionnelles

La direction confirme : Président Ameno Kizele Mwine; Directeur Général Manels Muvumbi Mundu; RCCM `CD/KWZ/RCCM/26-B-00523`; identification nationale `14-F4300-N00001Y`; contact `contact@monarquegrp.com`; lancement commercial visé en mars 2027. La direction rapporte que le GUCE a jugé oralement non problématique la divergence d'intitulé RCCM. Aucune rectification écrite n'est prétendue et cette divergence n'est pas traitée comme un blocage.

## Tests du SHA fusionné et vérifications publiques

- Installation propre `npm ci` : 31 paquets, aucune vulnérabilité signalée.
- `npm run typecheck` : réussi.
- `npm run build` avec indexation fermée : réussi, 25 routes statiques.
- `node scripts/check-static.mjs` : réussi.
- `npm run test:e2e -- --reporter=dot` : 24 tests réussis.
- CI GitHub `verify` : réussi sur le commit candidat `5a5cfe7c3eb9c1be7bcc8e283bcc80094dda62dc`, dont l'arbre est identique au commit fusionné.
- Après déploiement : les 20 routes FR/EN ont répondu HTTP 200; une mesure responsive sur chaque route à 320, 375, 390, 768, 1024, 1440 et 1920 px a donné 140 mesures sans débordement; chaque page a un H1.
- La page d'accueil, les pages légales et de confidentialité, le thème sombre, les métadonnées, le sitemap, les liens canoniques et le mode mobile ont été contrôlés.
- Les captures réelles du domaine public sont disponibles dans `docs/qa-captures/2026-10-25/05-live-home-desktop.png`, `06-live-legal-desktop.png`, `07-live-home-mobile.png` et `08-live-home-mobile-dark.png`.

## DNS, HTTPS et Nginx

- Le DNS racine et l'alias `www` aboutissent au VPS; l'alias conserve son CNAME vers le domaine canonique.
- `https://monarquegrp.com/` répond 200 avec vérification TLS réussie (`ssl_verify_result=0`). Le certificat couvre les deux noms publics et expire le 23 janvier 2027; le timer Certbot est actif.
- HTTP racine et `www` répondent 308 vers HTTPS canonique; HTTPS `www` répond 308 vers le domaine racine.
- En-têtes vérifiés : HSTS sans `includeSubDomains`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin` et Permissions-Policy limitant caméra, micro et géolocalisation.
- La configuration Nginx est dédiée au site. `nginx -t` a réussi avant les rechargements réalisés; aucun rechargement n'était nécessaire pour la bascule du contenu statique.
- Les domaines existants contrôlés après mise en ligne ont répondu HTTP 200 : KIT Services, son espace d'administration et les deux hôtes HappiGuest vérifiés. Nginx, KIT Services, EnterpriseOS, PostgreSQL, Redis, Fail2Ban, Certbot et logrotate étaient actifs.

## Artefact, sauvegarde et retour arrière

- Artefact du commit fusionné : 132 fichiers; archive vérifiée par SHA-256 `EF3341B867ECB84720B3A0C82060AC3DD3478AED264ADAFDE4883FC350F060F8`.
- Le répertoire versionné a été installé et vérifié avant une bascule atomique du pointeur de release. Le journal d'état initial a confirmé qu'aucun contenu MonarQue n'était exposé avant la bascule.
- Une sauvegarde restreinte des fichiers de configuration Nginx et logrotate a été créée avant le déploiement. Les identifiants internes et emplacements de sauvegarde restent dans le registre privé d'exploitation.
- Retour arrière réellement répété : le pointeur a été basculé vers la release précédente issue du même arbre de code, les pages d'accueil et confidentialité sont restées en 200, puis le pointeur a été remis atomiquement sur le SHA fusionné. Le contrôle final a confirmé le SHA courant et les pages publiques en 200.

## Rétention

- Les journaux Nginx du site utilisent une configuration indépendante : rotation quotidienne, `rotate 30` et `maxage 30`. La simulation de purge sur un fichier de 31 jours a réussi. Le fichier logrotate global des autres sites n'a pas été modifié.
- journald utilise une rétention maximale de 7 jours.
- Trois messages avec des codes temporaires expirés ont été supprimés de la boîte professionnelle; un test d'envoi à la même boîte avait confirmé la réception et a ensuite été supprimé.
- Hostinger Mail supprime automatiquement Spam/Trash après 30 jours et conserve les journaux de livraison 30 jours, selon sa documentation. La boîte de réception et les messages envoyés n'ont pas de purge automatique constatée. La procédure de revue hebdomadaire et de suppression manuelle est documentée dans `docs/PROCEDURE-PUBLICATION.md`.
- Quatre messages professionnels datant de plus de 30 jours sont restés à qualifier par le responsable de boîte. Ne pas présenter la purge manuelle comme automatique; documenter toute exception dans le registre privé.

## Indexation et statut juridique

Le site est accessible publiquement, mais l'indexation demeure fermée : `robots.txt` contient `Disallow: /`, les pages sont `noindex, nofollow` et le build a été créé avec `NEXT_PUBLIC_SITE_READY=false`. L'activation de l'indexation requiert une décision distincte.

Les formalités de déclaration et de transfert de données n'ont pas été certifiées par cette opération. La direction a explicitement demandé la publication et assumé cette décision. Toute évolution des traitements, des prestataires ou de la région de traitement doit être revue et les informations légales mises à jour avant d'ouvrir l'indexation.

Références officielles : [Code du numérique RDC](https://are.gouv.cd/download/ordonnance-loi-23-010-du-13-mars-portant-code-du-numerique/); [guichet de conformité ARPTC](https://cadran.arptc.gouv.cd/); [conditions Hostinger](https://www.hostinger.com/ng/legal/universal-terms-of-service-agreement); [rétention Hostinger Mail](https://support.hostinger.com/en/articles/5240863-what-happens-to-emails-in-the-spam-folder).
