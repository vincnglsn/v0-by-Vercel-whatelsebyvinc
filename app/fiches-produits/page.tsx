import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BlogSection } from '@/components/blog-section'

export const metadata = {
  title: 'Fiches Produits et Objets Traités',
  description: 'Découvrez tous les objets traités, testés et sélectionnés.',
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
