import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  slug?: string;
  image: string;
  category: string;
  title: string;
  author: string;
  authorSlug?: string;
  date: string;
}

const ArticleCard = ({ slug, image, category, title, author, authorSlug, date }: ArticleCardProps) => {
  return (
    <Link href={slug ? `/post/${slug}` : "#"} className="block">
      <article className="article-card cursor-pointer group flex gap-4">
        <div className="relative w-32 h-24 md:w-40 md:h-28 flex-shrink-0 rounded-lg overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Play size={14} className="text-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <span className="category-badge mb-2">{category}</span>
          
          <h3 className="font-sans font-bold text-[20px] leading-[24px] mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center gap-3">
            <span className="author-link text-xs">{author}</span>
            <span className="date-text">{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;

