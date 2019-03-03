import * as deepmerge from 'deepmerge'

const createColorPalette = customColorPalette => {
    const defaultColorPalette = {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: '#00a1e9',
        secondary: '#6200ee',
        chill: '#e6e6e6',
        error: '#d9534f',
        text: {
            primary: '#212529',
            secondary: '#555',
            muted: '#777',
        },
        background: '#fff',
        divider: '#ececec',
        action: {
            disabled: '#d9d9d9',
        },
    };
    const outputColorPalette = deepmerge(defaultColorPalette, customColorPalette);

    return outputColorPalette;
};

export default createColorPalette;