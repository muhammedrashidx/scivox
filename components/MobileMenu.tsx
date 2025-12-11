"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = { open: boolean; onClose: () => void };

const menuLinks = [
	{ href: "/", label: "Home" },
	{ href: "/the-latest", label: "The Latest" },
	{ href: "/topic/science", label: "Science" },
	{ href: "/podcast", label: "Podcast" },
	{ href: "/about", label: "About" },
];

export function MobileMenu({ open, onClose }: Props) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 0);

    useEffect(() => {
        const onResize = () => setHeight(window.innerHeight);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

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

    const easing: [number, number, number, number] = [0.76, 0, 0.24, 1];
    const paths = useMemo(() => {
        const h = height || 0;
        const initial = `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h/2} 100 0`;
        const target = `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h/2} 100 0`;
        return { initial, target };
    }, [height]);

    return (
        <AnimatePresence>
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    id="site-mobile-menu"
                    className="fixed inset-0 z-[60] overflow-x-hidden"
                    ref={dialogRef}
                >
                    <motion.div 
                        className="absolute inset-0 bg-black/40" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1, transition: { duration: 0.3 } }} 
                        exit={{ opacity: 0, transition: { duration: 0.25 } }} 
                        onClick={onClose} 
                    />

                    <motion.div 
                        className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#292929] text-white shadow-xl overflow-hidden flex flex-col" 
                        variants={{
                            initial: { x: "calc(100% + 100px)" },
                            enter: { x: 0, transition: { duration: 0.8, ease: easing } },
                            exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: easing } }
                        }} 
                        initial="initial" 
                        animate="enter" 
                        exit="exit"
                    >
                        <svg 
                            className="absolute top-0 -left-[99px] w-[100px] h-full fill-[#292929] pointer-events-none" 
                            viewBox={`0 0 200 ${Math.max(height,1)}`} 
                            preserveAspectRatio="none"
                        >
                            <motion.path 
                                initial={{ d: paths.initial }} 
                                animate={{ d: paths.target, transition: { duration: 1, ease: easing } }} 
                                exit={{ d: paths.initial, transition: { duration: 0.8, ease: easing } }} 
                            />
                        </svg>

                        {/* Scrollable content area */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden px-8 sm:px-12 py-8">
                            <div className="flex flex-col mt-12">
                                <div className="uppercase text-xs tracking-widest text-neutral-400 border-b border-neutral-500/60 pb-7 mb-8">
                                    Navigation
                                </div>
                                <nav aria-label="Overlay" className="flex flex-col gap-3 text-[44px] leading-tight">
                                    {menuLinks.map((l, i) => (
                                        <motion.div 
                                            key={l.href} 
                                            initial={{ x: 80 }} 
                                            animate={{ x: 0, transition: { duration: 0.8, ease: easing, delay: 0.05 * i } }} 
                                            exit={{ x: 80, transition: { duration: 0.8, ease: easing, delay: 0.05 * i } }}
                                        >
                                            <Link 
                                                href={l.href} 
                                                onClick={onClose} 
                                                className="font-light text-white hover:text-neutral-300 transition-colors outline-none"
                                            >
                                                {l.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Fixed footer at bottom */}
                        <div className="flex-shrink-0 px-8 sm:px-12 pb-8 flex items-center justify-between text-xs text-neutral-300 gap-6">
                            <a href="#" className="hover:text-white transition-colors">Twitter/X</a>
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;
