"use client";

import Header from "@/components/Header";
import FeaturedArticle from "@/components/FeaturedArticle";
import TopStories from "@/components/TopStories";
import SectionHeader from "@/components/SectionHeader";
import ReviewCard from "@/components/ReviewCard";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import Link from "next/link";
import { posts, reviews } from "@/content";

export default function Home() {
  // Get hero post (first post)
  const heroPost = posts[0];
  
  // Filter posts by category, excluding the hero post to avoid duplicates
  const scienceCategories = ["Environment", "Health", "Space", "Science", "Climate"];
  const technologyCategories = ["AI", "Tech", "Technology", "Innovation"];
  
  const sciencePosts = posts.filter(post => 
    post.slug !== heroPost.slug && // Exclude hero post
    scienceCategories.some(cat => 
      post.category.toLowerCase().includes(cat.toLowerCase())
    )
  );
  
  const technologyPosts = posts.filter(post => 
    post.slug !== heroPost.slug && // Exclude hero post
    technologyCategories.some(cat => 
      post.category.toLowerCase().includes(cat.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="home" />
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

        {/* Science Section */}
        {sciencePosts.length > 0 && (
          <section className="mb-12 lg:mb-16">
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="Science" showSeeAll={false} />
              <Link 
                href="/topic/science"
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2">
                <FeaturedArticle
                  image={sciencePosts[0].image}
                  category={sciencePosts[0].category}
                  title={sciencePosts[0].title}
                  excerpt={sciencePosts[0].excerpt}
                  author={sciencePosts[0].author}
                  authorSlug={sciencePosts[0].authorSlug}
                  date={sciencePosts[0].date}
                  slug={sciencePosts[0].slug}
                />
              </div>
              <div className="lg:col-span-1">
                <TopStories stories={sciencePosts.slice(1, 5)} />
              </div>
            </div>
          </section>
        )}

        {/* Technology Section */}
        {technologyPosts.length > 0 && (
          <section className="mb-12 lg:mb-16">
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="Technology" showSeeAll={false} />
              <Link 
                href="/topic/technology"
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2">
                <FeaturedArticle
                  image={technologyPosts[0].image}
                  category={technologyPosts[0].category}
                  title={technologyPosts[0].title}
                  excerpt={technologyPosts[0].excerpt}
                  author={technologyPosts[0].author}
                  authorSlug={technologyPosts[0].authorSlug}
                  date={technologyPosts[0].date}
                  slug={technologyPosts[0].slug}
                />
              </div>
              <div className="lg:col-span-1">
                <TopStories stories={technologyPosts.slice(1, 5)} />
              </div>
            </div>
          </section>
        )}

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

