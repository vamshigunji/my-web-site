import { render, screen } from '@testing-library/react';
import { ProjectSection } from '@/components/ProjectSection';
import { PROJECTS } from '@/lib/data';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion and lucide-react (if needed, but simple SVG mocks are usually fine or use transform)
vi.mock('framer-motion', async () => {
    const actual = await vi.importActual('framer-motion');
    return {
        ...actual,
        motion: {
            div: ({ children, className }: any) => <div className={className}>{children}</div>,
        }
    };
});

// Mock Next.js Image
vi.mock('next/image', () => ({
    default: (props: any) => <img {...props} />
}));

describe('ProjectSection', () => {
    it('renders section title', () => {
        render(<ProjectSection projects={PROJECTS} />);
        expect(screen.getByText('Selected Projects')).toBeDefined();
    });

    it('renders all project titles', () => {
        render(<ProjectSection projects={PROJECTS} />);
        expect(screen.getByText('Enterprise RAG Assistant')).toBeDefined();
        expect(screen.getByText('Customer Churn Predictor')).toBeDefined();
    });

    it('renders tech stack tags', () => {
        render(<ProjectSection projects={PROJECTS} />);
        expect(screen.getAllByText('LangChain').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Docker').length).toBeGreaterThan(0);
    });

    it('renders links', () => {
        render(<ProjectSection projects={PROJECTS} />);
        // Checking if links are present by finding the anchor tags
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
    });
});
