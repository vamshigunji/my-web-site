"use client";

import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Company } from "@/lib/types";
import { CompanyCard } from "./CompanyCard";

// Data Configuration
const COMPANIES: Company[] = [
    {
        name: "Google",
        logo: "/assets/logos/google.png",
        color: "#4285F4",
        angle: -45, // Top Right
        distance: 400, // Increased distance for larger circle
    },
    {
        name: "Meta",
        logo: "/assets/logos/meta.png",
        color: "#0668E1",
        angle: 0, // Right
        distance: 420,
    },
    {
        name: "Comcast",
        logo: "/assets/logos/comcast.png",
        color: "#FFcc00", // Adjusted for visibility
        angle: 45, // Bottom Right
        distance: 400,
    },
    {
        name: "Workday",
        logo: "/assets/logos/workday.png",
        color: "#CF3721",
        angle: 135, // Bottom Left
        distance: 400,
    },
    {
        name: "CVS",
        logo: "/assets/logos/cvs.png",
        color: "#CC0033",
        angle: 225, // Top Left
        distance: 400,
    },
];

export function HeroSequence() {
    const containerRef = useRef<HTMLDivElement>(null);

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

    // Portrait Scale - subtle shrink
    const portraitScale = useTransform(smoothProgress, [0.05, 0.35], [1, 0.95]);

    // Name/About Visibility check
    // Shift it UP slightly as we scroll to give more room, and fade it out later
    const headerY = useTransform(smoothProgress, [0, 0.2], [0, -50]);
    const headerOpacity = useTransform(smoothProgress, [0, 0.1, 0.4, 0.6], [1, 1, 0.8, 0]);

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Z-0: Ambient Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_40%)]" />
                </div>

                {/* Z-30: Central Anchor (Portrait) & Header */}
                <motion.div
                    style={{ scale: portraitScale, zIndex: 30 }}
                    className="relative flex flex-col items-center"
                >
                    {/* Header - Stays accessible, moves up slightly */}
                    <motion.div
                        style={{ opacity: headerOpacity, y: headerY }}
                        className="absolute -top-48 w-max text-center pointer-events-none"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-outfit text-zinc-100 tracking-tight">
                            Venkata Gunji
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl font-work-sans text-brand-cyan/80 font-light tracking-wide">
                            Data Scientist & Developer
                        </p>
                    </motion.div>

                    {/* Portrait Frame - ENLARGED 100% (from w-48 to w-96) */}
                    <div className="relative h-96 w-96 rounded-full border border-white/10 glass-panel p-3 shadow-2xl shadow-cyan-500/10">
                        <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-900/50">
                            {/* Fallback avatar if image fails or loading */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                                <span className="text-6xl">VG</span>
                            </div>
                            <Image
                                src="/assets/cover_page_image.png"
                                alt="Venkata Gunji"
                                fill
                                className="object-cover"
                                priority
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
