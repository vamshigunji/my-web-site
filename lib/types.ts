import { LucideIcon } from 'lucide-react';

export interface Company {
    name: string;
    // Visual properties
    logo: LucideIcon | string; // Lucide icon for MVP, image URL later
    color: string; // Brand accent color for glow checks

    // Animation physics
    // Where does it fly to? (Radial coordinates)
    angle: number; // Degrees (0 is right, 90 is bottom, etc)
    distance: number; // Pixels from center

    // Optional timing offset
    delay?: number;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'AI/ML' | 'Cloud' | 'Tools' | 'Data' | 'Ops';

export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    logo: string; // Path to SVG or URL
    proficiency?: number; // 0-100 (optional)
    wip?: boolean; // If true, "Learning" badge
}

export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    techStack: string[];
}

export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    imageUrl?: string; // Optional, fallback to gradient
    techStack: string[];
    demoLink?: string;
    repoLink?: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
    platform: string;
}
