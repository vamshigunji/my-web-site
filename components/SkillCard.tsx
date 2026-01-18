"use client";

import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import Image from "next/image";

interface SkillCardProps {
    skill: Skill;
    index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex h-40 w-40 flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/10"
        >
            <div className="relative h-16 w-16 p-2 transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    className="object-contain"
                />
            </div>
            <span className="font-work-sans text-sm font-medium text-zinc-400 group-hover:text-zinc-200">
                {skill.name}
            </span>

            {/* Wip Badge */}
            {skill.wip && (
                <div className="absolute top-2 right-2 rounded-full bg-yellow-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-yellow-500">
                    WIP
                </div>
            )}
        </motion.div>
    );
}
