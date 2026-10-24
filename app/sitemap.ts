import { SITE_URL } from '@/lib/site'
import type { MetadataRoute } from 'next'

const siteUrl = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/electromenagers`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
