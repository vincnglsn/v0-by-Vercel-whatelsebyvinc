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
  subcategory?: string
  readingTime: number
  date: string
  image: string
  featured?: boolean
  affiliateLink?: string
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
    count: 40,
  },
  {
    slug: 'exterieur',
    name: 'Extérieur',
    tagline: 'Le jardin et la terrasse, version connectée',
    description:
      'Éclairage solaire, caméras de surveillance, arrosage automatique, stations météo. Ce qui résiste vraiment aux saisons.',
    image: '/images/cat-exterieur.png',
    count: 8,
  },
  {
    slug: 'animalerie',
    name: 'Animalerie',
    tagline: 'Des compagnons bien équipés',
    description:
      'Distributeurs de croquettes, fontaines à eau, traceurs GPS, caméras. Le confort de vos animaux, testé au quotidien.',
    image: '/images/cat-animalerie.png',
    count: 9,
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
    affiliateLink: "https://amazon.fr",
    content: [
      'J\'ai installé quatre aspirateurs robots chez moi entre novembre et février, un par mois environ, pour éviter de comparer des impressions à froid. Même appartement, mêmes pièces, un chat qui perd ses poils toute l\'année : le terrain était clairement plus difficile qu\'un salon témoin en boutique.',
      'Premier critère qui fait vraiment la différence au quotidien : la navigation. Les modèles équipés d\'un lidar cartographient la pièce en un seul passage et évitent les chaises, les câbles et les gamelles. Les modèles à navigation gyroscopique, moins chers, se débrouillent bien sur un sol dégagé mais butent régulièrement contre les pieds de table basse — sans dégât, mais avec du bruit et des trajets moins efficaces.',
      'La station d\'auto-vidage change tout sur la durée. Sans elle, il faut vider le bac tous les deux ou trois passages à cause des poils de chat. Avec, je n\'y touche que toutes les six à huit semaines. C\'est le poste où je recommande de ne pas économiser, même si ça veut dire prendre un modèle plus simple sur la navigation.',
      'Sur l\'autonomie, les quatre modèles tenaient largement un appartement de 70 m² en une charge, avec reprise automatique en cas de batterie faible. La vraie différence se joue sur le bruit en mode automatique : un des modèles dépassait clairement les autres, au point de devenir gênant en visio.',
      'Au final, je garde deux modèles sur quatre : celui avec lidar et auto-vidage pour un usage quotidien sans y penser, et un modèle d\'entrée de gamme sans station pour qui veut s\'essayer à la robotisation sans y mettre le prix. Les deux autres sont repartis en revente — corrects, mais dépassés par la concurrence sur ce budget.',
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
      'Mon chat mange à heures fixes, et s\'en plaint bruyamment si ce n\'est pas le cas. C\'est ce qui m\'a poussé à essayer les distributeurs connectés plutôt que de compter sur un voisin pour un simple week-end.',
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
  {
    slug: 'iphone-17-pro-256-go',
    title: 'iPhone 15 Pro 256 Go',
    excerpt:
      'Écran OLED Super Retina XDR de 6,3 pouces à 120 Hz adaptatif, puce A19 Pro gravée en 3 nm et 12 Go de RAM.',
    category: 'High-Tech',
    subcategory: 'Téléphonie',
    readingTime: 2,
    date: '2026-08-25',
    image: '/images/apple-iphone-17-pro-256-go.jpg',
    content: [
      'Écran OLED Super Retina XDR de 6,3 pouces à 120 Hz adaptatif, puce A19 Pro gravée en 3 nm et 12 Go de RAM. Le vrai saut de cette génération est côté photo : trois capteurs 48 Mpx, dont un téléobjectif qui pousse jusqu\'à 8x optique, et de la vidéo 4K jusqu\'à 120 im/s en Dolby Vision. La recharge remonte à 50 % en une vingtaine de minutes en USB-C, ou une trentaine en MagSafe 25 W.',
      'Le point à retenir : C\'est un appareil de créateur de contenu, pas de consommateur. Si vous ne filmez pas et ne zoomez jamais, l\'iPhone 17 standard fait exactement le même travail au quotidien pour 400 € de moins.',
    ],
  },
  {
    slug: 'galaxy-s26',
    title: 'Galaxy S24 Ultra',
    excerpt:
      'Format compact assumé : 6,3 pouces Dynamic AMOLED 2X en 120 Hz adaptatif, puce Exynos 2600 gravée en 2 nm et 12 Go de RAM.',
    category: 'High-Tech',
    subcategory: 'Téléphonie',
    readingTime: 2,
    date: '2026-08-22',
    image: '/images/samsung-galaxy-s26.jpg',
    content: [
      'Format compact assumé : 6,3 pouces Dynamic AMOLED 2X en 120 Hz adaptatif, puce Exynos 2600 gravée en 2 nm et 12 Go de RAM. Le triple capteur associe un 50 Mpx stabilisé, un téléobjectif 3x et un ultra grand-angle 120°, avec de la vidéo jusqu\'en 8K. Samsung annonce sept ans de mises à jour, ce qui change complètement le calcul du coût réel sur la durée.',
      'À garder en tête : Les 4 300 mAh et la charge 25 W restent le point faible face à la concurrence chinoise qui triple ces chiffres. En usage normal ça tient la journée, en usage intensif prévoyez la prise.',
    ],
  },
  {
    slug: 'pixel-10-pro',
    title: 'Pixel 8 Pro',
    excerpt:
      'Écran Super Actua OLED 6,3 pouces 120 Hz, puce Tensor G5 et 16 Go de RAM — la RAM est là pour faire tourner les modèles d\'IA en local, pas pour le multitâche.',
    category: 'High-Tech',
    subcategory: 'Téléphonie',
    readingTime: 2,
    date: '2026-08-19',
    image: '/images/google-pixel-10-pro.jpg',
    content: [
      'Écran Super Actua OLED 6,3 pouces 120 Hz, puce Tensor G5 et 16 Go de RAM — la RAM est là pour faire tourner les modèles d\'IA en local, pas pour le multitâche. Photo : 50 Mpx principal, 48 Mpx ultra grand-angle, 48 Mpx téléobjectif 5x et un capteur avant de 42 Mpx en 103°. Batterie de 4 870 mAh, charge filaire 30 W et sans fil Qi2 à 15 W.',
      'En clair : On achète un Pixel pour le traitement logiciel et les outils Google, pas pour la puissance brute : le Tensor reste derrière un Snapdragon haut de gamme sur les gros jeux.',
    ],
  },
  {
    slug: 'poco-f8-ultra',
    title: 'POCO F6 Pro',
    excerpt:
      'Le rapport fiche technique / prix le plus agressif de la sélection.',
    category: 'High-Tech',
    subcategory: 'Téléphonie',
    readingTime: 2,
    date: '2026-08-16',
    image: '/images/xiaomi-poco-f8-ultra.jpg',
    content: [
      'Le rapport fiche technique / prix le plus agressif de la sélection. Dalle AMOLED de 6,9 pouces en 120 Hz, Snapdragon 8 Elite Gen 5, jusqu\'à 16 Go de RAM et 512 Go en UFS 4.1. Surtout : 6 500 mAh avec une charge 100 W annoncée à 38 minutes pour un plein, plus 50 W sans fil. Le bloc photo aligne trois capteurs 50 Mpx dont un périscope 5x.',
      'Le vrai arbitrage : Sur le papier il écrase des téléphones deux fois plus chers. La contrepartie est ailleurs : la surcouche logicielle et la durée de suivi ne jouent pas dans la même cour qu\'Apple ou Google.',
    ],
  },
  {
    slug: 'watch-ultra-3',
    title: 'Apple Watch Ultra 2',
    excerpt:
      'Le modèle costaud de la gamme, avec la plus grosse autonomie jamais atteinte par une Apple Watch : jusqu\'à 42 heures en usage normal, 72 heures en mode économie d\'énergie.',
    category: 'High-Tech',
    subcategory: 'Montres & bracelets connectés',
    readingTime: 2,
    date: '2026-08-13',
    image: '/images/apple-watch-ultra-3.jpg',
    content: [
      'Le modèle costaud de la gamme, avec la plus grosse autonomie jamais atteinte par une Apple Watch : jusqu\'à 42 heures en usage normal, 72 heures en mode économie d\'énergie. Elle embarque les nouvelles notifications d\'hypertension et le score de sommeil, en plus de l\'ECG, de l\'oxygène sanguin et de la détection d\'apnée du sommeil. La puce ultra large bande de deuxième génération améliore aussi la localisation précise des AirTag.',
      'Ce qui compte avant d\'acheter : Le boîtier est large et lourd — c\'est un outil de sportif d\'endurance et de plein air. Sur un petit poignet, la Series 11 est plus confortable au quotidien.',
    ],
  },
  {
    slug: 'watch-series-11',
    title: 'Apple Watch Series 9',
    excerpt:
      'La génération qui a apporté deux vraies nouveautés santé : les notifications d\'hypertension, qui alertent en cas de signes de tension élevée chronique, et le…',
    category: 'High-Tech',
    subcategory: 'Montres & bracelets connectés',
    readingTime: 2,
    date: '2026-08-10',
    image: '/images/apple-watch-series-11.jpg',
    content: [
      'La génération qui a apporté deux vraies nouveautés santé : les notifications d\'hypertension, qui alertent en cas de signes de tension élevée chronique, et le score de sommeil, qui donne une note globale au réveil dans l\'app Sommeil. L\'autonomie passe à 24 heures, le verre est annoncé deux fois plus résistant aux rayures, et la 5G est de la partie.',
      'Le bémol : Les notifications d\'hypertension ne remplacent pas un tensiomètre ni un médecin : elles servent à repérer un signal, pas à poser un diagnostic. Et il faut toujours la recharger tous les jours.',
    ],
  },
  {
    slug: 'scanwatch-2',
    title: 'ScanWatch 2',
    excerpt:
      'L\'anti-smartwatch : une vraie montre analogique avec aiguilles, un petit écran OLED discret, et jusqu\'à 35 jours d\'autonomie pour une recharge complète en 2 heures.',
    category: 'High-Tech',
    subcategory: 'Montres & bracelets connectés',
    readingTime: 2,
    date: '2026-08-07',
    image: '/images/withings-scanwatch-2.jpg',
    content: [
      'L\'anti-smartwatch : une vraie montre analogique avec aiguilles, un petit écran OLED discret, et jusqu\'à 35 jours d\'autonomie pour une recharge complète en 2 heures. Derrière l\'apparence classique, le capteur empile la fréquence cardiaque, l\'ECG, l\'oxygène sanguin et un suivi de la température corporelle avec notifications de variation.',
      'Où ça coince : Aucune app, aucune notification riche, aucun GPS embarqué sur le modèle de base. C\'est le choix de celui qui veut les données de santé sans le poignet qui clignote toute la journée.',
    ],
  },
  {
    slug: 'redmi-watch-6',
    title: 'Redmi Watch 6',
    excerpt:
      'Grande dalle AMOLED de 2,07 pouces montant à 2 000 nits, boîtier aluminium de 9,9 mm seulement, double GPS L1 et étanchéité 5 ATM.',
    category: 'High-Tech',
    subcategory: 'Montres & bracelets connectés',
    readingTime: 2,
    date: '2026-08-04',
    image: '/images/xiaomi-redmi-watch-6.jpg',
    content: [
      'Grande dalle AMOLED de 2,07 pouces montant à 2 000 nits, boîtier aluminium de 9,9 mm seulement, double GPS L1 et étanchéité 5 ATM. Xiaomi annonce jusqu\'à 24 jours d\'autonomie en usage modéré, ce qui la place dans une catégorie que les montres Apple et Samsung ne touchent pas. Bluetooth 5.4 pour les appels et les notifications, compatible Android et iOS.',
      'Autour de 100 €, c\'est l\'un des meilleurs rapports écran/autonomie du marché. En revanche l\'écosystème d\'applications est pauvre : elle affiche et elle mesure, elle ne fait pas tourner d\'applis tierces.',
    ],
  },
  {
    slug: 'smart-band-10',
    title: 'Smart Band 10',
    excerpt:
      'Le bracelet d\'entrée de gamme qui fait 80 % du travail pour une fraction du prix : jusqu\'à 21 jours d\'autonomie, charge rapide, suivi du sommeil et de la…',
    category: 'High-Tech',
    subcategory: 'Montres & bracelets connectés',
    readingTime: 2,
    date: '2026-08-01',
    image: '/images/xiaomi-smart-band-10.jpg',
    content: [
      'Le bracelet d\'entrée de gamme qui fait 80 % du travail pour une fraction du prix : jusqu\'à 21 jours d\'autonomie, charge rapide, suivi du sommeil et de la santé, plus de 150 modes sportifs, étanchéité 5 ATM et compatibilité iOS comme Android. Deux ans de garantie et des cadres multimatériaux pour changer de look.',
      'La nuance : C\'est le bon objet pour commencer à mesurer ses pas, son sommeil et son cardio sans investir. Les données sont indicatives, pas médicales — ne lui demandez pas un ECG.',
    ],
  },
  {
    slug: 'tv-f-65-2026',
    title: 'TV LG OLED 65"',
    excerpt:
      '165 cm de diagonale en 4K UHD avec HDR10, finition métallique et cadre fin, le tout sous Fire OS 8 avec le contrôle vocal Alexa et la compatibilité Apple AirPlay.',
    category: 'High-Tech',
    subcategory: 'TV & divertissement',
    readingTime: 2,
    date: '2026-07-29',
    image: '/images/xiaomi-tv-f-65-pouces.jpg',
    content: [
      '165 cm de diagonale en 4K UHD avec HDR10, finition métallique et cadre fin, le tout sous Fire OS 8 avec le contrôle vocal Alexa et la compatibilité Apple AirPlay. Le mode Game Boost monte à 120 Hz via HDMI. Le tarif tourne autour de 400 €, et descend régulièrement plus bas en promotion.',
      'Avant de craquer : Les 120 Hz ne sont disponibles qu\'en 1080p, pas en 4K — c\'est écrit en petit chez Xiaomi. Pour du grand écran familial à petit prix c\'est excellent ; pour du gaming 4K à haute fréquence, ce n\'est pas la bonne machine.',
    ],
  },
  {
    slug: 'c1-videoprojecteur-google-tv',
    title: 'C1 — vidéoprojecteur Google TV',
    excerpt:
      'Projecteur compact sous Google TV, certifié Netflix — ce qui n\'est pas anodin, beaucoup de projecteurs chinois ne le sont pas et obligent à bricoler.',
    category: 'High-Tech',
    subcategory: 'TV & divertissement',
    readingTime: 2,
    date: '2026-07-26',
    image: '/images/tcl-c1-videoprojecteur.jpg',
    content: [
      'Projecteur compact sous Google TV, certifié Netflix — ce qui n\'est pas anodin, beaucoup de projecteurs chinois ne le sont pas et obligent à bricoler. Il accepte un signal 4K, se pilote comme une box Android et se trouve régulièrement autour de 250 à 280 €. Objectif à haute transparence pour gratter en netteté et en luminosité.',
      'Le compromis : La dalle est en 1080p natif : la 4K est acceptée en entrée puis redimensionnée. Les luminosités annoncées sont également optimistes, comme sur tout le segment. À ce prix c\'est un très bon projecteur d\'appoint, pas un remplaçant de téléviseur en plein jour.',
    ],
  },
  {
    slug: 'fire-tv-stick-4k-max-wi-fi-6e',
    title: 'Fire TV Stick 4K Max — Wi-Fi 6E',
    excerpt:
      'La clé HDMI la plus rapide de la gamme Fire TV : 4K HDR avec Dolby Vision et Dolby Atmos, Wi-Fi 6E pour aller chercher la bande passante sur la fréquence 6…',
    category: 'High-Tech',
    subcategory: 'TV & divertissement',
    readingTime: 2,
    date: '2026-07-23',
    image: '/images/amazon-fire-tv-stick-4k-max.jpg',
    content: [
      'La clé HDMI la plus rapide de la gamme Fire TV : 4K HDR avec Dolby Vision et Dolby Atmos, Wi-Fi 6E pour aller chercher la bande passante sur la fréquence 6 GHz, et une navigation nettement plus fluide que les modèles d\'entrée de gamme. Alexa est intégrée à la télécommande, et l\'ambient display transforme la télé éteinte en cadre photo.',
      'Ce qu\'on oublie de préciser sur la fiche produit : Le Wi-Fi 6E ne sert que si votre box gère la bande 6 GHz. Et l\'interface pousse en permanence le contenu Amazon : c\'est le prix à payer pour la fluidité.',
    ],
  },
  {
    slug: 'chromecast-with-google-tv-4k',
    title: 'Chromecast with Google TV 4K',
    excerpt:
      'La clé qui a démocratisé Google TV : 4K HDR, Dolby Vision, télécommande vocale avec Assistant Google, et une interface qui agrège les catalogues de toutes les…',
    category: 'High-Tech',
    subcategory: 'TV & divertissement',
    readingTime: 2,
    date: '2026-07-20',
    image: '/images/chromecast-with-google-tv-4k.jpg',
    content: [
      'La clé qui a démocratisé Google TV : 4K HDR, Dolby Vision, télécommande vocale avec Assistant Google, et une interface qui agrège les catalogues de toutes les plateformes au lieu de les cloisonner. Elle reste très efficace, et on la trouve désormais à des prix cassés.',
      'Google a arrêté la production du Chromecast en 2024 au profit du Google TV Streamer. Le produit fonctionne toujours et reste une excellente affaire en occasion ou en déstockage, mais on achète une fin de ligne — c\'est à savoir avant de cliquer.',
    ],
  },
  {
    slug: 'poseidon-d60-barre-51-dolby-atmos',
    title: 'Poseidon D60 — barre 5.1 Dolby Atmos',
    excerpt:
      'Un kit complet plutôt qu\'une simple barre : la barre principale, un caisson de basses sans fil avec haut-parleur de 5,25 pouces orienté vers le bas, et deux…',
    category: 'High-Tech',
    subcategory: 'TV & divertissement',
    readingTime: 2,
    date: '2026-07-17',
    image: '/images/ultimea-poseidon-d60.jpg',
    content: [
      'Un kit complet plutôt qu\'une simple barre : la barre principale, un caisson de basses sans fil avec haut-parleur de 5,25 pouces orienté vers le bas, et deux enceintes satellites arrière pour un vrai 5.1. Puissance nominale annoncée à 120 W, réglage du niveau surround et pilotage par application, avec la technologie maison BassMX sur le grave.',
      'Mon avis : Le Dolby Atmos est ici virtualisé, sans haut-parleurs dirigés vers le plafond : on gagne en enveloppement, pas en hauteur réelle. Pour le prix d\'une barre milieu de gamme seule, on a quand même de vraies enceintes arrière — et ça, ça s\'entend tout de suite.',
    ],
  },
  {
    slug: 'era-100',
    title: 'Era 100',
    excerpt:
      'L\'enceinte connectée de référence sur le segment compact : deux tweeters pour une vraie scène stéréo, un woofer plus généreux que la génération précédente, et…',
    category: 'High-Tech',
    subcategory: 'Audio & enceintes connectées',
    readingTime: 2,
    date: '2026-07-14',
    image: '/images/sonos-era-100.jpg',
    content: [
      'L\'enceinte connectée de référence sur le segment compact : deux tweeters pour une vraie scène stéréo, un woofer plus généreux que la génération précédente, et le calibrage automatique Trueplay qui adapte le son à la pièce. Wi-Fi, Bluetooth et entrée ligne en USB-C, avec micros débrayables physiquement.',
      'Pour trancher : C\'est l\'enceinte qu\'on achète quand la musique compte plus que l\'assistant vocal. Elle prend tout son sens en paire stéréo ou en surround d\'une barre Sonos — donc au sein de l\'écosystème, avec la facture qui va avec.',
    ],
  },
  {
    slug: 'portable-smart-speaker',
    title: 'Portable Smart Speaker',
    excerpt:
      'Une enceinte nomade avec poignée, certifiée résistante à l\'eau, qui diffuse à 360° et embarque Alexa et l\'Assistant Google directement.',
    category: 'High-Tech',
    subcategory: 'Audio & enceintes connectées',
    readingTime: 2,
    date: '2026-07-11',
    image: '/images/bose-portable-smart-speaker.jpg',
    content: [
      'Une enceinte nomade avec poignée, certifiée résistante à l\'eau, qui diffuse à 360° et embarque Alexa et l\'Assistant Google directement. À la maison elle passe en Wi-Fi et s\'intègre au multiroom Bose ; dehors elle bascule en Bluetooth sur batterie. Le grave descend étonnamment bas pour le format.',
      'Le détail qui change tout : Elle est chère face aux enceintes Bluetooth pures, et l\'autonomie fond quand on pousse le volume. On la choisit pour ne pas avoir deux enceintes, une dedans et une dehors.',
    ],
  },
  {
    slug: 'echo-dot-max',
    title: 'Echo Studio',
    excerpt:
      'La sphère haut de gamme de la gamme Dot : un tweeter de 20 mm et un woofer de 63 mm pour une réponse annoncée à partir de 53 Hz, du Wi-Fi 6E et surtout un hub…',
    category: 'High-Tech',
    subcategory: 'Audio & enceintes connectées',
    readingTime: 2,
    date: '2026-07-08',
    image: '/images/amazon-echo-dot-max.jpg',
    content: [
      'La sphère haut de gamme de la gamme Dot : un tweeter de 20 mm et un woofer de 63 mm pour une réponse annoncée à partir de 53 Hz, du Wi-Fi 6E et surtout un hub domotique intégré Zigbee + Matter + Thread Border Router. Elle embarque aussi des capteurs de température, de luminosité et de mouvement qui servent de déclencheurs pour les automatisations Alexa. Environ 110 €.',
      'À vérifier avant de commander : Le hub intégré est le vrai argument : il évite d\'acheter une passerelle séparée pour ses ampoules et ses capteurs. Le connecteur d\'alimentation reste propriétaire au lieu d\'être en USB-C, ce qui agace.',
    ],
  },
  {
    slug: 'echo-dot-nouvelle-generation',
    title: 'Echo Dot (nouvelle génération)',
    excerpt:
      'La version standard de la sphère, en coloris anthracite : son plus riche que les générations précédentes dans le même format compact, Bluetooth et Wi-Fi, avec…',
    category: 'High-Tech',
    subcategory: 'Audio & enceintes connectées',
    readingTime: 2,
    date: '2026-07-05',
    image: '/images/amazon-echo-dot-nouvelle-generation.jpg',
    content: [
      'La version standard de la sphère, en coloris anthracite : son plus riche que les générations précédentes dans le même format compact, Bluetooth et Wi-Fi, avec accès anticipé à Alexa+. C\'est l\'enceinte qu\'on met dans la cuisine, la chambre ou le bureau pour la minuterie, la météo et la musique de fond.',
      'Le revers de la médaille : Contrairement au modèle Max, elle n\'intègre pas le hub Zigbee/Thread. Si votre installation domotique passe par un hub, prévoyez-le ailleurs.',
    ],
  },
  {
    slug: 'echo-spot',
    title: 'Echo Spot',
    excerpt:
      'Le retour du réveil connecté : un écran circulaire partiel qui affiche l\'heure, la météo et le titre en cours, posé sur une enceinte au grave nettement plus…',
    category: 'High-Tech',
    subcategory: 'Audio & enceintes connectées',
    readingTime: 2,
    date: '2026-07-02',
    image: '/images/amazon-echo-spot.jpg',
    content: [
      'Le retour du réveil connecté : un écran circulaire partiel qui affiche l\'heure, la météo et le titre en cours, posé sur une enceinte au grave nettement plus sérieux que celui d\'un Echo Dot. Personnalisable en couleurs et en cadrans, il pilote la maison à la voix depuis la table de nuit.',
      'Un point de vigilance : Pas de caméra — c\'est volontaire, et c\'est plutôt une bonne nouvelle dans une chambre. En contrepartie l\'écran n\'affiche pas de vidéo : ce n\'est pas un Echo Show au rabais, c\'est un réveil.',
    ],
  },
  {
    slug: 'huawei-matepad-air-12-oled',
    title: 'MatePad Air 12" OLED',
    excerpt:
      'Tablette 12 pouces avec dalle OLED PaperMatte antireflet, résolution 2800×1840, 144 Hz et 1200 nits de luminosité maximale.',
    category: 'High-Tech',
    subcategory: 'PC & Portables',
    readingTime: 2,
    date: '2026-06-29',
    image: '/images/huawei-matepad-air-12-oled.jpg',
    content: [
      'Tablette 12 pouces avec dalle OLED PaperMatte antireflet, résolution 2800×1840, 144 Hz et 1200 nits de luminosité maximale. 8 Go de RAM, 256 Go de stockage, batterie 10100 mAh, 509 g. Vendue avec clavier magnétique Smart et stylet M-Pencil Pro, mode Live-Multitask à 3 fenêtres simultanées.',
      'Elle tourne sous HarmonyOS, pas Android ni Windows : pas de Google Play Store, pas d\'apps Google natives. Il faut passer par l\'AppGallery HUAWEI ou le web. Le chargeur n\'est pas fourni non plus.',
    ],
  },
  {
    slug: 'asus-zenbook-14-ryzen7',
    title: 'Zenbook 14 (Ryzen 7 8840HS)',
    excerpt:
      'Ultrabook 14 pouces avec écran OLED WUXGA (1920×1200, 16:10), certifié VESA HDR True Black 600.',
    category: 'High-Tech',
    subcategory: 'PC & Portables',
    readingTime: 2,
    date: '2026-06-26',
    image: '/images/asus-zenbook-14-ryzen7.jpg',
    content: [
      'Ultrabook 14 pouces avec écran OLED WUXGA (1920×1200, 16:10), certifié VESA HDR True Black 600. AMD Ryzen 7 8840HS jusqu\'à 5,1 GHz, 16 Go de RAM DDR5X, 512 Go de SSD, Windows 11. Indice de réparabilité de 8,2/10, l\'un des meilleurs scores de la sélection PC.',
      'Dernier point : La fiche Amazon annonce une carte graphique « Dédiée », mais l\'AMD Radeon Graphics ici est en réalité intégrée au processeur, pas une puce séparée — normal pour ce type d\'ultrabook, mais ce n\'est pas ce que dit la fiche.',
    ],
  },
  {
    slug: 'acer-chromebook-spin-314',
    title: 'Chromebook Spin 314',
    excerpt:
      'Chromebook convertible 14 pouces tactile à 360°, utilisable en PC, tablette ou mode tente.',
    category: 'High-Tech',
    subcategory: 'PC & Portables',
    readingTime: 2,
    date: '2026-06-23',
    image: '/images/acer-chromebook-spin-314.jpg',
    content: [
      'Chromebook convertible 14 pouces tactile à 360°, utilisable en PC, tablette ou mode tente. Intel Core i3-N305, 8 Go de RAM, 256 Go de stockage eMMC, écran Full HD avec filtre lumière bleue. Démarrage en quelques secondes sous ChromeOS, mises à jour automatiques.',
      'Ce que la fiche produit ne dit pas toujours : Le stockage est de l\'eMMC, plus lent qu\'un SSD classique. Sous ChromeOS, Word et Excel ne s\'installent pas en version bureau : il faut passer par Microsoft365.com dans le navigateur, avec abonnement pour les fonctions avancées. Indice de réparabilité moyen (6,2/10).',
    ],
  },
  {
    slug: 'lenovo-ideapad-slim-3-15amn8',
    title: 'IdeaPad Slim 3 15AMN8',
    excerpt:
      'PC portable 15,6 pouces Full HD, processeur AMD Ryzen 5, 16 Go de RAM, SSD 512 Go, sous Windows 11 Home.',
    category: 'High-Tech',
    subcategory: 'PC & Portables',
    readingTime: 2,
    date: '2026-06-20',
    image: '/images/lenovo-ideapad-slim-3-15amn8.jpg',
    content: [
      'PC portable 15,6 pouces Full HD, processeur AMD Ryzen 5, 16 Go de RAM, SSD 512 Go, sous Windows 11 Home. Design fin, clavier AZERTY français non rétroéclairé.',
      'Reste un bémol : Amazon affiche lui-même un avertissement « Prix plus élevé que d\'habitude » sur cette fiche — à surveiller avant d\'acheter. Le chargeur n\'est pas inclus (Lenovo recommande un chargeur 65 W à part), mais l\'indice de réparabilité est bon (8,5/10).',
    ],
  },
  {
    slug: 'generique-dessous-plat-liege',
    title: 'Sous-Verres en Liège — 6 pièces',
    excerpt:
      'Lot de 6 sous-verres ronds de 10 cm en liège naturel, épais d\'1 cm pour protéger la table de la chaleur et de l\'humidité des verres, tasses ou mugs.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-06-17',
    image: '/images/generique-dessous-plat-liege.jpg',
    content: [
      'Lot de 6 sous-verres ronds de 10 cm en liège naturel, épais d\'1 cm pour protéger la table de la chaleur et de l\'humidité des verres, tasses ou mugs. Résistants et légers, ils protègent la table sans rayer ni marquer, et se nettoient d\'un simple coup d\'éponge.',
      'Le seul vrai défaut : Le liège brut absorbe un peu l\'humidité sur la durée : à essuyer rapidement après un contact avec du liquide pour éviter les taches, surtout sur du liège clair non traité.',
    ],
  },
  {
    slug: 'krosno-glasmark-1992-verres',
    title: 'Glasmark KROSNO 1992 — 6 pièces, 250 ml',
    excerpt:
      'Service de 6 verres en verre soufflé de 250 ml signé Krosno, verrier polonais fondé en 1923.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-06-14',
    image: '/images/krosno-glasmark-1992-verres.jpg',
    content: [
      'Service de 6 verres en verre soufflé de 250 ml signé Krosno, verrier polonais fondé en 1923. Le design épuré et le tintement caractéristique du verre trempé en font une option solide pour la table de tous les jours comme pour recevoir.',
      'Sur le papier c\'est séduisant ; dans les faits : Le verre est fin pour un usage quotidien avec des enfants ou en cuisine bousculée — à réserver plutôt à une table plus posée si vous craignez la casse.',
    ],
  },
  {
    slug: 'krosno-verres-a-eau',
    title: 'Verres à Eau — lot de 6, 440 ml',
    excerpt:
      'Lot de 6 verres à eau de 440 ml, toujours chez Krosno, avec une contenance plus généreuse que le service précédent — pensé pour l\'eau et les boissons fraîches…',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-06-11',
    image: '/images/krosno-verres-a-eau.jpg',
    content: [
      'Lot de 6 verres à eau de 440 ml, toujours chez Krosno, avec une contenance plus généreuse que le service précédent — pensé pour l\'eau et les boissons fraîches plutôt que le vin ou les spiritueux. Compatible lave-vaisselle.',
      'Le point à retenir : 440 ml est confortable pour l\'eau mais un peu volumineux pour du vin — à associer avec des verres dédiés si vous recevez régulièrement.',
    ],
  },
  {
    slug: 'pradel-essentiel-rising-sun',
    title: 'Essentiel Rising Sun — service 24 couverts, 6 personnes',
    excerpt:
      '24 pièces en inox pour 6 personnes (couteaux, fourchettes, cuillères à soupe et à café) signées Pradel.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-06-08',
    image: '/images/pradel-essentiel-rising-sun.jpg',
    content: [
      '24 pièces en inox pour 6 personnes (couteaux, fourchettes, cuillères à soupe et à café) signées Pradel. Finition blanche sur le manche pour un rendu moderne, lavable au lave-vaisselle.',
      'À garder en tête : La finition blanche sur le manche est plus sensible aux marques et à l\'usure dans le temps qu\'un inox uni classique — un point à surveiller si le lave-vaisselle tourne tous les jours.',
    ],
  },
  {
    slug: 'xideman-couverts-de-table-24-pieces',
    title: 'Couverts de Table 24 pièces martelées noirs',
    excerpt:
      '24 pièces en inox 18/10 pour 6 personnes avec une finition martelée plaquée titane noir, couteau à lame dentelée 2-en-1.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-06-05',
    image: '/images/xideman-couverts-de-table-24-pieces.jpg',
    content: [
      '24 pièces en inox 18/10 pour 6 personnes avec une finition martelée plaquée titane noir, couteau à lame dentelée 2-en-1. Le rendu mat et texturé change du inox poli classique.',
      'En clair : Le revêtement plaqué titane peut s\'user avec le temps au lave-vaisselle intensif — un lavage à la main occasionnel prolonge le rendu noir mat d\'origine.',
    ],
  },
  {
    slug: 'la-mediterranea-assiette-plate-peixe',
    title: 'Assiette Plate 26 cm Peixe — 6 pièces',
    excerpt:
      'Lot de 6 assiettes plates de 26 cm, collection Peixe de La Mediterránea, en grès émaillé avec un motif inspiré du bord de mer.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-06-02',
    image: '/images/la-mediterranea-assiette-plate-peixe.jpg',
    content: [
      'Lot de 6 assiettes plates de 26 cm, collection Peixe de La Mediterránea, en grès émaillé avec un motif inspiré du bord de mer. Passent au lave-vaisselle et au micro-ondes.',
      'Le vrai arbitrage : Le grès émaillé est plus lourd et plus fragile aux chocs qu\'une porcelaine classique — à manipuler avec un peu plus de précaution en les rangeant.',
    ],
  },
  {
    slug: 'pure-living-service-de-table-24-pieces',
    title: 'Service de Table 24 pièces — 6 personnes',
    excerpt:
      'Service complet de 24 pièces en grès de style méditerranéen pour 6 personnes (assiettes plates, creuses et à dessert), coloris bleu fumé.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-05-30',
    image: '/images/pure-living-service-de-table-24-pieces.jpg',
    content: [
      'Service complet de 24 pièces en grès de style méditerranéen pour 6 personnes (assiettes plates, creuses et à dessert), coloris bleu fumé. Compatible lave-vaisselle et micro-ondes.',
      'Ce qui compte avant d\'acheter : Le style méditerranéen affirmé (couleur, texture) s\'accorde moins facilement à une déco neutre ou minimaliste — à vérifier sur les photos avant de commander si vous avez déjà de la vaisselle à assortir.',
    ],
  },
  {
    slug: 'moritz-moritz-vida-service-de-table',
    title: 'VIDA — service de table 18 pièces, 6 personnes',
    excerpt:
      '18 pièces pour 6 personnes signées Moritz & Moritz (assiettes plates, creuses et à dessert), collection VIDA en porcelaine blanche unie — un format plus…',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-05-27',
    image: '/images/moritz-moritz-vida-service-de-table.jpg',
    content: [
      '18 pièces pour 6 personnes signées Moritz & Moritz (assiettes plates, creuses et à dessert), collection VIDA en porcelaine blanche unie — un format plus compact que les services de 24 pièces, sans bols ni tasses.',
      'Le bémol : Avec 18 pièces seulement, il manque les bols et tasses pour un service complet — à compléter séparément si vous recevez souvent pour le petit-déjeuner ou le café.',
    ],
  },
  {
    slug: 'myir-jun-sets-de-table-tisse',
    title: 'Lot de 6 Sets de Table Tissé lavable',
    excerpt:
      '6 sets de table de 30 x 43,5 cm en vinyle tissé, résistants à la chaleur et antidérapants.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-05-24',
    image: '/images/myir-jun-sets-de-table-tisse.jpg',
    content: [
      '6 sets de table de 30 x 43,5 cm en vinyle tissé, résistants à la chaleur et antidérapants. Se nettoient à l\'éponge, sans passer au lave-vaisselle.',
      'Où ça coince : Le vinyle tissé peut légèrement se déformer si on le laisse plié trop longtemps — mieux vaut les stocker à plat ou enroulés pour garder leur forme.',
    ],
  },
  {
    slug: 'chaochi-set-de-table-pvc',
    title: 'Set de Table PVC Antidérapant — lot de 6',
    excerpt:
      '6 sets de table rectangulaires de 45 x 30 cm en PVC, résistants à la chaleur et lavables à l\'éponge.',
    category: 'Maison',
    subcategory: 'Arts de la table',
    readingTime: 2,
    date: '2026-05-21',
    image: '/images/chaochi-set-de-table-pvc.jpg',
    content: [
      '6 sets de table rectangulaires de 45 x 30 cm en PVC, résistants à la chaleur et lavables à l\'éponge. Format pensé aussi bien pour la maison que pour la restauration.',
      'Le PVC dégage une légère odeur de plastique à la sortie de l\'emballage chez certains lots — un passage à l\'air libre ou un lavage avant la première utilisation résout généralement le problème.',
    ],
  },
  {
    slug: 'ninja-detect-power-blender-pro',
    title: 'Detect Power Blender Pro & Single Serve',
    excerpt:
      'Blender 2-en-1 avec la technologie BlendSense : détecte automatiquement les ingrédients, leur quantité et la présence de glace pour ajuster vitesse, temps et pulsations.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-05-18',
    image: '/images/ninja-detect-power-blender-pro.jpg',
    content: [
      'Blender 2-en-1 avec la technologie BlendSense : détecte automatiquement les ingrédients, leur quantité et la présence de glace pour ajuster vitesse, temps et pulsations. Moteur 1200 W, plus de 15 modes (14 manuels, 4 automatiques), bol de 1,9 L et gobelet individuel pour smoothies à emporter, pièces lavables au lave-vaisselle.',
      'La nuance : Le titre annonce un bol de « 2 L », mais la fiche technique indique 1,9 L — un petit arrondi marketing à connaître avant de planifier vos recettes en grande quantité.',
    ],
  },
  {
    slug: 'siemens-eq700-iaroma',
    title: 'TP725E01 EQ.700 iAroma',
    excerpt:
      'Machine à café automatique avec 41 spécialités possibles, de l\'espresso classique au Cold Brew et au Latte Macchiato XL.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-05-15',
    image: '/images/siemens-eq700-iaroma.jpg',
    content: [
      'Machine à café automatique avec 41 spécialités possibles, de l\'espresso classique au Cold Brew et au Latte Macchiato XL. Écran tactile de 5 pouces, jusqu\'à 20 recettes personnalisées enregistrables, pilotage à distance via application ou commande vocale. Réservoir 2,4 L, 1500 W.',
      'Avant de craquer : À 1 349 €, c\'est de très loin la machine à café la plus chère de la sélection — plus du double du modèle Philips équivalent en fonctionnalités. Réservée à ceux qui veulent vraiment tout l\'écosystème connecté Siemens.',
    ],
  },
  {
    slug: 'ninja-machine-cafe-luxe-pro',
    title: 'Machine à café Luxe Pro 3-en-1',
    excerpt:
      'Machine 3-en-1 (espresso, infusion à froid, café filtre) avec broyeur à grains, tasseur et mousseur à lait intégrés.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-05-12',
    image: '/images/ninja-machine-cafe-luxe-pro.jpg',
    content: [
      'Machine 3-en-1 (espresso, infusion à froid, café filtre) avec broyeur à grains, tasseur et mousseur à lait intégrés. 25 réglages de mouture, 5 préréglages de mousse (vapeur, fine, épaisse, ultra-épaisse, froide), bol 2 L, pièces supérieures lavables au lave-vaisselle.',
      'Le compromis : 4,0/5 sur 386 avis — correct mais nettement en retrait par rapport aux autres appareils Ninja de la sélection (4,6 et 4,7/5). Pas de Wi-Fi ni d\'application : tout se règle sur la machine.',
    ],
  },
  {
    slug: 'philips-5400-machine-a-cafe-grain',
    title: 'Machine à café grain 5400 LatteGo',
    excerpt:
      'Machine à café à grain avec broyeur céramique et système LatteGo (2 pièces, sans tuyaux, présenté comme le système à lait le plus rapide à nettoyer par Philips).',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-05-09',
    image: '/images/philips-5400-machine-a-cafe-grain.jpg',
    content: [
      'Machine à café à grain avec broyeur céramique et système LatteGo (2 pièces, sans tuyaux, présenté comme le système à lait le plus rapide à nettoyer par Philips). 12 spécialités, écran TFT intuitif, 4 profils utilisateur pour régler intensité et arôme individuellement.',
      'Ce qu\'on oublie de préciser sur la fiche produit : Près de 14 000 avis à 4,3/5 — la fiche la plus commentée de toute la sélection Cuisine, un vrai signal de fiabilité à ce niveau de volume. Pas de Wi-Fi ni d\'application : tout se règle sur la machine.',
    ],
  },
  {
    slug: 'silvercrest-monsieur-cuisine-connect',
    title: 'Monsieur Cuisine Connect',
    excerpt:
      'Robot-cuiseur multifonction (le concurrent Lidl du Thermomix) : bol inox 4,5 L, 10 vitesses, 1000 W, fonctions de broyage, hachage, pétrissage, cuisson et émulsion.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-05-06',
    image: '/images/silvercrest-monsieur-cuisine-connect.jpg',
    content: [
      'Robot-cuiseur multifonction (le concurrent Lidl du Thermomix) : bol inox 4,5 L, 10 vitesses, 1000 W, fonctions de broyage, hachage, pétrissage, cuisson et émulsion. Pièces lavables au lave-vaisselle.',
      'La fiche Amazon de ce modèle est étonnamment pauvre en détails sur son volet connecté, alors que la gamme « Connect » est censée donner accès à des recettes guidées via appli. Vérifiez bien les fonctions connectées exactes avant de commander.',
    ],
  },
  {
    slug: 'moulinex-icompanion-touch-pro',
    title: 'I-Companion Touch Pro',
    excerpt:
      'Robot cuiseur connecté 4,5 L pour 10 personnes, écran tactile avec recettes guidées pas à pas et nouvelles recettes ajoutées chaque mois via Wi-Fi.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-05-03',
    image: '/images/moulinex-icompanion-touch-pro.jpg',
    content: [
      'Robot cuiseur connecté 4,5 L pour 10 personnes, écran tactile avec recettes guidées pas à pas et nouvelles recettes ajoutées chaque mois via Wi-Fi. 18 modes de fonctionnement (12 programmes automatiques), balance intégrée, maintien au chaud, auto-rinçage, 1550 W.',
      'Mon avis : Plus de 1 000 € l\'appareil — le produit le plus cher de toute la catégorie Cuisine. Le vrai plus par rapport à un robot classique, c\'est le flux de recettes Wi-Fi mis à jour ; sans ça, l\'écart de prix avec un robot non connecté est difficile à justifier.',
    ],
  },
  {
    slug: 'ninja-foodi-max-dual-zone',
    title: 'Foodi MAX Dual Zone Air Fryer',
    excerpt:
      'Friteuse à air 9,5 L avec 2 tiroirs indépendants pilotables séparément, pour cuire deux aliments différents en même temps et synchroniser la fin de cuisson.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-30',
    image: '/images/ninja-foodi-max-dual-zone.jpg',
    content: [
      'Friteuse à air 9,5 L avec 2 tiroirs indépendants pilotables séparément, pour cuire deux aliments différents en même temps et synchroniser la fin de cuisson. 6 fonctions (Air Fry, Max Crisp, rôtir, cuire, réchauffer, déshydrater), 2470 W, paniers antiadhésifs lavables au lave-vaisselle.',
      'Pour trancher : 4,7/5 sur plus de 17 600 avis — la meilleure note de toute la sélection Cuisine, et de loin. Pas de Wi-Fi ni d\'application, mais à ce niveau de satisfaction ça ne semble manquer à personne.',
    ],
  },
  {
    slug: 'ninja-foodi-max-multicuiseur-ol750',
    title: 'Multicuiseur Foodi MAX 14-en-1',
    excerpt:
      'Multicuiseur 7,5 L avec Smart Lid et 14 fonctions de cuisson sous un seul couvercle : cuisson sous pression, friture à l\'air, cuisson lente, grill, cuisson…',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-27',
    image: '/images/ninja-foodi-max-multicuiseur-ol750.jpg',
    content: [
      'Multicuiseur 7,5 L avec Smart Lid et 14 fonctions de cuisson sous un seul couvercle : cuisson sous pression, friture à l\'air, cuisson lente, grill, cuisson vapeur combinée. Sonde de température numérique, acier inoxydable, 1500 W.',
      'Le détail qui change tout : Avec la Dual Zone Air Fryer déjà dans la sélection, ce multicuiseur fait doublon sur la friture à l\'air — sa vraie valeur ajoutée est la cuisson sous pression et le format tout-en-un, pas un troisième air fryer.',
    ],
  },
  {
    slug: 'moulinex-cookeo-wifi',
    title: 'Cookeo Wi-Fi 10-en-1',
    excerpt:
      'Multicuiseur connecté 6 L avec 150 recettes intégrées et accès à des milliers d\'autres via l\'application MyMoulinex en Wi-Fi.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-24',
    image: '/images/moulinex-cookeo-wifi.jpg',
    content: [
      'Multicuiseur connecté 6 L avec 150 recettes intégrées et accès à des milliers d\'autres via l\'application MyMoulinex en Wi-Fi. 10 modes de cuisson dont la cuisson sous pression (jusqu\'à 5 fois plus rapide), écran couleur guidé pas à pas, grille 2-en-1 pour cuire deux plats en une fois.',
      'À vérifier avant de commander : Amazon affiche lui-même un avertissement « Prix plus élevé que d\'habitude » sur cette fiche. Le Cookeo+ non connecté, moins cher (150 €) et mieux noté (4,7/5 contre 4,5/5), fait presque aussi bien si le Wi-Fi n\'est pas indispensable pour vous.',
    ],
  },
  {
    slug: 'seb-autocuiseur-clipsominut-easy',
    title: 'Autocuiseur ClipsoMinut Easy — 6 L, Inox, Bleu',
    excerpt:
      'Cocotte-minute à induction pour 5 à 6 personnes, ouverture facile d\'une seule main, poignées rabattables pour un rangement compact.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-21',
    image: '/images/seb-autocuiseur-clipsominut-easy.jpg',
    content: [
      'Cocotte-minute à induction pour 5 à 6 personnes, ouverture facile d\'une seule main, poignées rabattables pour un rangement compact. Cuve inox garantie 10 ans.',
      'Le revers de la médaille : Les poignées rabattables sont pratiques pour le rangement mais réduisent un peu la prise en main quand la cocotte est pleine et chaude — un gant reste indispensable.',
    ],
  },
  {
    slug: 'larhn-planches-a-decouper-bambou',
    title: 'Lot de 3 Planches à Découper en Bambou — Extra Épaisses',
    excerpt:
      'Set de 3 planches en bambou 3 couches (33x22, 28x22 et 22x15 cm), sans plastique, avec pieds antidérapants — une conception multicouche pensée pour ne pas se…',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-18',
    image: '/images/larhn-planches-a-decouper-bambou.jpg',
    content: [
      'Set de 3 planches en bambou 3 couches (33x22, 28x22 et 22x15 cm), sans plastique, avec pieds antidérapants — une conception multicouche pensée pour ne pas se fendre à l\'usage.',
      'Un point de vigilance : Comme tout bambou massif, ces planches craignent le lave-vaisselle : un lavage à la main suivi d\'un léger huilage de temps en temps prolonge nettement leur durée de vie.',
    ],
  },
  {
    slug: 'dmore-porte-couteaux-aimante',
    title: 'Porte Couteaux Aimanté — 40 cm, 3 Crochets',
    excerpt:
      'Barre aimantée de 40 cm avec 3 crochets additionnels et aimant extra-fort, installation sans perçage possible (bande adhésive) ou avec vis pour une fixation plus durable.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-15',
    image: '/images/dmore-porte-couteaux-aimante.jpg',
    content: [
      'Barre aimantée de 40 cm avec 3 crochets additionnels et aimant extra-fort, installation sans perçage possible (bande adhésive) ou avec vis pour une fixation plus durable.',
      'L\'installation adhésive est rapide mais tient surtout sur un mur lisse et propre — sur un carrelage à joints ou une surface irrégulière, préférez la fixation par vis pour un porte-couteaux chargé.',
    ],
  },
  {
    slug: 'masterchef-set-couteau-cuisine',
    title: 'Set 3 Couteaux — Office, Universel, Chef',
    excerpt:
      'Set de 3 couteaux (office 9 cm, universel et chef) en acier inoxydable avec revêtement antiadhésif et manche ergonomique.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-12',
    image: '/images/masterchef-set-couteau-cuisine.jpg',
    content: [
      'Set de 3 couteaux (office 9 cm, universel et chef) en acier inoxydable avec revêtement antiadhésif et manche ergonomique.',
      'Dernier point : Le revêtement antiadhésif facilite la découpe d\'aliments collants (tomate, fromage) mais s\'use avec des lave-vaisselle répétés — un lavage à la main garde la lame performante plus longtemps.',
    ],
  },
  {
    slug: 'yourcasa-poubelle-cuisine',
    title: 'Poubelle de Cuisine à Poignée Ergonomique — 5 L',
    excerpt:
      'Petit composteur de comptoir avec couvercle, cuve de 5 L compatible lave-vaisselle, filtre anti-odeurs et tamis intérieur pour égoutter les déchets avant la collecte.',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-09',
    image: '/images/yourcasa-poubelle-cuisine.jpg',
    content: [
      'Petit composteur de comptoir avec couvercle, cuve de 5 L compatible lave-vaisselle, filtre anti-odeurs et tamis intérieur pour égoutter les déchets avant la collecte.',
      'Ce que la fiche produit ne dit pas toujours : Le filtre anti-odeurs limite les mauvaises surprises mais s\'use avec le temps — pensez à vérifier régulièrement son état si vous vous en servez tous les jours.',
    ],
  },
  {
    slug: 'rivierabar-reducteur-biodechets',
    title: 'Réducteur de Biodéchets — 550 W, Cuve 3 L',
    excerpt:
      'Composteur électrique de cuisine, cuve amovible de 3 L compatible lave-vaisselle, couvercle imitation bambou, cycle automatique de 4 à 8h pour réduire le…',
    category: 'Maison',
    subcategory: 'Cuisine',
    readingTime: 2,
    date: '2026-04-06',
    image: '/images/rivierabar-reducteur-biodechets.jpg',
    content: [
      'Composteur électrique de cuisine, cuve amovible de 3 L compatible lave-vaisselle, couvercle imitation bambou, cycle automatique de 4 à 8h pour réduire le volume des déchets alimentaires.',
      'Reste un bémol : Le cycle de 4 à 8h consomme de l\'électricité à chaque utilisation : mieux vaut attendre que la cuve soit pleine plutôt que de lancer un cycle pour de petites quantités.',
    ],
  },
  {
    slug: 'l40s-pro-ultra',
    title: 'Dreame L20 Ultra',
    excerpt:
      '19 000 Pa d\'aspiration annoncés et une station tout-en-un qui vide le bac, lave les serpillières et les sèche.',
    category: 'Maison',
    subcategory: 'Entretiens',
    readingTime: 2,
    date: '2026-04-03',
    image: '/images/dreame-l40s-pro-ultra.jpg',
    content: [
      '19 000 Pa d\'aspiration annoncés et une station tout-en-un qui vide le bac, lave les serpillières et les sèche. C\'est le modèle qui a fait passer la gamme L40 d\'environ 11 000 Pa à un niveau nettement supérieur, en récupérant au passage la station de la gamme du dessus.',
      'Le seul vrai défaut : Au-delà de 15 000 Pa, le gain se joue surtout sur les tapis épais et les poils d\'animaux ; sur du carrelage la différence est faible. Regardez surtout la station et l\'anti-enchevêtrement.',
    ],
  },
  {
    slug: 'qrevo-s-pro',
    title: 'Qrevo S Pro',
    excerpt:
      '18 500 Pa annoncés, brosse latérale anti-enchevêtrement, et surtout une station qui lave les serpillières à 75 °C puis les sèche à l\'air chaud à 45 °C.',
    category: 'Maison',
    subcategory: 'Entretiens',
    readingTime: 2,
    date: '2026-03-31',
    image: '/images/roborock-qrevo-s-pro.jpg',
    content: [
      '18 500 Pa annoncés, brosse latérale anti-enchevêtrement, et surtout une station qui lave les serpillières à 75 °C puis les sèche à l\'air chaud à 45 °C. C\'est le détail qui évite l\'odeur de serpillière humide au bout de deux semaines. Évitement d\'obstacles et cartographie multi-étages complètent le tableau.',
      'Sur le papier c\'est séduisant ; dans les faits : Le lavage à haute température et le séchage sont ce qui justifie le surcoût face aux modèles d\'entrée de gamme, bien plus que les pascals affichés.',
    ],
  },
  {
    slug: 'roomba-plus-415-combo-base-autowash',
    title: 'iRobot Roomba Combo + base AutoWash',
    excerpt:
      '20 000 Pa d\'aspiration et deux patins rotatifs DualClean à 200 tours/minute, avec un mode SmartScrub qui appuie davantage sur les taches récalcitrantes.',
    category: 'Maison',
    subcategory: 'Entretiens',
    readingTime: 2,
    date: '2026-03-28',
    image: '/images/irobot-roomba-plus-415-combo.jpg',
    content: [
      '20 000 Pa d\'aspiration et deux patins rotatifs DualClean à 200 tours/minute, avec un mode SmartScrub qui appuie davantage sur les taches récalcitrantes. La base AutoWash vide le bac, lave puis sèche les patins à 45 °C après chaque cycle — iRobot annonce jusqu\'à trois mois sans intervention. Navigation LiDAR ClearView avec trois cartes personnalisables.',
      'Le point à retenir : Le tarif public de 499 € tombe régulièrement autour de 319 €. À ce prix la station complète devient très intéressante ; au prix fort, la concurrence chinoise offre plus pour moins.',
    ],
  },
  {
    slug: 'robot-vacuum-x20',
    title: 'Robot Vacuum X20+',
    excerpt:
      'L\'entrée de gamme sérieuse : 6 000 Pa, serpillières relevables pour ne pas mouiller les tapis, et une station tout-en-un qui vide le bac de 350 ml en dix…',
    category: 'Maison',
    subcategory: 'Entretiens',
    readingTime: 2,
    date: '2026-03-25',
    image: '/images/xiaomi-robot-vacuum-x20-plus.jpg',
    content: [
      'L\'entrée de gamme sérieuse : 6 000 Pa, serpillières relevables pour ne pas mouiller les tapis, et une station tout-en-un qui vide le bac de 350 ml en dix secondes avec un sac tenant jusqu\'à 75 jours. Évitement d\'obstacles et pilotage par l\'app Xiaomi Home, souvent autour de 300 €.',
      'À garder en tête : 6 000 Pa, c\'est trois fois moins que le haut de gamme — sur moquette épaisse ça se sent. Sur du carrelage et du parquet dans un logement de taille moyenne, c\'est largement suffisant, et le vidage automatique reste le vrai confort.',
    ],
  },
  {
    slug: 'cocorrina-diffuseur-parfum-maison',
    title: 'Diffuseur Parfum Maison',
    excerpt:
      'Diffuseur par bâtonnets (reed diffuser) de 200 ml, sans électricité ni pile : le parfum remonte le long de 8 bâtonnets en coton et se diffuse passivement dans la pièce.',
    category: 'Maison',
    subcategory: 'Bien-être',
    readingTime: 2,
    date: '2026-03-22',
    image: '/images/cocorrina-diffuseur-parfum-maison.jpg',
    content: [
      'Diffuseur par bâtonnets (reed diffuser) de 200 ml, sans électricité ni pile : le parfum remonte le long de 8 bâtonnets en coton et se diffuse passivement dans la pièce. Une trentaine de senteurs disponibles, environ 90 jours de diffusion annoncés, flacon en verre avec fleurs séchées incluses.',
      'En clair : Ce n\'est pas un objet connecté, ni même électrique : un simple diffuseur par bâtonnets, malgré sa place dans une sélection « maison connectée ». Il fait le job (4,4/5 sur plus de 2 500 avis) mais ne pilotez rien depuis votre téléphone ici.',
    ],
  },
  {
    slug: 'dreo-humidificateur-silencieux-3l',
    title: 'Humidificateur Silencieux 3L',
    excerpt:
      'Réservoir 3 L à remplissage par le haut, brume froide ultrasonique à 250 ml/h via une buse rotative à 360°, jusqu\'à 30 heures d\'autonomie en mode sommeil et…',
    category: 'Maison',
    subcategory: 'Bien-être',
    readingTime: 2,
    date: '2026-03-19',
    image: '/images/dreo-humidificateur-silencieux-3l.jpg',
    content: [
      'Réservoir 3 L à remplissage par le haut, brume froide ultrasonique à 250 ml/h via une buse rotative à 360°, jusqu\'à 30 heures d\'autonomie en mode sommeil et une couverture annoncée de 28 m². Capteur d\'humidité automatique, 26 dB en fonctionnement silencieux, diffuseur d\'huiles essentielles intégré et veilleuse.',
      'Le vrai arbitrage : Malgré le capteur d\'humidité automatique, il n\'y a ni Wi-Fi ni application : le pilotage reste entièrement sur l\'appareil. À 34 €, c\'est un bon humidificateur classique, pas un objet connecté.',
    ],
  },
  {
    slug: 'levoit-purificateur-air-core-200s',
    title: 'Purificateur d\'Air Core 200S',
    excerpt:
      'Purificateur d\'air avec filtre HEPA à 99,97 % d\'efficacité de filtration annoncée (testé par un laboratoire indépendant sur des particules en suspension de 0,1…',
    category: 'Maison',
    subcategory: 'Bien-être',
    readingTime: 2,
    date: '2026-03-16',
    image: '/images/levoit-purificateur-air-core-200s.jpg',
    content: [
      'Purificateur d\'air avec filtre HEPA à 99,97 % d\'efficacité de filtration annoncée (testé par un laboratoire indépendant sur des particules en suspension de 0,1 à 0,3 µm : pollen, poussière, squames animales, spores de moisissures). Fonctionnement à 7 W, 3 vitesses, éponge intégrée pour diffuser une huile essentielle. Format compact pensé pour une chambre ou un bureau.',
      'Ce qui compte avant d\'acheter : La fiche Amazon ne mentionne aucune connectivité Wi-Fi ni compatibilité Alexa pour ce modèle : le pilotage semble se faire uniquement via les boutons de l\'appareil. À vérifier avant achat si le contrôle à distance est important pour vous.',
    ],
  },
  {
    slug: 'vosker-vkx-camera-surveillance-exterieure',
    title: 'Camera Surveillance Extérieure 4G Solaire',
    excerpt:
      'Caméra autonome sans Wi-Fi ni électricité : carte SIM 4G incluse, batterie 14 000 mAh rechargée par le panneau solaire fourni, jusqu\'à 6 mois d\'autonomie même…',
    category: 'Maison',
    subcategory: 'Sécurités',
    readingTime: 2,
    date: '2026-03-13',
    image: '/images/vosker-vkx-camera-surveillance-exterieure.jpg',
    content: [
      'Caméra autonome sans Wi-Fi ni électricité : carte SIM 4G incluse, batterie 14 000 mAh rechargée par le panneau solaire fourni, jusqu\'à 6 mois d\'autonomie même par temps nuageux. Boîtier IP65, vision nocturne jusqu\'à 30 m, détection de mouvement avec clip de 15 secondes envoyé sur l\'application, installation en 5 minutes sur un poteau.',
      'Le bémol : L\'essai de 7 jours est gratuit, mais il faut ensuite un forfait data payant pour continuer à recevoir les alertes — un coût récurrent qui ne saute pas aux yeux sur la fiche produit. Idéale pour un terrain isolé sans réseau Wi-Fi, pas pour remplacer une caméra classique près de la maison.',
    ],
  },
  {
    slug: 'smart-lock-ultra',
    title: 'Smart Lock Ultra',
    excerpt:
      'Le renouvellement complet de la gamme : nouveau moteur trois fois plus rapide, format le plus compact jamais proposé par Nuki, et surtout un cylindre universel…',
    category: 'Maison',
    subcategory: 'Sécurités',
    readingTime: 2,
    date: '2026-03-10',
    image: '/images/nuki-smart-lock-ultra.jpg',
    content: [
      'Le renouvellement complet de la gamme : nouveau moteur trois fois plus rapide, format le plus compact jamais proposé par Nuki, et surtout un cylindre universel fourni d\'office pour garantir la compatibilité avec la plupart des portes européennes. Wi-Fi intégré pour l\'accès à distance, déverrouillage automatique et mode nuit, avec une recharge complète en 2 heures directement sur la porte via le câble fourni.',
      'Où ça coince : Le cylindre universel inclus règle le problème de compatibilité qui faisait l\'essentiel des retours sur l\'ancien 3.0 Pro. Reste que c\'est un investissement : 349 €, nettement au-dessus de l\'entrée de gamme des serrures connectées.',
    ],
  },
  {
    slug: 'imou-2k-camera-interieure',
    title: 'Ranger 2C — caméra de surveillance WiFi 2K',
    excerpt:
      'Résolution 2K (3 Mpx) avec un objectif 118° et une rotation motorisée 355° à l\'horizontale et 80° à la verticale pour une couverture à 360° sans angle mort.',
    category: 'Maison',
    subcategory: 'Sécurités',
    readingTime: 2,
    date: '2026-03-07',
    image: '/images/imou-2k-camera-interieure.jpg',
    content: [
      'Résolution 2K (3 Mpx) avec un objectif 118° et une rotation motorisée 355° à l\'horizontale et 80° à la verticale pour une couverture à 360° sans angle mort. La détection humaine par IA distingue les vraies présences pour limiter les fausses alertes, et le micro/haut-parleur intégrés déclenchent aussi une alerte sur les pleurs de bébé ou les aboiements. Vision nocturne jusqu\'à 10 m, stockage sur carte microSD (jusqu\'à 512 Go) ou cloud Imou, compatible Alexa, et garantie constructeur de 3 ans. Best-seller Amazon n°1 de sa catégorie avec plus de 52 000 avis à 4,4/5.',
      'Elle ne fonctionne qu\'en WiFi 2,4 GHz — pas de 5 GHz, c\'est écrit noir sur blanc dans la fiche — et une partie des avis vérifiés signale des pertes de connexion occasionnelles avec l\'application. À ce prix ça reste largement acceptable, mais ce n\'est pas une caméra professionnelle sans faille.',
    ],
  },
  {
    slug: 'kingfom-organisateur-bureau',
    title: 'Organisateur de Bureau 4 Compartiments (Marron)',
    excerpt:
      'Organisateur de bureau habillé de cuir PU, intérieur et fond en flanelle douce, imperméable et anti-humidité.',
    category: 'Maison',
    subcategory: 'Bureau',
    readingTime: 2,
    date: '2026-03-04',
    image: '/images/kingfom-organisateur-bureau.jpg',
    content: [
      'Organisateur de bureau habillé de cuir PU, intérieur et fond en flanelle douce, imperméable et anti-humidité. Grande capacité de rangement pour calculatrice, agrafeuse, stylos, ciseaux, télécommande et téléphone.',
      'La nuance : La flanelle intérieure protège bien les objets fragiles (lunettes, téléphone) des rayures, mais pensez à essuyer le cuir PU régulièrement pour qu\'il ne se dessèche pas avec le temps.',
    ],
  },
  {
    slug: 'teslyar-organisateur-bureau-bois',
    title: 'Organisateur de Bureau en Bois — Support Téléphone et Montre',
    excerpt:
      'Organisateur de bureau en bois massif (26,5 x 15 x 18,5 cm), finition brun naturel, avec emplacements dédiés pour téléphone, montre, lunettes, clés et…',
    category: 'Maison',
    subcategory: 'Bureau',
    readingTime: 2,
    date: '2026-03-01',
    image: '/images/teslyar-organisateur-bureau-bois.jpg',
    content: [
      'Organisateur de bureau en bois massif (26,5 x 15 x 18,5 cm), finition brun naturel, avec emplacements dédiés pour téléphone, montre, lunettes, clés et portefeuille — une station d\'accueil pour garder l\'essentiel à portée de main.',
      'Avant de craquer : Le veinage et la teinte du bois varient légèrement d\'une pièce à l\'autre puisque chaque bloc est façonné dans du bois naturel — un aspect artisanal à accepter plutôt qu\'un défaut.',
    ],
  },
  {
    slug: 'epson-ecotank-et-2862',
    title: 'EcoTank ET-2862 — Imprimante à Réservoirs d\'Encre',
    excerpt:
      'Imprimante Wi-Fi tout-en-un (impression, copie, numérisation) au format A4, livrée avec l\'équivalent de trois ans d\'encre.',
    category: 'Maison',
    subcategory: 'Bureau',
    readingTime: 2,
    date: '2026-02-26',
    image: '/images/epson-ecotank-et-2862.jpg',
    content: [
      'Imprimante Wi-Fi tout-en-un (impression, copie, numérisation) au format A4, livrée avec l\'équivalent de trois ans d\'encre. Le système de réservoirs rechargeables permet de réduire jusqu\'à 90 % le coût de l\'encre par rapport aux cartouches classiques.',
      'Le compromis : L\'intérêt de l\'EcoTank se joue sur la durée : l\'investissement de départ est un peu plus élevé qu\'une imprimante à cartouches classique, mais il se rentabilise vite si vous imprimez régulièrement.',
    ],
  },
  {
    slug: 'netatmo-station-meteo',
    title: 'Station Météo ORIGINAL',
    excerpt:
      'Module intérieur et extérieur pour suivre 12 données en temps réel : température, humidité, qualité de l\'air, CO₂, pression, indice UV, pollens.',
    category: 'Extérieur',
    subcategory: 'Autres',
    readingTime: 2,
    date: '2026-02-23',
    image: '/images/netatmo-station-meteo.jpg',
    content: [
      'Module intérieur et extérieur pour suivre 12 données en temps réel : température, humidité, qualité de l\'air, CO₂, pression, indice UV, pollens. Historique détaillé dans l\'application, alertes personnalisables (risque de gel, pic de CO₂), compatible Apple Home, Alexa et Google Assistant. Alimentation par piles AAA.',
      'Ce qu\'on oublie de préciser sur la fiche produit : 3,4/5 sur 135 avis, la note la plus basse de toute la sélection Extérieur — un signal à prendre au sérieux avant de mettre 170 € sur la table. Vérifiez les avis récents avant d\'acheter.',
    ],
  },
  {
    slug: 'greensun-prise-connectee-wifi-exterieure',
    title: 'Prise Connectée WiFi Extérieure',
    excerpt:
      'Prise extérieure IP44 (16 A, 230 V) pilotable via l\'application Smart Life (Tuya), avec suivi de la consommation électrique en temps réel et génération de…',
    category: 'Extérieur',
    subcategory: 'Autres',
    readingTime: 2,
    date: '2026-02-20',
    image: '/images/greensun-prise-connectee-wifi-exterieure.jpg',
    content: [
      'Prise extérieure IP44 (16 A, 230 V) pilotable via l\'application Smart Life (Tuya), avec suivi de la consommation électrique en temps réel et génération de factures hebdomadaires estimées. Compatible Alexa et Google pour la commande vocale, programmation d\'horaires à distance.',
      'Elle passe par l\'appli Smart Life/Tuya, pas par une appli maison — pratique si vous avez déjà d\'autres objets Tuya, à vérifier sinon. Fonctionne uniquement en Wi-Fi 2,4 GHz, comme la quasi-totalité des prises connectées d\'entrée de gamme.',
    ],
  },
  {
    slug: 'philips-welcomeeye-wireless',
    title: 'WelcomeEye Wireless',
    excerpt:
      'Visiophone 100 % sans fil : la platine de rue fonctionne sur batterie rechargeable, sans perçage ni électricien, et le moniteur intérieur à écran tactile 7…',
    category: 'Extérieur',
    subcategory: 'Caméras',
    readingTime: 2,
    date: '2026-02-17',
    image: '/images/philips-welcomeeye-wireless.jpg',
    content: [
      'Visiophone 100 % sans fil : la platine de rue fonctionne sur batterie rechargeable, sans perçage ni électricien, et le moniteur intérieur à écran tactile 7 pouces se branche sur une simple prise secteur. Portée radio jusqu\'à 350 mètres, caméra Full HD 1080p avec vision nocturne infrarouge, carte SD 8 Go incluse pour enregistrer automatiquement les visites en votre absence, pilotage à distance via l\'application Philips WelcomeEye sans abonnement.',
      'Mon avis : Seulement 3,5/5 sur 74 avis — nettement en dessous des autres objets de la sélection. À 399,90 €, c\'est cher pour une note aussi moyenne : à réserver à ceux qui veulent vraiment éviter les travaux d\'un visiophone filaire.',
    ],
  },
  {
    slug: 'sunseeker-s4-robot-tondeuse',
    title: 'S4 — Robot Tondeuse sans Fil Périphérique pour 1000 m²',
    excerpt:
      'Robot tondeuse sans fil périphérique — pas besoin d\'enterrer de câble de délimitation.',
    category: 'Extérieur',
    subcategory: 'Jardins',
    readingTime: 2,
    date: '2026-02-14',
    image: '/images/sunseeker-s4-robot-tondeuse.jpg',
    content: [
      'Robot tondeuse sans fil périphérique — pas besoin d\'enterrer de câble de délimitation. La navigation combine un LiDAR 360° et une caméra de vision par IA pour cartographier automatiquement le jardin, détecter les obstacles (jouets, tuyaux, animaux) et gérer plusieurs zones distinctes jusqu\'à 1000 m² au total. Pilotage complet depuis l\'application, avec programmation d\'horaires par zone.',
      'Pour trancher : Le tout sans fil périphérique simplifie beaucoup l\'installation par rapport aux modèles à câble enterré, mais la précision de la cartographie LiDAR dépend d\'un jardin pas trop encombré en hauteur (haies denses, obstacles mobiles) — à vérifier sur des avis récents avant d\'investir sur un terrain compliqué.',
    ],
  },
  {
    slug: 'zenitech-bloc-etanche-ip44',
    title: 'Bloc étanche IP44 — 5 Prises 16A',
    excerpt:
      'Multiprise 5 prises avec interrupteur, clapets de protection contre l\'eau et la poussière (IP44), pensée pour un usage extérieur (jardin, terrasse, atelier).',
    category: 'Extérieur',
    subcategory: 'Jardins',
    readingTime: 2,
    date: '2026-02-11',
    image: '/images/zenitech-bloc-etanche-ip44.jpg',
    content: [
      'Multiprise 5 prises avec interrupteur, clapets de protection contre l\'eau et la poussière (IP44), pensée pour un usage extérieur (jardin, terrasse, atelier). Câble H05RR-F 3G1,5 mm² d\'environ 1,5 m, 2P+T, 16 A.',
      'Le détail qui change tout : L\'indice IP44 protège des éclaboussures et de la poussière, pas d\'une immersion complète : à réserver à un usage abrité (sous un auvent, une terrasse couverte), pas posé à même le sol détrempé. Le câble de 1,5 m est court — prévoyez une rallonge si la prise murale la plus proche est éloignée.',
    ],
  },
  {
    slug: 'govee-guirlande-lumineuse-exterieure',
    title: 'Guirlande Lumineuse d\'Extérieur Intelligente',
    excerpt:
      '30 mètres de LED RGBICW étanches IP65, chaque ampoule pilotable individuellement pour des effets multicolores.',
    category: 'Extérieur',
    subcategory: 'Lumières',
    readingTime: 2,
    date: '2026-02-08',
    image: '/images/govee-guirlande-lumineuse-exterieure.jpg',
    content: [
      '30 mètres de LED RGBICW étanches IP65, chaque ampoule pilotable individuellement pour des effets multicolores. 47 modes de scène et 16 millions de couleurs via l\'application Govee Home, compatible Alexa et Google Assistant. Résiste de -20 °C à 60 °C, durée de vie annoncée de 25 000 heures.',
      'À vérifier avant de commander : Classe énergétique G affichée noir sur blanc par Amazon — clairement pas l\'option la plus économe en électricité. Le prix descend régulièrement à 97 € en promotion contre 130 € affichés : mieux vaut guetter une baisse avant d\'acheter.',
    ],
  },
  {
    slug: 'feandrea-arbre-a-chat',
    title: 'Arbre à Chat — 137,7 cm, Multi-Niveaux',
    excerpt:
      'Arbre à chat haut de 137,7 cm avec plusieurs plateformes, griffoirs en sisal et niches pour se cacher.',
    category: 'Animalerie',
    subcategory: 'Chat',
    readingTime: 2,
    date: '2026-02-05',
    image: '/images/feandrea-arbre-a-chat.jpg',
    content: [
      'Arbre à chat haut de 137,7 cm avec plusieurs plateformes, griffoirs en sisal et niches pour se cacher. Base large et lestée pour la stabilité, structure pensée pour les foyers avec plusieurs chats.',
      'Le revers de la médaille : Le montage prend facilement 30 à 45 minutes à deux — prévoir le temps et l\'espace nécessaires avant de commander, surtout pour un modèle aussi haut.',
    ],
  },
  {
    slug: 'oneisall-distributeur-croquettes-chat',
    title: 'Distributeur de Croquettes Automatique WiFi',
    excerpt:
      'Distributeur automatique piloté par WiFi 2,4 GHz : programmation des repas à distance depuis l\'application, portions ajustables, idéal pour garder un rythme…',
    category: 'Animalerie',
    subcategory: 'Chat',
    readingTime: 2,
    date: '2026-02-02',
    image: '/images/oneisall-distributeur-croquettes-chat.jpg',
    content: [
      'Distributeur automatique piloté par WiFi 2,4 GHz : programmation des repas à distance depuis l\'application, portions ajustables, idéal pour garder un rythme régulier même en cas d\'absence.',
      'Un point de vigilance : Comme la quasi-totalité des objets connectés animaliers, il ne fonctionne qu\'en WiFi 2,4 GHz — à vérifier avant achat si votre box ne diffuse qu\'en 5 GHz par défaut.',
    ],
  },
  {
    slug: 'generique-fontaine-a-eau-chat',
    title: 'Fontaine à Eau Chat sans Fil — 2,6 L',
    excerpt:
      'Fontaine à eau de 2,6 L en inox avec détecteur de mouvement : elle se déclenche à l\'approche de l\'animal plutôt que de couler en continu, sur batterie…',
    category: 'Animalerie',
    subcategory: 'Chat',
    readingTime: 2,
    date: '2026-01-30',
    image: '/images/generique-fontaine-a-eau-chat.jpg',
    content: [
      'Fontaine à eau de 2,6 L en inox avec détecteur de mouvement : elle se déclenche à l\'approche de l\'animal plutôt que de couler en continu, sur batterie rechargeable sans fil à brancher. Fonctionnement silencieux, adaptée aussi aux chiens.',
      'Sans fil signifie aussi qu\'il faut penser à recharger la batterie régulièrement — un rappel dans l\'application ou l\'agenda évite la panne sèche surprise.',
    ],
  },
  {
    slug: 'dr-jieer-collier-chat-anti-etranglement',
    title: 'Collier Chat Anti-Étranglement — lot de 6',
    excerpt:
      'Lot de 6 colliers réglables avec boucle de sécurité qui s\'ouvre automatiquement en cas de traction excessive, pour éviter l\'étranglement si le chat reste coincé.',
    category: 'Animalerie',
    subcategory: 'Chat',
    readingTime: 2,
    date: '2026-01-27',
    image: '/images/dr-jieer-collier-chat-anti-etranglement.jpg',
    content: [
      'Lot de 6 colliers réglables avec boucle de sécurité qui s\'ouvre automatiquement en cas de traction excessive, pour éviter l\'étranglement si le chat reste coincé. Grelot inclus pour repérer l\'animal.',
      'Dernier point : Le lot de 6 est surtout utile si vous avez plusieurs chats ou voulez des couleurs de rechange — pour un seul chat, un lot plus petit suffit largement.',
    ],
  },
  {
    slug: 'candure-brosse-chien-chat',
    title: 'Brosse de Toilettage Professionnelle — Chien et Chat',
    excerpt:
      'Brosse de toilettage double face : un côté à picots métalliques pour démêler, l\'autre plus doux pour lisser le poil, avec un bouton d\'éjection en un clic pour…',
    category: 'Animalerie',
    subcategory: 'Chat',
    readingTime: 2,
    date: '2026-01-24',
    image: '/images/candure-brosse-chien-chat.jpg',
    content: [
      'Brosse de toilettage double face : un côté à picots métalliques pour démêler, l\'autre plus doux pour lisser le poil, avec un bouton d\'éjection en un clic pour retirer les poils accumulés. Convient aussi bien au chien qu\'au chat, poil court ou long.',
      'Ce que la fiche produit ne dit pas toujours : Les picots métalliques sont efficaces sur les sous-poils mais peuvent tirer sur un pelage très fin ou une peau sensible — à utiliser en douceur les premières fois pour habituer l\'animal.',
    ],
  },
  {
    slug: 'xben-gamelle-chien-surelevee',
    title: 'Gamelle Chien Surélevée — 5 hauteurs ajustables',
    excerpt:
      'Gamelle surélevée en inox avec 5 hauteurs réglables pour s\'adapter à la taille du chien en grandissant ou selon la race.',
    category: 'Animalerie',
    subcategory: 'Chien',
    readingTime: 2,
    date: '2026-01-21',
    image: '/images/xben-gamelle-chien-surelevee.jpg',
    content: [
      'Gamelle surélevée en inox avec 5 hauteurs réglables pour s\'adapter à la taille du chien en grandissant ou selon la race. Pieds antidérapants, bols amovibles pour un nettoyage facile.',
      'Reste un bémol : Une gamelle trop haute peut être aussi inconfortable qu\'une gamelle trop basse — mieux vaut ajuster progressivement la hauteur plutôt que de viser directement le réglage maximal.',
    ],
  },
  {
    slug: 'eheyciga-panier-chien-orthopedique',
    title: 'Panier Chien Orthopédique — 112 x 81 x 16,5 cm',
    excerpt:
      'Grand panier orthopédique en mousse à mémoire de forme (112 x 81 x 16,5 cm), housse lavable en machine, pensé pour soulager les articulations des chiens de…',
    category: 'Animalerie',
    subcategory: 'Chien',
    readingTime: 2,
    date: '2026-01-18',
    image: '/images/eheyciga-panier-chien-orthopedique.jpg',
    content: [
      'Grand panier orthopédique en mousse à mémoire de forme (112 x 81 x 16,5 cm), housse lavable en machine, pensé pour soulager les articulations des chiens de grande taille ou seniors.',
      'Le seul vrai défaut : Une housse lavable en machine ne veut pas toujours dire que la mousse intérieure résiste bien à un lavage complet — mieux vaut vérifier les instructions d\'entretien avant un accident du quotidien.',
    ],
  },
  {
    slug: 'eagloo-harnais-anti-traction-chien',
    title: 'Harnais Anti-Traction Chien — Noir, Taille L',
    excerpt:
      'Harnais anti-traction avec poignée de contrôle sur le dessus, bandes réfléchissantes pour les sorties en soirée, et maille respirante pour le confort en été.',
    category: 'Animalerie',
    subcategory: 'Chien',
    readingTime: 2,
    date: '2026-01-15',
    image: '/images/eagloo-harnais-anti-traction-chien.jpg',
    content: [
      'Harnais anti-traction avec poignée de contrôle sur le dessus, bandes réfléchissantes pour les sorties en soirée, et maille respirante pour le confort en été. Réglable, pensé pour les chiens moyens à grands.',
      'Sur le papier c\'est séduisant ; dans les faits : La taille L reste spécifique à une gamme de gabarits — mieux vaut vérifier le tableau des mesures du vendeur avant de commander plutôt que de se fier seulement à la lettre de taille.',
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
