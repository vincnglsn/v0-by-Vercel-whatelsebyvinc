export type Category = {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  count: number
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  readingTime: number
  date: string
  image: string
  featured?: boolean
}

export const categories: Category[] = [
  {
    slug: 'high-tech',
    name: 'High-Tech',
    tagline: 'Le gadget qui change vraiment le quotidien',
    description:
      'Enceintes, écouteurs, chargeurs, accessoires nomades. Les objets high-tech que je garde après les avoir testés — et ceux que je renvoie.',
    image: '/images/cat-hightech.png',
    count: 24,
  },
  {
    slug: 'maison',
    name: 'Maison',
    tagline: 'La domotique sans prise de tête',
    description:
      'Aspirateurs robots, ampoules connectées, thermostats, prises intelligentes. Rendre la maison plus simple, pas plus compliquée.',
    image: '/images/cat-maison.png',
    count: 31,
  },
  {
    slug: 'exterieur',
    name: 'Extérieur',
    tagline: 'Le jardin et la terrasse, version connectée',
    description:
      'Éclairage solaire, caméras de surveillance, arrosage automatique, stations météo. Ce qui résiste vraiment aux saisons.',
    image: '/images/cat-exterieur.png',
    count: 18,
  },
  {
    slug: 'animalerie',
    name: 'Animalerie',
    tagline: 'Des compagnons bien équipés',
    description:
      'Distributeurs de croquettes, fontaines à eau, traceurs GPS, caméras. Le confort de vos animaux, testé au quotidien.',
    image: '/images/cat-animalerie.png',
    count: 12,
  },
]

export const articles: Article[] = [
  {
    slug: 'aspirateur-robot-2026-comparatif',
    title: 'Aspirateur robot : 4 modèles testés pendant 3 mois',
    excerpt:
      'Autonomie, navigation, station d\'auto-vidage… J\'ai fait tourner quatre robots chez moi tout l\'hiver. Voici lesquels valent leur prix et lesquels finissent au placard.',
    category: 'Maison',
    readingTime: 9,
    date: '2026-02-18',
    image: '/images/cat-maison.png',
    featured: true,
  },
  {
    slug: 'ecouteurs-sans-fil-rapport-qualite-prix',
    title: 'Écouteurs sans fil : le meilleur rapport qualité-prix',
    excerpt:
      'On n\'a pas tous besoin de mettre 300 €. Ma sélection d\'écouteurs qui tiennent la route côté son, réduction de bruit et autonomie.',
    category: 'High-Tech',
    readingTime: 7,
    date: '2026-02-04',
    image: '/images/cat-hightech.png',
  },
  {
    slug: 'eclairage-solaire-jardin-guide',
    title: 'Éclairage solaire de jardin : le guide sans mauvaise surprise',
    excerpt:
      'Les guirlandes solaires qui s\'éteignent en octobre, c\'est fini. Comment choisir un éclairage extérieur qui tient vraiment la distance.',
    category: 'Extérieur',
    readingTime: 6,
    date: '2026-01-22',
    image: '/images/cat-exterieur.png',
  },
  {
    slug: 'distributeur-croquettes-connecte',
    title: 'Distributeur de croquettes connecté : mon test complet',
    excerpt:
      'Partir en week-end sans culpabiliser. J\'ai testé les distributeurs automatiques avec appli et caméra pour nourrir le chat à distance.',
    category: 'Animalerie',
    readingTime: 8,
    date: '2026-01-09',
    image: '/images/cat-animalerie.png',
  },
  {
    slug: 'ampoules-connectees-debuter-domotique',
    title: 'Ampoules connectées : par où commencer en domotique',
    excerpt:
      'Le point d\'entrée idéal vers la maison connectée. Wi-Fi ou Zigbee, compatibilité, budget : tout ce qu\'il faut savoir avant d\'acheter.',
    category: 'Maison',
    readingTime: 10,
    date: '2025-12-15',
    image: '/images/cat-maison.png',
  },
  {
    slug: 'camera-surveillance-exterieure',
    title: 'Caméra de surveillance extérieure : 5 critères qui comptent',
    excerpt:
      'Vision nocturne, stockage, abonnement caché… Ce que les fiches produits ne vous disent pas avant de choisir votre caméra.',
    category: 'Extérieur',
    readingTime: 7,
    date: '2025-12-02',
    image: '/images/cat-exterieur.png',
  },
]

export const topPicks = [
  {
    name: 'Le meilleur pour débuter',
    product: 'Pack ampoules connectées',
    reason: 'Installation en 5 minutes, aucune box requise, compatible assistants vocaux.',
    category: 'Maison',
  },
  {
    name: 'Le coup de cœur',
    product: 'Aspirateur robot avec base',
    reason: 'Cartographie précise et auto-vidage : on l\'oublie complètement, dans le bon sens.',
    category: 'Maison',
  },
  {
    name: 'Le rapport qualité-prix',
    product: 'Écouteurs à réduction de bruit',
    reason: 'Le son et l\'ANC d\'un modèle premium à moins de la moitié du prix.',
    category: 'High-Tech',
  },
]
