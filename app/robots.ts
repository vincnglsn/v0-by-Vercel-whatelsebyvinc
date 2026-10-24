import { SITE_URL } from '@/lib/site'
import type { MetadataRoute } from 'next'

const siteUrl = SITE_URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
