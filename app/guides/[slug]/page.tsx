import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BackButton } from '@/components/back-button'
import { Newsletter } from '@/components/newsletter'
import { Button } from '@/components/ui/button'
import {
  articles,
  getArticleBySlug,
  getArticlesByCategoryName,
  getCategoryBySlug,
  getCategorySlugByName,
} from '@/lib/content'

const siteUrl = 'https://whatelsebyvinc.com'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  const url = `${siteUrl}/guides/${article.slug}`

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const categorySlug = getCategorySlugByName(article.category)
  const category = getCategoryBySlug(categorySlug)
  const related = getArticlesByCategoryName(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  const url = `${siteUrl}/guides/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: `${siteUrl}${article.image}`,
        datePublished: article.date,
        articleSection: article.category,
        inLanguage: 'fr-FR',
        author: { '@id': `${siteUrl}/#vinc` },
        publisher: { '@id': `${siteUrl}/#vinc` },
        mainEntityOfPage: url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: article.category,
            item: `${siteUrl}/categories/${categorySlug}`,
          },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
          <BackButton />
          <nav aria-label="Fil d'ariane" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/categories/${categorySlug}`} className="hover:text-foreground">
                  {article.category}
                </Link>
              </li>
            </ol>
          </nav>

          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium text-primary">{article.category}</span>
            <span aria-hidden>•</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" />
              {article.readingTime} min de lecture
            </span>
          </div>

          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

                    <div className="mt-8 flex justify-center">
            <Button
              render={<a href={article.affiliateLink || `https://www.amazon.fr/s?k=${encodeURIComponent(article.title)}&tag=whatelsebyvin-21`} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="w-full sm:w-auto"
            >
              Voir le prix sur Amazon
            </Button>
          </div>

          <div className="prose-content mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <Button
              render={<Link href={`/categories/${categorySlug}`} />}
              nativeButton={false}
              variant="outline"
            >
              <ArrowLeft className="size-4" />
              Tous les articles {category ? category.name : article.category}
            </Button>
            <Button render={<Link href="/#newsletter" />} nativeButton={false}>
              Recevoir les prochains tests
            </Button>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border/60 bg-muted/30">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                À lire aussi dans {article.category}
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/guides/${a.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-semibold leading-snug text-card-foreground group-hover:text-primary">
                        {a.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {a.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}
