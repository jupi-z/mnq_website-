# Mandat de revue indépendante — Codex

## Rôle
Le présent document décrit la **première phase d'audit indépendant**. La direction a également confirmé que Codex a accès à son VPS et peut préparer la mise en production selon `docs/CODEX-HANDOFF-PRODUCTION.md`. Il ne doit ni redéfinir la stratégie du Groupe ni inventer des activités ou transformer LTEX en société juridique. Il peut proposer des correctifs en PR distincte avec preuves.

## Contrôles obligatoires
1. `npm install && npm run typecheck && npm run build && node scripts/check-static.mjs && npm run test:e2e`.
2. Revue responsive : 320, 375, 390, 768, 1024, 1440 et 1920 px ; pas de débordement horizontal, collision ou textes coupés.
3. Vérification au clavier : lien d'évitement, focus visible, ouverture/fermeture de la navigation, changement de langue, bascule de thème.
4. Contraste, noms accessibles, H1 unique, titres hiérarchisés, liaison des labels de navigation.
5. FR/EN : correspondance des rubriques, traductions idiomatiques, métadonnées, canonical et hreflang.
6. Logos : originaux respectés, images chargées, fond sombre traité, favicon bien visible.
7. Vérification métier : structure holding/pôle/marque/produit/projet; absence de filiales supposées; aucune réalisation ou client non validé; absence d'assertion d'activités commerciales déjà démarrées.
8. Vérification des données publiques : contact valide, informations légales et hébergeur complets, politique de confidentialité conforme aux traitements réels.
9. Sécurité : aucune clé, donnée d'identité privée, promesse d'investissement, API non protégée ou dependency à avis critique connu.
10. Performance : Core Web Vitals réels sur appareil bas de gamme et connexion mobile, images mises en cache, script limité; documenter les métriques.
11. Déploiement : export statique utilisable, robots `noindex` par défaut, pas d'activation accidentelle de `NEXT_PUBLIC_SITE_READY=true`.

## Format des résultats
Chaque anomalie doit fournir : gravité P0-P3, URL ou fichier, procédure de reproduction, constat, impact, solution minimale et preuve. Un résultat sans reproduction ne bloque pas la livraison. Aucun rapport de réussite ne remplace la validation réelle du domaine et de l'hébergement.

## Critères de sortie
Pas de P0/P1 ouverts; contrôles automatisés verts; mentions légales et coordonnées vérifiées; décision de mise en ligne documentée. Le site n'est pas considéré comme publié tant que les DNS et l'hébergement ne sont pas vérifiés.

## Points de vigilance issus de la revue visuelle
Les premiers screenshots ont montré un remplacement tardif du logo par un composant client. Il a été éliminé : vérifier que le logo officiel est visible dès le rendu initial sans effet de substitution. Le petit texte rouge doit avoir un contraste AA suffisant après remplacement de l'accent UI par #bf301c. Le logo conserve strictement ses couleurs originales.
