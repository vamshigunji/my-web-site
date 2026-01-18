"use client";

import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import coverImage from "@/public/assets/cover_page_image.webp";
import { Company } from "@/lib/types";
import { CompanyCard } from "./CompanyCard";
import { Button } from "./ui/Button";

// Data Configuration
import { COMPANIES } from "@/lib/data";

export function HeroSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            // 640px is tailwind 'sm' breakpoint
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 1. Scroll Progress (0 to 1 over 300vh)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 2. Physics Spring for Smoothness (Weight)
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // 3. Animation Ranges
    // Trigger Fan: 5% -> 35% of total scroll
    // Normalize this range to 0->1 for easier math
    const fanProgress = useTransform(smoothProgress, [0.05, 0.35], [0, 1]);

    // Portrait Scale - subtle shrink on scroll
    const portraitScale = useTransform(smoothProgress, [0.05, 0.35], [1, 0.95]);

    // Name/About Visibility check
    // Shift it UP slightly as we scroll to give more room, and fade it out later
    const headerY = useTransform(smoothProgress, [0, 0.2], [0, -50]);
    const headerOpacity = useTransform(smoothProgress, [0, 0.1, 0.4, 0.6], [1, 1, 0.8, 0]);

    if (isMobile) {
        // --- MOBILE LAYOUT (Simplified, no scroll fan) ---
        return (
            // Reduce height for mobile, no scroll sequence
            <div className="min-h-screen relative flex flex-col items-center justify-center py-20 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_40%)]" />
                </div>

                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center z-30 mb-8 px-4"
                >
                    <h1 className="text-4xl font-bold font-outfit tracking-tight text-white mb-2">
                        Venkata Gunji
                    </h1>
                    <p className="text-xl font-work-sans font-light tracking-wide text-neon mb-6">
                        Senior Data Scientist
                    </p>
                    <Button
                        variant="neon"
                        size="default"
                        asChild
                        className="bg-black/50 backdrop-blur-sm"
                    >
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </Button>
                </motion.div>

                {/* Portrait - Smaller for mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    // w-64 = 16rem
                    className="relative h-64 w-64 rounded-full border border-white/10 glass-panel p-2 shadow-2xl shadow-cyan-500/10 mb-12 z-20"
                >
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-900/50">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                            <span className="text-6xl">VG</span>
                        </div>
                        <Image
                            src={coverImage}
                            alt="Venkata Gunji"
                            fill
                            className="object-cover"
                            priority
                            placeholder="blur"
                        />
                    </div>
                </motion.div>

                {/* Companies - Stacked Grid or Row */}
                <div className="grid grid-cols-2 gap-4 w-full px-4 z-20 max-w-sm">
                    {COMPANIES.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                            className="flex justify-center"
                        >
                            {/* Re-use Company Card but static position */}
                            <CompanyCard
                                company={company}
                                // Disable absolute positioning styles if they are baked into component?
                                // Assuming CompanyCard accepts className or style override.
                                // We need to ensure CompanyCard doesn't force absolute positioning if passed static style
                                style={{ position: 'relative', transform: 'none' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    // --- DESKTOP LAYOUT (Original Scroll Animation) ---
    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Z-0: Ambient Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_40%)]" />
                </div>

                {/* Z-30: Central Anchor (Portrait) & Header */}
                <motion.div
                    style={{ scale: portraitScale, zIndex: 30 }}
                    className="relative flex flex-col items-center will-change-transform mt-32"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Header - Stays accessible, moves up slightly */}
                    <motion.div
                        style={{ opacity: headerOpacity, y: headerY }}
                        className="absolute -top-52 w-max text-center z-40 pointer-events-auto"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-bold font-outfit tracking-tight text-white mb-2"
                        >
                            Venkata Gunji
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-2xl md:text-4xl font-work-sans font-light tracking-wide text-neon mb-8"
                        >
                            Senior Data Scientist
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Button
                                variant="neon"
                                size="lg"
                                asChild
                                className="bg-black/50 backdrop-blur-sm"
                            >
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                    Download Resume
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Portrait Frame - Reduced to 24rem (original w-96) to fix text overlap */}
                    <div className="relative h-96 w-96 rounded-full border border-white/10 glass-panel p-3 shadow-2xl shadow-cyan-500/10">
                        <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-900/50">
                            {/* Fallback avatar if image fails or loading */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                                <span className="text-8xl">VG</span>
                            </div>
                            <Image
                                src={coverImage}
                                alt="Venkata Gunji"
                                fill
                                className="object-cover"
                                priority
                                placeholder="blur"
                            />

                        </div>
                    </div>
                </motion.div>

                {/* Z-20: Fanning Cards */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    {COMPANIES.map((company) => {
                        // Calculate Target X/Y based on Angle/Distance
                        const rad = (company.angle * Math.PI) / 180;
                        const targetX = Math.cos(rad) * company.distance;
                        const targetY = Math.sin(rad) * company.distance;

                        // Transform mappings
                        const x = useTransform(fanProgress, [0, 1], [0, targetX]);
                        const y = useTransform(fanProgress, [0, 1], [0, targetY]);
                        const opacity = useTransform(fanProgress, [0, 0.5], [0, 1]);
                        const scale = useTransform(fanProgress, [0, 1], [0.5, 1]);
                        const rotate = useTransform(fanProgress, [0, 1], [0, 0]); // Keep upright for readability

                        return (
                            <CompanyCard
                                key={company.name}
                                company={company}
                                style={{ x, y, opacity, scale, rotate }}
                            />
                        );
                    })}
                </div>

                {/* Scroll Hint */}
                <motion.div
                    style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                </motion.div>

            </div>
        </div>
    );
}
