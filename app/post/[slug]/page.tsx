"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content";
import { getAuthorBySlug } from "@/content/authors";

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug) ?? posts[0];
  const author = getAuthorBySlug(post.authorSlug);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Article Header */}
        <header className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display uppercase leading-tight mb-8">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Author & Meta */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4 py-6 border-b border-border">
            <div className="flex items-center gap-3">
              <Image 
                src={author?.image ?? "/assets/authors/placeholder.jpg"} 
                alt={author?.name ?? post.author}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-mono text-sm">{author?.name ?? post.author}</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <Link href={`/topic/${post.category.toLowerCase()}`} className="text-primary font-mono text-sm hover:underline">
              {post.category}
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="font-mono text-sm text-muted-foreground">{post.date}</span>
          </div>
        </div>

        {/* Article Content (MDX) */}
        <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
          <div className="font-mono text-muted-foreground leading-relaxed space-y-6">
            <post.Content />
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-5xl mx-auto mt-16 lg:mt-24 pt-12 border-t border-border">
          <h2 className="text-2xl md:text-3xl font-bold font-display uppercase mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((article, index) => (
              <Link 
                key={index}
                href={`/post/${article.slug}`}
                className="group article-card block"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="category-badge mb-2">{article.category}</span>
                <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

