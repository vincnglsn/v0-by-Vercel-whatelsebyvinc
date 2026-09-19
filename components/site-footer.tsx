import Link from 'next/link'
import { VisitCounter } from '@/components/visit-counter'

const footerNav = [
  {
    title: 'Univers',
    links: [
      { label: 'High-Tech', href: '/#high-tech' },
      { label: 'Maison', href: '/#maison' },
      { label: 'Extérieur', href: '/#exterieur' },
      { label: 'Animalerie', href: '/#animalerie' },
    ],
  },
  {
    title: 'Le site',
    links: [
      { label: 'Fiches Produits', href: '/fiches-produits' },
      { label: 'À propos', href: '/#a-propos' },
      { label: 'Newsletter', href: '/#newsletter' },
    ],
  },
  {
    title: 'Suivre',
    links: [
      { label: 'Pinterest', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-semibold text-foreground">
                Vinc
              </span>
              <span className="text-sm font-medium text-primary">Select</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Objets du quotidien, sélectionnés depuis le Vaucluse.
              Ce qui vaut le coup, et ce qui finit au fond d&apos;un tiroir.
            </p>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vinc Select. Tous droits réservés.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground sm:mt-0">
            <Link href="/mentions-legales" className="hover:text-foreground">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-foreground">Politique de confidentialité</Link>
            <Link href="/mentions-legales#affiliation" className="hover:text-foreground">Politique d'affiliation</Link>
          </div>
        </div>
        <div className="mt-4 flex justify-center sm:justify-end">
          <VisitCounter />
        </div>
      </div>
    </footer>
  )
}
