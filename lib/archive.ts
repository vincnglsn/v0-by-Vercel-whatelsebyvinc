export type ArchivedProduct = {
  slug: string
  title: string
  summary: string
  image: string
  affiliateUrl: string
  featuredFrom: string
  featuredUntil: string
}

// Les produits de la semaine passés. Ajouter une entrée à chaque changement de produit de la semaine.
export const archivedProducts: ArchivedProduct[] = []
