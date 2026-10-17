import type { MetadataRoute } from 'next'

const siteUrl = 'https://select.whatelsebyvinc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
