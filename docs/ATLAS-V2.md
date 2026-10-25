# MonarQue Group — Atlas V2

## Source et portée

Direction artistique : prototype autonome fourni par la direction sous le nom \`MonarQue_Group_Atlas.html\` (25 octobre 2026). Il sert de référence visuelle : ivoire, vert forêt, orange, typographie ample et secondaire sérif italique, grille éditoriale, géométries abstraites, barre de navigation, listes à séparateurs, mouvements légers et interface mobile.

La V2 **ne publie pas le prototype HTML** : elle retranscrit son langage dans les composants natifs du dépôt Next.js, avec véritables URLs par langue. La vidéo embarquée dans la maquette est explicitement exclue; pas d'intégration, ni de modal de lecture.

## Périmètre implémenté

- Accueil FR/EN avec sculpture abstraite Canvas adaptée au mouvement réduit et bouton pause, sections identité, domaines, écosystème, approche et contact.
- Toutes les pages déjà existantes : Groupe, Activités/Domaines, Écosystème, Réalisations, Partenariats, Actualités, Contact, Mentions légales, Confidentialité.
- Quatre domaines en onglets accessibles et six initiatives filtrables par catégories.
- Douze pages supplémentaires réelles : six initiatives × deux langues, URL \`/[locale]/initiative/[id]/\`.
- Navigation, préférences de thème, titres et métadonnées conservés; bascule de langue préservant les fiches d'initiative.
- Identité et contenu institutionnel de \`src/lib/site.ts\` conservés : statuts réels, distinction des pôles internes et activités encore en préparation, contact par email, pas de données fictives ni d'exploitation annoncée.
- Séparation composant / CSS / texte / routes : aucun fichier HTML géant ni vidéo base64.

## Fichiers essentiels

- \`src/app/globals.css\` : système visuel inspiré d'Atlas avec règles desktop/mobile.
- \`src/components/home.tsx\`, \`interior.tsx\`, \`site-header.tsx\`, \`site-footer.tsx\` : interfaces multipages.
- \`src/components/atlas-art.tsx\` : sculpture Canvas propriétaire, sans réseau externe.
- \`src/components/atlas-interactive.tsx\` : filtres d'initiatives et onglets de domaines.
- \`src/lib/atlas.ts\` : contenus supplémentaires des six initiatives, FR et EN.
- \`src/app/[locale]/initiative/[id]/page.tsx\` : pages dédiées et métadonnées.
- \`tests/atlas-v2.spec.ts\` : tests d'expérience FR/EN et de responsive.

## Décisions et garde-fous

- Aucune modification au processus de publication en production, aux secrets, au serveur, aux DNS ou au vhost; V2 restera sur branche de revue tant que la direction ne valide pas ses captures.
- Ne pas modifier les fichiers originaux des logos fournis par la direction et vérifier leur provenance avant tout ajout de marque.
- La V2 retrouve les familles Manrope et Instrument Serif via `next/font/google` : téléchargement au build, auto-hébergement par Next.js et aucun chargement externe de polices chez les visiteurs. Aucun fichier de police n'est copié depuis les données intégrées au prototype. Vérifier la disponibilité de cette étape dans le pipeline de compilation.
- Les animations doivent respecter \`prefers-reduced-motion\`, éviter le débordement, ne pas dépendre d'une API distante et fonctionner sans vidéo.
- Le backend Monarque Connect et un CMS ne sont pas nécessaires pour le site V2.

## Checklist de validation avant fusion et déploiement

- CI complète réussie (typecheck, build, contrôle de l'export et Playwright).
- Vérifications visuelles sur ordinateur et téléphone : accueil, Groupe, Domaines, Écosystème, initiative, Partenariats, Contact, légal; thème clair et sombre, français et anglais.
- Validation éditoriale et design explicite de la direction.
- Déploiement dans une nouvelle release immutable après sauvegarde; contrôle de l'ensemble des routes et rollback. Ne pas déplacer directement le lien de production lors de cette PR.

## SEO et routes
Le sitemap V2 inclut les douze URLs bilingues des six initiatives. Les métadonnées des nouvelles pages possèdent une canonical et deux traductions hreflang; l'indexation reste soumise au mécanisme existant de validation de production.
