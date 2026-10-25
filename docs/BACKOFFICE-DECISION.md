# Décision d'architecture — administration du site institutionnel

## Décision au 25 octobre 2026
**Pas de back-office web obligatoire avant la mise en ligne du portail institutionnel V1. Ne pas attendre la fin du développement de Monarque Connect.**

La V1 Next.js est exportée en HTML statique, avec des pages essentiellement pérennes et des rubriques Actualités/Réalisations encore sans cas publiables. Ajouter tout de suite une authentification, une base de données et des interfaces CRUD aurait un coût d'exploitation et de sécurité disproportionné pour les contenus actuellement approuvés.

## Administration disponible dès aujourd'hui
Workflow « Git comme source de vérité » : texte modifié dans le dépôt, aperçu local, PR, vérifications automatiques, validation par la direction, build/version sur le VPS et rollback. Ce workflow est éditorial et administrable sans espace /admin ouvert au public; l'interface de GitHub n'est pas une interface CMS grand public. Voir `docs/PROCEDURE-PUBLICATION.md`.

Le dépôt est actuellement **public**. Les brouillons confidentiels, contrats, propositions financières, CV, emails de prospects, signatures et documents d'identité ne doivent jamais être soumis à une branche ou une PR de ce dépôt, même privée avant fusion. Préparer ces documents dans un espace privé séparé.

## Conditions de déclenchement d'un mini-CMS
Envisager une console éditoriale lorsque l'une des conditions suivantes apparaît : publication hebdomadaire récurrente, plusieurs contributeurs non techniques, besoin de brouillons planifiés avec workflow d'approbation, actualités/réalisations régulières, ou traduction gérée par plusieurs équipes.

## Proposition de cible, à ne pas construire avant validation du besoin
- Console éditoriale distincte, accès restreint, 2FA/SSO, rôles rédacteur/réviseur/publicateur, journal d'audit.
- Modèles structurés : actualités, réalisations, domaines d'activité, initiatives, contacts publics et pages légales avec statuts `draft/review/approved/published`.
- Contrôle du statut opérationnel, pièces justificatives et consentements de publication clients.
- Versions, prévisualisation, dépublication et restauration.
- Stockage média maîtrisé, sans CDN imposé; droits minimaux, sauvegardes et chiffrement des sessions.
- Publication atomique déclenchant le build statique; aucune écriture du CMS directement dans le HTML servi au public.
- Bilingue avec validation de chaque traduction avant mise en ligne.
- Formulaire de prospects éventuel uniquement avec justification métier, mesures anti-abus, notice de confidentialité finalisée et destinataires maîtrisés.

## Articulation avec Monarque Connect
Monarque Connect constitue à terme une plateforme métier de gestion, pas la source de vérité nécessaire pour les textes publics du site. Ne pas coupler le build, l'authentification, les pages légales ou l'hébergement du site à la disponibilité de son backend. Lorsque Connect sera stable : intégration facultative et versionnée par API pour les demandes qualifiées, le suivi commercial et les partenariats; gestion éditoriale du site reste autonome.

## Arbitrage
**Maintenant :** publier un site stable après les vérifications légales/VPS, avec un workflow Git révisable. **Après les premières semaines de publications réelles :** mesurer l'effort éditorial et choisir si un mini-CMS dédié est pertinent. **Plus tard :** connecter CRM/organisations via une API Monarque Connect sécurisée et découplée.
