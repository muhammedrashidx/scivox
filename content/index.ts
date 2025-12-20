import type React from "react";

import * as posts1 from "./posts/climate-ledger.mdx";
import * as posts2 from "./posts/health-frontiers.mdx";
import * as posts3 from "./posts/imagination.mdx";
import * as posts4 from "./posts/launch-window.mdx";
import * as posts5 from "./posts/mobility-shift.mdx";
import * as posts6 from "./posts/policy-signals.mdx";

import * as reviews1 from "./reviews/robot-companion.mdx";
import * as reviews2 from "./reviews/wireless-audio.mdx";

import * as podcasts1 from "./podcasts/climate-dashboards.mdx";
import * as podcasts2 from "./podcasts/ethics-ai.mdx";
import * as podcasts3 from "./podcasts/orbital-habitats.mdx";
import * as podcasts4 from "./podcasts/signal-noise.mdx";

import * as explainers1 from "./explainers/fusion-101.mdx";
import * as explainers2 from "./explainers/quantum-basics.mdx";

export type MdxModule = {
  metadata: Record<string, any>;
  default: React.ComponentType;
};

export type PostWithContent = {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  image: string;
  excerpt: string;
  Content: React.ComponentType;
};

export type EpisodeWithContent = {
  slug: string;
  title: string;
  date: string;
  duration: string;
  image: string;
  excerpt: string;
  Content: React.ComponentType;
};

export type ReviewWithContent = PostWithContent;
export type ExplainerWithContent = PostWithContent;

function shapePosts(mod: MdxModule) {
  return { ...mod.metadata, Content: mod.default } as PostWithContent;
}

function shapeEpisodes(mod: MdxModule) {
  return { ...mod.metadata, Content: mod.default } as EpisodeWithContent;
}

export const posts: PostWithContent[] = [posts1, posts2, posts3, posts4, posts5, posts6].map(shapePosts);
export const reviews: ReviewWithContent[] = [reviews1, reviews2].map(shapePosts);
export const episodes: EpisodeWithContent[] = [podcasts1, podcasts2, podcasts3, podcasts4].map(shapeEpisodes);
export const explainers: ExplainerWithContent[] = [explainers1, explainers2].map(shapePosts);

// Metadata-only exports for server components (excludes Content component)
export type PostMetadata = Omit<PostWithContent, 'Content'>;
export const postsMetadata: PostMetadata[] = [posts1, posts2, posts3, posts4, posts5, posts6].map(mod => mod.metadata as PostMetadata);
export const reviewsMetadata: PostMetadata[] = [reviews1, reviews2].map(mod => mod.metadata as PostMetadata);
export const episodesMetadata: Omit<EpisodeWithContent, 'Content'>[] = [podcasts1, podcasts2, podcasts3, podcasts4].map(mod => mod.metadata as Omit<EpisodeWithContent, 'Content'>);
export const explainersMetadata: PostMetadata[] = [explainers1, explainers2].map(mod => mod.metadata as PostMetadata);
