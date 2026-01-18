"use client";

import { motion } from "framer-motion";
import { ProjectItem } from "@/lib/types";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    project: ProjectItem;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors hover:border-white/20 hover:bg-white/10"
        >
            {/* Image Placeholder / Gradient */}
            <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-500`}>
                {/*  If we had images, we'd use them here. For now, a cool abstract gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-purple-900/20" />

                {/* Title Overlay for "No Image" feel */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/5 uppercase tracking-widest select-none font-outfit">
                    {project.title.substring(0, 3)}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white font-outfit group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>

                    <div className="flex gap-2">
                        {project.repoLink && (
                            <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors p-1"
                                aria-label="View Source"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors p-1"
                                aria-label="View Demo"
                            >
                                <ArrowUpRight size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="mb-6 line-clamp-3 text-sm text-zinc-400 font-work-sans">
                    {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function ProjectSection({ projects }: { projects: ProjectItem[] }) {
    return (
        <section className="relative z-10 w-full py-24 px-4 md:px-6 lg:px-8 bg-zinc-950/30">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl font-outfit">
                        Selected Projects
                    </h2>
                </motion.div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
