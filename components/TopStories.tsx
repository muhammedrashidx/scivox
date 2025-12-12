import Link from "next/link";
import Image from "next/image";

interface Story {
  slug?: string;
  title: string;
  author: string;
  authorSlug?: string;
  date: string;
  image: string;
}

interface TopStoriesProps {
  stories: Story[];
}

const TopStories = ({ stories }: TopStoriesProps) => {
  return (
    <aside className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h3 className="text-primary font-sans text-[16px] leading-[130%] tracking-[-0.5px] mb-4 font-bold">Top Stories</h3>
      <div className="border-b border-border/70 mb-6"></div>
      
      <div className="space-y-0 -mt-4">
        {stories.map((story, index) => (
          <Link 
            key={index}
            href={story.slug ? `/post/${story.slug}` : "#"}
            className="top-story-item flex gap-4 cursor-pointer group block"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="flex-1 min-w-0">
              <h4 className="font-sans font-bold text-[20px] leading-[120%] tracking-[-1px] mb-2 text-foreground dark:text-white group-hover:underline transition-colors line-clamp-3">
                {story.title}
              </h4>
              <div className="flex flex-col gap-1">
                <span className="author-link">{story.author}</span>
                <span className="date-text">{story.date}</span>
              </div>
            </div>
            
            <div className="relative w-[128px] h-[96px] flex-shrink-0 overflow-hidden">
              <Image 
                src={story.image} 
                alt={story.title}
                fill
                sizes="128px"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default TopStories;

