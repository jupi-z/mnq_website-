# Rapport de finalisation — état vérifié le 25 octobre 2026

## Décision de publication

**Le portail n'est pas publié et l'indexation reste désactivée.** Le vhost Nginx dédié, DNS, redirections HTTPS et certificat TLS valide pour le domaine racine et `www` sont opérationnels. Le lien de release publique reste absent; le domaine ne sert donc pas les pages du portail. L'absence de contenu public est un choix de sécurité en attendant la validation de conformité des traitements de données et les approbations éditoriales documentées.

La direction a confirmé : Président Ameno Kizele Mwine; Directeur Général Manels Muvumbi Mundu; RCCM `CD/KWZ/RCCM/26-B-00523`; identification nationale `14-F4300-N00001Y`; adresse professionnelle active `contact@monarquegrp.com`; lancement commercial visé en mars 2027. Le GUCE aurait indiqué oralement que la divergence d'intitulé du RCCM n'était pas problématique. Cette confirmation orale n'est pas présentée comme une rectification écrite et cette divergence n'est pas un blocage de publication.

## Corrections et validations du code

- Les mentions provisoires de l'éditeur et de l'hébergeur ont été remplacées par les informations institutionnelles et le fournisseur identifiés dans les conditions Hostinger publiques, avec réserve explicite d'une entité contractuelle différente au contrat.
- Les pages Confidentialité et Privacy décrivent maintenant le traitement constaté : journaux Nginx, journaux système, préférence de thème locale, absence de formulaire, compte et outil d'analyse, correspondance par courriel, prestataires et politique de purge.
- Le détail physique des infrastructures, chemins privés, adresse IP du serveur, noms de fichiers de sauvegarde et configurations d'administration ne figurent pas dans ce rapport.
- Le vhost utilise désormais un répertoire de journaux propre à MonarQue et une politique logrotate dédiée, quotidienne, avec purge à 30 jours. La politique globale Nginx des autres sites n'a pas été modifiée.
- journald est configuré avec une rétention maximale de 7 jours sur ce VPS. Les autres services et leurs configurations n'ont pas été modifiés.
- Trois anciens courriels contenant des codes temporaires manifestement expirés ont été supprimés. Les messages professionnels plus anciens n'ont pas été purgés sans qualification de leur nécessité. La procédure de tri hebdomadaire et de consignation des exceptions doit être suivie par le responsable de boîte désigné par la direction.
- Un test de réception du courriel de contact a réussi par un envoi à la même boîte puis le message de test a été supprimé.

## Tests exécutés sur le candidat local

Commit synchronisé de départ : `99aeb78cdbe765c1ffc05425bb3c97d594e8a71f`. Les modifications de ce rapport ne constituent pas encore un commit de publication.

- `npm ci` : réussi, 31 paquets installés, zéro vulnérabilité rapportée par l'audit d'installation.
- `npm run typecheck` : réussi.
- `npm run build` avec indexation désactivée : réussi, 25 routes statiques.
- `node scripts/check-static.mjs` : réussi.
- `npm run test:e2e -- --reporter=line` : 24 tests réussis.
- Tests couvrant les pages FR/EN, navigation, contact, thème, logo et dimensions mobiles exécutés avec Playwright.
- Aucun nouveau contrôle manuel de navigation graphique ni nouvelles captures après les corrections de confidentialité de ce rapport n'est revendiqué ici.

## Vérification VPS et conservation

- DNS du domaine racine et alias `www` résolvent vers le VPS; les MX restent ceux de Hostinger Mail. Aucun renseignement réseau interne n'est publié ici.
- Nginx, Certbot, logrotate, KIT Services, EnterpriseOS, PostgreSQL, Redis et Fail2Ban étaient actifs lors du contrôle.
- Le certificat servi comporte les deux noms attendus et vérifie correctement en TLS. L'expiration observée est le 23 janvier 2027. Le timer de renouvellement Certbot est actif. Les redirections HTTP vers HTTPS et `www` vers l'hôte canonique ont été vérifiées dans l'audit infrastructure antérieur.
- Après la mise à jour du seul vhost MonarQue, `nginx -t` a réussi avant rechargement et Nginx est resté actif. La configuration Logrotate dédiée a été simulée sans erreur; son plan prévoit une rotation quotidienne et une purge maximale à 30 jours. La configuration globale n'a pas été modifiée.
- La purge journalière logrotate n'a pas encore été observée sur un cycle réel. Un test isolé sur fichier synthétique daté de 31 jours a confirmé la suppression de l'archive expirée et la recréation du journal courant.
- L'historique des sauvegardes d'exploitation est conservé dans un registre privé. Les archives d'infrastructure excluent les clés privées. Le test antérieur du retour arrière Nginx concernait la préparation ACME; un rollback de release web en production ne peut pas être déclaré testé sans publication.
- Aucun test de disponibilité externe des autres sites n'a été relancé dans cette dernière passe; les services système listés restent actifs.

## Blocage juridique précis avant activation publique

Le Code du numérique de RDC soumet les traitements personnels à une déclaration préalable (article 186), encadre le stockage/hébergement et les transferts à l'étranger (article 201), prévoit une autorisation préalable pour le transfert et exige notamment que l'information remise à la personne précise la durée et l'éventualité de transferts (article 220). La [source officielle du Code publiée par l'ARE](https://are.gouv.cd/download/ordonnance-loi-23-010-du-13-mars-portant-code-du-numerique/) et le [guichet officiel de conformité de l'ARPTC](https://cadran.arptc.gouv.cd/) décrivent les démarches de déclaration et d'autorisation de transferts.

Le site et la boîte de contact traitent des données personnelles, notamment les adresses IP et les correspondances. L'hébergement et le service mail Hostinger peuvent entraîner un traitement hors RDC. Aucun récépissé de déclaration, décision d'adéquation applicable, autorisation de transfert ni avis de l'autorité confirmant une dispense n'a été produit dans les pièces accessibles à cette exécution. Une politique de confidentialité exacte et une purge à 30 jours ne remplacent pas cette formalité. **Le document attendu est le récépissé de déclaration du traitement applicable et, si le transfert hors RDC est confirmé ou s'applique, la décision préalable d'autorisation de l'ARPTC/APD ou une confirmation écrite de l'autorité établissant l'exemption applicable.** La direction ou son conseil peut transmettre ces pièces hors du dépôt public.

En conséquence, aucune compilation indexable, bascule de `current`, fusion de publication ou activation d'indexation n'est effectuée. La branche de PR peut recevoir les corrections et preuves publiques, mais la PR ne doit pas être fusionnée en tant que publication tant que cette condition et l'approbation éditoriale globale requise par la procédure ne sont pas établies.

## Retour arrière

Le changement Nginx a été limité au vhost MonarQue et dispose d'une sauvegarde restreinte conservée hors du dépôt public. Le fichier vhost précédent peut être restauré, puis `nginx -t` doit réussir avant tout rechargement. Un rollback de contenu, une fois publié, consistera à repointer atomiquement le lien de release vers la version précédente; aucun reload Nginx n'est requis pour des fichiers statiques. Le retour arrière d'une release publique n'a pas encore été exécuté puisque le portail n'a pas été activé.

## Captures

Les captures du candidat local actuel sont disponibles dans `docs/qa-captures/2026-10-25/` : accueil ordinateur, mentions légales ordinateur, accueil mobile clair et sombre. Elles ne constituent pas des captures du domaine public. Le domaine public ne sert actuellement aucune page du portail.
