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

## Politique sur les contenus
- Entreprises juridiquement constituées vs pôles internes, marques, produits et projets en étude : ne jamais confondre.
- Aucune annonce fictive, statistique inventée, logo client sans autorisation, ni investissement proposé au public.
- Ne publier que des informations que l'on peut actualiser de façon fiable.
- Ne pas exposer les justificatifs de constitution ou des informations personnelles dans GitHub.
- Coordonnées publiques : `contact@monarquegrp.com`, hébergée par Hostinger Mail.

## Architecture cible
Cette méthode peut être remplacée ultérieurement par un CMS éditorial léger, propriétaire ou auto-hébergé, sans modifier la capacité du site statique à fonctionner indépendamment de Monarque Connect.
