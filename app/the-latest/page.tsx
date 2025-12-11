"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { posts, episodes as podcastEpisodes } from "@/content";

export default function TheLatest() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Page Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase tracking-tight mb-6">
            The Latest
          </h1>
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-3xl leading-relaxed">
            The latest tech news about the world&apos;s best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Articles List */}
          <div className="lg:col-span-2 space-y-6">
            {posts.map((article, index) => (
              <Link 
                key={index}
                href={`/post/${article.slug}`}
                className="group flex gap-4 md:gap-6 py-6 border-b border-border hover:border-primary transition-colors duration-200"
              >
                <div className="flex-1">
                  <span className="text-accent font-mono text-xs uppercase tracking-wider mb-2 block">
                    {article.category}
                  </span>
                  <h3 className="font-sans font-bold text-[24px] leading-[29px] mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="author-link">{article.author}</span>
                    <span className="date-text">{article.date}</span>
                  </div>
                </div>
                <div className="relative w-[227px] h-[160px] flex-shrink-0 overflow-hidden rounded-lg">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    sizes="227px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[8px] border-l-foreground border-y-[5px] border-y-transparent ml-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Podcast Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white text-foreground rounded-xl p-6 sticky top-8">
              <h2 className="text-2xl font-bold font-display mb-6 text-foreground">Podcast</h2>
              <div className="space-y-4">
                {podcastEpisodes.map((episode, index) => (
                  <Link 
                    key={index}
                    href="/podcast"
                    className="group flex items-start gap-3 py-3 border-b border-border/20 last:border-0 hover:border-primary transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-0 h-0 border-l-[6px] border-l-accent-foreground border-y-[4px] border-y-transparent ml-0.5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-sm leading-tight mb-1 text-foreground group-hover:text-primary transition-colors">
                        {episode.title}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">{episode.duration}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link 
                href="/podcast"
                className="block text-center font-mono text-sm text-accent hover:underline mt-6"
              >
                SEE ALL EPISODES
              </Link>
            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

