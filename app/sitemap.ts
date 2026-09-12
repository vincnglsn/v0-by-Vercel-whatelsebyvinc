import type { MetadataRoute } from 'next'
import { articles, categories } from '@/lib/content'

const siteUrl = 'https://whatelsebyvinc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteUrl}/categories/${category.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/guides/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes]
}
