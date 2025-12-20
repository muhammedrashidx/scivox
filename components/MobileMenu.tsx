"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

type Props = { open: boolean; onClose: () => void };

const menuLinks = [
	{ href: "/", label: "Home" },
	{ href: "/the-latest", label: "The Latest" },
	{ href: "/topic/science", label: "Science" },
	{ href: "/topic/technology", label: "Technology" },
	{ href: "/explainers", label: "Explainers" },
	{ href: "/podcast", label: "Podcast" },
	{ href: "/about", label: "About" },
];

export function MobileMenu({ open, onClose }: Props) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const easing: [number, number, number, number] = [0.76, 0, 0.24, 1];

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement search functionality
        console.log("Search:", searchQuery);
    };

    return (
        <AnimatePresence>
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    id="site-mobile-menu"
                    className="fixed inset-0 z-[70] overflow-x-hidden"
                    ref={dialogRef}
                >
                    <motion.div 
                        className="absolute inset-0 bg-black/40" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1, transition: { duration: 0.3 } }} 
                        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }} 
                        onClick={onClose} 
                    />

                    <motion.div 
                        className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#292929] text-white shadow-xl overflow-hidden flex flex-col" 
                        variants={{
                            initial: { x: "calc(100% + 100px)" },
                            enter: { x: 0, transition: { duration: 0.8, ease: easing } },
                            exit: { x: "calc(100% + 100px)", transition: { duration: 0.5, ease: easing } }
                        }} 
                        initial="initial" 
                        animate="enter" 
                        exit="exit"
                    >
                        {/* Header with Search and Close Button */}
                        <div className="px-6 sm:px-8 py-6 border-b border-neutral-700/60">
                            <div className="flex items-start gap-3">
                                {/* Search Bar */}
                                <form onSubmit={handleSearch} className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white/10 border border-neutral-600/50 rounded-lg px-4 py-3 pl-10 pr-4 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                    />
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                </form>
                                
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="w-12 h-12 rounded-full bg-[#d41c2e] hover:bg-[#b01626] flex items-center justify-center transition-colors duration-200 outline-none flex-shrink-0"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden">
                            <nav aria-label="Mobile navigation" className="px-6 sm:px-8 py-6">
                                {menuLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 80 }}
                                        animate={{ 
                                            opacity: 1, 
                                            x: 0, 
                                            transition: { 
                                                duration: 0.8, 
                                                delay: index * 0.05,
                                                ease: easing
                                            } 
                                        }}
                                        exit={{ 
                                            opacity: 0, 
                                            x: 80, 
                                            transition: { 
                                                duration: 0.3,
                                                delay: (menuLinks.length - index - 1) * 0.03,
                                                ease: easing
                                            } 
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="block py-4 text-2xl font-medium text-white hover:text-neutral-300 border-b border-neutral-700/60 transition-colors outline-none"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        {/* Footer with Social Links */}
                        <div className="flex-shrink-0 px-6 sm:px-8 py-6 border-t border-neutral-700/60">
                            <div className="flex items-center justify-center gap-8 text-sm text-neutral-400">
                                <a 
                                    href="#" 
                                    className="hover:text-white transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // TODO: Add social links
                                    }}
                                >
                                    Twitter/X
                                </a>
                                <a 
                                    href="#" 
                                    className="hover:text-white transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // TODO: Add social links
                                    }}
                                >
                                    Instagram
                                </a>
                                <a 
                                    href="#" 
                                    className="hover:text-white transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // TODO: Add social links
                                    }}
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;
