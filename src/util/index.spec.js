import { capitalize } from './index';

describe('utils', () => {
    describe('captialize', () => {
        test('should convert the first letter to upper case', () => {
            expect(capitalize('test')).toBe('Test');
        });
        test('should throw when invalid arguments given', () => {
            expect(() => { capitalize(1); }).toThrow();
            expect(() => { capitalize(); }).toThrow();
        });
    });
});