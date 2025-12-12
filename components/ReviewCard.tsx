"use client";

import Link from "next/link";
import Image from "next/image";

interface ReviewCardProps {
  image: string;
  category: string;
  title: string;
  author: string;
  authorSlug?: string;
  date: string;
  slug?: string;
}

const ReviewCard = ({ image, category, title, author, authorSlug, date, slug }: ReviewCardProps) => {
  return (
    <Link href={slug ? `/post/${slug}` : "#"} className="block">
      <article className="article-card cursor-pointer group hover:scale-100">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden isolate">
          <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          
          {/* Gradient overlay only at bottom for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          {/* Category badge inside image - above where title overlaps */}
          <div className="absolute bottom-14 lg:bottom-20 left-4 z-10">
            <span className="category-badge">{category}</span>
          </div>
        </div>
        
        {/* Title - positioned to overlap more into the image */}
        <div className="relative -mt-6 lg:-mt-10 px-4 z-20 max-w-xl">
          <h3 className="font-black font-display text-2xl lg:text-3xl uppercase leading-tight mb-3 text-foreground drop-shadow-md">
            {title}
          </h3>
        </div>
        
        {/* Author and date - outside image */}
        <div className="px-4 pt-2">
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

export default ReviewCard;

