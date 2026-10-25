# Audit infrastructure — 25 octobre 2026

## Méthode

Inventaire en lecture seule via `ssh kit-service`; aucune configuration, service, certificat, DNS ou fichier secret n'a été modifié. Les valeurs sensibles et le contenu des `.env` ont été exclus du relevé.

## VPS

- Hôte : `srv1659372`; OS : Debian GNU/Linux 13.7; noyau 6.12.113.
- Accès testé : utilisateur effectif `root`.
- Stockage racine : 99G total, 42G utilisés, 53G disponibles (44%).
- Mémoire : 7.8 GiB, 6.4 GiB disponibles; swap absente.
- Pare-feu UFW actif, politique entrante par défaut `deny`; ports autorisés observés : SSH 22, HTTP/HTTPS 80/443, WireGuard UDP 51820.
- Services existants à préserver : Nginx, KIT Services, EnterpriseOS, PostgreSQL 17, Redis, Docker, Fail2Ban, Monarx Agent et services HappiGuest.
- Listeners publics : Nginx 80/443 et SSH 22; les autres ports applicatifs observés sont liés à loopback.
- `nginx -t` : syntaxe valide.

## Sauvegarde et monitoring

- `kit-service-db-backup.timer` : actif et activé; dernière exécution observée le 25 octobre 2026 à 02:30 UTC dans l'inventaire des timers.
- `kit-service-live-check.timer` : actif et activé, cadence cinq minutes.
- `kit-service-synthetic-check.timer` : actif et activé, cadence dix minutes.
- `certbot.timer` : actif et activé.
- Des sauvegardes système récentes existent sous `/var/backups`; ce relevé ne démontre pas encore une sauvegarde dédiée de la future configuration MonarQue Group.

## Domaine et HTTPS

- `monarquegrp.com A` : `187.77.175.51`.
- `www.monarquegrp.com CNAME` : `monarquegrp.com`.
- Aucun AAAA observé dans la résolution locale.
- MX : Hostinger (`mx1.hostinger.com`, `mx2.hostinger.com`).
- `http://monarquegrp.com/` : 404 Nginx, sans redirection observée.
- HTTPS avec vérification TLS : échec `SEC_E_WRONG_PRINCIPAL`.
- HTTPS avec vérification désactivée : 200, mais certificat servi `CN=admin.kit-service-sarl.com`, SAN limité à ce nom; ce certificat ne couvre pas `monarquegrp.com`.
- Vhosts Nginx actifs observés : `admin.kit-service-sarl.com`, `happiguest.conf`, `kit-services`, `sel.shuleops.com`; aucun vhost `monarquegrp.com`.
- Certbot connaît des certificats pour ces services mais aucun certificat `monarquegrp.com`; le certificat historique `connect.monarquegrp.com` est expiré et n'est pas un certificat de production pour le domaine racine.

## Décision infrastructure

Publication bloquée. Il manque au minimum un vhost isolé pour `monarquegrp.com`/`www`, un certificat SAN correspondant obtenu via le workflow ACME HTTP, une redirection HTTP→HTTPS, une racine de déploiement dédiée, une sauvegarde de la configuration avant changement et une preuve de rollback. Aucun changement n'a été appliqué pour éviter d'impacter les autres sites.
