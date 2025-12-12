"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="py-4 md:py-6">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Brand logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/assets/branding/logo.png"
              alt="SciVox"
              width={260}
              height={78}
              className="h-20 w-auto max-w-[260px] object-contain"
              priority
            />
            <span className="text-xl md:text-2xl font-bold font-sans leading-none text-foreground">
              SciVox
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <ThemeToggle />
            
            {/* Hamburger Menu Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-controls="site-mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
              className="relative z-[100] w-12 h-12 rounded-full bg-[#d41c2e] hover:bg-[#b01626] flex items-center justify-center transition-colors duration-200 outline-none"
            >
              {isMenuOpen ? (
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <div className="flex flex-col gap-1.5">
                  <span className="block w-5 h-0.5 bg-white transition-all duration-300"></span>
                  <span className="block w-5 h-0.5 bg-white transition-all duration-300"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;

