import type { Locale } from "@/components/language-provider";

export const COMPANY_INFO = {
  name: "BEST AGRICULTURE",
  taglineFr: "Entreprise Agricole — Productions, Conseils & Intrants",
  taglineEn: "Agricultural Enterprise — Production, Advisory & Inputs",
  phoneDisplay: "+237 650 66 53 83",
  phoneRaw: "+237650665383",
  whatsappNumber: "237650665383",
  email: "bestagriculture6@gmail.com",
  hqAddressFr: "Dschang Foreke, Département de la Menoua, Région de l'Ouest, Cameroun",
  hqAddressEn: "Dschang Foreke, Menoua Division, West Region, Cameroon",
  farmSiteFr: "Site de production agro-pastorale : Kassalafam, Santchou (Menoua)",
  farmSiteEn: "Agro-pastoral production site: Kassalafam, Santchou (Menoua)",
  taxId: "P112418805725S",
  rccm: "CM-BFX-01-2026-A10-003 314",
  foundedYear: "2024",
  promoter: "Mme Mbougue épouse Zeukeng Odette",
};

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ServiceItem = {
  id: string;
  slug: string;
  icon: "sprout" | "compass" | "users" | "shield" | "tractor" | "trees";
  image: string;
  title: Record<Locale, string>;
  shortDesc: Record<Locale, string>;
  fullDesc: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "productions",
    slug: "productions-agricoles",
    icon: "sprout",
    image: "/images/horticulture-harvest.jpg",
    title: {
      fr: "Productions Agricoles & Maraîchères",
      en: "Crop & Market-Garden Production",
    },
    shortDesc: {
      fr: "Cultures vivrières et maraîchères de haute qualité issues des terres volcaniques de la Menoua.",
      en: "High-quality food and market-garden crops grown on the fertile volcanic soils of Menoua.",
    },
    fullDesc: {
      fr: "Exploitation structurée de cultures maraîchères, vivrières et de rente adaptées aux hauts plateaux de Dschang et aux plaines fertiles de Santchou, avec une traçabilité rigoureuse de la semence à la récolte.",
      en: "Structured farming of market-garden, food, and cash crops adapted to the highlands of Dschang and the fertile plains of Santchou, with strict traceability from seed to harvest.",
    },
    highlights: {
      fr: [
        "Tomates, choux, poivrons, pommes de terre et maïs amélioré",
        "Itinéraires techniques respectueux de la fertilité des sols",
        "Approvisionnement régulier des marchés locaux et régionaux",
      ],
      en: [
        "Tomatoes, cabbages, bell peppers, highland potatoes, and improved maize",
        "Technical farming schedules preserving long-term soil fertility",
        "Reliable supply for local and regional West Cameroon markets",
      ],
    },
  },
  {
    id: "conseils",
    slug: "conseils-agronomiques",
    icon: "compass",
    image: "/images/agronomy-advisory.jpg",
    title: {
      fr: "Conseils Agronomiques & Diagnostics",
      en: "Agronomic Advisory & Field Diagnostics",
    },
    shortDesc: {
      fr: "Expertise technique sur le choix variétal, la fertilisation raisonnée et la protection des cultures.",
      en: "Technical expertise on variety selection, balanced fertilization, and integrated crop protection.",
    },
    fullDesc: {
      fr: "Nos techniciens conseillent les exploitants à chaque étape décisive : analyse des besoins culturaux, choix des semences adaptées au microclimat, plans de fumure et lutte raisonnée contre les ravageurs.",
      en: "Our agronomists advise growers at every critical stage: crop needs analysis, climate-adapted seed selection, fertilization plans, and integrated pest management.",
    },
    highlights: {
      fr: [
        "Diagnostic phytosanitaire rapide directement sur parcelle",
        "Calendriers de traitement et dosages sécurisés",
        "Optimisation des rendements et réduction des pertes post-récolte",
      ],
      en: [
        "Fast on-field phytosanitary diagnostics",
        "Safe treatment calendars and precise dosage guidance",
        "Yield optimization and post-harvest loss reduction",
      ],
    },
  },
  {
    id: "accompagnement",
    slug: "accompagnement-suivi-producteurs",
    icon: "users",
    image: "/images/seedlings-nursery.jpg",
    title: {
      fr: "Accompagnement & Suivi des Producteurs",
      en: "Farmer Coaching & Field Monitoring",
    },
    shortDesc: {
      fr: "Un suivi de proximité de la pépinière jusqu'à la commercialisation pour sécuriser chaque campagne.",
      en: "Hands-on support from nursery establishment to harvest to secure every growing season.",
    },
    fullDesc: {
      fr: "Parce qu'une bonne récolte se prépare sur le terrain, nous accompagnons individuellement les producteurs, GIC et coopératives agricoles tout au long du cycle cultural avec des visites régulières.",
      en: "Because great harvests are built in the field, we coach individual farmers, farmer groups (CIGs), and cooperatives throughout the crop cycle with scheduled field visits.",
    },
    highlights: {
      fr: [
        "Visites périodiques de suivi et encadrement pratique",
        "Appui au montage et à la rentabilité des exploitations",
        "Formation aux bonnes pratiques agricoles et d'application",
      ],
      en: [
        "Scheduled field monitoring visits and practical coaching",
        "Support for farm setup and profitability planning",
        "Training in Good Agricultural Practices (GAP) and safe spraying",
      ],
    },
  },
  {
    id: "phytosanitaires",
    slug: "produits-phytosanitaires-intrants",
    icon: "shield",
    image: "/images/phytosanitary-inputs.jpg",
    title: {
      fr: "Produits Phytosanitaires & Intrants",
      en: "Phytosanitary Products & Farm Inputs",
    },
    shortDesc: {
      fr: "Distribution de produits homologués, engrais, semences certifiées et équipements à Dschang Foreke.",
      en: "Distribution of approved crop protection products, fertilizers, certified seeds, and tools in Dschang Foreke.",
    },
    fullDesc: {
      fr: "Notre point de vente à Dschang Foreke propose une gamme rigoureusement sélectionnée de fongicides, insecticides, herbicides, engrais foliaires et de fond, semences à haut rendement et pulvérisateurs.",
      en: "Our Dschang Foreke supply center stocks a carefully vetted selection of fungicides, insecticides, herbicides, granular and foliar fertilizers, high-yield seeds, and sprayers.",
    },
    highlights: {
      fr: [
        "Produits phytosanitaires homologués et traçables",
        "Conseil d'utilisation systématique à chaque achat",
        "Disponibilité immédiate au comptoir de Dschang Foreke",
      ],
      en: [
        "Approved, traceable crop protection products",
        "Systematic usage and dosage advice with every purchase",
        "Immediate availability at our Dschang Foreke counter",
      ],
    },
  },
  {
    id: "agropastoral",
    slug: "entreprises-agro-pastorales",
    icon: "tractor",
    image: "/images/agropastoral-santchou.jpg",
    title: {
      fr: "Activités Agro-Pastorales Intégrées",
      en: "Integrated Agro-Pastoral Operations",
    },
    shortDesc: {
      fr: "Synergie entre agriculture durable et élevage sur notre bassin de production de Santchou.",
      en: "Synergy between sustainable crop farming and livestock across our Santchou production basin.",
    },
    fullDesc: {
      fr: "Sur le site de Kassalafam (Santchou) et dans la Menoua, Best Agriculture développe des systèmes agro-pastoraux complémentaires valorisant la matière organique et la diversification des revenus ruraux.",
      en: "At our Kassalafam (Santchou) site and across Menoua, Best Agriculture develops complementary agro-pastoral systems that recycle organic matter and diversify rural farm income.",
    },
    highlights: {
      fr: [
        "Valorisation des fumures organiques pour régénérer les parcelles",
        "Cultures pérennes (plantain, cacao) et élevage associé",
        "Modèle résilient face aux variations climatiques",
      ],
      en: [
        "Organic manure valorization to regenerate cultivated plots",
        "Perennial crops (plantain, cocoa) integrated with livestock",
        "Climate-resilient farming model",
      ],
    },
  },
  {
    id: "horticulture-sylviculture",
    slug: "horticulture-sylviculture",
    icon: "trees",
    image: "/images/seedlings-nursery.jpg",
    title: {
      fr: "Horticulture & Sylviculture",
      en: "Horticulture & Silviculture",
    },
    shortDesc: {
      fr: "Production de plants vigoureux, pépinières horticoles, arbres fruitiers et essences de reboisement.",
      en: "Vigorous seedlings, horticultural nurseries, fruit trees, and agroforestry species.",
    },
    fullDesc: {
      fr: "Nous accompagnons les projets horticoles, vergers fruitiers et initiatives agroforestières grâce à des plants sains, vigoureux et acclimatés aux reliefs de l'Ouest Cameroun.",
      en: "We support horticultural projects, fruit orchards, and agroforestry initiatives with healthy, vigorous seedlings acclimatized to the landscapes of West Cameroon.",
    },
    highlights: {
      fr: [
        "Pépinières maraîchères et plants fruitiers greffés",
        "Essences agroforestières pour brise-vent et ombrage",
        "Conseils de plantation et d'entretien durable",
      ],
      en: [
        "Vegetable nurseries and grafted fruit tree saplings",
        "Agroforestry species for windbreaks and shade",
        "Planting layout and sustainable maintenance guidance",
      ],
    },
  },
];

export type ProductCategory = "all" | "phytosanitaires" | "engrais" | "semences" | "materiel";

export type ProductItem = {
  id: string;
  category: Exclude<ProductCategory, "all">;
  name: Record<Locale, string>;
  badge: Record<Locale, string>;
  packaging: Record<Locale, string>;
  usage: Record<Locale, string>;
  targetCrops: Record<Locale, string>;
  inStock: boolean;
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "fongicide-mildiou",
    category: "phytosanitaires",
    name: {
      fr: "Fongicide Systémique & Contact (Anti-Mildiou)",
      en: "Systemic & Contact Fungicide (Blight Control)",
    },
    badge: { fr: "Homologué", en: "Approved" },
    packaging: { fr: "Sachets 50g / 1kg", en: "50g / 1kg Packs" },
    usage: {
      fr: "Protection préventive et curative contre le mildiou, l'alternariose et les maladies foliaires en saison des pluies.",
      en: "Preventive and curative protection against late blight, early blight, and foliar diseases during rainy seasons.",
    },
    targetCrops: { fr: "Tomate, Pomme de terre, Choux, Cacao", en: "Tomato, Potato, Cabbage, Cocoa" },
    inStock: true,
  },
  {
    id: "insecticide-spectre",
    category: "phytosanitaires",
    name: {
      fr: "Insecticide Polyvalent à Large Spectre",
      en: "Broad-Spectrum Crop Insecticide",
    },
    badge: { fr: "Protection Rapide", en: "Fast Action" },
    packaging: { fr: "Flacons 250ml / 1L", en: "250ml / 1L Bottles" },
    usage: {
      fr: "Lutte efficace contre les chenilles légionnaires, pucerons, mouches blanches et foreurs de tiges.",
      en: "Effective control against armyworms, aphids, whiteflies, and stem borers.",
    },
    targetCrops: { fr: "Maïs, Maraîchers, Poivron, Haricot", en: "Maize, Vegetables, Pepper, Beans" },
    inStock: true,
  },
  {
    id: "herbicide-selectif",
    category: "phytosanitaires",
    name: {
      fr: "Herbicide Pré- & Post-Levée",
      en: "Pre- & Post-Emergence Herbicide",
    },
    badge: { fr: "Désherbage Maîtrisé", en: "Weed Control" },
    packaging: { fr: "Bidons 1L / 5L", en: "1L / 5L Cans" },
    usage: {
      fr: "Maîtrise durable des adventices annuelles et vivaces tout en préservant la vigueur de la culture.",
      en: "Reliable control of annual and perennial weeds while preserving crop vigor.",
    },
    targetCrops: { fr: "Maïs, Plantain, Préparation de parcelles", en: "Maize, Plantain, Plot Preparation" },
    inStock: true,
  },
  {
    id: "bio-stimulant-cuivre",
    category: "phytosanitaires",
    name: {
      fr: "Fongicide Cuprique & Biostimulant Foliaire",
      en: "Copper Fungicide & Foliar Biostimulant",
    },
    badge: { fr: "Santé Végétale", en: "Plant Health" },
    packaging: { fr: "Sachets 500g / 1kg", en: "500g / 1kg Packs" },
    usage: {
      fr: "Renforce les défenses naturelles des plants et protège contre les bactérioses et pourritures.",
      en: "Strengthens natural plant defenses and protects against bacterial blights and rots.",
    },
    targetCrops: { fr: "Cacao, Café, Tomate, Agrumes", en: "Cocoa, Coffee, Tomato, Citrus" },
    inStock: true,
  },
  {
    id: "npk-20-10-10",
    category: "engrais",
    name: {
      fr: "Engrais Minéral NPK 20-10-10 & 14-24-14",
      en: "Mineral Fertilizer NPK 20-10-10 & 14-24-14",
    },
    badge: { fr: "Fumure de Fond", en: "Base Fertilizer" },
    packaging: { fr: "Sacs 50kg / Détail", en: "50kg Bags / Retail" },
    usage: {
      fr: "Formules équilibrées pour stimuler l'enracinement, la croissance végétative et la floraison.",
      en: "Balanced formulas to stimulate root development, vegetative growth, and flowering.",
    },
    targetCrops: { fr: "Maïs, Pomme de terre, Choux, Plantain", en: "Maize, Potato, Cabbage, Plantain" },
    inStock: true,
  },
  {
    id: "engrais-foliaire-oligo",
    category: "engrais",
    name: {
      fr: "Engrais Foliaire Riche en Oligo-Éléments",
      en: "Micronutrient-Rich Foliar Fertilizer",
    },
    badge: { fr: "Coup de Fouet", en: "Growth Boost" },
    packaging: { fr: "Flacons 500ml / 1L", en: "500ml / 1L Bottles" },
    usage: {
      fr: "Corrige rapidement les carences en bore, calcium et magnésium et améliore le calibre des fruits.",
      en: "Rapidly corrects boron, calcium, and magnesium deficiencies and improves fruit size.",
    },
    targetCrops: { fr: "Tomate, Poivron, Pastèque, Haricot vert", en: "Tomato, Pepper, Watermelon, Green Beans" },
    inStock: true,
  },
  {
    id: "amendement-organique",
    category: "engrais",
    name: {
      fr: "Amendement Organique & Acides Humiques",
      en: "Organic Soil Amendment & Humic Acids",
    },
    badge: { fr: "Sol Vivant", en: "Living Soil" },
    packaging: { fr: "Sacs 25kg / Bidons 1L", en: "25kg Bags / 1L Cans" },
    usage: {
      fr: "Améliore la structure du sol, la rétention d'eau et l'activité microbienne des parcelles intensives.",
      en: "Improves soil structure, moisture retention, and microbial life on intensive plots.",
    },
    targetCrops: { fr: "Toutes cultures maraîchères et pérennes", en: "All market-garden & perennial crops" },
    inStock: true,
  },
  {
    id: "semences-tomate-f1",
    category: "semences",
    name: {
      fr: "Semences Hybrides F1 Maraîchères (Tomate, Chou, Poivron)",
      en: "F1 Hybrid Vegetable Seeds (Tomato, Cabbage, Pepper)",
    },
    badge: { fr: "Haut Rendement", en: "High Yield" },
    packaging: { fr: "Boîtes 5g / 10g / 50g", en: "5g / 10g / 50g Tins" },
    usage: {
      fr: "Variétés sélectionnées pour leur tolérance aux maladies, leur fermeté et leur excellente conservation.",
      en: "Selected varieties for disease tolerance, fruit firmness, and strong shelf life.",
    },
    targetCrops: { fr: "Hauts plateaux de l'Ouest & zones humides", en: "West Highlands & humid lowlands" },
    inStock: true,
  },
  {
    id: "semences-mais-ameliore",
    category: "semences",
    name: {
      fr: "Semences Certifiées de Maïs & Haricot Amélioré",
      en: "Certified Improved Maize & Bean Seeds",
    },
    badge: { fr: "Germination >92%", en: ">92% Germination" },
    packaging: { fr: "Sacs 2kg / 5kg / 10kg", en: "2kg / 5kg / 10kg Bags" },
    usage: {
      fr: "Cycle adapté aux saisons de la Menoua, épis homogènes et forte résistance à la verse.",
      en: "Cycle adapted to Menoua seasons, uniform ears, and strong lodging resistance.",
    },
    targetCrops: { fr: "Exploitations vivrières & semi-industrielles", en: "Smallholder & commercial farms" },
    inStock: true,
  },
  {
    id: "plants-pepiniere",
    category: "semences",
    name: {
      fr: "Plants de Pépinière (Fruitiers & Essences Sylvicoles)",
      en: "Nursery Saplings (Fruit & Forestry Species)",
    },
    badge: { fr: "Sur Commande", en: "Made to Order" },
    packaging: { fr: "Sachets pépinière prêts à planter", en: "Ready-to-plant nursery bags" },
    usage: {
      fr: "Avocatiers greffés, agrumes, cacaoyers améliorés et plants de reboisement issus de nos pépinières.",
      en: "Grafted avocados, citrus, improved cocoa, and reforestation saplings from our nurseries.",
    },
    targetCrops: { fr: "Vergers, agroforesterie, haies vives", en: "Orchards, agroforestry, windbreaks" },
    inStock: true,
  },
  {
    id: "pulverisateur-dos",
    category: "materiel",
    name: {
      fr: "Pulvérisateurs à Dos 16L (Manuel & Pression Entretenue)",
      en: "16L Knapsack Sprayers (Manual & Pressure-Regulated)",
    },
    badge: { fr: "Robuste", en: "Heavy Duty" },
    packaging: { fr: "Unité + buses de rechange", en: "Unit + spare nozzles" },
    usage: {
      fr: "Application homogène et économique des traitements phytosanitaires et engrais foliaires.",
      en: "Even, economical application of crop protection treatments and foliar feeds.",
    },
    targetCrops: { fr: "Toutes exploitations agricoles", en: "All farm operations" },
    inStock: true,
  },
  {
    id: "epi-protection",
    category: "materiel",
    name: {
      fr: "Équipements de Protection Individuelle (EPI) & Petit Outillage",
      en: "Personal Protective Equipment (PPE) & Field Tools",
    },
    badge: { fr: "Sécurité Terrain", en: "Field Safety" },
    packaging: { fr: "Kits complets ou à l'unité", en: "Full kits or individual items" },
    usage: {
      fr: "Masques filtrants, gants nitrile, lunettes, bottes, sécateurs et bâches de pépinière.",
      en: "Respirator masks, nitrile gloves, goggles, boots, pruning shears, and nursery tarps.",
    },
    targetCrops: { fr: "Applicateurs et équipes terrain", en: "Sprayers and field teams" },
    inStock: true,
  },
];

export const SITE_COPY = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    services: { fr: "Services", en: "Services" },
    products: { fr: "Produits & Intrants", en: "Products & Inputs" },
    about: { fr: "À Propos", en: "About" },
    contact: { fr: "Contact", en: "Contact" },
    cta: { fr: "Demander un conseil", en: "Request Advice" },
  },
  hero: {
    badge: {
      fr: "Entreprise Agricole Agréée • Dschang & Santchou (Menoua)",
      en: "Registered Agricultural Enterprise • Dschang & Santchou (Menoua)",
    },
    titleLine1: {
      fr: "Cultiver l'excellence,",
      en: "Cultivating excellence,",
    },
    titleLine2: {
      fr: "sécuriser chaque récolte.",
      en: "securing every harvest.",
    },
    subtitle: {
      fr: "Productions agricoles, conseils agronomiques, accompagnement des producteurs et vente de produits phytosanitaires & intrants certifiés au cœur de l'Ouest Cameroun.",
      en: "Agricultural production, agronomic advisory, farmer coaching, and certified phytosanitary & farm inputs distribution in the heart of West Cameroon.",
    },
    primaryCta: {
      fr: "Découvrir nos intrants",
      en: "Explore Farm Inputs",
    },
    secondaryCta: {
      fr: "Parler à un agronome",
      en: "Speak with an Agronomist",
    },
    floatingCardTitle: {
      fr: "Comptoir Dschang Foreke",
      en: "Dschang Foreke Counter",
    },
    floatingCardSub: {
      fr: "Produits homologués + conseil terrain",
      en: "Approved inputs + field advisory",
    },
  },
  trustMarquee: {
    fr: [
      "Productions Agricoles",
      "Conseils Agronomiques",
      "Suivi des Producteurs",
      "Produits Phytosanitaires",
      "Intrants & Semences Certifiées",
      "Agro-Pastoralisme • Santchou",
      "Horticulture & Sylviculture",
      "Dschang Foreke • Menoua",
    ],
    en: [
      "Agricultural Production",
      "Agronomic Advisory",
      "Farmer Monitoring",
      "Phytosanitary Products",
      "Certified Seeds & Inputs",
      "Agro-Pastoralism • Santchou",
      "Horticulture & Silviculture",
      "Dschang Foreke • Menoua",
    ],
  },
  stats: [
    {
      value: 6,
      suffix: "",
      label: { fr: "Pôles d'expertise agricole", en: "Core agricultural pillars" },
    },
    {
      value: 2,
      suffix: "",
      label: { fr: "Implantations dans la Menoua", en: "Strategic sites in Menoua" },
    },
    {
      value: 100,
      suffix: "%",
      label: { fr: "Intrants & conseils traçables", en: "Traceable inputs & advice" },
    },
    {
      value: 7,
      suffix: "j/7",
      label: { fr: "Réactivité terrain & WhatsApp", en: "Field & WhatsApp responsiveness" },
    },
  ],
  homeSections: {
    servicesEyebrow: { fr: "Nos Domaines d'Intervention", en: "Our Areas of Expertise" },
    servicesTitle: {
      fr: "Un partenaire complet, de la graine jusqu'à la récolte",
      en: "A complete partner, from seed to harvest",
    },
    servicesSubtitle: {
      fr: "Nous réunissons l'expertise terrain, la distribution d'intrants fiables et la production agro-pastorale pour faire grandir les exploitations de l'Ouest Cameroun.",
      en: "We unite field expertise, reliable farm input supply, and agro-pastoral production to help West Cameroon farms thrive.",
    },
    viewAllServices: { fr: "Explorer tous nos services", en: "Explore all services" },
    catalogEyebrow: { fr: "Boutique & Intrants • Dschang Foreke", en: "Inputs Counter • Dschang Foreke" },
    catalogTitle: {
      fr: "Produits phytosanitaires & intrants sélectionnés",
      en: "Selected phytosanitary & agricultural inputs",
    },
    catalogSubtitle: {
      fr: "Chaque produit est accompagné d'une recommandation technique précise pour protéger vos cultures efficacement et durablement.",
      en: "Every product comes with clear technical guidance to protect your crops effectively and sustainably.",
    },
    viewFullCatalog: { fr: "Voir le catalogue complet", en: "View full catalog" },
    territoryEyebrow: { fr: "Ancrage Territorial", en: "Local Footprint" },
    territoryTitle: {
      fr: "Deux pôles complémentaires au service de la Menoua",
      en: "Two complementary hubs serving the Menoua division",
    },
    territoryDesc: {
      fr: "Notre siège commercial à Dschang Foreke assure l'accueil, le conseil et l'approvisionnement immédiat en intrants, tandis que notre bassin agro-pastoral de Kassalafam à Santchou ancre notre savoir-faire dans la réalité de la production.",
      en: "Our commercial headquarters in Dschang Foreke provides consultation and immediate access to farm inputs, while our Kassalafam agro-pastoral site in Santchou grounds our expertise in real-world production.",
    },
    ctaTitle: {
      fr: "Préparez votre prochaine campagne agricole avec sérénité",
      en: "Prepare your next farming season with confidence",
    },
    ctaSubtitle: {
      fr: "Besoin d'un diagnostic cultural, d'un devis d'intrants ou d'un accompagnement sur parcelle ? Notre équipe vous répond rapidement par téléphone ou WhatsApp.",
      en: "Need a crop diagnostic, an inputs quote, or on-field coaching? Our team responds quickly by phone or WhatsApp.",
    },
  },
  footer: {
    description: {
      fr: "Entreprise agricole dédiée aux productions, conseils agronomiques, suivi des producteurs et distribution de produits phytosanitaires et intrants agricoles à Dschang et dans toute la Menoua.",
      en: "Agricultural enterprise dedicated to production, agronomic advisory, farmer monitoring, and distribution of phytosanitary products and agricultural inputs in Dschang and across Menoua.",
    },
    quickLinks: { fr: "Navigation", en: "Navigation" },
    contactTitle: { fr: "Coordonnées", en: "Contact" },
    legalTitle: { fr: "Identité Légale", en: "Official Credentials" },
    rights: {
      fr: "Tous droits réservés.",
      en: "All rights reserved.",
    },
  },
};
