import { describe, it, expect } from 'vitest';
import { SKILLS } from '@/lib/data';
import { Skill } from '@/lib/types';

describe('Skill Data', () => {
    it('should export SKILLS array', () => {
        expect(SKILLS).toBeDefined();
        expect(Array.isArray(SKILLS)).toBe(true);
        expect(SKILLS.length).toBeGreaterThan(0);
    });

    it('should have valid skill structure', () => {
        SKILLS.forEach((skill: Skill) => {
            expect(skill.id).toBeTypeOf('string');
            expect(skill.name).toBeTypeOf('string');
            expect(skill.category).toBeDefined();
            expect(skill.logo).toContain('/assets/logos/');
        });
    });

    it('should cover all categories', () => {
        const categories = new Set(SKILLS.map(s => s.category));
        expect(categories.has('Frontend')).toBe(true);
        expect(categories.has('Backend')).toBe(true);
        expect(categories.has('AI/ML')).toBe(true);
    });
});
