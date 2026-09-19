import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://select.whatelsebyvinc.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Select de What Else by Vinc — Objets high-tech et maison connectée',
    template: '%s | Select de What Else by Vinc',
  },
  description:
    'Vinc, du Vaucluse, découvre et sélectionne les meilleurs objets high-tech, gadgets pour la maison connectée, l\'extérieur et vos animaux. Avis honnêtes, bons plans et guides d\'achat.',
  keywords: [
    'objets high-tech',
    'maison connectée',
    'domotique',
    'gadgets connectés',
    'avis produits high-tech',
    'guide d\'achat maison connectée',
    'objets connectés extérieur',
    'accessoires connectés animaux',
  ],
  authors: [{ name: 'Vinc' }],
  creator: 'Vinc',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Select de What Else by Vinc',
    title: 'Select de What Else by Vinc — Objets high-tech et maison connectée',
    description:
      'Avis honnêtes et sélections d\'objets high-tech pour la maison connectée, l\'extérieur et vos animaux. Ce qui vaut le coup, et ce qui finit au fond d\'un tiroir.',
    images: [
      {
        url: '/images/hero-smarthome.png',
        width: 1200,
        height: 630,
        alt: 'Intérieur chaleureux équipé d\'objets connectés',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Select de What Else by Vinc — Objets high-tech et maison connectée',
    description:
      'Avis honnêtes et sélections d\'objets high-tech pour la maison connectée.',
    images: ['/images/hero-smarthome.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1a16' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased selection:bg-primary/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
