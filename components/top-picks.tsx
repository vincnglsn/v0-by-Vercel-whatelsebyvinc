import Link from 'next/link'
import { Award } from 'lucide-react'
import { topPicks, categories } from '@/lib/content'

export function TopPicks() {
  return (
    <section className="border-b border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-background/70">
            <Award className="size-4" />
            La sélection du moment
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Si je devais n&apos;en garder que trois
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Pas de top 50 interminable. Juste les valeurs sûres que je
            recommanderais à un ami, catégorie par catégorie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {topPicks.map((pick, i) => (
            <div
              key={pick.product}
              className="flex flex-col rounded-2xl border border-background/15 bg-background/5 p-6"
            >
              <span className="font-serif text-5xl font-semibold text-background/25">
                0{i + 1}
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-background/60">
                {pick.name}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold">{pick.product}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-background/70">
                {pick.reason}
              </p>
              <Link 
                href={`/categories/${categories.find(c => c.name === pick.category)?.slug || ''}`}
                className="mt-4 inline-flex w-fit rounded-full bg-background/10 px-2.5 py-1 text-xs font-medium text-background/80 hover:bg-background/20 transition-colors"
              >
                {pick.category}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
