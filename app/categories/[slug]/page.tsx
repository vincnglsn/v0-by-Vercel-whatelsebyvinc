import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Newsletter } from '@/components/newsletter'
import { categories, getArticlesByCategoryName, getCategoryBySlug, type Article } from '@/lib/content'

const siteUrl = 'https://whatelsebyvinc.com'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function groupBySubcategory(articles: Article[]) {
  const noSubcategory: Article[] = []
  const bySubcategory = new Map<string, Article[]>()

  for (const article of articles) {
    if (!article.subcategory) {
      noSubcategory.push(article)
      continue
    }
    if (!bySubcategory.has(article.subcategory)) {
      bySubcategory.set(article.subcategory, [])
    }
    bySubcategory.get(article.subcategory)!.push(article)
  }

  return { noSubcategory, subcategoryGroups: [...bySubcategory.entries()] }
}

function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/guides/${article.slug}`}
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" />
                {article.readingTime} min
              </span>
            </div>
            <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-card-foreground group-hover:text-primary">
              {article.title}
            </h3>
            <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}

  const url = `${siteUrl}/categories/${category.slug}`

  return {
    title: `${category.name} — ${category.tagline}`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${category.name} — ${category.tagline}`,
      description: category.description,
      images: [{ url: category.image, width: 1200, height: 630, alt: category.name }],
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const categoryArticles = getArticlesByCategoryName(category.name)
  const { subcategoryGroups } = groupBySubcategory(categoryArticles)
  const url = `${siteUrl}/categories/${category.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: `${category.name} — ${category.tagline}`,
        description: category.description,
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: category.name, item: url },
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
        <section className="border-b border-border/60 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <nav aria-label="Fil d'ariane" className="text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground">{category.name}</li>
              </ol>
            </nav>
            <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-primary">{category.tagline}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          {categoryArticles.length > 0 ? (
            <div className="space-y-16">
              {subcategoryGroups.map(([subcategory, articles]) => (
                <div key={subcategory}>
                  <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border/60 pb-3">
                    <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                      {subcategory}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {articles.length} {articles.length > 1 ? 'objets' : 'objet'}
                    </span>
                  </div>
                  <ArticleGrid articles={articles} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              Les premiers tests de cette catégorie arrivent bientôt.
            </p>
          )}
        </section>

        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}
