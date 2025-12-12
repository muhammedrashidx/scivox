"use client";

import Header from "@/components/Header";
import FeaturedArticle from "@/components/FeaturedArticle";
import TopStories from "@/components/TopStories";
import SectionHeader from "@/components/SectionHeader";
import ReviewCard from "@/components/ReviewCard";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import { posts, reviews } from "@/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="lg:col-span-2">
            <FeaturedArticle
              image={posts[0].image}
              category={posts[0].category}
              title={posts[0].title}
              excerpt={posts[0].excerpt}
              author={posts[0].author}
              authorSlug={posts[0].authorSlug}
              date={posts[0].date}
              slug={posts[0].slug}
            />
          </div>
          
          <div className="lg:col-span-1">
            <TopStories stories={posts.slice(1, 5)} />
          </div>
        </section>

        {/* Reviews Section (only first two) */}
        <section className="mb-12 lg:mb-16">
          <SectionHeader title="Reviews" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-0">
            {reviews.slice(0, 2).map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </section>

        {/* The Latest Section */}
        <section className="mb-12 lg:mb-16">
          <SectionHeader title="The Latest" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {posts.slice(0, 8).map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

