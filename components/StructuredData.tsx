// Import MDX modules directly to extract metadata only
import * as posts1 from '@/content/posts/climate-ledger.mdx';
import * as posts2 from '@/content/posts/health-frontiers.mdx';
import * as posts3 from '@/content/posts/imagination.mdx';
import * as posts4 from '@/content/posts/launch-window.mdx';
import * as posts5 from '@/content/posts/mobility-shift.mdx';
import * as posts6 from '@/content/posts/policy-signals.mdx';

// Extract metadata only (no Content component)
const postsMetadata = [posts1, posts2, posts3, posts4, posts5, posts6].map(mod => mod.metadata);

interface StructuredDataProps {
  type: 'home' | 'article' | 'breadcrumb';
  article?: {
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
    authorSlug?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function StructuredData({ type, article, breadcrumbs }: StructuredDataProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scivox.in';

  let schema: any = {};

  if (type === 'home') {
    // CollectionPage schema for home page
    schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "SciVox - Science Communication Platform",
      "description": "Latest science news, technology articles, research reviews, and explainers",
      "url": siteUrl,
      "publisher": {
        "@type": "Organization",
        "name": "SciVox",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/assets/branding/logo.png`
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": postsMetadata.slice(0, 10).map((post: any, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Article",
            "headline": post.title,
            "url": `${siteUrl}/post/${post.slug}`,
            "image": post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            }
          }
        }))
      }
    };
  } else if (type === 'article' && article) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "image": article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": article.author,
        ...(article.authorSlug && { "url": `${siteUrl}/author/${article.authorSlug}` })
      },
      "publisher": {
        "@type": "Organization",
        "name": "SciVox",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/assets/branding/logo.png`
        }
      }
    };
  } else if (type === 'breadcrumb' && breadcrumbs) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

