import { SITE_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { ProductOfTheWeek } from '@/components/product-of-the-week'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'

const siteUrl = SITE_URL

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Select de : What else by Vinc',
      description: 'Produit de la semaine sélectionné par Vinc, avec avis et questions fréquentes.',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#vinc`,
      name: 'Vinc',
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <ProductOfTheWeek />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}
