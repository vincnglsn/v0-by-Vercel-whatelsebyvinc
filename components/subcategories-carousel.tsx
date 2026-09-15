'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Smartphone, Watch, Tv, Speaker, Laptop, Utensils, ChefHat, Sparkles, Heart, ShieldCheck, Briefcase, Plus, Camera, TreePine, Lightbulb, Cat, Dog } from 'lucide-react'

const subcategories = [
  { name: 'Téléphonie', icon: Smartphone },
  { name: 'Montres & bracelets connectés', icon: Watch },
  { name: 'TV & divertissement', icon: Tv },
  { name: 'Audio & enceintes', icon: Speaker },
  { name: 'PC & Portables', icon: Laptop },
  { name: 'Arts de la table', icon: Utensils },
  { name: 'Cuisine', icon: ChefHat },
  { name: 'Entretiens', icon: Sparkles },
  { name: 'Bien-être', icon: Heart },
  { name: 'Sécurités', icon: ShieldCheck },
  { name: 'Bureau', icon: Briefcase },
  { name: 'Caméras', icon: Camera },
  { name: 'Jardins', icon: TreePine },
  { name: 'Lumières', icon: Lightbulb },
  { name: 'Chat', icon: Cat },
  { name: 'Chien', icon: Dog },
  { name: 'Autres', icon: Plus },
]

export function SubcategoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="border-b border-border/60 bg-muted/10 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Explorer par catégories
          </h2>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              className="flex size-8 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:bg-muted"
              aria-label="Défiler vers la gauche"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex size-8 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:bg-muted"
              aria-label="Défiler vers la droite"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            ref={scrollRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-1"
          >
            {subcategories.map((sub) => {
              const Icon = sub.icon
              return (
                <Link
                  key={sub.name}
                  href={`/fiches-produits?q=${encodeURIComponent(sub.name)}`}
                  className="group flex w-[140px] shrink-0 snap-start flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4 text-center transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-sm font-medium leading-tight text-card-foreground">
                    {sub.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
