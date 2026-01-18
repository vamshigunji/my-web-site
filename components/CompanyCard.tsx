"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Company } from "@/lib/types";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface CompanyCardProps {
    company: Company;
    style?: any; // Framer motion styles
}

export function CompanyCard({ company, style }: CompanyCardProps) {
    const Icon = company.logo as LucideIcon;
    // The original `isComponent` logic was `typeof company.logo !== "string"`.
    // This means if it's NOT a string (i.e., a component), render the Icon.
    // If it IS a string, render the image.
    // We can directly use `typeof company.logo === "string"` for the image path.

    return (
        <motion.div
            style={style}
            className={clsx(
                // Base classes
                "will-change-transform flex h-48 w-48 items-center justify-center rounded-2xl",
                "glass-panel shadow-2xl backdrop-blur-xl border border-white/10 bg-black/40",
                // Conditional Absolute Positioning:
                // If style.position is relative (mobile), don't add absolute/centering classes.
                // Otherwise (desktop/default), add absolute centering.
                style?.position === 'relative'
                    ? "relative"
                    : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
        >
            <div className="flex flex-col items-center gap-4 text-center">
                {typeof company.logo !== "string" ? ( // If company.logo is a component (not a string)
                    <Icon className="h-16 w-16 text-zinc-100" style={{ color: company.color }} />
                ) : ( // If company.logo is a string (URL)
                    <div className="relative h-16 w-16">
                        <Image
                            src={company.logo as string}
                            alt={company.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                <span className="font-work-sans text-sm font-medium tracking-wide text-zinc-400">
                    {company.name}
                </span>
            </div>

            {/* Subtle brand glow */}
            <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-20 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: company.color }}
            />
        </motion.div>
    );
}
