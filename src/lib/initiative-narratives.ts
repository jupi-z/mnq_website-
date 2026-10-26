/* Public-only initiative narratives. Source: approved FR/EN sections of six-mini-site manuscript.
   Internal annexes, pricing, client names, unpublished architecture and confidential roadmap are excluded. */
export type InitiativeNarrativeSection = {number:string;title:string;paragraphs:string[]};
export type InitiativeNarrative = {hero:string;heroTitle:string;intro:string;status:string;sections:InitiativeNarrativeSection[];faqs:{question:string;answer:string}[]};
export const initiativeNarratives:Record<string,Record<"fr"|"en",InitiativeNarrative>> = {
  "zingatia": {
    "fr": {
      "hero": "Une marque doit être comprise avant d'être remarquée.",
      "heroTitle": "Zingatia — Identité, communication et marketing.",
      "intro": "La présence d'une organisation ne se construit pas seulement avec un logo ou une campagne. Elle repose sur une identité reconnaissable, un message cohérent et des supports capables de parler aux bons publics. Zingatia est l'activité de MonarQue Group consacrée à cette rencontre entre stratégie de marque, expression créative et communication.",
      "status": "Activité en préparation — missions définies selon le besoin et les ressources mobilisables.",
      "sections": [
        {
          "number": "01",
          "title": "Le défi : être visible ne suffit pas",
          "paragraphs": [
            "Une entreprise peut proposer un excellent service sans parvenir à expliquer ce qui la rend pertinente. Une institution peut disposer d'informations importantes sans les présenter avec clarté. Un commerce peut multiplier les publications sans construire une image cohérente. Dans chacun de ces cas, le problème dépasse l'esthétique : il touche à la manière dont le public comprend, reconnaît et choisit une organisation.",
            "Zingatia aborde la communication comme une discipline de construction. Avant de produire des visuels, il faut comprendre l'activité, son public, ses priorités et la perception que l'on souhaite installer."
          ]
        },
        {
          "number": "02",
          "title": "Nos champs d'expertise",
          "paragraphs": [
            "**Stratégie et positionnement de marque.** Clarifier l'identité d'une organisation, sa proposition de valeur, son ton, ses messages et les principes qui assurent leur cohérence dans le temps.",
            "**Identité visuelle et direction artistique.** Concevoir ou faire évoluer les systèmes graphiques : logo lorsque le projet le justifie, palettes, typographie, règles d'application, déclinaisons et documents de référence.",
            "**Communication institutionnelle et corporate.** Organiser la présentation d'une entreprise ou d'une organisation à travers profils, brochures, présentations, rapports de communication, dossiers et supports d'événements.",
            "**Campagnes et marketing.** Préparer des concepts créatifs, supports publicitaires, messages et dispositifs de communication adaptés à des objectifs déterminés ; mesurer ce qui peut réellement être mesuré, sans promesse automatique de résultat.",
            "**Communication digitale et contenus.** Concevoir des lignes éditoriales, contenus pour réseaux sociaux, visuels numériques, présentations de produits et dispositifs de visibilité cohérents avec l'identité de marque.",
            "**Édition, print et packaging.** Développer les supports imprimés, habillages de produits, étiquettes et compositions nécessaires à l'expression d'une marque, avec les prestataires de fabrication adaptés.",
            "**Important :** le développement logiciel, les plateformes métier, l'automatisation avancée et l'infrastructure relèvent de LTEX, le pôle technologique interne du Groupe. Zingatia intervient sur le langage de marque et l'expérience de communication, en coordination avec LTEX lorsqu'un projet a également une composante technique."
          ]
        },
        {
          "number": "03",
          "title": "À qui s'adresse Zingatia ?",
          "paragraphs": [
            "Entrepreneurs structurant une première identité ; PME souhaitant professionnaliser leur communication ; commerces et enseignes voulant clarifier leur image ; hôtels, restaurants et services ayant besoin de contenus réguliers ; cabinets, associations et institutions préparant des supports sérieux ; partenaires de production graphique recherchant une compétence complémentaire sur des missions de conception.",
            "Nous privilégions un périmètre réaliste et une relation de travail clairement définie plutôt qu'un catalogue de promesses standardisées."
          ]
        },
        {
          "number": "04",
          "title": "Notre méthode : de l'intention à l'expression",
          "paragraphs": [
            "1. **Écouter.** Comprendre l'organisation, ses publics, ses besoins et ses contraintes. 2. **Cadrer.** Fixer les objectifs, le périmètre, les livrables, les responsabilités et les critères de validation. 3. **Concevoir.** Explorer les pistes de message, de composition et de direction artistique. 4. **Développer.** Produire les contenus et supports convenus, avec cohérence entre les formats. 5. **Valider.** Soumettre les livrables aux vérifications fonctionnelles, éditoriales et graphiques prévues. 6. **Accompagner.** Organiser la remise des éléments et, si cela fait partie de la mission, leur suivi et leurs évolutions."
          ]
        },
        {
          "number": "05",
          "title": "Ce que nous voulons apporter",
          "paragraphs": [
            "Une marque plus lisible, des messages mieux hiérarchisés, une expression visuelle reconnaissable et des supports conçus pour un usage concret. L'objectif n'est pas de multiplier les créations, mais de construire une identité capable de rester cohérente sur différents canaux.",
            "Les livrables, délais et moyens sont fixés pour chaque mission ; aucune performance commerciale ou publicitaire n'est garantie sans définition de conditions et d'indicateurs adaptés."
          ]
        },
        {
          "number": "06",
          "title": "Notre place dans le Groupe",
          "paragraphs": [
            "Zingatia est une marque d'activité de **MonarQue Group S.A.S.**, et non une société distincte. Elle se concentre sur la communication et l'image de marque. Les besoins qui nécessitent un développement de systèmes ou des intégrations techniques peuvent être étudiés avec LTEX, dans un périmètre séparé et explicite."
          ]
        },
        {
          "number": "07",
          "title": "Construisons un langage à votre mesure",
          "paragraphs": [
            "Vous préparez une nouvelle identité, souhaitez repenser votre communication ou avez besoin de supports professionnels pour une initiative ? Décrivez-nous votre organisation, votre objectif et le type de livrable envisagé. Nous pourrons examiner le besoin et proposer un cadre d'échange adapté.",
            "**CTA principal :** « Parler de mon projet de marque » → `contact@monarquegrp.com`   **CTA secondaire :** « Explorer l'écosystème MonarQue »."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Zingatia est-elle une société indépendante ?",
          "answer": "Non. Zingatia est une activité et une marque portée par MonarQue Group S.A.S."
        },
        {
          "question": "Zingatia développe-t-elle des logiciels ?",
          "answer": "Sa vocation principale est le branding, la communication et le marketing. Les besoins d'ingénierie sont étudiés avec LTEX."
        },
        {
          "question": "Peut-on demander une prestation dès maintenant ?",
          "answer": "Une prise de contact est possible. La disponibilité, le périmètre, les conditions et le calendrier sont confirmés individuellement."
        }
      ]
    },
    "en": {
      "hero": "A brand must be understood before it can be noticed.",
      "heroTitle": "Zingatia — Branding, communication and marketing.",
      "intro": "An organization's presence is not built through a logo or a campaign alone. It depends on a recognizable identity, a consistent message, and material that speaks to the right audiences. Zingatia is MonarQue Group's brand activity dedicated to bringing together brand strategy, creative expression, and communication.",
      "status": "Activity in preparation — individual engagements depend on scope and available resources.",
      "sections": [
        {
          "number": "01",
          "title": "The challenge: visibility alone is not enough",
          "paragraphs": [
            "A company may offer an excellent service but struggle to explain why it matters. An institution may possess valuable information without presenting it clearly. A retailer may publish frequently without developing a coherent identity. In each case, the problem goes beyond appearance: it concerns the way an audience understands, recognizes, and chooses an organization.",
            "Zingatia approaches communication as a disciplined process. Before visual content comes an understanding of the organization, its audiences, its priorities, and the perception it wants to establish."
          ]
        },
        {
          "number": "02",
          "title": "Areas of expertise",
          "paragraphs": [
            "**Brand strategy and positioning.** Clarifying an organization's identity, value proposition, voice, messages, and the principles that maintain consistency over time.",
            "**Visual identity and art direction.** Designing or refining visual systems: logos when required, color palettes, typography, application rules, extensions, and reference guidelines.",
            "**Corporate and institutional communication.** Structuring company profiles, brochures, presentations, communication reports, information packs, and event material.",
            "**Campaigns and marketing.** Developing creative concepts, advertising assets, messages, and communication approaches for defined goals, with realistic ways of evaluating outcomes.",
            "**Digital communication and content.** Creating editorial directions, social content, digital visuals, product storytelling, and visibility initiatives aligned with brand identity.",
            "**Editorial design, print, and packaging.** Creating print-ready communication, packaging concepts, labels, and layouts alongside appropriate production partners.",
            "**Important:** software engineering, business platforms, advanced automation, and infrastructure belong to LTEX, the Group's internal technology unit. Zingatia focuses on brand language and communication experience, working alongside LTEX when projects also require technical delivery."
          ]
        },
        {
          "number": "03",
          "title": "Who Zingatia is for",
          "paragraphs": [
            "Founders shaping a first identity; small and medium-sized businesses improving their communications; shops and brands seeking clearer positioning; hotels, restaurants, and service providers needing consistent content; practices, associations, and institutions preparing professional material; and print-production partners seeking complementary design expertise.",
            "We favor clearly defined, realistic scopes over broad, standardized promises."
          ]
        },
        {
          "number": "04",
          "title": "Our approach: from intent to expression",
          "paragraphs": [
            "1. **Listen.** Understand the organization, audiences, needs, and constraints. 2. **Define.** Agree on goals, scope, deliverables, responsibilities, and approval criteria. 3. **Create.** Explore messaging, composition, and art direction. 4. **Develop.** Produce agreed material consistently across formats. 5. **Review.** Apply the editorial, functional, and visual checks defined for the assignment. 6. **Support.** Hand over approved assets and provide follow-up or iteration where included."
          ]
        },
        {
          "number": "05",
          "title": "What we aim to deliver",
          "paragraphs": [
            "A clearer brand, better-structured messages, recognizable visual expression, and materials designed for real use. The objective is not to maximize the number of designs but to build an identity capable of remaining coherent across channels.",
            "Deliverables, timing, and resources are established per engagement; commercial or advertising performance is not promised without agreed conditions and meaningful metrics."
          ]
        },
        {
          "number": "06",
          "title": "Our place within the Group",
          "paragraphs": [
            "Zingatia is an activity and brand of **MonarQue Group S.A.S.**, not a separate company. It specializes in brand communication. Requests involving system development or technical integrations can be considered with LTEX as a distinct, clearly defined scope."
          ]
        },
        {
          "number": "07",
          "title": "Let's shape the way your organization communicates",
          "paragraphs": [
            "Planning a new identity, rethinking your communication, or preparing professional material for a new initiative? Tell us about your organization, your objective, and the kind of deliverables you have in mind. We can assess the request and determine an appropriate next conversation."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Is Zingatia a separate company?",
          "answer": "No. It is an activity and brand operated under MonarQue Group S.A.S."
        },
        {
          "question": "Does Zingatia develop software?",
          "answer": "Its main focus is branding, communication, and marketing. Engineering needs are assessed with LTEX."
        },
        {
          "question": "Can I enquire about a service today?",
          "answer": "Yes. Availability, scope, conditions, and timing are confirmed individually."
        }
      ]
    }
  },
  "ltex": {
    "fr": {
      "hero": "Le numérique utile se construit sur des fondations solides.",
      "heroTitle": "LTEX — Ingénierie, systèmes et solutions numériques.",
      "intro": "Derrière une interface simple se trouvent des questions de données, de processus, de sécurité, d'intégration et de fiabilité. LTEX est le pôle technologique interne de MonarQue Group. Sa mission est de concevoir les fondations et les systèmes qui permettent aux initiatives du Groupe — et, selon les missions convenues, à des organisations externes — de transformer un besoin métier en solution structurée.",
      "status": "Pôle technologique interne du Groupe.",
      "sections": [
        {
          "number": "01",
          "title": "Partir des opérations, pas seulement du logiciel",
          "paragraphs": [
            "Un logiciel ne résout pas un problème simplement parce qu'il possède de nombreuses fonctionnalités. Il doit correspondre à la manière dont une organisation travaille, à ses contraintes et à ses objectifs. LTEX analyse les flux, les décisions, les utilisateurs et les dépendances avant de déterminer les composants nécessaires.",
            "L'enjeu est d'éviter les outils isolés, les données fragmentées et les applications dont l'exploitation devient plus difficile que le travail qu'elles sont censées simplifier."
          ]
        },
        {
          "number": "02",
          "title": "Les domaines d'intervention de LTEX",
          "paragraphs": [
            "**Architecture logicielle et systèmes métiers.** Étudier les processus, organiser les domaines fonctionnels, définir les interfaces et concevoir des solutions adaptées à un besoin précis.",
            "**Applications web et mobiles.** Développer les couches applicatives et services nécessaires à des parcours utilisateurs cohérents, en tenant compte des contraintes des appareils et des environnements.",
            "**API et intégrations.** Construire des interfaces d'échange entre services, organiser la circulation des données et permettre des interactions maîtrisées entre applications.",
            "**Bases de données et exploitation.** Concevoir les modèles de données, les droits d'accès, les procédures de sauvegarde et les dispositifs techniques nécessaires à l'exploitation d'un système.",
            "**Automatisation et IA appliquée.** Étudier des automatisations de tâches, des assistants et des outils d'aide à la décision lorsque leur utilité, leur sécurité et leur périmètre sont définis.",
            "**Infrastructure et livraison.** Préparer les environnements, l'intégration continue, les déploiements, les vérifications et les évolutions techniques adaptées à chaque projet.",
            "La disponibilité de chaque prestation dépend de sa complexité et des ressources engagées ; cette liste décrit des champs de compétence, pas une promesse de service illimité."
          ]
        },
        {
          "number": "03",
          "title": "Les besoins auxquels nous nous intéressons",
          "paragraphs": [
            "Gestion de clients et de commandes, suivi d'opérations, facturation métier, services multi-établissements, parcours de commerce, coordination d'équipes, plateformes de réservation, produits éducatifs et intégration de services existants. Ces exemples illustrent des familles de problèmes techniques ; ils ne sont pas présentés comme des produits déjà déployés chez des clients identifiés."
          ]
        },
        {
          "number": "04",
          "title": "Une méthode d'ingénierie par étapes",
          "paragraphs": [
            "1. **Compréhension métier :** objectifs, acteurs, règles et contraintes du processus. 2. **Conception :** architecture, données, interfaces, exigences de sécurité et critères d'acceptation. 3. **Construction :** développement progressif des composants et des intégrations. 4. **Vérification :** tests, revues, essais fonctionnels et contrôle des scénarios importants. 5. **Déploiement encadré :** préparation de l'environnement, mise en service quand les conditions sont satisfaites. 6. **Évolution :** maintenance et amélioration dans le cadre des engagements convenus."
          ]
        },
        {
          "number": "05",
          "title": "LTEX et les autres initiatives du Groupe",
          "paragraphs": [
            "LTEX constitue une compétence transversale : il contribue à la conception de produits tels que Monarque Connect, THYSLO et ZAMUREK, chacun disposant de sa propre vocation. Une initiative produit ne devient pas automatiquement un service commercial LTEX ; les engagements et modalités de livraison doivent être définis séparément.",
            "La relation avec Zingatia est complémentaire : **Zingatia construit le langage de marque et de communication ; LTEX construit les fondations technologiques.**"
          ]
        },
        {
          "number": "06",
          "title": "Une capacité interne, une relation contractuelle claire",
          "paragraphs": [
            "LTEX n'est ni une filiale ni une société commerciale juridiquement autonome. Les collaborations externes qui mobilisent ses compétences sont examinées et, si elles sont retenues, organisées sous la responsabilité contractuelle de **MonarQue Group S.A.S.**",
            "Nous privilégions la définition des responsabilités, des données, des droits sur les livrables et des conditions de suivi avant de promettre une solution."
          ]
        },
        {
          "number": "07",
          "title": "Parlez-nous du problème à résoudre",
          "paragraphs": [
            "Vous souhaitez structurer un processus, relier plusieurs systèmes ou concevoir une application métier ? Présentez le contexte, les utilisateurs concernés et les résultats recherchés. Une première analyse permettra de définir si un accompagnement technique peut être envisagé.",
            "**CTA principal :** « Soumettre un besoin technologique » → `contact@monarquegrp.com`   **CTA secondaire :** « Découvrir Monarque Connect »."
          ]
        }
      ],
      "faqs": [
        {
          "question": "LTEX est-il indépendant de MonarQue Group ?",
          "answer": "Non. LTEX est un pôle interne du Groupe."
        },
        {
          "question": "LTEX réalise-t-il des missions pour des tiers ?",
          "answer": "Des collaborations externes peuvent être examinées au cas par cas, dans un cadre contractuel défini par MonarQue Group S.A.S."
        },
        {
          "question": "LTEX et Zingatia proposent-ils les mêmes services ?",
          "answer": "Non. Zingatia se concentre sur les marques et la communication ; LTEX sur l'ingénierie technologique."
        }
      ]
    },
    "en": {
      "hero": "Useful technology begins with solid foundations.",
      "heroTitle": "LTEX — Engineering, systems, and digital solutions.",
      "intro": "Behind a simple interface lie complex questions involving data, processes, security, integrations, and reliability. LTEX is MonarQue Group's internal technology unit. Its role is to design the foundations and systems that help the Group's initiatives — and, where specifically agreed, external organizations — turn operational needs into structured solutions.",
      "status": "Internal technology unit.",
      "sections": [
        {
          "number": "01",
          "title": "Begin with the operation, not the software",
          "paragraphs": [
            "Software does not solve a problem simply by offering many features. It has to match how an organization works, its constraints, and its goals. LTEX studies workflows, decisions, users, and dependencies before selecting the appropriate technical components.",
            "The objective is to avoid isolated tools, fragmented data, and applications that become harder to operate than the work they were designed to simplify."
          ]
        },
        {
          "number": "02",
          "title": "Areas of expertise",
          "paragraphs": [
            "**Software architecture and business systems.** Understanding processes, defining functional boundaries, designing interfaces, and structuring solutions around specific needs.",
            "**Web and mobile applications.** Building application layers and services that enable consistent user experiences across devices and operating environments.",
            "**APIs and integrations.** Establishing controlled interfaces between systems and reliable flows of operational information.",
            "**Data and operations.** Planning data models, access rules, backups, and technical operations required for a service to run responsibly.",
            "**Automation and applied AI.** Exploring task automation, assistants, and decision-support tools when their purpose, safeguards, and limits are clearly established.",
            "**Infrastructure and delivery.** Preparing environments, continuous integration, deployment procedures, validation steps, and technical evolution appropriate to each project.",
            "Engagements depend on complexity and available resources. These are capability areas, not unconditional service guarantees."
          ]
        },
        {
          "number": "03",
          "title": "The problems we focus on",
          "paragraphs": [
            "Customer and order management, operational monitoring, business invoicing, multi-location services, commerce workflows, team coordination, booking platforms, education products, and integration with existing systems. These examples describe technical problem categories; they are not presented as publicly verified deployments for named clients."
          ]
        },
        {
          "number": "04",
          "title": "An engineering process with clear checkpoints",
          "paragraphs": [
            "1. **Business understanding:** goals, participants, rules, and constraints. 2. **Design:** architecture, data, interfaces, security requirements, and acceptance criteria. 3. **Implementation:** incremental development of components and integrations. 4. **Validation:** tests, reviews, functional trials, and checks of critical scenarios. 5. **Controlled deployment:** operational preparation and launch only once prerequisites have been met. 6. **Evolution:** maintenance and improvement within agreed commitments."
          ]
        },
        {
          "number": "05",
          "title": "LTEX within the Group's ecosystem",
          "paragraphs": [
            "LTEX is a shared competence contributing to products such as Monarque Connect, THYSLO, and ZAMUREK, each with its own purpose. A product initiative is not automatically an LTEX commercial service; its delivery terms must be defined separately.",
            "LTEX complements Zingatia: **Zingatia develops brand expression and communication; LTEX develops technological foundations.**"
          ]
        },
        {
          "number": "06",
          "title": "An internal capability, clear contractual relationships",
          "paragraphs": [
            "LTEX is neither a subsidiary nor a standalone incorporated business. External projects involving its capabilities are assessed and, if accepted, contracted under the responsibility of **MonarQue Group S.A.S.**",
            "Responsibilities, data handling, ownership of deliverables, and support arrangements should be defined before any solution is promised."
          ]
        },
        {
          "number": "07",
          "title": "Tell us what needs to work better",
          "paragraphs": [
            "Looking to structure an operational process, connect systems, or design a business application? Describe the context, users, and desired outcome. An initial assessment can determine whether technical collaboration is appropriate."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Is LTEX separate from MonarQue Group?",
          "answer": "No. It is an internal technology unit."
        },
        {
          "question": "Does LTEX work for third parties?",
          "answer": "External collaborations may be assessed individually under agreements made by MonarQue Group S.A.S."
        },
        {
          "question": "Are LTEX and Zingatia interchangeable?",
          "answer": "No. Zingatia focuses on branding and communication; LTEX focuses on technology engineering."
        }
      ]
    }
  },
  "monarque-connect": {
    "fr": {
      "hero": "Une entreprise ne devrait pas fonctionner en fragments.",
      "heroTitle": "Monarque Connect — Une vision unifiée de la gestion d'entreprise.",
      "intro": "Clients dans un carnet, devis dans un fichier, commandes dans une messagerie, factures ailleurs et informations réparties entre plusieurs établissements : chaque fragmentation complique le suivi de l'activité. Monarque Connect est un produit logiciel en développement, conçu pour rapprocher les opérations quotidiennes autour d'une organisation commune.",
      "status": "Produit en développement — disponibilité commerciale non annoncée.",
      "sections": [
        {
          "number": "01",
          "title": "Le problème : les outils ne communiquent pas toujours",
          "paragraphs": [
            "Les petites structures comme les entreprises en croissance ont besoin d'une information cohérente : qui est le client, quelle commande a été acceptée, ce qui a été facturé, payé, acheté ou engagé. Lorsque chaque équipe travaille dans un outil indépendant, les rapprochements prennent du temps et les décisions reposent sur une vision incomplète.",
            "Monarque Connect part de ce constat : la valeur d'un logiciel de gestion ne tient pas seulement à ses modules, mais à la continuité des processus et à la confiance que l'on peut accorder à l'information."
          ]
        },
        {
          "number": "02",
          "title": "Une plateforme pensée autour de l'organisation",
          "paragraphs": [
            "Le produit est conçu pour prendre en compte l'organisation, ses établissements et les responsabilités de ses utilisateurs. L'objectif est de proposer un environnement de travail commun, au sein duquel chaque fonction bénéficie d'un périmètre d'accès approprié et d'une trace des opérations importantes.",
            "Cette approche permet de penser la croissance : un commerce unique aujourd'hui, une activité multisite demain, ou plusieurs services opérant sous une même structure, sans perdre de vue les règles de gestion."
          ]
        },
        {
          "number": "03",
          "title": "Les principaux domaines fonctionnels envisagés",
          "paragraphs": [
            "**Organisations, établissements et équipes.** Définition du cadre de l'entreprise, rattachement des sites d'activité, rôles et droits des utilisateurs.",
            "**Relations commerciales.** Référentiel des clients et partenaires, suivi des échanges et structuration des processus commerciaux selon les modules retenus.",
            "**Ventes.** Parcours envisagé du devis à la commande puis à la facture métier, avec rapprochement des informations correspondantes.",
            "**Achats et approvisionnement.** Suivi des fournisseurs, achats et besoins d'approvisionnement selon les règles propres à l'entreprise.",
            "**Articles et disponibilité.** Référentiels de produits et mouvements utiles au suivi des opérations, sans prétendre que toutes les industries disposent d'un module spécialisé dès la première version.",
            "**Encaissements, caisse et dépenses.** Suivi des paiements enregistrés, dépenses et mouvements de caisse dans les périmètres prévus.",
            "**Contrôle et intégrations.** Gestion des autorisations, journalisation des événements importants et interfaces permettant à d'autres produits de dialoguer avec le socle.",
            "Ces domaines représentent la cible fonctionnelle et les chantiers du développement. Leur présence dans l'architecture ne signifie pas qu'une version complète et vérifiée soit déjà ouverte au public."
          ]
        },
        {
          "number": "04",
          "title": "Pour quelles organisations ?",
          "paragraphs": [
            "Commerces, entreprises de services, distributeurs, prestataires B2B, structures organisées en plusieurs établissements et entreprises souhaitant progressivement mieux relier ventes, opérations et informations de pilotage.",
            "Les besoins spécialisés — comptabilité réglementaire, paie, fiscalité automatisée, métier industriel complexe ou facturation spécifique à l'énergie — exigent des développements et validations distincts. Ils ne sont pas présentés comme des fonctions immédiatement disponibles."
          ]
        },
        {
          "number": "05",
          "title": "Une approche modulaire et évolutive",
          "paragraphs": [
            "Monarque Connect est imaginé comme une plateforme évolutive : chaque organisation pourrait disposer des fonctionnalités adaptées à ses processus, avec un déploiement progressif selon les étapes de validation.",
            "Le modèle économique envisagé repose sur des offres graduées, ajustées aux besoins et aux capacités d'utilisation des organisations. Les modalités définitives, tarifs publics, limites et conditions seront présentés au moment de leur validation commerciale."
          ]
        },
        {
          "number": "06",
          "title": "Ce qui se construit aujourd'hui",
          "paragraphs": [
            "Les fondations techniques et plusieurs domaines métier font l'objet de développements et de vérifications. Le produit n'est pas présenté ici comme une plateforme opérationnelle ouverte aux abonnements ou aux paiements commerciaux. L'équipe poursuit les étapes de stabilisation, de sécurité, d'expérience utilisateur et d'exploitation nécessaires avant une éventuelle commercialisation.",
            "**Notre engagement éditorial :** ne pas confondre ambition du produit, code développé, fonctionnalité validée et service effectivement disponible."
          ]
        },
        {
          "number": "07",
          "title": "Participez à la réflexion sur les besoins métier",
          "paragraphs": [
            "Vous gérez plusieurs points de vente, un catalogue de produits, une activité de services ou des processus commerciaux difficiles à suivre ? Votre retour d'expérience peut aider à clarifier les priorités d'une plateforme conçue autour d'usages concrets. Cette prise de contact n'est pas une inscription à un service déjà lancé.",
            "**CTA principal :** « Décrire nos besoins de gestion » → `contact@monarquegrp.com`   **CTA secondaire :** « Comprendre le rôle de LTEX »."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Monarque Connect est-il déjà commercialisé ?",
          "answer": "La plateforme est en développement ; aucune ouverture générale des abonnements n'est annoncée dans cette présentation."
        },
        {
          "question": "Est-ce une application réservée aux grandes entreprises ?",
          "answer": "L'ambition est de couvrir des structures de tailles et de complexités différentes, selon les éditions et périmètres finalement retenus."
        },
        {
          "question": "Le produit inclut-il déjà tous les modules d'un ERP complet ?",
          "answer": "Non. La disponibilité de chaque module dépend de sa validation, de son périmètre et de l'étape de livraison."
        }
      ]
    },
    "en": {
      "hero": "A business should not have to operate in fragments.",
      "heroTitle": "Monarque Connect — A connected approach to business operations.",
      "intro": "Customer details in a notebook, quotes in a spreadsheet, orders in messages, invoices elsewhere, and information scattered across locations: fragmentation makes daily operations harder to understand. Monarque Connect is a software product in development, conceived to bring core workflows into a coherent organizational environment.",
      "status": "Product in development — commercial availability has not been announced.",
      "sections": [
        {
          "number": "01",
          "title": "The problem: disconnected tools",
          "paragraphs": [
            "Small organizations and growing companies both need dependable information: who the customer is, which order was approved, what was invoiced, paid, purchased, or committed. When every team works in a separate tool, reconciling records becomes time-consuming and decision-making is based on incomplete information.",
            "Monarque Connect starts from a simple principle: a business platform creates value not only through its modules but through connected processes and trustworthy records."
          ]
        },
        {
          "number": "02",
          "title": "Designed around the organization",
          "paragraphs": [
            "The product is being designed to account for an organization, its establishments, and the responsibilities of its users. Its goal is a shared operational environment where each role has appropriately scoped access and significant actions can be traced.",
            "The approach is meant to support growth: one store today, multiple locations tomorrow, or several services operating under the same company, without losing sight of management rules."
          ]
        },
        {
          "number": "03",
          "title": "Intended functional areas",
          "paragraphs": [
            "**Organizations, locations, and teams.** Organizational structures, operating sites, user roles, and access controls.",
            "**Business relationships.** Customer and partner records, activity follow-up, and commercial processes within the modules selected for each version.",
            "**Sales operations.** A planned flow linking quotes, confirmed orders, business invoices, and related information.",
            "**Purchasing and supply.** Supplier relationships, purchases, and replenishment needs according to organizational rules.",
            "**Items and availability.** Product records and movements supporting operational visibility, without claiming that every industry has a dedicated module from day one.",
            "**Payments, cash, and expenses.** Records of payments, business expenses, and cash transactions within the applicable functional boundaries.",
            "**Controls and integrations.** Role permissions, records of significant operations, and interfaces through which complementary products can communicate with the core.",
            "These areas describe the intended product and active development work. Their presence in the architecture does not mean a complete, publicly available service has already been validated."
          ]
        },
        {
          "number": "04",
          "title": "Who is it intended for?",
          "paragraphs": [
            "Retailers, service providers, distributors, B2B suppliers, multi-location businesses, and organizations wanting stronger links between commercial workflows, operations, and management information.",
            "Specialized requirements — statutory accounting, payroll, automated tax compliance, complex manufacturing, or utility-specific billing — require separate development and validation. They should not be understood as immediately available features."
          ]
        },
        {
          "number": "05",
          "title": "Modular by design, built to evolve",
          "paragraphs": [
            "Monarque Connect is designed as an evolving platform, with functionality adapted to each organization's needs and introduced progressively as it is validated.",
            "The intended commercial model features graduated plans aligned with organizational needs and usage capacity. Final public pricing, limits, and contractual conditions will be communicated once commercially approved."
          ]
        },
        {
          "number": "06",
          "title": "What is being built now",
          "paragraphs": [
            "Technical foundations and several operational domains are in development and testing. This page does not describe an already launched subscription platform or active commercial payments. Stabilization, security, user experience, and operational readiness remain part of the development process."
          ]
        },
        {
          "number": "07",
          "title": "Help shape relevant business solutions",
          "paragraphs": [
            "Do you operate multiple stores, manage a product catalog, provide services, or struggle to connect everyday business processes? Your experience can help clarify the priorities of a platform built around practical needs. Reaching out is not a subscription to a service that has already launched."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Is Monarque Connect already available commercially?",
          "answer": "It is in development; general subscription availability is not announced here."
        },
        {
          "question": "Is it only intended for large companies?",
          "answer": "Its ambition is to support organizations of different sizes and complexities, depending on the editions and features eventually released."
        },
        {
          "question": "Does it already include every feature of a complete ERP?",
          "answer": "No. Module availability depends on validation, scope, and release stage."
        }
      ]
    }
  },
  "thyslo": {
    "fr": {
      "hero": "Et si apprendre devenait une aventure sans frontières ?",
      "heroTitle": "THYSLO — La curiosité ouvre des mondes.",
      "intro": "Pourquoi le ciel change-t-il de couleur ? Comment une graine devient-elle un arbre ? D'où viennent les pluies, les planètes ou les idées qui transforment notre quotidien ? THYSLO est un projet d'univers d'apprentissage conçu pour donner envie de poser des questions, d'explorer et de comprendre — quel que soit son âge.",
      "status": "Expérience éducative en conception.",
      "sections": [
        {
          "number": "01",
          "title": "Notre conviction : la découverte mérite d'être vivante",
          "paragraphs": [
            "Le savoir se présente souvent en chapitres séparés, parfois difficiles à relier à la réalité. THYSLO imagine une autre porte d'entrée : partir d'une question simple, ouvrir une expérience, puis parcourir plusieurs pistes qui donnent progressivement du sens à ce que l'on observe.",
            "L'objectif n'est pas de remplacer l'école, les enseignants ou les livres. Il est de compléter les formes d'apprentissage existantes par une expérience d'exploration, de narration et d'interaction pensée pour stimuler durablement la curiosité."
          ]
        },
        {
          "number": "02",
          "title": "Un univers à parcourir : la constellation des mondes",
          "paragraphs": [
            "La direction créative de THYSLO associe une **constellation de mondes** à un **écosystème infini**. Les connaissances ne seraient pas organisées comme une simple liste de cours, mais comme des destinations à explorer : nature, espace, corps humain, matières, inventions, sociétés et autres territoires de curiosité.",
            "Chaque monde pourrait proposer des expéditions, des récits, des illustrations et des interactions adaptées au sujet. Une découverte en appellerait une autre : observer la pluie pourrait conduire vers les nuages, le cycle de l'eau, les océans ou le climat.",
            "Cet univers est une direction de produit, et non l'annonce de l'existence actuelle d'un catalogue complet de mondes."
          ]
        },
        {
          "number": "03",
          "title": "Une expérience conçue pour plusieurs générations",
          "paragraphs": [
            "**Enfants.** Découvrir par des expériences guidées, des images et des interactions adaptées à leur compréhension. Les plus jeunes doivent bénéficier de parcours encadrés plutôt que d'un dialogue libre et illimité avec une IA.",
            "**Adolescents.** Approfondir une question, relier des disciplines et expérimenter des raisonnements grâce à des activités progressives.",
            "**Adultes.** Retrouver le plaisir de comprendre des phénomènes, apprendre de nouveaux sujets et explorer des explications accessibles sans renoncer à leur profondeur.",
            "Le langage, le rythme, la difficulté et les interactions sont destinés à varier selon les publics ; les modalités seront précisées à travers les étapes de développement et de test."
          ]
        },
        {
          "number": "04",
          "title": "THYS, le compagnon de découverte",
          "paragraphs": [
            "**THYS** est le nom retenu pour l'assistant imaginé au cœur de THYSLO. Il ne se limite pas, dans la vision du projet, à répondre à des questions. Son rôle est de guider l'exploration : aider à reformuler, proposer une piste, accompagner une expérience et inviter l'utilisateur à chercher par lui-même.",
            "À terme, certaines expériences pourraient utiliser une voix adaptée au public, des échanges conversationnels ou des indications personnalisées. Ces possibilités restent soumises au développement du produit, aux contrôles de qualité et à des protections appropriées, en particulier pour les enfants."
          ]
        },
        {
          "number": "05",
          "title": "Des connaissances à voir, manipuler et comprendre",
          "paragraphs": [
            "**Expéditions thématiques.** Des parcours guidés articulés autour d'une question et de plusieurs étapes de découverte.",
            "**Illustrations animées.** Des représentations visuelles qui permettent de comprendre un mouvement, un cycle ou un mécanisme.",
            "**Simulations interactives.** Des expériences destinées à faire varier un paramètre et à observer ses effets, lorsque le sujet s'y prête.",
            "**Explications adaptées.** Plusieurs profondeurs de lecture d'un même phénomène, selon l'âge, le contexte et la curiosité de l'utilisateur.",
            "**Médias enrichis.** La génération contrôlée d'illustrations, de vidéos ou d'autres contenus explicatifs fait partie des ambitions du projet, et non d'une promesse de disponibilité immédiate."
          ]
        },
        {
          "number": "06",
          "title": "Une construction progressive",
          "paragraphs": [
            "THYSLO est envisagé comme une expérience accessible sur le web et sur mobile. La vision comprend des parcours de découverte, des outils de narration et des capacités interactives dont le périmètre sera déployé progressivement.",
            "Les premières expériences doivent privilégier un nombre limité d'expéditions soigneusement conçues, avant l'élargissement du catalogue, des interactions et des fonctions d'assistance. Aucune date de lancement, couverture thématique exhaustive ou génération illimitée de contenus n'est annoncée ici."
          ]
        },
        {
          "number": "07",
          "title": "Une invitation à cultiver la curiosité",
          "paragraphs": [
            "THYSLO s'adresse aussi aux personnes et organisations qui pensent que la transmission des savoirs peut être à la fois exigeante, accessible et créative. Éducateurs, créatifs, spécialistes de contenus, familles et partenaires potentiels peuvent partager des idées ou des besoins, sans que cela constitue une inscription à un service déjà ouvert.",
            "**CTA principal :** « Échanger autour de THYSLO » → `contact@monarquegrp.com`   **CTA secondaire :** « Découvrir les autres initiatives »."
          ]
        }
      ],
      "faqs": [
        {
          "question": "THYSLO est-il réservé aux enfants ?",
          "answer": "Non. La vision inclut enfants, adolescents et adultes, avec des expériences adaptées."
        },
        {
          "question": "THYS est-il déjà un assistant disponible ?",
          "answer": "THYS est l'assistant défini dans la vision du produit ; ses fonctionnalités doivent être construites et validées progressivement."
        },
        {
          "question": "Peut-on déjà installer THYSLO ?",
          "answer": "Aucune disponibilité publique des versions Android ou PWA n'est annoncée à ce stade."
        }
      ]
    },
    "en": {
      "hero": "What if learning became an adventure without borders?",
      "heroTitle": "THYSLO — Curiosity opens worlds.",
      "intro": "Why does the sky change color? How does a seed become a tree? Where do rainfall, planets, and the inventions shaping our lives come from? THYSLO is a learning-universe project designed to make people want to question, explore, and understand — at any age.",
      "status": "Educational experience in design.",
      "sections": [
        {
          "number": "01",
          "title": "Our belief: discovery should feel alive",
          "paragraphs": [
            "Knowledge is often divided into separate chapters that can be difficult to connect with everyday experience. THYSLO imagines another starting point: begin with a simple question, open an experience, and follow several paths that gradually reveal the meaning of what we observe.",
            "The aim is not to replace schools, teachers, or books. It is to complement existing ways of learning with exploration, storytelling, and interaction intended to encourage lasting curiosity."
          ]
        },
        {
          "number": "02",
          "title": "A universe to explore: a constellation of worlds",
          "paragraphs": [
            "THYSLO's creative direction combines a **constellation of worlds** with an **infinite ecosystem**. Knowledge would be explored as destinations rather than through a conventional list of lessons: nature, space, the human body, materials, inventions, societies, and many other territories of curiosity.",
            "Each world could contain expeditions, stories, illustrations, and interactions tailored to its subject. One discovery could lead to another: exploring rain might open a path toward clouds, the water cycle, oceans, and climate.",
            "This is the intended product universe, not a claim that a complete catalog of worlds exists today."
          ]
        },
        {
          "number": "03",
          "title": "An experience for different generations",
          "paragraphs": [
            "**Children.** Discover through guided adventures, images, and interactions suited to their understanding. Younger learners should use supervised experiences rather than unrestricted AI conversations.",
            "**Teenagers.** Go deeper into questions, connect disciplines, and explore reasoning through progressive activities.",
            "**Adults.** Rediscover the pleasure of understanding phenomena, exploring unfamiliar subjects, and encountering explanations that are accessible without being superficial.",
            "Language, pace, difficulty, and modes of interaction are intended to adapt to different audiences; the exact features will be refined through development and testing."
          ]
        },
        {
          "number": "04",
          "title": "THYS, a companion for discovery",
          "paragraphs": [
            "**THYS** is the chosen name of the assistant envisioned at the heart of THYSLO. The intention is not merely to answer questions, but to guide exploration: helping learners reframe ideas, offering possible directions, accompanying an activity, and encouraging them to investigate for themselves.",
            "Over time, some experiences may include age-appropriate voice, conversational interaction, or personalized hints. These ambitions depend on product development, quality controls, and safeguards, especially where children are involved."
          ]
        },
        {
          "number": "05",
          "title": "Knowledge to see, explore, and understand",
          "paragraphs": [
            "**Themed expeditions.** Guided journeys built around a question and successive steps of discovery.",
            "**Animated illustrations.** Visual explanations of movement, cycles, mechanisms, and change.",
            "**Interactive simulations.** Activities that let learners adjust a parameter and observe an outcome where appropriate.",
            "**Adaptable explanations.** Different layers of depth for the same subject, aligned with age, context, and interest.",
            "**Enriched media.** Controlled generation of illustrations, video, and other explanatory content is part of the long-term vision, not a promise of immediate availability."
          ]
        },
        {
          "number": "06",
          "title": "Built progressively",
          "paragraphs": [
            "THYSLO is envisioned as an experience for the web and mobile devices. The direction includes learning journeys, storytelling tools, and interactive features to be developed progressively.",
            "Initial experiences are expected to focus on a limited set of thoughtfully designed expeditions before the subject catalog, interaction depth, and assistance features grow. No public launch date, exhaustive subject coverage, or unlimited content generation is claimed here."
          ]
        },
        {
          "number": "07",
          "title": "An invitation to nurture curiosity",
          "paragraphs": [
            "THYSLO may also resonate with people and organizations who believe learning can be rigorous, accessible, and creative at the same time. Educators, creators, subject experts, families, and potential collaborators are welcome to share ideas or needs without this being represented as registration for an existing service."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Is THYSLO only for children?",
          "answer": "No. The vision includes children, teenagers, and adults, with age-appropriate experiences."
        },
        {
          "question": "Is THYS already available?",
          "answer": "THYS is part of the product vision; its features are to be developed and validated progressively."
        },
        {
          "question": "Can I install THYSLO today?",
          "answer": "Public availability of the Android or PWA versions has not been announced."
        }
      ]
    }
  },
  "zamurek": {
    "fr": {
      "hero": "Le commerce a plusieurs visages. L'expérience peut être unifiée.",
      "heroTitle": "ZAMUREK — Une nouvelle manière de relier commerces et services.",
      "intro": "Acheter un meuble, commander un repas, découvrir des produits vendus au poids, réserver une prestation ou récupérer une commande : ces expériences répondent à des logiques différentes. ZAMUREK est un projet de plateforme numérique conçu pour réunir des activités commerciales variées dans une expérience cohérente, aussi bien pour les clients que pour les équipes qui les servent.",
      "status": "Projet de commerce multiactivité en développement.",
      "sections": [
        {
          "number": "01",
          "title": "Le constat : tous les commerces ne fonctionnent pas de la même façon",
          "paragraphs": [
            "Une boutique de meubles ne vend pas comme un restaurant. Un produit vendu au gramme n'utilise pas les mêmes règles qu'un article à l'unité. Un salon propose du temps et des prestations plutôt qu'un simple panier de produits. Les plateformes généralistes traitent souvent ces différences comme des exceptions, alors qu'elles constituent la réalité de nombreux espaces commerciaux.",
            "ZAMUREK part d'un principe : réunir plusieurs métiers ne doit pas effacer leur identité ni leur manière de fonctionner. La plateforme doit offrir un parcours simple au client tout en préservant les besoins spécifiques de chaque activité."
          ]
        },
        {
          "number": "02",
          "title": "Un écosystème commercial à plusieurs activités",
          "paragraphs": [
            "**Restauration et commandes.** Découverte de menus, choix de produits et parcours de commande tenant compte des modes de préparation et de remise.",
            "**Commerces et articles physiques.** Présentation de catalogues, variantes et modalités de récupération ou de livraison adaptées aux catégories de produits.",
            "**Vente au poids.** Prise en compte envisagée de produits dont le prix dépend d'une quantité mesurée, par exemple des chocolats ou d'autres marchandises vendues au gramme.",
            "**Prestations et rendez-vous.** Parcours adaptés aux activités de services, comme certains salons et prestations nécessitant une réservation.",
            "**Activités spécialisées.** Possibilité d'étudier d'autres métiers, y compris ceux dont l'exploitation exige des autorisations ou des contrôles spécifiques. Leur présence future ne signifie pas qu'ils sont déjà intégrés ou autorisés.",
            "Ces parcours constituent le périmètre recherché ; leur déploiement et leurs fonctionnalités exactes dépendront de leur réalisation et des partenaires retenus."
          ]
        },
        {
          "number": "03",
          "title": "Une expérience qui relie le numérique et le lieu physique",
          "paragraphs": [
            "ZAMUREK ne se limite pas à mettre des produits sur internet. Le projet envisage une relation continue entre découverte en ligne et activité en point de vente : un client peut consulter une offre, préparer une commande, choisir une livraison ou un retrait selon les services disponibles ; un opérateur peut traiter une vente sur place et la rattacher à une même logique commerciale.",
            "Les fonctions envisagées comprennent des parcours de vente au comptoir (POS), encaissements en espèces lorsque le contexte s'y prête et émission de documents commerciaux adaptés. Les intégrations de paiement électronique ou les obligations de facturation spécifiques seront traitées selon leur disponibilité et leur validation ; elles ne sont pas décrites comme déjà opérationnelles."
          ]
        },
        {
          "number": "04",
          "title": "Deux expériences complémentaires",
          "paragraphs": [
            "**Côté client :** trouver une activité, comprendre son offre, découvrir les produits ou services, préparer un achat ou une réservation, et choisir les modalités disponibles de remise ou de paiement.",
            "**Côté équipe commerciale :** organiser un catalogue, gérer les spécificités de chaque activité, suivre les commandes et coordonnées d'établissement, et raccorder les opérations physiques et numériques à des processus cohérents.",
            "L'objectif est une expérience homogène sans obliger tous les commerces à adopter un fonctionnement identique."
          ]
        },
        {
          "number": "05",
          "title": "Une conception adaptée aux réalités locales",
          "paragraphs": [
            "Le projet tient compte d'environnements où les achats peuvent être réglés selon plusieurs moyens, où les zones de livraison influencent l'expérience et où plusieurs devises peuvent intervenir dans la présentation des prix. L'architecture envisagée prévoit notamment des capacités de configuration monétaire, de retrait et de livraison par zone.",
            "Ces orientations répondent à des besoins identifiés ; les conversions, modalités d'encaissement et intégrations externes devront être validées avant toute annonce de disponibilité."
          ]
        },
        {
          "number": "06",
          "title": "Des opérations cohérentes, d'un canal à l'autre",
          "paragraphs": [
            "Le projet entend proposer une expérience cohérente entre consultation en ligne, commandes, opérations en point de vente et suivi des services. Le parcours de chaque activité doit rester compréhensible, sans imposer des pratiques identiques à tous les commerces.",
            "Les modalités d'intégration aux systèmes métiers restent un sujet de conception et de validation avant tout déploiement."
          ]
        },
        {
          "number": "07",
          "title": "Un projet en construction, ouvert aux usages réels",
          "paragraphs": [
            "ZAMUREK est actuellement structuré autour de scénarios métiers, de parcours utilisateurs et d'une convergence technique à approfondir. Aucun lancement public de marketplace, catalogue de partenaires réels, service de livraison actif ou accord avec une enseigne particulière n'est annoncé.",
            "Les retours de commerces, d'opérateurs de restauration, de prestataires et de gestionnaires d'espaces commerciaux peuvent aider à confronter le produit à la diversité des besoins du terrain.",
            "**CTA principal :** « Échanger sur ZAMUREK » → `contact@monarquegrp.com`   **CTA secondaire :** « Comprendre Monarque Connect »."
          ]
        }
      ],
      "faqs": [
        {
          "question": "ZAMUREK est-il une simple boutique en ligne ?",
          "answer": "Non. Le projet vise une expérience multiactivité incluant des parcours commerciaux et de services différents, en ligne comme sur site."
        },
        {
          "question": "Peut-on déjà acheter ou réserver ?",
          "answer": "Aucune ouverture publique des achats et réservations n'est annoncée."
        },
        {
          "question": "Les paiements mobiles, la livraison et les devises sont-ils déjà intégrés ?",
          "answer": "Ce sont des besoins de conception ; leur disponibilité réelle dépendra des développements et des partenaires de service."
        }
      ]
    },
    "en": {
      "hero": "Commerce takes many forms. The experience can feel connected.",
      "heroTitle": "ZAMUREK — Bringing different businesses and services together.",
      "intro": "Buying furniture, ordering food, exploring goods sold by weight, booking a service, or collecting an order: each follows a different set of rules. ZAMUREK is a digital commerce project designed to connect varied commercial activities through a consistent experience for customers and the teams serving them.",
      "status": "Multi-activity commerce project in development.",
      "sections": [
        {
          "number": "01",
          "title": "The challenge: not every business operates the same way",
          "paragraphs": [
            "A furniture store works differently from a restaurant. Goods sold by weight are not priced like individual items. A salon sells time and services, not simply products in a shopping cart. General-purpose platforms often treat these differences as exceptions, even though they are central to the daily reality of multi-activity commercial environments.",
            "ZAMUREK begins with one principle: bringing businesses together should not erase their identity or operational needs. The customer experience should be simple while each activity retains the workflows it requires."
          ]
        },
        {
          "number": "02",
          "title": "A platform for different types of activity",
          "paragraphs": [
            "**Food and ordering.** Menu discovery, product choices, and ordering flows that account for preparation and fulfillment.",
            "**Retail and physical products.** Catalogs, variants, collection, and delivery options suited to different product categories.",
            "**Products sold by weight.** Intended support for quantities measured by weight, such as chocolates and other goods priced per gram.",
            "**Appointments and services.** Journeys designed for service providers, including certain salon activities and bookings.",
            "**Specialized businesses.** The ability to study additional sectors, including those that require specific authorization or oversight. Future compatibility is not a claim of current integration or authorization.",
            "These are intended experiences; their actual delivery and feature boundaries will depend on development and approved partners."
          ]
        },
        {
          "number": "03",
          "title": "Connecting digital discovery with physical commerce",
          "paragraphs": [
            "ZAMUREK is not intended to be a product catalog on the internet alone. It explores continuity between browsing online and serving customers in physical locations: customers may view an offer, prepare orders, and choose available delivery or pickup options; operators may record in-person sales within a shared commercial process.",
            "Planned scenarios include counter sales (POS), cash payments where relevant, and appropriate business documents. Electronic payment integrations and specialized invoicing obligations depend on implementation and validation; they are not presented as currently operating."
          ]
        },
        {
          "number": "04",
          "title": "Two complementary experiences",
          "paragraphs": [
            "**For customers:** find an activity, understand its offer, browse goods and services, prepare a purchase or booking, and choose available fulfillment or payment methods.",
            "**For business teams:** organize catalogs, handle sector-specific rules, follow orders and operating locations, and connect physical and digital workflows coherently.",
            "The ambition is consistency without forcing every business into the same operating model."
          ]
        },
        {
          "number": "05",
          "title": "Designed with local operating realities in mind",
          "paragraphs": [
            "The project considers environments where several payment methods are common, delivery zones affect customer expectations, and more than one currency may be used in price presentation. Its intended design includes configurable monetary settings, pickup, and zone-based delivery.",
            "These are product directions informed by identified needs. Conversions, collection methods, and external integrations must be validated before any availability claims are made."
          ]
        },
        {
          "number": "06",
          "title": "Connected experiences across channels",
          "paragraphs": [
            "The project aims to create a consistent experience across online browsing, ordering, physical points of sale, and service follow-up. Each business journey should remain intuitive without forcing every shop to operate in the same way.",
            "Integration with business systems remains subject to further design and validation before deployment."
          ]
        },
        {
          "number": "07",
          "title": "A project shaped by real businesses",
          "paragraphs": [
            "ZAMUREK is currently being defined through operating scenarios, customer journeys, and deeper technical alignment. No public marketplace launch, live merchant catalog, operating delivery service, or agreement with a named retail partner is announced here.",
            "Feedback from retailers, food operators, service businesses, and commercial-space managers can help test the concept against actual needs."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Is ZAMUREK just an online shop?",
          "answer": "No. It aims to support different retail and service journeys across digital and physical environments."
        },
        {
          "question": "Can people already purchase or book services?",
          "answer": "No public opening of purchases or bookings is announced."
        },
        {
          "question": "Are mobile payments, delivery, and currencies already integrated?",
          "answer": "They are identified design needs; actual availability depends on implementation and service partnerships."
        }
      ]
    }
  },
  "aura": {
    "fr": {
      "hero": "Produire localement commence par maîtriser ce que l'on fabrique.",
      "heroTitle": "Aura — Une ambition industrielle pour l'hygiène et l'entretien.",
      "intro": "Les produits du quotidien racontent aussi une histoire de production : approvisionnement, transformation, formulation, contrôle et distribution. Aura est le projet de MonarQue Group destiné à étudier la mise en place d'une activité de savonnerie et, progressivement, d'autres produits d'hygiène et d'entretien, à partir d'une base industrielle réellement maîtrisée.",
      "status": "Projet industriel en structuration — production non démarrée.",
      "sections": [
        {
          "number": "01",
          "title": "Le point de départ : construire une capacité de fabrication",
          "paragraphs": [
            "Produire ne consiste pas seulement à apposer une étiquette sur un article obtenu ailleurs. Notre orientation est d'étudier la création d'une capacité de transformation qui puisse maîtriser les matières premières, les procédés, les formulations et la qualité des produits, à un niveau proportionné au marché et aux moyens mobilisables.",
            "Cette ambition prend place dans un environnement où l'accès fiable aux produits de consommation courante et les possibilités de transformation locale constituent des questions économiques concrètes. Elle ne dispense pas d'une étude sérieuse de la demande, des coûts et de l'organisation industrielle."
          ]
        },
        {
          "number": "02",
          "title": "La voie technique envisagée : la saponification directe",
          "paragraphs": [
            "Aura retient comme orientation industrielle **la saponification directe**, plutôt qu'une dépendance structurelle à l'achat de bases de savon déjà fabriquées. Cette décision vise à construire la maîtrise du processus de production lui-même.",
            "La faisabilité technique doit déterminer les intrants disponibles, les équipements nécessaires, les formulations adaptées, les contrôles de sécurité et les procédures de qualité. La priorité envisagée pour les matières premières locales sera appréciée selon leur disponibilité effective, leur qualité et la viabilité économique.",
            "Aucune recette industrielle, certification, qualité mesurée ou conformité produit n'est revendiquée avant études et essais documentés."
          ]
        },
        {
          "number": "03",
          "title": "Familles de produits étudiées",
          "paragraphs": [
            "**Savons solides de ménage.** Produits destinés aux usages courants d'entretien, sous réserve d'une définition précise des caractéristiques recherchées.",
            "**Savons de toilette.** Gammes potentielles pensées pour l'hygiène quotidienne, nécessitant des exigences de formulation et de contrôle appropriées.",
            "**Savons liquides.** Déclinaisons envisagées pour différents usages d'hygiène ou de nettoyage.",
            "**Entretien et hygiène.** À plus long terme, d'autres familles de produits de consommation courante pourraient être examinées, chacune sous réserve d'études, d'autorisations et d'une capacité industrielle validée.",
            "Cette liste décrit des orientations de portefeuille. Elle ne constitue pas un catalogue de références fabriquées ou disponibles à la vente."
          ]
        },
        {
          "number": "04",
          "title": "Un marché à comprendre avant de produire",
          "paragraphs": [
            "Le projet prend pour point de départ **Kolwezi et le Lualaba**, avec un intérêt particulier pour les besoins récurrents des ménages et des professionnels. Les circuits de grossistes et de distribution constituent une piste de structuration commerciale, sans exclure d'autres canaux si la demande le justifie.",
            "Les décisions d'investissement doivent être reliées à une évaluation concrète du marché : usages prioritaires, formats préférés, niveaux de prix soutenables, régularité des commandes, concurrence et conditions d'approvisionnement."
          ]
        },
        {
          "number": "05",
          "title": "Construire une activité industrielle exige plusieurs fondations",
          "paragraphs": [
            "**Étudier le marché.** Définir les familles de produits et les débouchés sur des données concrètes.",
            "**Valider la technique.** Examiner les matières premières, les procédés, les équipements et le savoir-faire requis.",
            "**Concevoir la qualité et la sécurité.** Préparer les contrôles de formulation, d'hygiène, de manipulation et de traçabilité adaptés aux produits concernés.",
            "**Évaluer l'économie.** Estimer investissements, coûts d'exploitation, distribution et besoins de trésorerie avant engagement.",
            "**Structurer les compétences.** Définir les responsabilités techniques, la formation et les procédures de travail.",
            "**Déployer uniquement lorsque les conditions sont réunies.** Équipements, équipes, autorisations et moyens financiers devront précéder toute annonce d'exploitation."
          ]
        },
        {
          "number": "06",
          "title": "Une industrialisation progressive",
          "paragraphs": [
            "Aura est un projet en étude. À ce jour, le mini-site ne revendique ni usine active, ni volumes de production, ni gammes certifiées, ni contrats d'approvisionnement conclus. L'étape pertinente consiste à documenter la faisabilité, définir les conditions de financement et organiser les partenariats techniques ou commerciaux appropriés.",
            "L'orientation vers une fabrication locale ne sera crédible qu'à travers des capacités effectivement démontrées, et non à travers des annonces prématurées."
          ]
        },
        {
          "number": "07",
          "title": "Parlons de la capacité industrielle à construire",
          "paragraphs": [
            "Vous disposez de compétences en formulation, ingénierie des procédés, équipements de savonnerie, approvisionnement ou distribution ? Vous souhaitez explorer une collaboration industrielle sérieuse autour d'un projet documenté ? MonarQue Group peut étudier les échanges pertinents, sous réserve de leur faisabilité et d'un cadre adapté.",
            "**CTA principal :** « Proposer une collaboration industrielle » → `contact@monarquegrp.com`   **CTA secondaire :** « Découvrir les domaines du Groupe »."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Aura fabrique-t-elle déjà des savons ?",
          "answer": "Non. Aura est un projet industriel en structuration ; aucune production en exploitation n'est annoncée."
        },
        {
          "question": "Quel procédé est envisagé ?",
          "answer": "La saponification directe est l'orientation retenue, sous réserve des études techniques, de formulation et de sécurité."
        },
        {
          "question": "Le projet vise-t-il uniquement les entreprises minières ?",
          "answer": "Non. L'orientation principale concerne les besoins de consommation courante et les circuits de distribution, notamment à Kolwezi et dans le Lualaba."
        }
      ]
    },
    "en": {
      "hero": "Local manufacturing begins with mastering what you make.",
      "heroTitle": "Aura — An industrial ambition for hygiene and everyday care.",
      "intro": "Everyday essentials are also the result of production choices: sourcing, processing, formulation, quality control, and distribution. Aura is MonarQue Group's industrial initiative exploring the establishment of soap manufacturing and, progressively, other hygiene and cleaning products, built on genuine process capability.",
      "status": "Industrial project in preparation — no production has started.",
      "sections": [
        {
          "number": "01",
          "title": "The starting point: developing manufacturing capability",
          "paragraphs": [
            "Manufacturing is more than applying a label to a product made elsewhere. The project aims to study a processing capability that could control raw materials, production methods, formulations, and product quality at a scale justified by the market and available resources.",
            "This ambition responds to real economic questions surrounding dependable access to everyday goods and opportunities for local transformation. It does not remove the need for rigorous demand, cost, and operational feasibility studies."
          ]
        },
        {
          "number": "02",
          "title": "The intended technical approach: direct saponification",
          "paragraphs": [
            "Aura has chosen **direct saponification** as its industrial direction rather than relying structurally on already manufactured soap bases. The objective is to explore control over the manufacturing process itself.",
            "Technical studies must assess raw-material availability, required equipment, suitable formulations, safety controls, and quality procedures. Locally sourced inputs are a priority to examine, subject to their actual availability, quality, and economic viability.",
            "No industrial recipe, product certification, measured quality claim, or regulatory approval is asserted before documented studies and trials."
          ]
        },
        {
          "number": "03",
          "title": "Product families under consideration",
          "paragraphs": [
            "**Solid laundry and household soaps.** Products intended for everyday cleaning, subject to defining the desired characteristics and use cases.",
            "**Toilet soaps.** Potential ranges for daily personal hygiene, requiring appropriate formulation and quality controls.",
            "**Liquid soaps.** Planned possibilities for selected hygiene or cleaning uses.",
            "**Hygiene and household care.** Other everyday product families may be considered over time, each requiring studies, appropriate authorization, and demonstrated manufacturing capability.",
            "This is a proposed portfolio direction, not a catalog of manufactured or commercially available products."
          ]
        },
        {
          "number": "04",
          "title": "Understand demand before scaling production",
          "paragraphs": [
            "The project takes **Kolwezi and Lualaba** as its initial geographic focus, with particular interest in recurring household and professional needs. Wholesale and distribution channels are a potential route to market, alongside other channels where demand supports them.",
            "Investment decisions should be informed by practical market assessment: priority uses, preferred formats, sustainable price points, repeat-order patterns, competition, and sourcing requirements."
          ]
        },
        {
          "number": "05",
          "title": "Industrial development requires solid foundations",
          "paragraphs": [
            "**Study the market.** Define product families and outlets through real demand evidence.",
            "**Validate technical feasibility.** Assess raw materials, processes, equipment, and necessary expertise.",
            "**Design quality and safety.** Develop appropriate controls for formulation, hygiene, handling, and traceability.",
            "**Test the economics.** Estimate investment, operating costs, distribution, and working-capital needs before committing.",
            "**Build the right capabilities.** Define technical responsibilities, training, and operating procedures.",
            "**Launch only when conditions are met.** Equipment, people, authorizations, and financing must precede any claim of operating production."
          ]
        },
        {
          "number": "06",
          "title": "A progressive industrial initiative",
          "paragraphs": [
            "Aura remains under study. This mini-site makes no claim of an operating plant, production capacity, certified product ranges, or signed supply contracts. The next meaningful steps are to document feasibility, establish financing requirements, and structure suitable technical or commercial collaborations.",
            "Local manufacturing ambitions become credible through demonstrated capabilities, not premature announcements."
          ]
        },
        {
          "number": "07",
          "title": "Let's explore the capability to be built",
          "paragraphs": [
            "Do you have expertise in formulations, process engineering, soapmaking equipment, sourcing, or distribution? Would you like to explore a serious industrial collaboration around a documented project? MonarQue Group can assess relevant discussions, subject to feasibility and an appropriate framework."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Is Aura already manufacturing soap?",
          "answer": "No. Aura is an industrial project in preparation; operating production has not been announced."
        },
        {
          "question": "Which production process is intended?",
          "answer": "Direct saponification is the selected direction, subject to technical, formulation, and safety studies."
        },
        {
          "question": "Is the project aimed only at mining companies?",
          "answer": "No. The main direction includes everyday consumer needs and distribution channels, initially in Kolwezi and Lualaba."
        }
      ]
    }
  }
};
