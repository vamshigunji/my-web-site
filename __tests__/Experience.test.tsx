import { render, screen } from '@testing-library/react';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EXPERIENCE } from '@/lib/data';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', async () => {
    const actual = await vi.importActual('framer-motion');
    return {
        ...actual,
        motion: {
            div: ({ children, className }: any) => <div className={className}>{children}</div>,
        }
    };
});

describe('ExperienceSection', () => {
    it('renders section title', () => {
        render(<ExperienceSection experiences={EXPERIENCE} />);
        expect(screen.getByText('Professional Journey')).toBeDefined();
    });

    it('renders all experience items', () => {
        render(<ExperienceSection experiences={EXPERIENCE} />);
        expect(screen.getByText('Senior Data Scientist')).toBeDefined();
        expect(screen.getByText('Data Engineer')).toBeDefined();
    });

    it('renders company names', () => {
        render(<ExperienceSection experiences={EXPERIENCE} />);
        expect(screen.getAllByText('Workday').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Comcast').length).toBeGreaterThan(0);
    });

    it('renders tech stack tags', () => {
        render(<ExperienceSection experiences={EXPERIENCE} />);
        expect(screen.getAllByText('Python').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Spark').length).toBeGreaterThan(0);
    });
});
