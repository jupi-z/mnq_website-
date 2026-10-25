# Audit infrastructure — mise à jour du 25 octobre 2026

Ce document remplace l'inventaire initial de ce fichier, devenu obsolète après l'installation isolée du vhost et du certificat dédiés au portail. L'inventaire initial contenait des détails réseau qui ne doivent pas être publiés; ils sont retirés de cette version.

## État vérifié lors de la reprise

- VPS Debian, Nginx et Certbot actifs; certificat TLS valide pour le domaine racine et `www`; timer de renouvellement Certbot actif.
- DNS racine et alias `www` dirigés vers le VPS; MX gérés par Hostinger Mail.
- Le site MonarQue dispose d'un vhost et d'un répertoire de publication isolés. Aucune release n'est activée; le domaine ne sert pas le portail.
- Journaux Nginx dédiés à MonarQue avec rotation quotidienne et rétention configurée à 30 jours; système journald plafonné à 7 jours. Le fichier logrotate global des autres hôtes n'a pas été changé.
- Après mise à jour du seul vhost MonarQue, `nginx -t` a réussi avant rechargement. Nginx, KIT Services, EnterpriseOS, PostgreSQL, Redis, Fail2Ban et Certbot sont restés actifs au contrôle immédiat.
- La santé HTTP externe des autres applications doit être recontrôlée au moment d'une future publication.

Les chemins d'administration, l'adresse IP, les identifiants d'accès, la topologie, les détails de pare-feu et les emplacements des sauvegardes sont gardés dans le registre opératoire privé et ne sont pas publiés ici.

## Certificat et renouvellement

Le certificat Let’s Encrypt couvre les deux noms publics du site. La vérification TLS fonctionne; le timer Certbot est actif. Le renouvellement simulé avait réussi lors de l'audit précédent; son exécution est à revalider avant la publication finale. Les routes ACME HTTP ont été contrôlées lors de la préparation.

## Limites

Ce rapport n'établit ni l'autorisation de traitement ou de transfert de données exigée par la loi, ni la rétention effective de courriels professionnels actifs, ni un rollback de contenu de production. Voir `docs/FINALISATION-2026-10-25.md` et `docs/DONNEES-RETENTION-30J.md`.
