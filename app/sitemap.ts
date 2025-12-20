import { MetadataRoute } from 'next';

// Import MDX modules directly to extract metadata only (avoiding Content component)
import * as posts1 from '@/content/posts/climate-ledger.mdx';
import * as posts2 from '@/content/posts/health-frontiers.mdx';
import * as posts3 from '@/content/posts/imagination.mdx';
import * as posts4 from '@/content/posts/launch-window.mdx';
import * as posts5 from '@/content/posts/mobility-shift.mdx';
import * as posts6 from '@/content/posts/policy-signals.mdx';

import * as reviews1 from '@/content/reviews/robot-companion.mdx';
import * as reviews2 from '@/content/reviews/wireless-audio.mdx';

import * as podcasts1 from '@/content/podcasts/climate-dashboards.mdx';
import * as podcasts2 from '@/content/podcasts/ethics-ai.mdx';
import * as podcasts3 from '@/content/podcasts/orbital-habitats.mdx';
import * as podcasts4 from '@/content/podcasts/signal-noise.mdx';

import * as explainers1 from '@/content/explainers/fusion-101.mdx';
import * as explainers2 from '@/content/explainers/quantum-basics.mdx';

// Extract metadata only (no Content component)
const postsMetadata = [posts1, posts2, posts3, posts4, posts5, posts6].map(mod => mod.metadata);
const reviewsMetadata = [reviews1, reviews2].map(mod => mod.metadata);
const episodesMetadata = [podcasts1, podcasts2, podcasts3, podcasts4].map(mod => mod.metadata);
const explainersMetadata = [explainers1, explainers2].map(mod => mod.metadata);

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

