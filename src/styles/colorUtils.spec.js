import { 
    hexToRGB,
    RGBToHex, 
    decompose, 
    recompose,
    setAlpha,
    lighten 
} from './colorUtils';


describe('styles/colorUtils', () => {
    describe('hexToRGB', () => {
        test('converts hex color', () => {
            expect(hexToRGB('#00a1e9')).toBe('rgb(0, 161, 233)');
        });
        test('converts short hex color', () => {
            expect(hexToRGB('#fff')).toBe('rgb(255, 255, 255)');
        });
        test('invoke with invaild input', () => {
            expect(() => { hexToRGB('2n382b'); }).toThrow();
        });
    });
    
    describe('RGBToHex', () => {
        test('converts RGB to hex', () => {
            expect(RGBToHex('rgb(37, 101, 172)')).toBe('#2565ac');
        });
        test('invoke with invaild input', () => {
            expect(() => { RGBToHex('rgba(147, 23, 48, .5)'); }).toThrow();
            expect(() => { RGBToHex('rgb(177, -24, 300)'); }).toThrow();
            expect(() => { RGBToHex('nnnnnn'); }).toThrow();
        });
    });

    describe('decompose', () => {
        test('converts rgb color to a color object', () => {
            expect(decompose('rgb(37, 101, 172)')).toEqual({
                type: 'rgb',
                values: [37, 101, 172],
            });
        });
        test('converts rgba color to a color object', () => {
            expect(decompose('rgba(37, 101, 172, .6)')).toEqual({
                type: 'rgba',
                values: [37, 101, 172, .6],
            });
        });
        test('converts hsl color to a color object', () => {
            expect(decompose('hsl(100, 50%, 25%)')).toEqual({
                type: 'hsl',
                values: [100, 50, 25],
            });
        });
        test('converts hsla color to a color object', () => {
            expect(decompose('hsl(100, 50%, 25%, .6)')).toEqual({
                type: 'hsl',
                values: [100, 50, 25, .6],
            });
        });
        test('converts hex color to a color object', () => {
            expect(decompose('#00a1e9')).toEqual({
                type: 'rgb',
                values: [0, 161, 233],
            });
            expect(decompose('#fff')).toEqual({
                type: 'rgb',
                values: [255, 255, 255],
            });
        });
    });

    describe('recompose', () => {
        test('converts a decomposed rgb color to a hex color', () => {
            expect(recompose({
                type: 'rgb',
                values: [37, 101, 172]
            })).toBe('rgb(37, 101, 172)');
        });
        test('converts a decomposed rgba color to a string', () => {
            expect(recompose({
                type: 'rgba',
                values: [37, 101, 172, .6]
            })).toBe('rgba(37, 101, 172, 0.6)');
        });
        test('converts a decomposed hsl color to a string', () => {
            expect(recompose({
                type: 'hsl',
                values: [100, 50, 25]
            })).toBe('hsl(100, 50%, 25%)');
        });
        test('converts a decomposed hsla color to a string', () => {
            expect(recompose({
                type: 'hsla',
                values: [100, 50, 25, .6]
            })).toBe('hsla(100, 50%, 25%, 0.6)');
        });
    });

    describe('setAlpha', () => {
        test('invoke with missing arguments', () => {
            expect(() => { setAlpha(); }).toThrow();
            expect(() => { setAlpha('#00a1e9'); }).toThrow();
        });

        test('set alpha given a hex color', () => {
            expect(setAlpha('#00a1e9', .5)).toBe('rgba(0, 161, 233, 0.5)');
        });

        test('set alpha given a rgb color', () => {
            expect(setAlpha('rgb(100, 200, 300)', .35)).toBe('rgba(100, 200, 300, 0.35)');
        });

        test('set alpha given a hsl color', () => {
            expect(setAlpha('hsl(100, 50%, 25%)', .35)).toBe('hsla(100, 50%, 25%, 0.35)');
        });
        
        test('ignore original alpha on rgba or hsla color', () => {
            expect(setAlpha('rgba(0, 161, 233, 0.5)', .8)).toBe('rgba(0, 161, 233, 0.8)');
            expect(setAlpha('hsla(100, 50%, 25%, 0.5)', .8)).toBe('hsla(100, 50%, 25%, 0.8)');
        });
    });

    describe('lighten', () => {
        test('lightens a color', () => {
            expect(lighten('#00a1e9', .7)).toBe('#b2e2f8');
            expect(lighten('#2565ac', .2)).toBe('#5083bc');
        });
        test('invoke with missing arguments', () => {
            expect(() => { lighten('#00a1e9'); }).toThrow();
        });
        test('invoke with invalid input', () => {
            expect(() => { lighten('rgb(300, -20, 1)'); }).toThrow();
        });
    });
});