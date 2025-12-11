import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scivox.in';

  // Static routes
  const routes = [
    '',
    '/the-latest',
    '/topic/science',
    '/podcast',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic post routes (you can fetch from your CMS/API)
  // For now, we'll add some example posts
  const posts = [
    'midjourney-imagination',
    'startups-hiring',
    'vision-pro-secrets',
    'chatgpt-growth',
    'spacex-starship',
  ].map((slug) => ({
    url: `${baseUrl}/post/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Add author routes
  const authors = [
    'thomas-neauer',
    'michael-pelloti',
    'bill-rennie',
    'natalie-lie',
  ].map((slug) => ({
    url: `${baseUrl}/author/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...posts, ...authors];
}

