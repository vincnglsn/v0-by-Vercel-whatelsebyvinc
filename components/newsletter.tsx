'use client'

import { useState } from 'react'
import { Check, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail className="size-6" />
        </span>
        <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Les trouvailles, direct dans votre boîte mail
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Un mail par mois, jamais plus. Les nouveaux tests, les vrais bons
          plans, et zéro spam. Désabonnement en un clic.
        </p>

        {submitted ? (
          <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-medium text-foreground">
            <Check className="size-4 text-accent" />
            Merci&nbsp;! Vérifiez votre boîte mail pour confirmer.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              className="h-11 flex-1 rounded-md border border-input bg-background px-4 text-sm text-foreground outline-none ring-ring placeholder:text-muted-foreground focus-visible:ring-2"
            />
            <Button type="submit" size="lg" className="h-11">
              S&apos;abonner
            </Button>
          </form>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          En vous inscrivant, vous acceptez de recevoir la newsletter de What Else by Vinc.
        </p>
      </div>
    </section>
  )
}
