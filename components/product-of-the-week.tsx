import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AMAZON_URL = 'https://www.amazon.fr/dp/B082Q2VXRZ?tag=whatelsebyvin-21'

const facts = [
  { label: 'Capacité du bol', value: '3,6 L' },
  { label: 'Puissance', value: '1 400 W' },
  { label: 'Programmes automatiques', value: '5' },
  { label: 'Fonctions au total', value: '32' },
]

const reasons = [
  'Une balance intégrée : pas besoin de sortir un second appareil ni de transvaser.',
  'Un écran de contrôle pour régler la température, la vitesse et la durée.',
  'Mixage, cuisson, cuisson vapeur et pétrissage dans un seul appareil.',
  'Un format compact, plus petit qu’un robot de cuisine classique.',
]

const objections = [
  {
    q: 'C’est cher pour un robot.',
    a: 'Le prix varie fortement d’un jour à l’autre sur Amazon. Un robot cuiseur remplace un blender, une casserole et un cuiseur vapeur : le calcul se fait sur les appareils que tu n’achètes plus.',
  },
  {
    q: 'Je n’ai pas la place.',
    a: 'Son format est compact. Il tient sur un plan de travail standard, à condition de prévoir l’espace pour l’ouvrir.',
  },
  {
    q: 'Je ne sais pas cuisiner.',
    a: 'Les 5 programmes automatiques suffisent pour les plats du quotidien. Les réglages manuels sont là quand tu voudras aller plus loin.',
  },
  {
    q: 'Le nettoyage, ça prend du temps ?',
    a: 'Le bol et les accessoires se lavent à la main. Il vaut mieux les rincer tout de suite après usage, comme pour tout robot de cuisine.',
  },
]

export function ProductOfTheWeek() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          Produit de la semaine
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Le robot cuiseur qui fait <span className="text-primary">presque tout</span> à votre place.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Le Moulinex Clickchef réunit cuisson, mixage et pétrissage dans un appareil compact,
              avec une balance intégrée. Voici pourquoi je le recommande cette semaine, et ce qui
              pourrait vous faire hésiter.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href={AMAZON_URL} target="_blank" rel="noopener noreferrer sponsored" />}
                nativeButton={false}
                size="lg"
              >
                Voir le prix sur Amazon
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Lien affilié : en tant que Partenaire Amazon, je touche une commission sur les achats
              remplissant les conditions, sans surcoût pour vous. Le prix affiché sur Amazon est
              celui qui fait foi au moment de l’achat.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="relative mb-8 aspect-square overflow-hidden rounded-xl bg-white">
              <Image
                src="/images/moulinex-clickchef.jpg"
                alt="Moulinex Clickchef, robot cuiseur multifonction compact de 3,6 L"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
            <dl className="grid grid-cols-2 gap-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium text-foreground">Avis des acheteurs sur Amazon.fr</p>
              <p className="mt-1 text-sm text-muted-foreground">4,2 sur 5, à partir de 1 036 notes.</p>
              <p className="mt-4 text-sm font-medium text-foreground">Test de référence</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Les Numériques lui a attribué 3,5 sur 5. Ce test date de 2020 : il donne une idée de
                la construction, mais pas des évolutions récentes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Pourquoi celui-ci
            </h2>
            <ul className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-base leading-relaxed text-foreground/90">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Vos questions avant d’acheter
            </h2>
            <div className="mt-6 space-y-6">
              {objections.map((o) => (
                <div key={o.q}>
                  <h3 className="font-medium text-foreground">{o.q}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{o.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Prêt à essayer ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Le prix et la disponibilité sont à vérifier directement sur Amazon.fr, où il peut évoluer.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              render={<a href={AMAZON_URL} target="_blank" rel="noopener noreferrer sponsored" />}
              nativeButton={false}
              size="lg"
            >
              Voir le Moulinex Clickchef sur Amazon
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
