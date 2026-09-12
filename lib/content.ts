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
  content: string[]
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
    content: [
      'J\'ai installé quatre aspirateurs robots chez moi entre novembre et février, un par mois environ, pour éviter de comparer des impressions à froid. Même appartement, mêmes pièces, un chat qui perd ses poils toute l\'année : le terrain était clairement plus difficile qu\'un salon témoin en boutique.',
      'Premier critère qui fait vraiment la différence au quotidien : la navigation. Les modèles équipés d\'un lidar cartographient la pièce en un seul passage et évitent les chaises, les câbles et les gamelles. Les modèles à navigation gyroscopique, moins chers, se débrouillent bien sur un sol dégagé mais butent régulièrement contre les pieds de table basse — sans dégât, mais avec du bruit et des trajets moins efficaces.',
      'La station d\'auto-vidage change tout sur la durée. Sans elle, il faut vider le bac tous les deux ou trois passages à cause des poils de chat. Avec, je n\'y touche que toutes les six à huit semaines. C\'est le poste où je recommande de ne pas économiser, même si ça veut dire prendre un modèle plus simple sur la navigation.',
      'Sur l\'autonomie, les quatre modèles tenaient largement un appartement de 70 m² en une charge, avec reprise automatique en cas de batterie faible. La vraie différence se joue sur le bruit en mode automatique : un des modèles dépassait clairement les autres, au point de devenir gênant en visio.',
      'Au final, je garde deux modèles sur quatre : celui avec lidar et auto-vidage pour un usage quotidien sans y penser, et un modèle d\'entrée de gamme sans station pour qui veut tester la robotisation sans y mettre le prix. Les deux autres sont repartis en revente — corrects, mais dépassés par la concurrence sur ce budget.',
    ],
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
    content: [
      'Passé un certain prix, les écouteurs sans fil vendent surtout une marque et un écosystème. J\'ai voulu savoir à partir de quel budget on obtient un son propre, une réduction de bruit qui fonctionne vraiment dans le métro ou en open space, et une autonomie qui tient une journée de travail.',
      'Le son d\'abord : sur des écouteurs à moins de 100 €, les basses sont souvent poussées pour impressionner en magasin, au détriment des médiums où se joue la voix humaine. Les modèles que je retiens gardent un rendu plus neutre, avec un égaliseur dans l\'appli pour ajuster si besoin.',
      'La réduction de bruit active (ANC) est le critère le plus trompeur des fiches produit. Un ANC efficace doit couper les bruits graves continus (moteur, ventilation) sans créer de pression désagréable dans l\'oreille. J\'ai éliminé deux paires sur ce point précis, malgré un son correct par ailleurs.',
      'Côté autonomie, je compte le boîtier de charge inclus : viser au moins 24h cumulées permet de ne recharger que tous les deux ou trois jours en usage quotidien (trajets + quelques appels). En dessous, la recharge devient une contrainte réelle.',
      'Ma sélection finale tient sur trois paires, toutes sous la barre des 150 €, qui couvrent trois usages différents : le sport (tenue et étanchéité), le bureau (micro clair en appel) et le voyage (ANC prioritaire). Aucune ne rivalise avec le haut de gamme sur le raffinement du son, mais l\'écart ne justifie pas de doubler le budget pour un usage courant.',
    ],
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
    content: [
      'L\'éclairage solaire de jardin a mauvaise réputation, et souvent à raison : la moitié des modèles vendus en grande surface ne passent pas un automne pluvieux. Le problème n\'est presque jamais le panneau solaire, mais la batterie et l\'étanchéité du boîtier.',
      'Premier réflexe avant d\'acheter : vérifier l\'indice de protection (IP). En dessous de IP44, évitez pour un usage extérieur permanent. Les modèles qui ont tenu chez moi toute l\'année affichent IP65 ou plus, avec un joint visible autour du compartiment batterie.',
      'Deuxième point, moins visible sur l\'emballage : le type de batterie. Le NiMH rechargeable classique perd sa capacité après une ou deux saisons humides. Les modèles avec batterie lithium tiennent nettement mieux le froid et se rechargent plus vite dès les premiers rayons de soleil, même faibles en hiver.',
      'L\'emplacement du panneau compte autant que le produit lui-même. Un panneau intégré au luminaire capte moins de lumière qu\'un panneau déporté qu\'on peut orienter plein sud. Pour un éclairage d\'allée qui reste allumé toute la nuit en hiver, je recommande systématiquement le panneau déporté.',
      'Après un hiver complet de test, les guirlandes et spots que je garde partagent trois points communs : IP65 minimum, batterie lithium, et un capteur crépusculaire qui déclenche l\'allumage automatiquement plutôt qu\'un bouton à activer chaque soir — le détail qui fait qu\'on continue réellement à s\'en servir après le premier mois.',
    ],
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
    content: [
      'Mon chat mange à heures fixes, et s\'en plaint bruyamment si ce n\'est pas le cas. C\'est ce qui m\'a poussé à tester les distributeurs connectés plutôt que de compter sur un voisin pour un simple week-end.',
      'La programmation des repas est le cœur du produit : nombre de portions, taille de la portion, et répartition dans la journée. Sur les modèles testés, la précision variait sensiblement — l\'un d\'eux distribuait parfois 10 à 15 % de plus que la portion réglée, ce qui devient un problème sur plusieurs semaines pour un chat au régime.',
      'La caméra intégrée change vraiment l\'usage : voir que le repas a bien été distribué et que l\'animal est venu manger rassure plus que n\'importe quelle notification. Sur les modèles sans caméra, on programme et on espère — sur ceux avec caméra, on vérifie et on ajuste en direct via l\'appli si besoin.',
      'Point moins mis en avant par les fabricants : le bruit du mécanisme de distribution. Un chat un peu craintif peut mettre plusieurs jours à s\'habituer au bruit de la vis sans fin qui libère les croquettes. Les modèles les plus silencieux valent le coup, surtout pour un usage nocturne.',
      'Après plusieurs semaines d\'utilisation avec des allers-retours réels, mon distributeur retenu est celui qui combine caméra grand angle, appli fiable sans coupure de connexion, et bac amovible facile à laver — le vrai critère de longévité, plus que le design du boîtier.',
    ],
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
    content: [
      'Les ampoules connectées sont, à raison, le point d\'entrée le plus courant dans la domotique : installation en quelques minutes, aucun câblage à toucher, et un effet immédiat sur le confort quotidien. Encore faut-il partir sur la bonne base technique pour ne pas se retrouver bloqué six mois plus tard.',
      'Premier choix à faire : Wi-Fi ou Zigbee. Le Wi-Fi se connecte directement au routeur, sans box supplémentaire — pratique pour commencer avec deux ou trois ampoules. Le Zigbee demande une box (ou un hub) mais consomme moins de bande passante et reste plus stable quand on dépasse une dizaine d\'objets connectés dans la maison.',
      'La compatibilité avec les assistants vocaux (Google Home, Alexa, Apple Home) n\'est pas automatique même quand c\'est annoncé sur l\'emballage : certains modèles nécessitent un compte tiers en plus de l\'appli du fabricant, ce qui ajoute une étape et un point de panne supplémentaire.',
      'Sur la partie lumière elle-même, deux réglages font la différence à l\'usage : la température de couleur réglable (du blanc chaud au blanc froid) et la vraie gradation progressive, sans à-coup visible en dessous de 10 % d\'intensité. Les modèles d\'entrée de gamme sautent souvent des paliers de façon perceptible.',
      'Pour démarrer sans se tromper, je recommande un pack de deux à quatre ampoules Wi-Fi compatibles avec l\'assistant vocal déjà présent à la maison, avant d\'envisager le Zigbee. Si l\'usage prend et que le nombre d\'objets grimpe, migrer vers un hub Zigbee devient rentable — mais ce n\'est pas nécessaire pour se lancer.',
    ],
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
    content: [
      'Une caméra de surveillance extérieure se juge rarement sur la fiche produit, où la résolution en mégapixels prend toute la place. Après plusieurs mois d\'installation réelle, voici les cinq critères qui ont vraiment compté chez moi.',
      'La vision nocturne d\'abord : au-delà de la résolution annoncée, ce qui change tout c\'est la portée réelle des LED infrarouges (souvent surestimée de 30 à 50 % par rapport à l\'annonce) et la présence ou non d\'un mode couleur nocturne, qui aide bien plus à identifier une silhouette qu\'une image en noir et blanc.',
      'Deuxième point, souvent découvert après achat : le modèle économique. Beaucoup de caméras vendues à bas prix imposent un abonnement mensuel pour accéder à l\'historique au-delà de 24h, voire pour recevoir des notifications de détection de mouvement fiables. Vérifiez ce point avant l\'achat, pas après.',
      'Le stockage local (carte micro SD ou base domestique) évite justement cet abonnement, mais expose à un risque de vol de la carte en cas d\'effraction visible de la caméra. Un stockage cloud chiffré, même payant, reste plus sûr pour des zones d\'accès sensibles comme une porte d\'entrée.',
      'Enfin, la détection intelligente (personne, véhicule, animal) réduit drastiquement les fausses alertes déclenchées par les branches ou les phares de voiture — un vrai gain de tranquillité au quotidien, à condition que le traitement se fasse sur l\'appareil et non uniquement via un serveur distant, plus lent à notifier.',
      'Le cinquième critère, le plus négligé : la résistance thermique réelle en dessous de 0°C, où certaines caméras bon marché voient leur batterie perdre jusqu\'à la moitié de leur autonomie annoncée. Un point à vérifier spécifiquement si la caméra reste exposée l\'hiver sans alimentation secteur.',
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getArticlesByCategoryName(categoryName: string) {
  return articles.filter((article) => article.category === categoryName)
}

export function getCategorySlugByName(categoryName: string) {
  return categories.find((category) => category.name === categoryName)?.slug ?? ''
}

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
