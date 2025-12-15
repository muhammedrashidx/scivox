"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { episodes } from "@/content";

export default function Podcast() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Page Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase tracking-tight mb-6">
            Podcast
          </h1>
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris consectetur velit nec fringilla pulvinar, mauris ipsum accumsan nulla, vel pellentesque felis felis in augue.
          </p>
        </div>

        {/* Episodes List */}
        <div className="space-y-0">
          {episodes.map((episode, index) => (
            <Link 
              key={index}
              href={`/episode/${episode.slug}`}
              className="group flex items-center gap-4 md:gap-8 py-6 border-b border-border hover:border-primary transition-colors duration-200"
            >
              {/* Episode Image */}
              <div className="relative w-[160px] h-[160px] flex-shrink-0 overflow-hidden bg-primary/20">
                <Image 
                  src={episode.image} 
                  alt={episode.title}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[10px] border-l-accent-foreground border-y-[6px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Episode Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-sans font-bold text-[24px] leading-[29px] mb-2 group-hover:underline transition-colors">
                  {episode.title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-sm text-accent">{episode.date}</span>
                  <span className="font-mono text-xs text-muted-foreground">{episode.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Subscribe Section */}
        <section className="mt-16 p-8 md:p-12 bg-card rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display uppercase mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-muted-foreground font-mono text-sm mb-8 max-w-lg mx-auto">
            Subscribe to The SciVox Podcast on your favorite platform and stay updated with the latest in tech, science, and culture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Spotify", "Apple Podcasts", "YouTube", "RSS"].map((platform) => (
              <button 
                key={platform}
                className="px-6 py-3 bg-secondary rounded-full font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {platform}
              </button>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

