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
                What Else
              </span>
              <span className="text-sm font-medium text-primary">by Vinc</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Objets high-tech et maison connectée, testés depuis le Vaucluse.
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
          <p>© {new Date().getFullYear()} What Else by Vinc. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-foreground">Mentions légales</a>
            <a href="#" className="hover:text-foreground">Politique de confidentialité</a>
            <a href="/#a-propos" className="hover:text-foreground">Politique d&apos;affiliation</a>
          </div>
        </div>
        <div className="mt-4 flex justify-center sm:justify-end">
          <VisitCounter />
        </div>
      </div>
    </footer>
  )
}
