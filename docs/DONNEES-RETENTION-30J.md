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

## Statut de déploiement
**Politique cible validée par la direction; vérification opérationnelle et information publique définitive encore en attente.** Les pages de confidentialité sont des projets à aligner sur les contrôles réalisés par Codex avant d'être déclarées définitives.
