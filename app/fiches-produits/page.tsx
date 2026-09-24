import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BackButton } from '@/components/back-button'
import { BlogSection } from '@/components/blog-section'

export const metadata = {
  title: 'Fiches Produits et Objets Traités',
  description: 'Découvrez tous les objets traités et sélectionnés.',
}

export default function FichesProduitsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <BlogSection />
      </main>
      <SiteFooter />
    </>
  )
}
