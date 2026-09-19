import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Mentions Légales',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Mentions Légales
        </h1>
        <div className="prose-content mt-8 space-y-6 text-muted-foreground">
          <h2 className="text-xl font-medium text-foreground">1. Éditeur du site</h2>
          <p>
            Le site <strong>Vinc Select</strong> (accessible sur select.whatelsebyvinc.com) est édité par Vinc (What Else by Vinc), situé dans le Vaucluse (France).
          </p>
          <h2 className="text-xl font-medium text-foreground">2. Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>
          <h2 className="text-xl font-medium text-foreground">3. Affiliation</h2>
          <p>
            Certains liens présents sur ce site (notamment vers des boutiques en ligne) sont des liens d'affiliation. Cela signifie que si vous effectuez un achat via ces liens, je touche une petite commission sans surcoût pour vous. Ces commissions aident à faire vivre le site.
          </p>
          <h2 className="text-xl font-medium text-foreground">4. Propriété intellectuelle</h2>
          <p>
            Sauf mention contraire, tous les textes et visuels (hors images constructeurs) présents sur le site sont la propriété de l'éditeur. Toute reproduction est interdite sans autorisation préalable.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}