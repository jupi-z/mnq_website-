# Rapport de validation finale — 25 octobre 2026

Le portail institutionnel est maintenant en ligne sur [monarquegrp.com](https://monarquegrp.com), avec HTTPS et les redirections canoniques vérifiés. La release servie a été construite depuis le commit fusionné `7d6a83bf837b3b0ded73e9104664969880741996`.

L'indexation publique reste désactivée par choix : `robots.txt` interdit l'exploration et les pages sont `noindex, nofollow`. Le contrôle indépendant n'a pas certifié les formalités de traitement/transfert de données; la direction a explicitement ordonné la publication et assumé sa décision.

Les résultats d'automatisation, le certificat, les contrôles de 20 routes et des 140 dimensions responsive, les états Nginx/services, la sauvegarde et le rollback vérifié sont consignés dans [`FINALISATION-2026-10-25.md`](FINALISATION-2026-10-25.md). Les identifiants réseau, chemins d'administration et emplacements de sauvegarde restent privés.
