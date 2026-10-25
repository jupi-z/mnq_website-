# Procédure de publication — MonarQue Group

## Gouvernance éditoriale

1. Préparer les modifications sur une branche dédiée et les présenter dans une Pull Request.
2. Vérifier les faits, les droits d'usage des visuels, les versions FR/EN et le stade réel des activités.
3. Ne pas publier d'informations internes d'administration, d'adresse IP, de chemin VPS, de sauvegarde, d'accès, de secret ou de localisation physique des infrastructures.
4. Obtenir la validation éditoriale explicite de la direction et les validations légales nécessaires avant activation de l'indexation.
5. Faire passer CI, contrôles de navigation et build depuis un SHA identifié; fusionner uniquement quand les conditions de publication sont satisfaites.

## Conservation des données

- Le responsable de boîte désigné par la direction examine chaque semaine les dossiers entrants et envoyés de `contact@monarquegrp.com`.
- Les messages dont la finalité est terminée sont supprimés dans un délai de 30 jours; la corbeille est vidée et les messages indésirables sont contrôlés. L'aide Hostinger indique que Spam et Trash sont automatiquement supprimés après 30 jours, et que les journaux de livraison sont disponibles 30 jours. Ces automatismes ne couvrent pas les messages actifs en Inbox/Sent.
- Toute conservation au-delà de 30 jours exige une justification liée à une finalité toujours active ou une obligation, un responsable, une date de réexamen et une règle de suppression. Consigner l'exception dans le registre privé de rétention, jamais dans GitHub.
- Ne pas archiver des messages ou pièces jointes dans un autre emplacement sans appliquer la même revue et durée. Pour une demande d'accès ou de suppression, le responsable désigné limite la conservation au strict nécessaire et consigne le traitement dans le registre privé.
- Les paramètres journald globaux ou les rotations des autres applications VPS ne doivent pas être modifiés au nom de MonarQue. Les journaux du vhost MonarQue disposent d'un traitement indépendant.

## Mise en production et retour arrière

1. Vérifier le SHA fusionné, les conditions juridiques et éditoriales, le build et les contrôles statiques.
2. Construire sans activer l'indexation tant que toutes les validations ne sont pas consignées. Le garde-fou exige `MONARQUE_RELEASE_APPROVED=YES` lorsque `NEXT_PUBLIC_SITE_READY=true`; cette variable n'est jamais une preuve de conformité en soi.
3. Transférer l'artefact immuable vers une nouvelle release dédiée, vérifier son SHA-256 et l'arborescence attendue, puis préparer une sauvegarde de configuration restreinte hors dépôt.
4. Basculer le pointeur de release de façon atomique. Ne modifier ni les vhosts, ni les bases, ni les services d'autres applications.
5. Avant chaque rechargement Nginx : exécuter `nginx -t`; ne recharger que si le résultat est réussi. Contrôler ensuite les pages, le TLS, les redirections, robots, en-têtes et les autres domaines hébergés.
6. Si un smoke test échoue, rétablir atomiquement le pointeur vers la release précédente, contrôler les réponses publiques et la santé Nginx. Un changement de fichiers statiques ne nécessite pas de rechargement Nginx.
7. Conserver la sauvegarde et la release précédente jusqu'à validation de la nouvelle version, puis appliquer la politique de conservation et supprimer les copies devenues inutiles.

## État de la préparation VPS au 25 octobre 2026

Un vhost Nginx dédié, un certificat SAN valide couvrant le domaine racine et `www`, les redirections HTTPS et la configuration de rétention des journaux du site sont prêts. Le certificat est géré par Certbot. Les détails d'administration et les chemins précis sont gardés dans le registre opératoire privé. Le pointeur de release publique reste absent et le domaine ne sert pas le portail tant que les validations légales et éditoriales ne sont pas acquises.

## Contenus

- Distinguer les sociétés constituées, les pôles internes, marques, produits et projets à l'étude.
- Ne publier aucune annonce fictive, statistique non documentée ou marque tierce sans autorisation.
- Les activités commerciales sont en préparation; le lancement envisagé par la direction est mars 2027. Ne pas annoncer qu'elles sont déjà opérationnelles.
- Contact public : `contact@monarquegrp.com`, messagerie Hostinger Mail.

## Architecture

Le site institutionnel statique est indépendant de Monarque Connect. L'administration éditoriale s'effectue par GitHub et revue des contenus. Aucun CMS, back-office, système d'authentification ou base de données supplémentaire ne fait partie de la présente procédure.
