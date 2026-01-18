"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/lib/types";

interface ExperienceCardProps {
    experience: ExperienceItem;
    index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-l-2 border-zinc-800 pl-8 pb-12 last:pb-0"
        >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-zinc-800 bg-[var(--color-brand-dark)] transition-colors group-hover:border-cyan-500 group-hover:bg-cyan-500" />

            <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-xl font-bold text-white font-outfit">{experience.role}</h3>
                    <span className="text-sm font-medium text-zinc-500 font-work-sans">{experience.period}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="font-semibold text-cyan-400">{experience.company}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-4 text-zinc-400 font-work-sans">
                    {experience.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 border border-white/5 transition-colors group-hover:border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function ExperienceSection({ experiences }: { experiences: ExperienceItem[] }) {
    return (
        <section className="relative z-10 w-full py-24 px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl font-outfit">
                        Professional Journey
                    </h2>
                </motion.div>

                <div className="mt-8">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard key={exp.id} experience={exp} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
