# Procédure d'administration éditoriale V1 — MonarQue Group

## Objectif
Permettre des mises à jour du site sans back-office dynamique ni base de données et en conservant une traçabilité vérifiable.

## Rôles
- **Rédaction :** rédige et rassemble les éléments vérifiables, dans un espace privé si nécessaire.
- **Revue :** vérifie les noms, statut des activités, références clients, bilinguisme, respect de la confidentialité et droits sur les images.
- **Approbation :** direction de MonarQue Group valide les faits et autorise leur publication.
- **Déploiement :** Codex/opérateur publie uniquement un commit approuvé après la CI et conserve un rollback.

## Étapes
1. Créer un brouillon privé, sans données confidentielles dans le dépôt public.
2. Rassembler les autorisations de publication de clients et de partenaires dans un coffre documentaire privé.
3. Modifier les pages dans `src/lib/site.ts`, les assets web autorisés et les ressources nécessaires aux pages concernées; rédiger les versions FR et EN.
4. Créer une branche et une PR distincte avec objet, statut de l'initiative et référence **non confidentielle** de la preuve (ne pas ajouter des scans, courriels privés, contrats ou signatures).
5. Lancer la CI, contrôler en navigateur téléphone/desktop et vérifier les pages légales et les liens.
6. Obtenir l'approbation explicite de la direction, puis fusionner.
7. Déployer un build reproductible du SHA fusionné, vérifier HTTPS, les routes, le cache, le contact et la journalisation après mise en ligne.
8. Archiver dans un emplacement privé les validations et prévoir une procédure de retour arrière.

## Infrastructure VPS préparée le 25 octobre 2026

Le serveur utilise Nginx et Certbot. Un vhost dédié est actif : `/etc/nginx/sites-enabled/monarquegrp.com` pointe vers `/etc/nginx/sites-available/monarquegrp.com`. Il gère `monarquegrp.com` et `www.monarquegrp.com`, le challenge ACME HTTP, la redirection vers HTTPS canonique, TLS et les en-têtes de sécurité. Le certificat SAN est dans `/etc/letsencrypt/live/monarquegrp.com/`; son renouvellement est géré par le timer Certbot et l’authentification webroot `/var/www/letsencrypt`.

La racine est `/var/www/monarquegrp.com/current`, pointeur volontairement absent tant que les validations de publication ne sont pas terminées. Le build non indexable validé est prépositionné sous `/var/www/monarquegrp.com/releases/8f234b77c3f5f1e7c0ede3ef8eadc6e39f20ee68/`. Le domaine présente un certificat valide et répond 503 pour les pages tant que `current` n’existe pas; `robots.txt` renvoie `Disallow: /`. Ne pas créer ce lien avant l’approbation éditoriale et juridique et le build de publication autorisé.

Avant toute modification Nginx, créer une sauvegarde horodatée de `/etc/nginx/nginx.conf`, `sites-available`, `sites-enabled` et `/etc/logrotate.d/nginx` sous `/var/backups/monarquegrp/`, avec permissions `700` sur le dossier et `600` sur l’archive. Vérifier la cible des liens MonarQue et ne changer que le vhost dédié. Exécuter `nginx -t`; recharger Nginx uniquement si le test réussit. Après rechargement, contrôler le statut du service, le certificat et les routes MonarQue, puis les sites existants.

### Retour arrière du vhost MonarQue

La sauvegarde faite juste avant l’activation TLS le 25 octobre 2026 est `/var/backups/monarquegrp/nginx-before-tls-vhost-20261025T102423Z.tar.gz` (SHA-256 `23172aa778bb94d19a0831312c974f00fd6999b1c41385f6d5d1cd0dbf54c56e`). Elle sert de référence en cas de restauration; inspecter son contenu avant une restauration complète.

Pour revenir au vhost ACME sans contenu, vérifier d’abord que les deux liens concernés pointent vers les fichiers MonarQue attendus, retirer uniquement `/etc/nginx/sites-enabled/monarquegrp.com`, puis recréer `/etc/nginx/sites-enabled/monarquegrp-acme` vers `/etc/nginx/sites-available/monarquegrp-acme`. Lancer `nginx -t`, puis recharger seulement si valide. Ce retour rétablit les challenges et les réponses 404 hors challenge, mais retire le certificat HTTPS MonarQue du serveur public. Le retrait/rétablissement du lien ACME a été testé et les autres services sont restés actifs.

Lors d’une future publication, construire dans une nouvelle release immuable, vérifier l’artefact, puis créer le lien `current` temporaire et le remplacer atomiquement par un renommage sur le même système de fichiers. Le rollback de contenu consiste à repointer atomiquement vers la release précédente; aucun reload Nginx n’est requis pour changer les fichiers statiques. Les contrôles HTTP(S) doivent confirmer les routes avant de déclarer la livraison terminée.

## Politique sur les contenus
- Entreprises juridiquement constituées vs pôles internes, marques, produits et projets en étude : ne jamais confondre.
- Aucune annonce fictive, statistique inventée, logo client sans autorisation, ni investissement proposé au public.
- Ne publier que des informations que l'on peut actualiser de façon fiable.
- Ne pas exposer les justificatifs de constitution ou des informations personnelles dans GitHub.
- Coordonnées publiques : `contact@monarquegrp.com`, hébergée par Hostinger Mail.

## Architecture cible
Cette méthode peut être remplacée ultérieurement par un CMS éditorial léger, propriétaire ou auto-hébergé, sans modifier la capacité du site statique à fonctionner indépendamment de Monarque Connect.
