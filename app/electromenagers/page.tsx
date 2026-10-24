import { SITE_URL } from '@/lib/site'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { archivedProducts } from '@/lib/archive'

const siteUrl = SITE_URL

export const metadata: Metadata = {
  title: 'Électroménagers — produits de la semaine passés | Select de : What else by Vinc',
  description: 'Les anciens produits de la semaine, rangés dans la catégorie Électroménagers.',
  alternates: { canonical: `${siteUrl}/electromenagers` },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <nav aria-label="Fil d'ariane" className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Accueil
          </Link>
          <span aria-hidden> / Électroménagers</span>
        </nav>

        <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground">
          Électroménagers
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Les produits de la semaine passés, rangés ici après leur mise en avant sur la page d&apos;accueil.
        </p>

        {archivedProducts.length === 0 ? (
          <p className="mt-12 text-muted-foreground">Aucun produit archivé pour l&apos;instant.</p>
        ) : (
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {archivedProducts.map((product) => (
              <li key={product.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-square bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground">
                    Produit de la semaine du {formatDate(product.featuredFrom)} au{' '}
                    {formatDate(product.featuredUntil)}
                  </p>
                  <h2 className="mt-2 font-serif text-xl font-semibold text-foreground">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Voir sur Amazon
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
