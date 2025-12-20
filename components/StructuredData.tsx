// Import metadata-only (no MDX imports to avoid React context issues)
import { postsMetadata } from '@/content/metadata';

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

