import { describe, test, expect, vi } from 'vitest';
import { metadata } from '../app/layout';

// Mock next/font/google
vi.mock('next/font/google', () => ({
    Outfit: () => ({ variable: 'mock-outfit' }),
    Work_Sans: () => ({ variable: 'mock-work-sans' }),
}));

// Mock CSS import
vi.mock('../app/globals.css', () => ({ default: '' }));

describe('Layout Metadata', () => {
    test('has correct title', () => {
        expect(metadata.title).toBe("Venkatavamshigunji - Senior Data Scientist");
    });

    test('has correct description', () => {
        expect(metadata.description).toBeDefined();
        // Adjust this expectation to match what we actually want in the final implementation
        expect(metadata.description).toContain("Senior Data Scientist");
    });

    test('has open graph configuration', () => {
        expect(metadata.openGraph).toBeDefined();
        expect(metadata.openGraph?.type).toBe("website");
        expect(metadata.openGraph?.title).toBe("Venkatavamshigunji - Senior Data Scientist");
        expect(metadata.openGraph?.images).toBeDefined();
        // In Next.js metadata, images can be string or array
        const images = metadata.openGraph?.images;
        // Simplified check, actual impl might differ structure
        expect(JSON.stringify(images)).toContain("cover_page_image.png");
    });

    test('has twitter configuration', () => {
        expect(metadata.twitter).toBeDefined();
        expect(metadata.twitter?.card).toBe("summary_large_image");
    });
});
