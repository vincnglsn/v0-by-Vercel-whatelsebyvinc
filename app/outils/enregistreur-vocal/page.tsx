import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { VoiceRecorder } from '@/components/voice-recorder'

const siteUrl = 'https://select.whatelsebyvinc.com'

export const metadata: Metadata = {
  title: 'Enregistreur vocal en ligne — Pour tes voix off YouTube',
  description:
    'Enregistre ta voix directement depuis ton navigateur pour préparer tes voix off de vidéos YouTube : démarre, mets en pause, réécoute et télécharge ton fichier audio.',
  alternates: {
    canonical: `${siteUrl}/outils/enregistreur-vocal`,
  },
}

export default function EnregistreurVocalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enregistreur vocal
            </h1>
            <p className="mt-3 text-muted-foreground">
              Enregistre rapidement une voix off pour tes vidéos YouTube, directement
              depuis ton navigateur — aucune installation nécessaire.
            </p>
          </div>

          <VoiceRecorder />

          <div className="mt-10 space-y-2 text-sm text-muted-foreground">
            <p>
              L&apos;enregistrement se fait entièrement dans ton navigateur : le son
              n&apos;est jamais envoyé sur un serveur. Autorise l&apos;accès au micro
              quand ton navigateur te le demande, puis télécharge le fichier audio
              (.webm) pour l&apos;importer dans ton logiciel de montage.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
