import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { AboutSection } from '@/components/about-section'
import { BlogSection } from '@/components/blog-section'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'
import { articles, categories } from '@/lib/content'

const siteUrl = 'https://whatelsebyvinc.com'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'What Else by Vinc',
      description:
        'Objets high-tech et maison connectée testés et sélectionnés depuis le Vaucluse.',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#vinc`,
      name: 'Vinc',
      description:
        'Passionné d\'objets high-tech et de matériel pour la maison connectée, basé dans le Vaucluse.',
    },
    ...categories.map((cat) => ({
      '@type': 'CollectionPage',
      name: `${cat.name} — ${cat.tagline}`,
      description: cat.description,
      url: `${siteUrl}/#${cat.slug}`,
    })),
    ...articles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      articleSection: article.category,
      author: { '@id': `${siteUrl}/#vinc` },
    })),
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
        <Hero />
        <Categories />
        <AboutSection />
        <BlogSection />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}
