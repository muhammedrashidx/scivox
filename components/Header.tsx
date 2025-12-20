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
              className={`relative w-12 h-12 rounded-full bg-[#d41c2e] hover:bg-[#b01626] flex items-center justify-center transition-all duration-200 outline-none ${
                isMenuOpen ? 'z-[50]' : 'z-[100]'
              }`}
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-5 h-0.5 bg-white transition-all duration-300"></span>
                <span className="block w-5 h-0.5 bg-white transition-all duration-300"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;

