# Rapport de validation finale — 25 octobre 2026

## Décision

**NON PUBLIÉ — ouverture bloquée.** Aucun fichier n'a été copié sur le VPS et aucune configuration Nginx, DNS, Certbot, service ou boîte mail n'a été modifiée.

## Motifs bloquants

1. Les mentions légales ne contiennent pas encore les identifiants RCCM/identification nationale ni les informations d'hébergeur vérifiées.
2. La politique de confidentialité est explicitement provisoire et n'est pas rapprochée des logs/rétentions réels.
3. La réception de `contact@monarquegrp.com` n'a pas été démontrée; les MX seuls ne suffisent pas.
4. Le DNS racine pointe vers `187.77.175.51`, mais aucun vhost `monarquegrp.com` n'est actif.
5. HTTP renvoie 404 et HTTPS sert le certificat `admin.kit-service-sarl.com`, qui ne couvre pas le domaine demandé.
6. Une préproduction VPS isolée, sa sauvegarde de configuration et son rollback réel restent à réaliser après création d'un vhost dédié.

## Éléments vérifiés

- SHA de base : `ede7bd1c96ecfba74b8d72d007fd945a5479fce6`.
- `npm install` : 0 vulnérabilité signalée.
- Typecheck, build et contrôle statique : PASS.
- Playwright : 23/23 PASS avec exécution séquentielle; captures visuelles inspectées.
- VPS : Debian 13.7, Nginx syntaxiquement valide, UFW actif, services existants inventoriés, timers backup/monitoring/Certbot actifs.
- Domaine : A vers le VPS, `www` CNAME vers le domaine racine, MX Hostinger.

## Indexation

Décision actuelle : **ne pas indexer**. Le dépôt conserve `NEXT_PUBLIC_SITE_READY=false`; les pages générées portent `noindex, nofollow` et `robots.txt` interdit l'exploration. Ne compiler avec `NEXT_PUBLIC_SITE_READY=true` qu'après levée documentée de toutes les conditions.

## Retour arrière préparé

La procédure est documentée dans `docs/PREPRODUCTION-2026-10-25.md`, mais n'est pas déclarée répétée sur le VPS puisque la release n'a pas été installée. Le rollback devra restaurer le vhost, les liens de certificats et la release précédente après vérification de leurs chemins exacts.

## Réserves non levées

- Validation juridique locale des mentions obligatoires.
- Validation éditoriale finale des contenus et autorisations de publication.
- Confirmation du canal email.
- Vhost, certificat SAN, redirection HTTPS, préproduction VPS et smoke tests publics.
