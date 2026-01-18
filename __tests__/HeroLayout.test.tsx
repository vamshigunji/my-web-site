import { render, screen } from '@testing-library/react';
import { HeroSequence } from '@/components/HeroSequence';
import { describe, it, expect, vi } from 'vitest';

// Mock specific framer-motion functions
vi.mock('framer-motion', async () => {
    const actual = await vi.importActual('framer-motion');
    return {
        ...actual,
        useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
        useTransform: () => ({ get: () => 0 }),
        useSpring: () => ({ get: () => 0 }),
    };
});

describe('HeroSequence Layout', () => {
    it('renders the persona name and title', () => {
        render(<HeroSequence />);

        expect(screen.getByText('Venkata Gunji')).toBeDefined();
        expect(screen.getByText('Senior Data Scientist')).toBeDefined();
    });

    it('renders the primary CTA button', () => {
        render(<HeroSequence />);

        const cta = screen.getByRole('link', { name: /download resume/i });
        expect(cta).toBeDefined();
        expect(cta.getAttribute('href')).toContain('resume');
    });

    it('optimizes animation performance with will-change-transform', () => {
        const { container } = render(<HeroSequence />);
        // Check for the class on the portrait container
        const optimizedElements = container.getElementsByClassName('will-change-transform');
        expect(optimizedElements.length).toBeGreaterThan(0);
    });
});
