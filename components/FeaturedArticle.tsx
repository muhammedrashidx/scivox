"use client";

import Link from "next/link";
import Image from "next/image";

interface FeaturedArticleProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorSlug?: string;
  date: string;
  slug?: string;
}

const FeaturedArticle = ({ image, category, title, excerpt, author, authorSlug, date, slug }: FeaturedArticleProps) => {
  return (
    <Link href={slug ? `/post/${slug}` : "#"} className="block">
      <article className="relative group cursor-pointer animate-fade-in md:hover:scale-100">
        {/* Image Container */}
        <div className="relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden isolate">
          <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-500 ease-out md:group-hover:scale-105"
          />
          
          {/* Gradient overlay only at bottom for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-40 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          {/* Category badge inside image - positioned above where title will overlap */}
          <div className="absolute bottom-20 lg:bottom-32 left-6 lg:left-8 z-10">
            <span className="category-badge">{category}</span>
          </div>
        </div>
        
        {/* Title - positioned to overlap more into the image */}
        <div className="relative -mt-12 lg:-mt-16 px-6 lg:px-8 z-20 max-w-3xl">
          <h2 className="font-tanker text-[40px] md:text-[52px] lg:text-[64px] leading-[100%] font-normal tracking-[-1px] mb-4 text-foreground drop-shadow-md md:group-hover:underline">
            {title}
          </h2>
          <p className="text-muted-foreground font-caption text-sm lg:text-base mb-4 max-w-2xl leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center gap-3">
            <Link 
              href={authorSlug ? `/author/${authorSlug}` : "#"} 
              className="author-link"
              onClick={(e) => e.stopPropagation()}
            >
              {author}
            </Link>
            <span className="date-text">{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedArticle;

