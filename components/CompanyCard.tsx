"use client";

import { motion } from "framer-motion";
import { Company } from "@/lib/types";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface CompanyCardProps {
    company: Company;
    style?: any; // Framer motion styles
}

export function CompanyCard({ company, style }: CompanyCardProps) {
    const Icon = company.logo as LucideIcon;
    const isComponent = typeof company.logo !== "string";

    return (
        <motion.div
            style={style}
            className={clsx(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                "flex h-24 w-24 items-center justify-center rounded-2xl",
                "glass-panel shadow-2xl backdrop-blur-xl",
                "border border-white/10 bg-black/40"
            )}
        >
            <div className="flex flex-col items-center gap-2 text-center">
                {isComponent ? (
                    <Icon className="h-8 w-8 text-zinc-100" style={{ color: company.color }} />
                ) : (
                    <img src={company.logo as string} alt={company.name} className="h-8 w-8 object-contain" />
                )}
                <span className="font-work-sans text-[10px] font-medium tracking-wide text-zinc-400">
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
