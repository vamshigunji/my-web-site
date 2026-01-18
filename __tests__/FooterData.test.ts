import { SOCIAL_LINKS } from '../lib/data';
import { SocialLink } from '../lib/types';

describe('Footer Data', () => {
    test('SOCIAL_LINKS should serve valid social media profiles', () => {
        expect(SOCIAL_LINKS).toBeDefined();
        expect(SOCIAL_LINKS.length).toBeGreaterThanOrEqual(3);

        const expectedPlatforms = ['GitHub', 'LinkedIn', 'Email'];

        expectedPlatforms.forEach(platform => {
            const link = SOCIAL_LINKS.find(s => s.label === platform);
            expect(link).toBeDefined();
            expect(link?.href).toBeTruthy();
            expect(link?.icon).toBeTruthy();
        });
    });

    test('SocialLink type matches structure', () => {
        // This is a static type check validation at runtime
        const link = SOCIAL_LINKS[0];
        expect(link).toHaveProperty('label');
        expect(link).toHaveProperty('href');
        expect(link).toHaveProperty('icon');
    });
});
