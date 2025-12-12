import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { authors as teamMembers } from "@/content/authors";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Mission Section */}
        <section className="mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display uppercase mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed mb-6">
                We started SciVox with a simple mission: to provide clear, insightful, and entertaining coverage of the technology that shapes our world. In an era of information overload, we cut through the noise to bring you what matters.
              </p>
              <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
                From the latest smartphone releases to groundbreaking AI developments, from startup culture to environmental tech, we cover it all with depth and nuance.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display uppercase mb-6">
                What We Cover
              </h2>
              <ul className="space-y-4">
                {["Science & Engineering", "Humanities & Social Sciences", "Climate Change", "Economics", "Policy & Environment"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-mono text-sm md:text-base">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Stats Marquee */}
        {/* <section className="py-4 bg-secondary overflow-hidden mb-12 lg:mb-16">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 text-muted-foreground font-mono text-sm md:text-base">
                10 million+ monthly access to scivox.com —
              </span>
            ))}
          </div>
        </section>
        
        <section className="py-4 bg-secondary/80 overflow-hidden mb-12 lg:mb-16">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 text-muted-foreground font-mono text-sm md:text-base">
                7 million+ followers combined on social media —
              </span>
            ))}
          </div>
        </section> */}

        {/* Team Section - Grid like original */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display uppercase mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {teamMembers.map((member, index) => (
              <Link 
                key={index} 
                href={`/author/${member.slug}`}
                className="group block bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {/* Square image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display font-bold text-sm md:text-base uppercase group-hover:underline transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-muted-foreground mt-1">
                    {member.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Contact Section */}
          <div className="mt-16 pt-16 border-t border-border">
            <a 
              href="mailto:contact.scivox@gmail.com" 
              className="group block"
            >
              <span className="text-muted-foreground font-mono text-sm block mb-2">Have a word to say?</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-primary group-hover:underline">
              contact.scivox@gmail.com
              </span>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

