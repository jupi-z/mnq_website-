# Exploitation et déploiement

## Pré-requis
Node LTS compatible avec la version Next.js; gestionnaire npm. Servir le site statique généré dans `out/` avec HTTPS et une politique de cache appropriée.

## Installation
```bash
npm install
npm run typecheck
npm run build
```

Le projet utilise `output: "export"`, sans besoin de processus Node côté production pour les pages. Les services futurs (formulaires, CRM, CMS) devront être déployés séparément et rester facultatifs pour la navigation.

## Publication
1. Faire approuver les contenus et incorporer les vrais logos.
2. Vérifier la boîte contact@monarquegrp.com en réception.
3. Construire la branche approuvée, activer TLS et configurer DNS.
4. Vérifier chaque URL, la navigation mobile, les deux langues, le sitemap et les métadonnées.
5. Sauvegarder dépôt et configuration DNS/TLS/hébergement distinctement.

## Limitations V1
Pas de faux formulaire qui « envoie » sans backend; pas d'analytics sans validation des choix de confidentialité; pas d'espace investisseur ni CMS prématuré. Tant que les contrôles ne sont pas terminés, **ne pas présenter le site comme déployé ou publiable sans réserves**.
