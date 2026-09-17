'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const subcategories = [
  { name: 'Téléphonie', image: '/images/apple-iphone-17-pro-256-go.jpg' },
  { name: 'Montres & bracelets connectés', image: '/images/apple-watch-ultra-3.jpg' },
  { name: 'TV & divertissement', image: '/images/xiaomi-tv-f-65-pouces.jpg' },
  { name: 'Audio & enceintes', image: '/images/sonos-era-100.jpg' },
  { name: 'PC & Portables', image: '/images/asus-zenbook-14-ryzen7.jpg' },
  { name: 'Arts de la table', image: '/images/pure-living-service-de-table-24-pieces.jpg' },
  { name: 'Cuisine', image: '/images/kitchenaid-artisan.jpg' },
  { name: 'Entretiens', image: '/images/dreame-l40s-pro-ultra.jpg' },
  { name: 'Bien-être', image: '/images/levoit-purificateur-air-core-200s.jpg' },
  { name: 'Sécurités', image: '/images/nuki-smart-lock-ultra.jpg' },
  { name: 'Bureau', image: '/images/teslyar-organisateur-bureau-bois.jpg' },
  { name: 'Caméras', image: '/images/imou-2k-camera-interieure.jpg' },
  { name: 'Jardins', image: '/images/sunseeker-s4-robot-tondeuse.jpg' },
  { name: 'Lumières', image: '/images/govee-guirlande-lumineuse-exterieure.jpg' },
  { name: 'Chat', image: '/images/feandrea-arbre-a-chat.jpg' },
  { name: 'Chien', image: '/images/eheyciga-panier-chien-orthopedique.jpg' },
  { name: 'Autres', image: '/images/cat-maison.png' },
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
              return (
                <Link
                  key={sub.name}
                  href={`/fiches-produits?q=${encodeURIComponent(sub.name)}`}
                  className="group flex w-[140px] shrink-0 snap-start flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4 text-center transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-transparent transition-colors group-hover:border-primary">
                    <Image 
                      src={sub.image} 
                      alt={sub.name} 
                      fill 
                      sizes="64px" 
                      className="object-cover" 
                    />
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
