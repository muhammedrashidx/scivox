import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      {/* Main Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Link 
          href="/about" 
          className="py-6 md:py-8 px-6 md:px-8 border-b md:border-b-0 md:border-r border-border hover:bg-secondary/50 transition-colors text-center"
        >
          <span className="font-display font-bold text-base md:text-lg uppercase tracking-wide">
            About
          </span>
        </Link>
        <Link 
          href="#" 
          className="py-6 md:py-8 px-6 md:px-8 border-b md:border-b-0 md:border-r border-border hover:bg-secondary/50 transition-colors text-center"
        >
          <span className="font-display font-bold text-base md:text-lg uppercase tracking-wide">
            Advertise
          </span>
        </Link>
        <Link 
          href="#" 
          className="py-6 md:py-8 px-6 md:px-8 bg-accent hover:bg-accent/90 transition-colors text-center"
        >
          <span className="font-display font-bold text-base md:text-lg uppercase tracking-wide text-accent-foreground">
            Subscribe
          </span>
        </Link>
      </div>
      
      {/* Copyright */}
      <div className="py-6 px-4 text-center border-t border-border">
        <p className="font-mono text-sm text-muted-foreground">
          © 2025 SciVox - All rights reserved | Designed by{" "}
          <a href="https://muhammedrashid.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Muhammed Rashid
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

