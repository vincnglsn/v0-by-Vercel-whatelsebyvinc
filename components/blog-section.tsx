import Image from 'next/image'
import { Clock } from 'lucide-react'
import { articles } from '@/lib/content'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function BlogSection() {
  const featured = articles.find((a) => a.featured) ?? articles[0]
  const rest = articles.filter((a) => a.slug !== featured.slug)

  return (
    <section id="blog" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Le blog&nbsp;: tests et guides d&apos;achat
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des avis détaillés, écrits après un vrai usage. C&apos;est ici que
              se trouve le détail que la grille Pinterest ne montre pas.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Featured article */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <a href="#blog" className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                À la une
              </span>
            </a>
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
                <a href="#blog" className="hover:text-primary">
                  {featured.title}
                </a>
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <a
                href="#blog"
                className="mt-5 inline-flex text-sm font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
              >
                Lire le test complet
              </a>
            </div>
          </article>

          {/* List of remaining articles */}
          <div className="flex flex-col divide-y divide-border">
            {rest.map((article) => (
              <article key={article.slug} className="group flex gap-4 py-5 first:pt-0">
                <a
                  href="#blog"
                  className="relative hidden aspect-square w-28 shrink-0 overflow-hidden rounded-xl sm:block"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">{article.category}</span>
                    <span aria-hidden>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {article.readingTime} min
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-serif text-lg font-semibold leading-snug text-card-foreground">
                    <a href="#blog" className="hover:text-primary">
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
