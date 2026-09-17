import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            Sélectionné et présenté depuis le Vaucluse
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Les objets du quotidien qui valent{' '}
            <span className="text-primary">vraiment</span> le coup.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Je m&apos;appelle Vinc. Je sélectionne des objets pour améliorer votre
            quotidien, puis je vous présente honnêtement leurs véritables atouts
            et ce qui les démarque sur le marché.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="/fiches-produits" />} nativeButton={false} size="lg">
              Découvrir les objets traités
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#categories" />}
              nativeButton={false}
              size="lg"
              variant="outline"
            >
              Explorer par catégorie
            </Button>
          </div>
          <dl className="mt-10 flex gap-8">
            <div>
              <dt className="text-2xl font-semibold text-foreground">85+</dt>
              <dd className="text-sm text-muted-foreground">produits traités</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-foreground">4</dt>
              <dd className="text-sm text-muted-foreground">univers couverts</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-foreground">0</dt>
              <dd className="text-sm text-muted-foreground">avis de complaisance</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-sm sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/slide_01_hook_4x5.jpg"
              alt="Sélection d'objets du quotidien"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden max-w-[200px] rounded-xl border border-border bg-card p-4 shadow-md sm:block">
            <p className="text-sm font-medium text-card-foreground">
              &ldquo;SÃ©lectionner ce qui vaut vraiment le coup.&rdquo;
            </p>
            <p className="mt-1 text-xs text-muted-foreground">— la ligne de conduite</p>
          </div>
        </div>
      </div>
    </section>
  )
}
