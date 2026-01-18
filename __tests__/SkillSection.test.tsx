import { render, screen } from '@testing-library/react';
import { SkillSection } from '@/components/SkillSection';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', async () => {
    const actual = await vi.importActual('framer-motion');
    return {
        ...actual,
        motion: {
            div: ({ children, className }: any) => <div className={className}>{children}</div>,
            h3: ({ children, className }: any) => <h3 className={className}>{children}</h3>,
        }
    };
});

describe('SkillSection', () => {
    it('renders the section header', () => {
        render(<SkillSection />);
        expect(screen.getByText('Technical Arsenal')).toBeDefined();
    });

    it('renders skill cards', () => {
        render(<SkillSection />);
        // Check for specific skills we know are in data.ts
        expect(screen.getByText('Python')).toBeDefined();
        expect(screen.getByText('AWS')).toBeDefined();
        expect(screen.getByText('PyTorch')).toBeDefined();
    });
});
