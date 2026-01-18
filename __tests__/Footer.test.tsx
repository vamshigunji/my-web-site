import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Footer from '../components/layout/Footer';
import { SOCIAL_LINKS } from '../lib/data';

describe('Footer Component', () => {
    test('renders social links correctly', () => {
        render(<Footer />);

        SOCIAL_LINKS.forEach(link => {
            // Check if link exists with correct href
            const anchor = screen.getByRole('link', { name: new RegExp(link.label, 'i') });
            expect(anchor).toBeDefined();
            expect(anchor.getAttribute('href')).toBe(link.href);
            expect(anchor.getAttribute('target')).toBe('_blank');
            expect(anchor.getAttribute('rel')).toContain('noopener noreferrer');
        });
    });

    test('renders copyright text', () => {
        render(<Footer />);
        expect(screen.getByText(/All rights reserved/i)).toBeDefined();
    });

    test('scroll to top button logic', async () => {
        render(<Footer />);

        // Initial state: hidden
        // expect(screen.queryByLabelText(/scroll to top/i)).toBeNull(); 
        // Note: queryByLabelText throws if multiple found? No, returns null if none.

        // Mock scroll
        Object.defineProperty(window, 'scrollY', { value: 600, writable: true });
        fireEvent.scroll(window);

        // Should appear
        await waitFor(() => {
            expect(screen.getByLabelText(/scroll to top/i)).toBeDefined();
        });

        // Click to scroll
        const scrollToMock = vi.fn();
        window.scrollTo = scrollToMock;

        const btn = screen.getByLabelText(/scroll to top/i);
        fireEvent.click(btn);

        expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
});
