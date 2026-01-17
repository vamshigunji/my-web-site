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
