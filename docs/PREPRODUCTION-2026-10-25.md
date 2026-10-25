# Préproduction — 25 octobre 2026

## Artefact

- Base : SHA `ede7bd1c96ecfba74b8d72d007fd945a5479fce6` plus le correctif de portabilité Playwright du présent audit.
- Build : `npm run build` terminé avec succès; sortie `out/` statique.
- Paramétrage : `NEXT_PUBLIC_SITE_READY` non activé, donc `noindex, nofollow` et robots disallow.
- Serveur local : `py -m http.server 4173 --directory out` via la configuration Playwright.

## Contrôles

- 23 tests Playwright passés : pages FR/EN, navigation, langue, thème, menu mobile, absence de débordement à 320 px et captures visuelles.
- Contrôle statique passé : toutes les routes prévues et les assets de marque existent; le noindex est présent.
- Les captures desktop 1440 px et mobile 390 px clair/sombre sont disponibles dans `test-results/visual/` et ont été inspectées visuellement.
- Le build contient 25 pages statiques, `robots.txt`, `sitemap.xml`, favicon et assets officiels.

## Limite

La préproduction VPS isolée n'a pas été créée : l'infrastructure publique ne possède encore aucun vhost/certificat `monarquegrp.com`, et une modification en l'état risquerait de toucher les vhosts existants. La préproduction locale démontre l'artefact et les parcours; elle ne démontre pas la configuration publique Nginx/TLS.

## Procédure de promotion prévue après levée des gates

1. Créer une racine de release dédiée sous un chemin exact validé après inventaire.
2. Sauvegarder le vhost Nginx, les liens Certbot et la racine active avec hash/checksum.
3. Installer l'artefact validé sous une release horodatée, sans secrets.
4. Activer d'abord un vhost HTTP ACME isolé, lancer `nginx -t`, puis recharger Nginx.
5. Émettre le certificat SAN pour le domaine racine et `www`, installer le vhost HTTPS et rediriger HTTP vers HTTPS.
6. Relancer `nginx -t` et recharger; tester le domaine public.
7. En cas d'échec, restaurer le vhost et le lien de release sauvegardés, valider `nginx -t`, recharger et retester les autres domaines.
