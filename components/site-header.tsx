'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { label: 'High-Tech', href: '/#high-tech' },
  { label: 'Maison', href: '/#maison' },
  { label: 'Extérieur', href: '/#exterieur' },
  { label: 'Animalerie', href: '/#animalerie' },
  { label: 'Fiches Produits', href: '/fiches-produits' },
  { label: 'À propos', href: '/#a-propos' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Select
          </span>
          <span className="text-sm font-medium text-primary">de What Else by Vinc</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button render={<a href="/#newsletter" />} nativeButton={false} size="sm">
            S&apos;abonner
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-border/60 bg-background md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                render={<a href="/#newsletter" onClick={() => setOpen(false)} />}
                nativeButton={false}
                className="w-full"
              >
                S&apos;abonner
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
