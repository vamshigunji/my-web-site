"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../lib/data';
import { cn } from '../../lib/utils';

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail
};

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial scroll
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full py-8 mt-20 border-t border-white/5 bg-white/5 backdrop-blur-sm z-40 relative">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    {SOCIAL_LINKS.map((link) => {
                        const Icon = iconMap[link.icon as keyof typeof iconMap] || Mail;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                                aria-label={link.label}
                            >
                                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        );
                    })}
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Venkata Gunji. All rights reserved.
                </div>
            </div>

            {/* Scroll To Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-3 bg-blue-600/90 hover:bg-blue-500 text-white rounded-full shadow-lg backdrop-blur-sm z-50 transition-colors"
                        aria-label="Scroll to top"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}
