# Politique cible de minimisation et de conservation — MonarQue Group

**Décision de direction : 25 octobre 2026.** Les informations de localisation physique exacte des serveurs, répertoires sensibles, centres de données, accès d'administration et contrats privés restent confidentielles. Ce document public expose uniquement la politique générale, jamais les secrets ni la géographie technique détaillée.

## Portée et règles de base
- L'objectif est une conservation **au plus 30 jours par défaut** des données personnelles issues du site et de ses échanges de contact, lorsque les données n'ont plus de finalité active.
- La durée réelle doit être adaptée à la finalité et ne peut être fixée par commodité technique.
- Au-delà de 30 jours, seuls des cas justifiés peuvent être conservés : dossier ou relation active, obligations contractuelles/légales, contrôle de sécurité documenté, défense d'un droit ou litige, ou autre nécessité objective.
- Chaque exception doit identifier **la catégorie**, **la justification**, **le responsable**, **la date de réexamen**, **la règle de suppression** et **les restrictions d'accès**. Ce registre peut contenir des données confidentielles : conserver hors dépôt public.
- Une conservation prolongée ne signifie pas une conservation illimitée. À l'expiration de la nécessité : suppression ou anonymisation proportionnée, avec examen des copies et archives.
- Les personnes concernées doivent être informées des catégories de données, finalités, durées ou critères, destinataires, droits et éventuels transferts selon les textes applicables.

## Catégories et contrôles techniques à appliquer avant publication
| Catégorie | Politique | Preuve de conformité attendue |
| --- | --- | --- |
| Journaux d'accès et erreurs Nginx | Purge dans les 30 jours maximum en fonctionnement courant, sauf incident documenté | Inventaire des fichiers, politique logrotate et éventuels outils supplémentaires, contrôle de purge |
| Logs système, reverse proxy, sécurité | Minimisation; durée réduite selon leur rôle; conservation exceptionnelle sécurisée si incident | Journalctl, système de supervision, services liés, rétention/quotas mesurés sans exposer de contenu sensible |
| Courriels entrants | Trier et supprimer les messages non nécessaires dans un délai de 30 jours; conserver séparément les échanges utiles aux dossiers actifs | Vérification Hostinger Mail; procédure de tri, archives, corbeille, spam et copies expédiées |
| Sauvegardes | Éviter de conserver indûment les données supprimées au-delà de leur durée; exceptions de sauvegarde sécurisées et limitées si indispensables | Politique réelle de rotation, chiffrement, accès, expiration, traitement de la restauration |
| Demandes de droits/suppression | Conserver uniquement la preuve nécessaire du traitement de la demande selon obligations applicables | Procédure interne et registre sécurisé hors dépôt public |

## Préservation de la confidentialité de l'infrastructure
- Public : identité et coordonnées de MonarQue Group, finalités, prestataires pertinents, durées ou critères et transferts possibles/réels à indiquer selon les obligations applicables. L'identité juridique d'un hébergeur peut être exigée pour les mentions légales.
- Confidentiel : adresse physique détaillée d'un centre de données, coordonnées d'administration du VPS, architecture interne, copies de contrats, accès SSH, clés, backups et journaux de sécurité.
- La confidentialité demandée **ne permet pas de masquer un transfert international lorsque le droit en impose l'information**. L'art. 220 du Code du numérique mentionne notamment la durée de conservation et l'éventualité d'un transfert vers des États tiers.
- Les informations non publiques peuvent être demandées dans un cadre confidentiel par un conseil compétent ou une autorité habilitée. Ne jamais les inscrire dans une PR GitHub publique.

## Mission technique Codex
1. Relever les durées effectives des logs, backups, rétentions Hostinger Mail et dossiers dérivés, **sans publier les chemins secrets, les IP sensibles ou les contenus des messages**.
2. Appliquer les durées cibles contrôlables en respectant les besoins documentés de sauvegarde, récupération, sécurité et les autres services du VPS.
3. Ne pas modifier une politique de journalisation globale sans vérifier les services tiers. Préférer un réglage propre au vhost MonarQue.
4. Prouver le comportement de rotation et purge sur un exemple non sensible; vérifier aussi les exceptions et l'absence de rétention automatique cachée.
5. Si Hostinger Mail ne permet pas une expiration automatique adaptée, documenter une procédure manuelle réaliste et sa responsabilité; ne pas prétendre à une purge automatique.
6. Réviser les pages Confidentiel/Privacy FR/EN pour que les engagements correspondent exactement à la configuration et aux procédures mises en place.
7. Vérifier, par une revue juridique proportionnée à un site statique sans formulaire, les obligations d'information et de transfert applicables. Ne pas bloquer la publication pour exiger **publiquement** la géolocalisation exacte des données si elle n'est pas légalement requise.
8. Documenter le résultat technique, les exceptions et l'accord de publication, sans exposition des données privées.

## Procédure d'exploitation constatée le 25 octobre 2026

- Journaux Nginx MonarQue : fichiers dédiés, rotation quotidienne, compression et purge maximale à 30 jours par une configuration logrotate propre au site. La configuration globale Nginx des autres applications n'est pas modifiée. Le timer système logrotate est actif. La simulation de configuration a réussi; une purge sur un cycle réel et un essai avec fichiers synthétiques datés restent à tracer avant d'affirmer le résultat d'une purge effective.
- Journaux systemd/journald : paramètre `MaxRetentionSec=7day` observé; volume constaté 67,5 MB au contrôle. La purge effective est gouvernée par la rétention et l'espace disque, et non un délai strict observé fichier par fichier.
- Courriels : Hostinger indique une suppression automatique du spam et de la corbeille au bout de 30 jours et une disponibilité des journaux de livraison pendant 30 jours. La boîte de réception et les messages envoyés n'ont pas de purge automatique constatée. Le responsable de boîte désigné par la direction examine les dossiers entrants et envoyés chaque semaine; il supprime les messages dont la finalité est terminée dans les 30 jours. Les dossiers encore actifs font l'objet d'une justification, d'un responsable, d'une échéance de réexamen et d'une suppression prévue, notés dans un registre privé. Vider la corbeille ne remplace pas cette revue.
- Lors du contrôle du 25 octobre 2026, trois codes temporaires manifestement expirés, datant de plus de 30 jours, ont été supprimés. Des correspondances professionnelles plus anciennes sont restées dans la boîte sans que leur contenu soit copié dans le dépôt; elles doivent être classées par le responsable de boîte lors de la revue hebdomadaire. Aucun engagement de purge automatique de la boîte n'est formulé.
- Courriels de test : un message envoyé à la même boîte a confirmé la réception, puis a été supprimé des dossiers entrants et envoyés.
- Backups : les archives d'infrastructure présentes concernent les configurations Nginx de préparation et ne contiennent pas les données de navigation ou de correspondance du site. Elles sont restreintes et nécessaires au retour arrière; aucun mécanisme de sauvegarde de données utilisateurs du site n'est mis en place. Leur échéance doit être revue après retrait du besoin de rollback. Les politiques générales de sauvegarde du VPS ne sont pas modifiées.

Documentation Hostinger : [purge Spam/Trash](https://support.hostinger.com/en/articles/5240863-what-happens-to-emails-in-the-spam-folder) et [journaux de livraison](https://support.hostinger.com/en/articles/6404796-how-to-check-delivery-logs-for-hostinger-email).
L'entité contractuelle Hostinger est définie par les [conditions générales officielles](https://www.hostinger.com/ng/legal/universal-terms-of-service-agreement); le compte client ou un contrat de service particulier peut désigner une autre entité. Les conditions générales publiques ne révèlent pas la région d'hébergement sélectionnée dans ce compte.

## Statut de conformité et de déploiement
La règle technique de 30 jours est configurée pour les logs du vhost et documentée pour les courriels, avec limites opérationnelles explicites. Cela ne vaut ni preuve de purge effective sur 30 jours ni autorisation juridique de traiter des données hors RDC. Les pages d'information ont été mises à jour, mais le portail reste non publié et non indexable jusqu'à preuve de déclaration préalable applicable et décision/confirmation de l'autorité compétente sur le transfert éventuel, ainsi qu'approbation éditoriale finale.
