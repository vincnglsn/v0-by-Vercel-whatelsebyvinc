import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Politique de confidentialité',
}

export default function ConfidentialitePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Politique de confidentialité
        </h1>
        <div className="prose-content mt-8 space-y-6 text-muted-foreground">
          <p>
            Chez <strong>Select by Vinc</strong>, nous prenons la confidentialité de vos données très au sérieux.
          </p>
          <h2 className="text-xl font-medium text-foreground">1. Collecte des données</h2>
          <p>
            Les seules données que nous collectons sont celles que vous nous fournissez volontairement, notamment votre adresse e-mail lorsque vous vous inscrivez à la newsletter.
          </p>
          <h2 className="text-xl font-medium text-foreground">2. Utilisation des données</h2>
          <p>
            Votre adresse e-mail est utilisée exclusivement pour vous envoyer les nouveautés du site. Elle n'est en aucun cas revendue ou cédée à des tiers.
          </p>
          <h2 className="text-xl font-medium text-foreground">3. Cookies et Analytics</h2>
          <p>
            Nous utilisons un outil d'analyse d'audience anonymisé (Vercel Analytics) afin de comprendre quelles pages sont les plus lues, sans traquer individuellement les utilisateurs.
          </p>
          <h2 className="text-xl font-medium text-foreground">4. Vos droits</h2>
          <p>
            Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Un lien de désabonnement est présent en bas de chaque e-mail envoyé.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}