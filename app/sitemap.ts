import type { MetadataRoute } from 'next'

const siteUrl = 'https://select.whatelsebyvinc.com'

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
