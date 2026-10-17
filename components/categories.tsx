import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/lib/content'

export function Categories() {
  return (
    <section id="categories" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Explorer par univers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Différents univers de produits, une seule promesse&nbsp;:
            des choix rigoureux, sans blabla marketing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              id={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`Objets connectés de la catégorie ${cat.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {cat.count} objets
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{cat.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Voir les articles
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
