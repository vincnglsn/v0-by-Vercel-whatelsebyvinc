import { Info } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="a-propos" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-24">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Qui se cache derrière Select&nbsp;?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Moi, Vinc, un passionné de tech installé dans le Vaucluse. J&apos;ai
              lancé Select parce que j&apos;en avais assez des avis creux et des
              «&nbsp;tops&nbsp;» rédigés sur catalogue.
            </p>
            <p>
              Ici, je passe au crible les meilleurs objets du marché pour vous
              les présenter. Je vous dis tout sur ce qui vaut vraiment le
              coup, ce qui déçoit, et surtout <span className="font-medium text-foreground">pourquoi</span>.
              La suite s&apos;écrit au fil de mes sélections.
            </p>
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-muted/40 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Info className="size-4 text-primary" />
            Transparence &amp; affiliation
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Certains liens présents sur le site sont des liens affiliés. Si vous
            achetez via l&apos;un d&apos;eux, je touche une petite commission,
            <span className="font-medium text-foreground"> sans surcoût pour vous</span>.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Cela ne change jamais mon avis&nbsp;: je ne recommande que ce que
            je sélectionne avec soin. C&apos;est ce qui me permet de continuer
            à découvrir ces produits en toute indépendance.
          </p>
        </aside>
      </div>
    </section>
  )
}
