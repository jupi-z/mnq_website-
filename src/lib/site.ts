export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const slugs = [
  "groupe", "activites", "ecosysteme", "realisations",
  "partenariats", "actualites", "contact", "mentions-legales", "confidentialite"
] as const;
export type Slug = (typeof slugs)[number];

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://monarquegrp.com").replace(/\/$/, "");
export const SITE_READY = process.env.NEXT_PUBLIC_SITE_READY === "true";

export function isLocale(value: string): value is Locale {
  return value === "fr" || value === "en";
}
export function isSlug(value: string): value is Slug {
  return (slugs as readonly string[]).includes(value);
}
export function localPath(locale: Locale, slug?: Slug): string {
  return "/" + locale + "/" + (slug ? slug + "/" : "");
}

export type Segment = {
  title: string;
  body: string;
  tag?: string;
};
export type PageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Segment[];
  closing?: string;
};
export type LocaleContent = {
  language: string;
  tagline: string;
  launchNotice: string;
  launchStatus: string;
  nav: { slug: Slug; label: string }[];
  home: {
    eyebrow: string; title: string; lead: string;
    explore: string; partnership: string;
    introLabel: string; introTitle: string; introBody: string;
    areasLabel: string; areasTitle: string;
    ecosystemLabel: string; ecosystemTitle: string; ecosystemBody: string;
    valuesLabel: string; valuesTitle: string;
    closingTitle: string; closingBody: string;
    areas: Segment[];
    values: Segment[];
  };
  pages: Record<Slug, PageCopy>;
  footer: {
    intro: string; navigation: string; contact: string; legal: string;
    location: string; rights: string; status: string;
  };
  common: {
    discover: string; write: string; close: string;
    navigation: string; dark: string; light: string;
    noPublication: string; email: string;
  };
};

export const content: Record<Locale, LocaleContent> = {
  fr: {
    language: "Français",
    tagline: "Entreprendre, concevoir et développer.",
    launchNotice: "Les activités commerciales de MonarQue Group sont en préparation. Leur démarrage est envisagé pour mars 2027, sous réserve de confirmation.",
    launchStatus: "Entreprise constituée · Activités en préparation",
    nav: [
      {slug:"groupe",label:"Le Groupe"},
      {slug:"activites",label:"Activités"},
      {slug:"ecosysteme",label:"Écosystème"},
      {slug:"partenariats",label:"Partenariats"},
      {slug:"contact",label:"Contact"}
    ],
    home: {
      eyebrow:"GROUPE ENTREPRENEURIAL • KOLWEZI, RDC",
      title:"Faire émerger des activités qui créent une valeur réelle.",
      lead:"MonarQue Group structure des initiatives économiques et technologiques, en préparation de son lancement commercial.",
      explore:"Découvrir le Groupe", partnership:"Construire un partenariat",
      introLabel:"01 / NOTRE IDENTITÉ",
      introTitle:"Une vision entrepreneuriale. Plusieurs domaines d'action.",
      introBody:"Basé à Kolwezi, MonarQue Group S.A.S. est une structure multisectorielle. La technologie fait partie de ses compétences structurantes, aux côtés des activités commerciales et des perspectives industrielles.",
      areasLabel:"02 / DOMAINES",
      areasTitle:"Des expertises complémentaires.",
      ecosystemLabel:"03 / ÉCOSYSTÈME",
      ecosystemTitle:"Un Groupe. Des initiatives aux vocations distinctes.",
      ecosystemBody:"Nous distinguons nos activités, nos pôles internes et les produits ou projets en développement. Chaque initiative est présentée selon sa maturité réelle.",
      valuesLabel:"04 / NOTRE APPROCHE",
      valuesTitle:"Construire avec méthode.",
      closingTitle:"Vous avez un projet, un besoin ou une opportunité à explorer ?",
      closingBody:"Échangeons autour d'une collaboration adaptée à votre contexte.",
      areas:[
        {title:"Numérique & technologie",body:"Conception de produits logiciels, solutions métiers, plateformes et automatisation."},
        {title:"Commerce & services",body:"Préparation d'activités commerciales et de services aux organisations."},
        {title:"Industrie & agro-industrie",body:"Exploration et structuration progressive de capacités productives."},
        {title:"Énergie & infrastructures",body:"Étude d'opportunités de projets nécessitant des partenariats spécialisés."}
      ],
      values:[
        {title:"Pragmatisme",body:"Partir de besoins identifiables avant de construire des solutions."},
        {title:"Clarté",body:"Présenter distinctement ce qui existe et ce qui est en préparation."},
        {title:"Coopération",body:"Réunir des compétences et des partenaires autour d'objectifs précis."}
      ]
    },
    pages: {
      groupe:{
        eyebrow:"IDENTITÉ INSTITUTIONNELLE",title:"Le Groupe",
        intro:"MonarQue Group S.A.S. est une société par actions simplifiée implantée à Kolwezi, en République démocratique du Congo. Son périmètre est multisectoriel, avec une orientation forte vers les technologies.",
        sections:[
          {tag:"VISION",title:"Développer des activités durables",body:"Notre orientation est de bâtir, structurer et faire évoluer des activités apportant une réponse utile aux besoins identifiés dans leur environnement."},
          {tag:"MÉTHODE",title:"Une approche progressive",body:"Nous distinguons étude, conception, développement et exploitation afin que chaque initiative soit décrite avec justesse."},
          {tag:"GOUVERNANCE",title:"Direction",body:"Président : Ameno Kizele Mwine. Directeur Général : Manels Muvumbi Mundu."},
          {tag:"ANCRAGE",title:"Kolwezi, Lualaba",body:"Le siège social de MonarQue Group S.A.S. se situe à Kolwezi, dans la province du Lualaba, en République démocratique du Congo."}
        ]
      },
      activites:{
        eyebrow:"CHAMPS D'ACTION",title:"Nos activités",
        intro:"MonarQue Group structure son développement autour de plusieurs domaines. Le périmètre statutaire ne signifie pas que chaque activité est déjà exploitée.",
        sections:[
          {tag:"ACTIVITÉ",title:"Zingatia — stratégie et création numérique",body:"Une activité d'agence numérique en préparation, destinée à la communication, à la présence en ligne et aux solutions pour les organisations."},
          {tag:"PÔLE INTERNE",title:"LTEX — technologie et solutions métiers",body:"Le pôle technologique interne du Groupe, dédié à la conception, à l'intégration et au développement de solutions numériques. LTEX n'est pas présenté comme une société juridiquement indépendante."},
          {tag:"ORIENTATION",title:"Commerce et distribution",body:"Développement d'opportunités de commerce, d'approvisionnement et de services associés selon les besoins et les accords concrétisés."},
          {tag:"EN ÉTUDE",title:"Industrie et agro-industrie",body:"Initiatives de diversification portant notamment sur des activités de transformation et de production, à des stades de structuration variables."},
          {tag:"EN ÉTUDE",title:"Énergie et infrastructures",body:"Étude d'opportunités liées à l'énergie et aux infrastructures, sous réserve des études, ressources et autorisations requises."}
        ]
      },
      ecosysteme:{
        eyebrow:"PÔLES • MARQUES • PRODUITS",title:"Notre écosystème",
        intro:"Derrière une même ambition entrepreneuriale se trouvent des activités, des capacités internes et des produits différents. Aucun des éléments ci-dessous n'est qualifié de filiale juridiquement constituée sans documentation.",
        sections:[
          {tag:"ACTIVITÉ",title:"Zingatia",body:"Agence de stratégie, communication, création numérique et services digitaux."},
          {tag:"PÔLE INTERNE",title:"LTEX",body:"Capacité technologique transversale de MonarQue Group."},
          {tag:"PRODUIT EN DÉVELOPPEMENT",title:"Monarque Connect",body:"Plateforme logicielle de gestion d'entreprise en cours de développement."},
          {tag:"PROJET NUMÉRIQUE",title:"THYSLO",body:"Projet d'expérience interactive dédié à la découverte et à la compréhension du monde."},
          {tag:"PROJET NUMÉRIQUE",title:"ZAMUREK",body:"Projet de plateforme commerciale multiactivités et de services associés."},
          {tag:"PROJET INDUSTRIEL",title:"Aura",body:"Initiative industrielle autour de la fabrication de savon, au stade de structuration."}
        ],
        closing:"La liste de cet écosystème évolue en fonction des projets dont la communication publique est autorisée."
      },
      realisations:{
        eyebrow:"EXPÉRIENCES ET RÉFÉRENCES",title:"Réalisations",
        intro:"La confiance se construit sur des travaux vérifiables. Cette rubrique accueillera des réalisations dont le périmètre et la publication auront été approuvés.",
        sections:[
          {tag:"NOTRE ENGAGEMENT",title:"Des exemples documentés, pas des promesses",body:"Nous publierons des études de cas avec un contexte, des travaux précisément décrits et les autorisations des parties concernées."}
        ],
        closing:"Pour discuter de nos capacités sur un besoin concret, contactez-nous directement."
      },
      partenariats:{
        eyebrow:"COOPÉRATION",title:"Développer ensemble",
        intro:"Nous étudions les collaborations susceptibles de mobiliser des compétences, d'ouvrir de nouveaux marchés ou d'accompagner la structuration de projets.",
        sections:[
          {tag:"01",title:"Partenariats commerciaux",body:"Prospection, représentation, distribution, co-développement de services et réponses communes à des opportunités."},
          {tag:"02",title:"Partenariats technologiques",body:"Expertise, intégration, conception de solutions, interopérabilité et coopération sur des projets métiers."},
          {tag:"03",title:"Partenariats industriels",body:"Échanges sur les technologies de production, équipements, fourniture et montée en capacités."},
          {tag:"04",title:"Partenariats stratégiques",body:"Exploration confidentielle de projets nécessitant des ressources, des compétences ou un financement spécifique."}
        ],
        closing:"Les informations confidentielles relatives aux projets sont communiquées uniquement dans un cadre approprié. Cette page ne constitue pas une offre publique de titres ou de placement."
      },
      actualites:{
        eyebrow:"COMMUNICATION OFFICIELLE",title:"Actualités",
        intro:"Cet espace est réservé aux annonces institutionnelles datées, vérifiées et approuvées par le Groupe.",
        sections:[
          {tag:"ÉDITORIAL",title:"Des communications vérifiables",body:"Aucune actualité fictive, aucun partenariat supposé ni chiffre de performance non documenté ne sera publié."}
        ],
        closing:"Les premières publications apparaîtront après validation éditoriale."
      },
      contact:{
        eyebrow:"NOUS JOINDRE",title:"Entrons en contact",
        intro:"Pour une demande de services, une collaboration ou une proposition de partenariat, écrivez-nous en précisant votre organisation et l'objet de votre démarche.",
        sections:[
          {tag:"COURRIER ÉLECTRONIQUE",title:"contact@monarquegrp.com",body:"Adresse de correspondance corporate utilisée par le Groupe. Sa réception doit être revérifiée avant publication du site."},
          {tag:"SIÈGE SOCIAL",title:"Kolwezi — Lualaba",body:"N° 900, Avenue Bunkeya, Quartier Mutoshi, Commune de Manika, Kolwezi, République démocratique du Congo."}
        ],
        closing:"Aucun formulaire ne collectera vos données tant qu'un système sécurisé de traitement des demandes n'aura pas été déployé."
      },
      "mentions-legales":{
        eyebrow:"INFORMATIONS INSTITUTIONNELLES",title:"Mentions légales",
        intro:"Informations d'identification destinées aux visiteurs de ce portail.",
        sections:[
          {tag:"ÉDITEUR",title:"MonarQue Group S.A.S.",body:"Société par actions simplifiée de droit applicable en République démocratique du Congo. Siège : N° 900, Avenue Bunkeya, Quartier Mutoshi, Commune de Manika, Kolwezi, Lualaba, RDC."},
          {tag:"DIRECTION",title:"Représentation",body:"Président : Ameno Kizele Mwine. Directeur Général : Manels Muvumbi Mundu."},
          {tag:"CONTACT",title:"Correspondance",body:"contact@monarquegrp.com"},
          {tag:"PUBLICATION",title:"Informations complémentaires",body:"Les identifiants légaux requis et les coordonnées de l'hébergeur seront intégrés après vérification documentaire et choix définitif de l'hébergement."}
        ],
        closing:"Cette page est une version de préparation qui doit être revue avant mise en production."
      },
      confidentialite:{
        eyebrow:"PROTECTION DES DONNÉES",title:"Confidentialité",
        intro:"Le site institutionnel initial est conçu pour limiter la collecte des données personnelles.",
        sections:[
          {tag:"NAVIGATION",title:"Pas de compte visiteur",body:"Aucun compte utilisateur, aucune publicité ciblée et aucun outil d'analyse publicitaire ne sont prévus pour cette version."},
          {tag:"CORRESPONDANCE",title:"Contact par courriel",body:"Lorsque vous écrivez à l'adresse professionnelle, les informations que vous communiquez sont utilisées pour traiter votre demande. Les modalités précises de conservation et d'exercice des droits doivent être confirmées avant publication."},
          {tag:"HÉBERGEMENT",title:"Journaux techniques",body:"L'hébergeur pourra traiter des journaux de connexion nécessaires au fonctionnement et à la sécurité du service, selon sa configuration effective."}
        ],
        closing:"La présente page est provisoire et devra correspondre aux traitements de données réellement mis en production."
      }
    },
    footer:{
      intro:"Groupe entrepreneurial multisectoriel établi à Kolwezi, en République démocratique du Congo.",
      navigation:"Navigation",contact:"Contact",legal:"Informations",location:"Kolwezi · Lualaba · RDC",
      rights:"Tous droits réservés",status:"Les initiatives présentées sont décrites selon leur stade réel d'avancement."
    },
    common:{
      discover:"En savoir plus",write:"Écrire au Groupe",close:"Fermer",navigation:"Ouvrir le menu",
      dark:"Activer le mode sombre",light:"Activer le mode clair",noPublication:"Publication à venir",
      email:"contact@monarquegrp.com"
    }
  },
  en: {
    language:"English",
    tagline:"Build, design and develop.",
    launchNotice:"MonarQue Group is preparing its commercial activities. The planned start is March 2027, subject to confirmation.",
    launchStatus:"Incorporated company · Operations in preparation",
    nav:[
      {slug:"groupe",label:"The Group"},{slug:"activites",label:"Activities"},
      {slug:"ecosysteme",label:"Ecosystem"},{slug:"partenariats",label:"Partnerships"},
      {slug:"contact",label:"Contact"}
    ],
    home:{
      eyebrow:"ENTREPRENEURIAL GROUP • KOLWEZI, DRC",
      title:"Building initiatives that create real value.",
      lead:"MonarQue Group is preparing business and technology initiatives ahead of its commercial launch.",
      explore:"Discover the Group",partnership:"Explore a partnership",
      introLabel:"01 / OUR IDENTITY",introTitle:"One entrepreneurial vision. Several fields of action.",
      introBody:"Based in Kolwezi, MonarQue Group S.A.S. is a multisector company. Technology is one of its core capabilities alongside business activities and prospective industrial ventures.",
      areasLabel:"02 / FIELDS",areasTitle:"Complementary capabilities.",
      ecosystemLabel:"03 / ECOSYSTEM",ecosystemTitle:"One Group. Distinct initiatives.",
      ecosystemBody:"We distinguish operating activities, internal departments and products or projects under development. Every initiative is described according to its actual stage.",
      valuesLabel:"04 / OUR APPROACH",valuesTitle:"Build with purpose.",
      closingTitle:"Have a project, need or opportunity to explore?",
      closingBody:"Talk to us about a collaboration suited to your context.",
      areas:[
        {title:"Digital & technology",body:"Business software, digital platforms, products and automation."},
        {title:"Trade & services",body:"Preparation of commercial activities and services to organizations."},
        {title:"Industry & agribusiness",body:"Exploration and gradual structuring of productive capabilities."},
        {title:"Energy & infrastructure",body:"Assessment of potential projects requiring specialist partnerships."}
      ],
      values:[
        {title:"Pragmatism",body:"Start with identifiable needs before building solutions."},
        {title:"Clarity",body:"Distinguish established activities from those in preparation."},
        {title:"Cooperation",body:"Bring skills and partners together around concrete goals."}
      ]
    },
    pages:{
      groupe:{eyebrow:"CORPORATE IDENTITY",title:"The Group",intro:"MonarQue Group S.A.S. is a simplified joint-stock company based in Kolwezi, Democratic Republic of the Congo. Its scope is multisector, with a strong focus on technology.",sections:[
        {tag:"VISION",title:"Develop lasting businesses",body:"We aim to build and structure activities that meet genuine needs in the markets where we operate."},
        {tag:"METHOD",title:"Step-by-step execution",body:"We distinguish research, design, development and operations so every initiative is accurately represented."},
        {tag:"GOVERNANCE",title:"Leadership",body:"President: Ameno Kizele Mwine. Managing Director: Manels Muvumbi Mundu."},
        {tag:"LOCATION",title:"Kolwezi, Lualaba",body:"The registered office is in Kolwezi, Lualaba Province, Democratic Republic of the Congo."}
      ]},
      activites:{eyebrow:"FIELDS OF ACTIVITY",title:"Our activities",intro:"MonarQue Group is developing several fields of activity. The corporate purpose does not imply that every field is already operational.",sections:[
        {tag:"ACTIVITY",title:"Zingatia — digital strategy and creation",body:"A digital agency activity in preparation, intended to address communication, websites and digital solutions for organizations."},
        {tag:"INTERNAL UNIT",title:"LTEX — technology and business solutions",body:"The Group's internal technology unit. LTEX is not presented as a separately incorporated company."},
        {tag:"DIRECTION",title:"Trade and distribution",body:"Developing sourcing, trade and associated services in line with actual market opportunities and agreements."},
        {tag:"UNDER REVIEW",title:"Industry and agribusiness",body:"Diversification initiatives around processing and production at varying stages of planning."},
        {tag:"UNDER REVIEW",title:"Energy and infrastructure",body:"Opportunities under assessment, subject to studies, resources and applicable permits."}
      ]},
      ecosysteme:{eyebrow:"UNITS • BRANDS • PRODUCTS",title:"Our ecosystem",intro:"Our ecosystem includes different operating activities, internal capacities and products. None is labeled a legally incorporated subsidiary without supporting documentation.",sections:[
        {tag:"ACTIVITY",title:"Zingatia",body:"Digital strategy, communications and creation services."},
        {tag:"INTERNAL UNIT",title:"LTEX",body:"Technology capabilities within MonarQue Group."},
        {tag:"PRODUCT IN DEVELOPMENT",title:"Monarque Connect",body:"Business management software platform currently under development."},
        {tag:"DIGITAL PROJECT",title:"THYSLO",body:"Interactive learning and world discovery project."},
        {tag:"DIGITAL PROJECT",title:"ZAMUREK",body:"Multi-activity commerce platform project."},
        {tag:"INDUSTRIAL PROJECT",title:"Aura",body:"Soap production initiative at the structuring stage."}
      ],closing:"This overview evolves as projects are approved for public communication."},
      realisations:{eyebrow:"WORK & REFERENCES",title:"Selected work",intro:"Trust rests on verifiable work. Approved case studies will be published here when their scope and release have been authorized.",sections:[
        {tag:"OUR STANDARD",title:"Documented work, not promises",body:"Each future case study will explain the context, actual scope and permissions obtained."}
      ],closing:"Contact us to discuss what we can deliver for your needs."},
      partenariats:{eyebrow:"COOPERATION",title:"Grow together",intro:"We explore collaborations that mobilize expertise, open markets and contribute to building sustainable initiatives.",sections:[
        {tag:"01",title:"Commercial partnerships",body:"Business development, representation, distribution and joint service opportunities."},
        {tag:"02",title:"Technology partnerships",body:"Technical expertise, integration, business solutions and interoperability."},
        {tag:"03",title:"Industrial partnerships",body:"Production expertise, equipment and the development of operational capacity."},
        {tag:"04",title:"Strategic partnerships",body:"Confidential discussions on projects requiring specialist resources or financing."}
      ],closing:"Sensitive project information is shared only through appropriate channels. This page is not a public securities offering."},
      actualites:{eyebrow:"OFFICIAL UPDATES",title:"News",intro:"This section is reserved for dated, verified and approved announcements.",sections:[
        {tag:"EDITORIAL",title:"Verified communications",body:"No fictional announcements, presumed partnerships or unsupported performance figures will be published."}
      ],closing:"Updates will appear after editorial review."},
      contact:{eyebrow:"GET IN TOUCH",title:"Let's connect",intro:"For business requests or partnership proposals, please include your organization and the purpose of your inquiry.",sections:[
        {tag:"EMAIL",title:"contact@monarquegrp.com",body:"Previously used business email. Its ability to receive new messages must be tested before launch."},
        {tag:"REGISTERED OFFICE",title:"Kolwezi — Lualaba",body:"No. 900, Avenue Bunkeya, Mutoshi District, Manika Commune, Kolwezi, Democratic Republic of the Congo."}
      ],closing:"No visitor data is collected through an unconnected contact form."},
      "mentions-legales":{eyebrow:"CORPORATE INFORMATION",title:"Legal information",intro:"Identification information for visitors to this website.",sections:[
        {tag:"PUBLISHER",title:"MonarQue Group S.A.S.",body:"Simplified joint-stock company based at No. 900 Avenue Bunkeya, Mutoshi District, Manika Commune, Kolwezi, Lualaba, DRC."},
        {tag:"LEADERSHIP",title:"Corporate officers",body:"President: Ameno Kizele Mwine. Managing Director: Manels Muvumbi Mundu."},
        {tag:"CONTACT",title:"Correspondence",body:"contact@monarquegrp.com"},
        {tag:"FINAL REVIEW",title:"Additional information",body:"Required company identifiers and hosting information will be added after documentary verification and the selection of the production host."}
      ],closing:"This is a preparation draft and requires review before publication."},
      confidentialite:{eyebrow:"DATA PROTECTION",title:"Privacy",intro:"The initial corporate website is designed to minimize personal data collection.",sections:[
        {tag:"BROWSING",title:"No visitor account",body:"This edition does not plan visitor accounts, targeted advertising or advertising analytics."},
        {tag:"EMAIL",title:"Contact",body:"Information voluntarily sent by email is used to handle the inquiry. Retention and rights procedures must be verified before publication."},
        {tag:"HOSTING",title:"Technical logs",body:"The production host may process connection logs needed for operation and security, depending on its configuration."}
      ],closing:"This provisional page must match the actual personal data processing in production."}
    },
    footer:{
      intro:"Multisector entrepreneurial group based in Kolwezi, Democratic Republic of the Congo.",
      navigation:"Navigation",contact:"Contact",legal:"Information",
      location:"Kolwezi · Lualaba · DRC",rights:"All rights reserved",
      status:"Initiatives are described according to their actual stage of development."
    },
    common:{
      discover:"Read more",write:"Email the Group",close:"Close",navigation:"Open menu",
      dark:"Switch to dark theme",light:"Switch to light theme",
      noPublication:"Updates to follow",email:"contact@monarquegrp.com"
    }
  }
};
