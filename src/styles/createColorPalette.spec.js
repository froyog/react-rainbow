import createColorPalette from './createColorPalette';

describe('createColorPalette', () => {
    test('with default settings', () => {
        expect(createColorPalette().primary).toBe('#00a1e9');
    });
});