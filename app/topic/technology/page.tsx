"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content";

// Filter technology posts and extract only metadata (exclude Content component)
const technologyCategories = ["AI", "Tech", "Technology", "Innovation"];
const technologyPosts = posts
  .filter(post => 
    technologyCategories.some(cat => 
      post.category.toLowerCase().includes(cat.toLowerCase())
    )
  )
  .map(({ Content, ...metadata }) => metadata); // Remove Content component

const featuredArticles = technologyPosts.slice(0, 2);
const smallArticles = technologyPosts.slice(2);

export default function TopicTechnology() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Page Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase tracking-tight mb-6">
            Technology
          </h1>
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris consectetur velit nec fringilla pulvinar, mauris ipsum accumsan nulla, vel pellentesque felis felis in augue.
          </p>
        </div>

        {/* Featured Articles - Two large cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {featuredArticles.map((article, index) => (
            <Link 
              key={index} 
              href={`/post/${article.slug}`}
              className="group block"
            >
            {/* Image Container */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
                
                {/* Gradient overlay only at bottom for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Category badge inside image - above where title overlaps */}
                <div className="absolute bottom-14 lg:bottom-20 left-4 z-10">
                  <span className="category-badge">{article.category}</span>
                </div>
              </div>
              
              {/* Title - positioned to overlap more into the image */}
              <div className="relative -mt-10 lg:-mt-14 px-4 z-20 max-w-2xl">
                <h3 className="font-tanker font-normal text-[32px] md:text-[40px] lg:text-[48px] leading-[48px] tracking-[-1px] text-foreground drop-shadow-md md:group-hover:underline">
                  {article.title}
                </h3>
              </div>
              
              {/* Author and date below */}
              <div className="pt-3 px-4 flex items-center gap-3">
                <Link 
                  href={`/author/${article.authorSlug}`}
                  className="author-link"
                >
                  {article.author}
                </Link>
                <span className="date-text">{article.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-12 lg:mb-16" />

        {/* Small Articles - Text on left, image on right, narrower width */}
        <div className="max-w-3xl space-y-8">
          {smallArticles.map((article, index) => (
            <Link 
              key={index} 
              href={`/post/${article.slug}`}
              className="group flex gap-6 items-start justify-between py-6 border-b border-border"
            >
              {/* Content on the left */}
              <div className="flex-1">
                <span className="category-badge mb-2">{article.category}</span>
                <h3 className="font-sans font-extrabold text-[24px] leading-[120%] mb-2 group-hover:underline transition-colors tracking-[-1px] max-w-[385px]">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Link 
                    href={`/author/${article.authorSlug}`}
                    className="author-link text-sm"
                  >
                    {article.author}
                  </Link>
                  <span className="date-text text-xs">{article.date}</span>
                </div>
              </div>
              
              {/* Small thumbnail on the right - match 'The Latest' card sizing */}
              <div className="relative w-32 h-24 md:w-40 md:h-28 lg:w-[227px] lg:h-[160px] flex-shrink-0 overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

