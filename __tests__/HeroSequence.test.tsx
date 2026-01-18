import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HeroSequence } from '../components/HeroSequence'

// Mock framer-motion since it uses DOM animations not fully supported in jsdom
vi.mock('framer-motion', async () => {
    const actual = await vi.importActual('framer-motion')
    return {
        ...actual,
        useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
        useTransform: () => ({ get: () => 0 }),
        useSpring: () => ({ get: () => 0 }),
        motion: {
            div: ({ children, className, style, ...props }: any) => (
                <div className={className} style={style} {...props}>{children}</div>
            ),
            h1: ({ children, className, style, ...props }: any) => (
                <h1 className={className} style={style} {...props}>{children}</h1>
            ),
            p: ({ children, className, style, ...props }: any) => (
                <p className={className} style={style} {...props}>{children}</p>
            ),
        }
    }
})

// Mock next/image
vi.mock('next/image', () => ({
    default: ({ src, alt, className }: any) => (
        <img src={typeof src === 'string' ? src : src.src} alt={alt} className={className} />
    ),
}))

describe('HeroSequence', () => {
    it('renders the central portrait and title', () => {
        render(<HeroSequence />)

        // Assert Portrait
        const portrait = screen.getByAltText(/Venkata Gunji/i)
        expect(portrait).toBeInTheDocument()
        // Check if src contains 'img.jpg' (from mock) or 'cover_page_image.webp' if alias works differently
        // Given alias points to __mocks__/imageMock.ts which has src: '/img.jpg'
        expect(portrait).toHaveAttribute('src', '/img.jpg')

        // Assert Title
        expect(screen.getByText('Venkata Gunji')).toBeInTheDocument()
        expect(screen.getByText('Senior Data Scientist')).toBeInTheDocument()
    })
})
