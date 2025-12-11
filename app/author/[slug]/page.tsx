export const runtime = 'edge';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

// Author data
const authorsData: Record<string, {
  name: string;
  role: string;
  image: string;
  bio: string;
  articles: Array<{
    slug: string;
    image: string;
    category: string;
    title: string;
    date: string;
  }>;
}> = {
  "thomas-neauer": {
    name: "Thomas Neauer",
    role: "Editor in Chief",
    image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5ee6fd04650060e946a9_thomas.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris consectetur velit nec fringilla pulvinar, mauris ipsum accumsan nulla, vel pellentesque felis felis in augue. Maecenas mauris libero, rhoncus et egestas sit amet lacinia quis erat.",
    articles: [
      {
        slug: "midjourney-imagination",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5a9d34031d84ae067a4d_midjourney-thumb-large.jpg",
        category: "AI",
        title: 'Midjourney has got its place as "the engine for the imagination"',
        date: "Mar 15, 2024",
      },
      {
        slug: "vc-funding-party",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb6c18cced04d3a370decc_vc-thumb-large.jpg",
        category: "Startups",
        title: "The VC funding party is over",
        date: "Mar 7, 2024",
      },
      {
        slug: "ps5-game-clip",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb6a0ce3b93c8d2f58adb6_ps5-thumb-large.jpg",
        category: "Sony",
        title: "The PS5 is getting an automatic game clip feature that helps other players",
        date: "Feb 27, 2024",
      },
    ],
  },
  "michael-pelloti": {
    name: "Michael Pelloti",
    role: "Executive Editor",
    image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5f3cbc858fd8f2fb71dd_michael.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris consectetur velit nec fringilla pulvinar, mauris ipsum accumsan nulla, vel pellentesque felis felis in augue.",
    articles: [
      {
        slug: "startups-hiring",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb650d43cfe50072e7f525_startups-thumb-large.jpg",
        category: "Startups",
        title: "Startups are hiring fewer workers and paying out less in equity camp",
        date: "Mar 6, 2024",
      },
    ],
  },
  "bill-rennie": {
    name: "Bill Rennie",
    role: "Deputy Editor",
    image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5f8424f01027b221e84a_bill.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris consectetur velit nec fringilla pulvinar.",
    articles: [
      {
        slug: "chatgpt-growth",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb6db7dbf7de468924d761_chatgpt-thumb-small.jpg",
        category: "AI",
        title: "ChatGPT continues to be one of the fastest-growing services ever",
        date: "Mar 4, 2024",
      },
      {
        slug: "spacex-starship",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb6e67b163bff045c3eb72_spacex-thumb-large.jpg",
        category: "Space",
        title: "All of the angles on the launch of SpaceX's third Starship flight test",
        date: "Mar 3, 2024",
      },
    ],
  },
  "natalie-lie": {
    name: "Natalie Lie",
    role: "Executive Editor",
    image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5f66a5a0059e27d3dec7_natalie.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris consectetur velit nec fringilla pulvinar.",
    articles: [
      {
        slug: "vision-pro-secrets",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb6d1a35223f60232ee0bc_vision-thumb-small.jpg",
        category: "Apple",
        title: "The one part of the Vision Pro that Apple doesn't want you to see",
        date: "Mar 5, 2024",
      },
    ],
  },
  "yasemin-james": {
    name: "Yasemin James",
    role: "Staff Writer",
    image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5f8424f01027b221e84a_bill.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    articles: [
      {
        slug: "secs-climate-disclosure",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb68ce793d58c32da80cc6_secs-thumb-large.jpg",
        category: "Environment",
        title: "The SEC's new climate disclosure rule already faces legal challenges",
        date: "Mar 11, 2024",
      },
      {
        slug: "delivery-robot",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb70053196ef87b3dcde55_robot-thumb-large.jpg",
        category: "Robotics",
        title: "A day in the life of a delivery robot",
        date: "Mar 7, 2024",
      },
    ],
  },
  "paul-gnaeki": {
    name: "Paul Gnaeki",
    role: "Visual Designer",
    image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb60e5d9c095f222782c9e_paul.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    articles: [
      {
        slug: "eu-ai-act",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb6bb5dbf7de468922c20d_the-eu-ai-thumb-large.jpg",
        category: "Policy",
        title: "The EU AI act passed — now comes the waiting",
        date: "Mar 8, 2024",
      },
      {
        slug: "pixel-8-pro",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb73137f8c01bb3e882c7d_pixel-8-thumb-large.jpg",
        category: "Smartphones",
        title: "The Pixel 8 Pro has better cameras, a brighter screen, and it's a lot smarter",
        date: "Mar 6, 2024",
      },
    ],
  },
  "kristina-flores": {
    name: "Kristina Flores",
    role: "Graphics",
    image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb609826bfe84795242346_kristina.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    articles: [
      {
        slug: "sennheiser-review",
        image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb6ad97f8c01bb3e806112_sennheiser-thumb-large.jpg",
        category: "Headphones",
        title: "Sennheiser Momentum Tru Wireless 4 review: it sounds amazing",
        date: "Mar 9, 2024",
      },
    ],
  },
};

// Default author for unknown slugs
const defaultAuthor = {
  name: "Unknown Author",
  role: "Writer",
  image: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5f3cbc858fd8f2fb71dd_michael.jpg",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  articles: [],
};

export default async function Author({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = slug && authorsData[slug] ? authorsData[slug] : defaultAuthor;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Author Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase tracking-tight mb-8">
            {author.name}
          </h1>
          
          <div className="flex items-start gap-6">
            {/* Author Image */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image 
                src={author.image} 
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Author Bio */}
            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed max-w-2xl">
              {author.bio}
            </p>
          </div>
        </div>

        {/* Author's Articles Grid */}
        {author.articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {author.articles.map((article, index) => (
              <Link 
                key={index} 
                href={`/post/${article.slug}`}
                className="group block"
              >
                {/* Image with overlapping text */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
                      <Play size={20} className="text-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Category - on the image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="category-badge">{article.category}</span>
                  </div>
                </div>
                
                {/* Title and meta below image */}
                <div className="pt-4 px-1">
                  <h3 className="text-base md:text-lg font-bold font-display uppercase leading-tight mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="author-link text-sm">{author.name}</span>
                    <span className="date-text text-xs">{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {author.articles.length === 0 && (
          <p className="text-muted-foreground font-mono text-center py-12">
            No articles found for this author.
          </p>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

