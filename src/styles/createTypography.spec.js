import createTypography from './createTypography';
import createColorPalette from './createColorPalette';

describe('createTypography', () => {
    let colorPalette;
    beforeAll(() => {
        colorPalette = createColorPalette();
    })

    test('with default typography', () => {
        const typography = createTypography(colorPalette, {});
        expect(typography.fontSize).toBe(14);
    });

    test('with custom fontSize', () => {
        const typography = createTypography(colorPalette, { fontSize: 16 });
        expect(typography.fontSize).toBe(16);
    });

    test('with custom body', () => {
        const typography = createTypography(colorPalette, { body: { fontSize: 16 } });
        expect(typography.body.fontSize).toBe(16);
    });
});

describe('pxToRem', () => {
    let pxToRem;
    beforeAll(() => {
        pxToRem = createTypography(createColorPalette(), {}).pxToRem;
    });

    test('converting px to rem', () => {
        expect(pxToRem(16)).toBe('1rem');
    });

    test('with invaild values', () => {
        expect(() => { pxToRem(16.5) }).toThrow();
        expect(() => { pxToRem('string') }).toThrow();
        expect(() => { pxToRem() }).toThrow();
    });
});