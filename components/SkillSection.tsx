"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SkillCategory, Skill } from "@/lib/types";
import { SkillCard } from "./SkillCard";

// No categorization needed for unified grid
export function SkillSection() {
    // Render all skills in a single grid


    return (
        <section className="relative z-10 w-full py-24 px-4 md:px-6 lg:px-8 bg-zinc-950/50">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl font-outfit">
                        Technical Arsenal
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-400 font-work-sans">
                        Specialized expertise in AI/ML architectures and scalable backend systems.
                    </p>
                </motion.div>

                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap justify-center gap-4">
                        {SKILLS.map((skill, idx) => (
                            <SkillCard key={skill.id} skill={skill} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
