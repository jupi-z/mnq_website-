# Rapport de finalisation — 25 octobre 2026

## Décision

**Publication du portail : NON.** Le portail est corrigé, construit et validé en préproduction à partir du commit `8f234b77c3f5f1e7c0ede3ef8eadc6e39f20ee68`. Son build a été copié dans un répertoire de release de production, mais aucun pointeur `current` ne l’expose. Le domaine sert le certificat MonarQue valide, redirige HTTP vers HTTPS et répond 503 tant qu’aucune release n’est activée. `robots.txt` interdit l’exploration. Les pages légales et la politique de confidentialité ne peuvent pas être déclarées conformes tant que les pièces et arbitrages précisés plus bas ne sont pas établis. La compilation indexable reste désactivée.

Le domaine pointe vers le VPS. Le vhost dédié HTTPS est actif pour préparer l’infrastructure; la vérification publique confirme le certificat et les redirections. Le chemin ACME fonctionne sur les deux noms. Le contenu du portail n’est pas servi, ce qui a été vérifié par l’absence du pointeur `current`, la réponse HTTPS 503 et le `robots.txt` public en `Disallow: /`.

## Problèmes initiaux et corrections vérifiées

| Problème constaté | Correction / état |
| --- | --- |
| Débordement horizontal mobile, mesuré à 361 px sur viewport 320 px | Corrigé dans `src/app/globals.css`; test Playwright de non-débordement ajouté pour les routes FR/EN. |
| Aucun certificat TLS correspondant à `monarquegrp.com`; le certificat servi appartenait à `admin.kit-service-sarl.com` | Certificat SAN racine + `www` obtenu, contrôle de renouvellement simulé antérieur réussi et vérification HTTPS publique actuelle réussie. |
| Absence de vhost dédié et de racine de publication MonarQue | Vhost TLS dédié actif; répertoire racine et release versionnée préparés. Le lien `current` est absent, donc aucun contenu du portail n’est servi. |
| Sauvegarde et retour arrière non démontrés | Sauvegardes Nginx avant configuration ACME et avant activation TLS; retrait/rétablissement du vhost ACME testé. Les étapes de rollback du vhost TLS actif sont détaillées ci-dessous. |
| Informations juridiques GUCE manquantes ou erronées dans les versions antérieures | Le dépôt contient les valeurs confirmées par la direction sur pièces GUCE : RCCM `CD/KWZ/RCCM/26-B-00523`, identification nationale `14-F4300-N00001Y`. Les scans restent hors du dépôt public. |
| Adresse de contact incertaine | La direction confirme `contact@monarquegrp.com` active et hébergée par Hostinger Mail. Aucun email de test n’a été envoyé; ce fait est distingué d’un test technique de réception. |
| Rôles et date d’exploitation contradictoires entre documents | La divergence est conservée et signalée; aucune fonction ni date n’a été arbitrairement modifiée. La formulation publique reste préopérationnelle et n’affirme pas que les activités commerciales ont démarré. |

## Code et tests

- Commit du code candidat : `8f234b77c3f5f1e7c0ede3ef8eadc6e39f20ee68` (branche `codex/monarque-production-finalization-2026-10-25`).
- SHA de production : **aucun** — pas de publication du site.
- `npm ci` : réussi; 31 paquets audités, zéro vulnérabilité.
- `npm run typecheck` : réussi.
- `npm audit` : réussi, zéro vulnérabilité.
- Build statique avec `NEXT_PUBLIC_SITE_READY=false` : réussi, 25 pages statiques.
- `node scripts/check-static.mjs` : réussi; routes, références juridiques, actifs de marque et mode non indexable vérifiés.
- `npm run test:e2e -- --reporter=line` : **24 tests réussis**.
- Matrice responsive : 20 routes × 7 largeurs (320, 375, 390, 768, 1024, 1440 et 1920 px), soit 140 contrôles; aucun débordement, image en échec, erreur HTTP de route ou lien local manquant.
- Audit SEO des 20 pages : langue, titre, description, canonique, hreflang FR/EN, `noindex`, H1 unique et textes alternatifs présents; sitemap de 20 URL et robots interdisant l’exploration.
- Contrôle clavier : lien d’évitement visible et fonctionnel; navigation mobile ouvrable au clavier; aucun bouton sans nom accessible dans le parcours contrôlé.
- Vérification des contenus FR/EN, routes, liens locaux, logos, thème sombre et parcours de contact effectuée dans les contrôles automatisés et visuels. Le parcours contact ouvre le client mail; aucun formulaire ni stockage de message côté site.

Les résultats ci-dessus portent sur le commit candidat identifié, pas sur une version servie en production.

## Captures de validation

Captures Playwright du commit candidat, conservées dans `docs/qa-captures/2026-10-25/` :

- Ordinateur — accueil : [01-home-desktop.png](qa-captures/2026-10-25/01-home-desktop.png)
- Ordinateur — activités : [02-activities-desktop.png](qa-captures/2026-10-25/02-activities-desktop.png)
- Mobile — accueil, thème clair : [03-home-mobile.png](qa-captures/2026-10-25/03-home-mobile.png)
- Mobile — accueil, thème sombre : [04-home-mobile-dark.png](qa-captures/2026-10-25/04-home-mobile-dark.png)

Ces images montrent le rendu local du build candidat, pas des pages du domaine public.

## Préproduction et publication

- Source construite : SHA `8f234b77c3f5f1e7c0ede3ef8eadc6e39f20ee68`.
- Archive de préproduction stockée sous `/var/www/monarquegrp-preprod/releases/8f234b77c3f5f1e7c0ede3ef8eadc6e39f20ee68`; SHA-256 `f5792a629040ceff941e2d44b295d9149c924fda25c538532c5734934eab40a4`; 132 fichiers, 1 822 425 octets.
- Préproduction servie temporairement uniquement sur `127.0.0.1:4174`, sans ouverture de port public. 24 routes/actifs contrôlés en HTTP 200; `robots.txt` interdit l’exploration. Le serveur a été arrêté, le pointeur `current` retiré, le port vérifié fermé; l’archive reste disponible.
- Le même arbre (132 fichiers) a été copié sous `/var/www/monarquegrp.com/releases/8f234b77c3f5f1e7c0ede3ef8eadc6e39f20ee68`; `diff -qr` confirme l’identité avec la release préproduction. Ce répertoire n’est pas exposé car `/var/www/monarquegrp.com/current` n’existe pas.
- Le vhost final a d’abord été testé dans une instance Nginx isolée, puis installé sur Nginx actif après sauvegarde et `nginx -t`. Les vérifications publiques confirment le TLS et les redirections; aucune page du portail n’est exposée.
- HSTS est limité au domaine racine (`max-age=31536000`), sans `includeSubDomains`, car d’autres sous-domaines ont une gestion TLS séparée.

## DNS, TLS et état réel du VPS

- DNS observé : `monarquegrp.com A 187.77.175.51`; `www` CNAME vers le domaine racine; aucun AAAA observé; MX Hostinger (`mx1.hostinger.com`, `mx2.hostinger.com`).
- VPS observé : Debian 13, Nginx actif, stockage disponible suffisant lors de l’audit; pare-feu actif sur SSH 22, HTTP/HTTPS 80/443 et WireGuard UDP 51820.
- Services préexistants contrôlés après les rechargements : KIT Services, EnterpriseOS, PostgreSQL 17, Redis, Fail2Ban, Nginx et services HappiGuest. Les vhosts préexistants n’ont pas été édités. Contrôles HTTP après rechargement : `admin.kit-service-sarl.com`, `kit-service-sarl.com`, `happinesskolwezi.com` et `guest.happinesskolwezi.com/organizer/login` ont répondu 200.
- Vhost Nginx actif pour MonarQue : `/etc/nginx/sites-enabled/monarquegrp.com` → `/etc/nginx/sites-available/monarquegrp.com`. Il comporte le challenge ACME, les redirections canonique/HTTPS, les en-têtes de sécurité, les journaux dédiés et la racine de release.
- `/var/www/monarquegrp.com/current` est intentionnellement absent. Les requêtes de contenu sur le domaine répondent 404 jusqu’à l’approbation et l’activation explicite d’une release.
- Certificat réel : `/etc/letsencrypt/live/monarquegrp.com/`, SAN `monarquegrp.com` et `www.monarquegrp.com`, échéance 23 janvier 2027. Challenge ACME HTTP vérifié sur les deux noms; `certbot certonly --dry-run` et `certbot renew --dry-run --cert-name monarquegrp.com` réussis; timer Certbot actif.
- Résultat public après préparation : HTTP racine et `www` renvoient 308 vers `https://monarquegrp.com/`; HTTPS racine vérifie le certificat et répond 503 sans contenu du portail; `robots.txt` vérifié en HTTPS renvoie `User-agent: *` et `Disallow: /`; HTTPS `www` vérifie le certificat et renvoie 308 vers le domaine canonique. Le test a été effectué avec vérification TLS activée.
- En-têtes vus sur le domaine : HSTS `max-age=31536000` sans `includeSubDomains`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, Permissions-Policy désactivant caméra, micro et géolocalisation.
- Avant chaque rechargement Nginx effectué pendant cette intervention, `nginx -t` a réussi.

## Sauvegarde et retour arrière

- Sauvegarde avant changement Nginx : `/var/backups/monarquegrp/nginx-baseline-20261025T1003Z.tar.gz`.
- SHA-256 : `1fd030624e4cf52af4b91f24b845eb36bd1d86a7f88bc3d7680cc4caacd2f517`; archive protégée avec permissions restrictives, 13 entrées; clés privées exclues.
- Répétition réelle de retrait du lien Nginx ACME : `nginx -t`, rechargement contrôlé, challenge auparavant en 200 devenu 404; réactivation du lien, nouveau `nginx -t` et rechargement, challenge revenu à la réponse attendue. Nginx est resté actif. Cette répétition valide le retour arrière de l’ajout ACME, pas le rollback d’une publication de contenu qui n’a pas eu lieu.
- Sauvegarde immédiatement antérieure à l’activation TLS : `/var/backups/monarquegrp/nginx-before-tls-vhost-20261025T102423Z.tar.gz`, SHA-256 `23172aa778bb94d19a0831312c974f00fd6999b1c41385f6d5d1cd0dbf54c56e`, permissions `600`. Elle contient la configuration Nginx, les sites disponibles/activés et logrotate.
- Copies de sécurité ciblées des deux mises à jour du vhost : `/var/backups/monarquegrp/monarquegrp.com.conf-before-empty-mode-20261025T1029Z` et `/var/backups/monarquegrp/monarquegrp.com.conf-before-robots-fallback-20261025T1031Z`, toutes deux en permissions `600`.
- Préproduction : le pointeur `current` a été créé puis retiré et le serveur loopback arrêté; le répertoire versionné est conservé pour reprise.
- La procédure prévue pour le futur déploiement est de publier dans un nouveau répertoire versionné, vérifier l’artefact, basculer atomiquement le lien `current`, valider toutes les routes et, en cas d’échec, repointer vers la version précédente puis exécuter `nginx -t` avant tout rechargement nécessaire. Cette bascule de production reste à exécuter après levée des conditions.
- Rollback de la préparation TLS : retirer uniquement `/etc/nginx/sites-enabled/monarquegrp.com`, rétablir `/etc/nginx/sites-enabled/monarquegrp-acme` vers son fichier dédié, lancer `nginx -t` et recharger Nginx uniquement si le test réussit. Cela restaure le comportement ACME précédent, avec HTTP 404 hors challenge et sans portail; le certificat TLS MonarQue n’est alors plus présenté. Le retrait/rétablissement du lien ACME et le retour du challenge ont été réellement testés avant cette bascule. Pour une altération plus large, examiner l’archive de sauvegarde avant toute restauration complète.

## Conditions restantes — blocages précis

### 1. Identité contractuelle de l’hébergement et données

L’adresse IP est attribuée à un réseau Hostinger selon RDAP, ce qui ne permet pas d’établir l’entité contractuelle exacte, ses coordonnées légales ni la région du centre de données sélectionnée. Avant d’afficher le fournisseur dans les mentions légales et de valider les transferts, fournir depuis le compte privé la facture/commande ou le contrat VPS indiquant : l’entité contractante Hostinger, sa dénomination et adresse à publier, ainsi que le pays/la région d’hébergement effectivement sélectionné. Ces pièces ne doivent pas être ajoutées au dépôt public.

La politique de rotation observée pour `/var/log/nginx` est quotidienne avec 14 rotations compressées (`/etc/logrotate.d/nginx`). Nginx journalise des données techniques de requête; avant de fixer une durée de conservation ou de publier la notice, l’avis juridique local doit déterminer si cette configuration et ces champs sont nécessaires/proportionnés et quelle règle de conservation appliquer. Ne pas extrapoler la politique de l’hébergeur à la messagerie.

Les journaux dédiés MonarQue sont `/var/log/nginx/monarquegrp-access.log` et `monarquegrp-error.log`, permissions `640`, propriétaire `root:adm`; les anciens journaux du vhost ACME ont également été restreints. Le timer `certbot.timer` est actif et activé; la configuration de renouvellement utilise le webroot `/var/www/letsencrypt`, dont le challenge a été vérifié publiquement sur les deux noms.

Hostinger Mail est confirmé comme fournisseur par la direction, mais la région de stockage/traitement, les paramètres de conservation de la boîte et la pratique de conservation/suppression des messages reçus n’ont pas été vérifiés. Il faut obtenir ces éléments dans les paramètres/conditions du compte, puis faire valider leur description et les droits des personnes par le conseil local. Le site ne contient pas de formulaire; les messages sont envoyés par le client mail de l’utilisateur puis reçus dans la boîte corporate.

### 2. Divergence juridique sur les dirigeants et dates

Les statuts consolidés indiquent Ameno Kizele Mwine comme Président et Manels Muvumbi Mundu comme Directeur Général. L’extrait RCCM identifie Ameno comme Directeur Général. L’extrait indique aussi une date administrative de « début exploitation » au 03/07/2026, alors que la direction déclare qu’aucune activité commerciale n’a démarré et vise mars 2027.

Pièce exacte attendue : un avis écrit daté et signé d’un conseil juridique compétent en RDC, qui identifie les fonctions actuellement opposables et explique la portée de la date administrative. Il doit préciser si un acte de nomination, une résolution, une modification des statuts consolidés et/ou une rectification/mise à jour RCCM est nécessaire, et indiquer la formulation que le site peut publier dans l’intervalle. Ne pas modifier les fonctions ni affirmer le démarrage d’activité sans cette décision et, si requise, la pièce RCCM mise à jour.

### 3. Applicabilité des obligations de protection des données

Le Code du numérique de RDC contient notamment des dispositions sur la déclaration préalable des traitements et l’hébergement/transfert des données. Une analyse par conseil local est attendue pour déterminer l’application au traitement des journaux techniques du site et aux échanges reçus par Hostinger Mail, les formalités auprès de l’autorité compétente, les conditions d’un traitement hors RDC, les bases/finalités, durées et modalités d’exercice des droits. Si l’hébergement hors RDC est soumis à une condition préalable, fournir la preuve de conformité correspondante ou choisir une solution conforme avant la publication. Le présent rapport ne constitue pas un avis juridique.

### 4. Validation éditoriale et indexation

La version FR/EN et les visuels doivent recevoir l’approbation finale de la direction prévue par `docs/PROCEDURE-PUBLICATION.md`. La direction a confirmé les identifiants légaux et l’adresse email; cette confirmation ne remplace pas l’approbation globale des qualifications, traductions, statut des activités et médias. Conserver l’indexation fermée jusqu’à cet accord et jusqu’à la validation des mentions et de la politique de confidentialité.

## Indexation et suite de publication

- Décision actuelle : **indexation publique interdite**; build maintenu avec `NEXT_PUBLIC_SITE_READY=false`, `robots.txt` en `Disallow: /` et balises `noindex, nofollow`.
- Ne pas définir `MONARQUE_RELEASE_APPROVED=YES` ni compiler avec `NEXT_PUBLIC_SITE_READY=true` avant réception des validations documentaires et éditoriales listées ci-dessus.
- À la levée des blocages : approuver le SHA à publier, compiler selon le garde-fou du dépôt, déployer dans une nouvelle release, basculer le pointeur après sauvegarde, contrôler `nginx -t` avant tout rechargement, puis vérifier les parcours HTTPS publics, les en-têtes, le certificat, les anciennes routes et la réception du canal de contact selon une procédure autorisée.

## Sources officielles consultées

- Code du numérique RDC, Ordonnance-loi 23/010 : [PDF officiel ARE](https://are.gouv.cd/wp-content/uploads/2023/05/04042023-ORDONNANCE-LOI-23-010-DU-13-MARS-PORTANT-CODE-DU-NUMERIQUE_compressed.pdf).
- Conditions générales Hostinger : [Universal Terms of Service Agreement](https://www.hostinger.com/ng/legal/universal-terms-of-service-agreement). Elles ne remplacent pas le contrat et les détails régionaux du compte client.
- Attribution réseau consultée : [RIPE RDAP pour 187.77.175.51](https://rdap.db.ripe.net/ip/187.77.175.51). Elle ne prouve pas l’entité de facturation ni l’emplacement sélectionné du serveur.

## Addendum de direction — 25 octobre 2026 (postérieur au constat initial)
Le Président confirme être **Ameno Kizele Mwine** et que **Manels Muvumbi Mundu est Directeur Général**, comme le prévoient les articles 20 et 22 des statuts notariés consultés. La direction rapporte que le GUCE a considéré oralement l'écart d'intitulé de l'extrait RCCM comme non problématique. La demande d'avis écrit portant **uniquement** sur cette divergence ne doit plus être un prérequis bloquant à la publication; aucune rectification officielle écrite n'est prétendue.

La direction refuse la diffusion publique de la localisation physique détaillée des données et des infrastructures. Cette confidentialité ne supprime pas les obligations d'information légalement applicables concernant le responsable, les prestataires et les éventuels transferts de données à destination de pays tiers. Nouvelle consigne : **durée de conservation par défaut de 30 jours, au-delà seulement si nécessité précise et documentée**; Codex doit vérifier le traitement effectif des journaux, backups, emails et archives selon `docs/DONNEES-RETENTION-30J.md`. Le présent addendum met à jour les conclusions administratives du rapport historique sans prétendre que les contrôles techniques ont été exécutés.
