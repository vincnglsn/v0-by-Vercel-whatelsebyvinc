'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Search, Filter } from 'lucide-react'
import { articles, categories } from '@/lib/content'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function BlogSectionInner() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [search, setSearch] = useState(initialQuery);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearch(q);
  }, [searchParams]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchesCategory =
        selectedCategory === 'all' || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  const featured = filteredArticles.find((a) => a.featured) ?? filteredArticles[0]
  const rest = filteredArticles.filter((a) => a.slug !== featured?.slug)

  return (
    <section id="blog" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Fiches produits et objets traités
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des fiches détaillées, écrites après un vrai usage. C&apos;est ici que
              se trouve le détail que la grille Pinterest ne montre pas.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-64"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-10 w-full appearance-none rounded-md border border-input bg-background pl-9 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-48"
              >
                <option value="all">Toutes les catégories</option>
                {categories.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="mt-12 py-12 text-center text-muted-foreground">
            Aucun produit ne correspond à votre recherche.
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Featured article */}
            {featured && (
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <Link href={/guides/ + featured.slug} className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {featured.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      À la une
                    </span>
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">{featured.category}</span>
                    <span aria-hidden>•</span>
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span aria-hidden>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {featured.readingTime} min
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-card-foreground">
                    <Link href={/guides/ + featured.slug} className="hover:text-primary">
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <Link
                    href={/guides/ + featured.slug}
                    className="mt-5 inline-flex text-sm font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
                  >
                    Lire le test complet
                  </Link>
                </div>
              </article>
            )}

            {/* List of remaining articles */}
            <div className="flex flex-col divide-y divide-border">
              {rest.map((article) => (
                <article key={article.slug} className="group flex gap-4 py-5 first:pt-0">
                  <Link
                    href={/guides/ + article.slug}
                    className="relative hidden aspect-square w-28 shrink-0 overflow-hidden rounded-xl sm:block"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-primary">{article.category}</span>
                      <span aria-hidden>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {article.readingTime} min
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-serif text-lg font-semibold leading-snug text-card-foreground">
                      <Link href={/guides/ + article.slug} className="hover:text-primary">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


export function BlogSection() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Chargement...</div>}>
      <BlogSectionInner />
    </Suspense>
  )
}
