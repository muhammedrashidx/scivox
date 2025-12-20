import { MetadataRoute } from 'next';
import { postsMetadata, reviewsMetadata, episodesMetadata, explainersMetadata } from '@/content/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scivox.in';

  // Static routes
  const routes = [
    '',
    '/the-latest',
    '/topic/science',
    '/topic/technology',
    '/explainers',
    '/podcast',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add all post routes dynamically
  const postRoutes = postsMetadata.map((post: any) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Add review routes
  const reviewRoutes = reviewsMetadata.map((review: any) => ({
    url: `${baseUrl}/post/${review.slug}`,
    lastModified: new Date(review.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Add explainer routes
  const explainerRoutes = explainersMetadata.map((explainer: any) => ({
    url: `${baseUrl}/post/${explainer.slug}`,
    lastModified: new Date(explainer.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Add podcast/episode routes
  const episodeRoutes = episodesMetadata.map((episode: any) => ({
    url: `${baseUrl}/podcast/${episode.slug}`,
    lastModified: new Date(episode.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get unique authors from all posts
  const authors = new Set<string>();
  [...postsMetadata, ...reviewsMetadata, ...explainersMetadata].forEach((item: any) => {
    if (item.authorSlug) {
      authors.add(item.authorSlug);
    }
  });

  const authorRoutes = Array.from(authors).map((slug) => ({
    url: `${baseUrl}/author/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...postRoutes, ...reviewRoutes, ...explainerRoutes, ...episodeRoutes, ...authorRoutes];
}

